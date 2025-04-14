import { NextResponse } from 'next/server'
import mongoose from 'mongoose'


const connect = async () => {
  if (mongoose.connections[0].readyState) return
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "urlShortenerDB"
  })
}

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortName: { type: String, unique: true }
})

const Url = mongoose.models.Url || mongoose.model('Url', urlSchema)

export async function POST(req) {
  try {
    await connect()
    const { longUrl, shortName } = await req.json()

    if (!longUrl || !shortName) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const existing = await Url.findOne({ shortName })
    if (existing) {
      return NextResponse.json({ error: 'Short name already taken' }, { status: 409 })
    }

    const newEntry = await Url.create({ longUrl, shortName })
    return NextResponse.json({ shortName: newEntry.shortName })

  } catch (error) {
    console.error("Error in /api/shorten:", error)
    return NextResponse.json({ error: 'Internal Server Error', detail: error.message }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: "API is working!" })
}
