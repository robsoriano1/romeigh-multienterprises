import * as fs from 'fs'
import * as path from 'path'
import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.join(process.cwd(), '.env.local') })

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const KNOWLEDGE_DIR = path.join(process.cwd(), 'knowledge')
const CHUNK_SIZE = 400
const CHUNK_OVERLAP = 40

function chunkText(text: string, source: string) {
  const words = text.split(/\s+/).filter(w => w.length > 0)
  const chunks: { content: string; metadata: { source: string; chunk: number } }[] = []

  let i = 0
  while (i < words.length) {
    const chunk = words.slice(i, i + CHUNK_SIZE).join(' ')
    if (chunk.trim().length > 80) {
      chunks.push({ content: chunk, metadata: { source, chunk: chunks.length } })
    }
    if (i + CHUNK_SIZE >= words.length) break
    i += CHUNK_SIZE - CHUNK_OVERLAP
  }

  return chunks
}

async function main() {
  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    console.error('knowledge/ folder not found. Create it and add .txt or .md files.')
    process.exit(1)
  }

  const files = fs.readdirSync(KNOWLEDGE_DIR).filter(f => /\.(txt|md)$/.test(f))

  if (files.length === 0) {
    console.log('No .txt or .md files found in knowledge/.')
    process.exit(0)
  }

  console.log(`Found: ${files.join(', ')}`)
  console.log('Clearing existing documents...')
  await supabase.from('documents').delete().gte('id', 0)

  for (const file of files) {
    const text = fs.readFileSync(path.join(KNOWLEDGE_DIR, file), 'utf-8')
    const chunks = chunkText(text, file)
    console.log(`\n${file} → ${chunks.length} chunks`)

    for (let i = 0; i < chunks.length; i++) {
      const { data: emb } = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: chunks[i].content,
      })
      const { error } = await supabase.from('documents').insert({
        content: chunks[i].content,
        metadata: chunks[i].metadata,
        embedding: emb[0].embedding,
      })
      if (error) console.error(`  Chunk ${i} error:`, error.message)
      else process.stdout.write(`  [${i + 1}/${chunks.length}]\r`)
    }
  }

  console.log('\n\nDone! Knowledge base is ready.')
}

main().catch(err => { console.error(err); process.exit(1) })
