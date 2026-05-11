import type { NextApiRequest, NextApiResponse } from 'next'
import Anthropic from '@anthropic-ai/sdk'
import OpenAI from 'openai'
import { createClient } from '@supabase/supabase-js'

interface ChatRequest {
  messages: { role: 'user' | 'assistant'; content: string }[]
}

interface ChatResponse {
  reply: string
  sources?: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body as ChatRequest

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  try {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const lastUserMessage = messages[messages.length - 1].content

    // 1. Embed the user's question
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: lastUserMessage,
    })
    const queryEmbedding = embeddingResponse.data[0].embedding

    // 2. Search Supabase for relevant knowledge chunks
    const { data: docs, error: searchError } = await supabase.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: 5,
    })

    if (searchError) {
      console.error('[chat] Supabase search error:', searchError)
    }

    const context = docs && docs.length > 0
      ? docs.map((d: { content: string }) => d.content).join('\n\n---\n\n')
      : ''

    const sources: string[] = docs && docs.length > 0
      ? [...new Set<string>(
          docs
            .map((d: { metadata: { source?: string } }) => d.metadata?.source)
            .filter((s: string | undefined): s is string => Boolean(s))
        )]
      : []

    // 3. Call Claude with retrieved context
    const systemPrompt = `You are the AI advisor for ROMEIGH Multi-Enterprises, an industrial chemical water treatment and hazardous waste management company in the Philippines.

Help visitors understand ROMEIGH's services and environmental regulations relevant to their business. Be concise, professional, and always offer to connect them with the ROMEIGH team for a proper compliance audit.
${context ? `\nUse the following retrieved knowledge to answer accurately:\n\n${context}\n` : ''}
If the knowledge base doesn't fully cover the question, draw on general knowledge of Philippine environmental law (RA 9003, RA 9275, DAO 2013-22, DAO 2021-19) but flag it as general guidance rather than from ROMEIGH's documents.`

    const response = await anthropic.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map(m => ({ role: m.role, content: m.content })),
    })

    const reply = response.content[0].type === 'text' ? response.content[0].text : ''

    return res.status(200).json({ reply, sources })
  } catch (err) {
    console.error('[chat] Error:', err)
    return res.status(500).json({ error: 'Failed to get a response. Please try again.' })
  }
}
