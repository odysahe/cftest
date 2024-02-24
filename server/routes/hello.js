import { drizzle } from "drizzle-orm/d1"

export default defineEventHandler( async (event) => {
    const db = drizzle(process.env.DB)
    const hasil = await db.select().from(tabletest).all()

    return Response.json(hasil)
})