import { drizzle } from "drizzle-orm/d1"

export default defineEventHandler( async (event) => {
    // const db = drizzle(process.env.DB)
    // console.log(process.env);
    // console.log(process);
    // const hasil = await db.select().from(tabletest).all()

    // const hasil = 'hello'
    return Response.json({
        'prosesenv' : process,
        'event':event
        // 'envv': env ? env : ''
    })
})