import { redirect } from 'next/navigation'
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

export default async function Page({ params }) {
  await connect()
  const { shorturl } = params.shorturl

  const record = await Url.findOne({ shortName: shorturl })

if (!record) {
    redirect('/');
    return null;
}

redirect(record.longUrl)
}
