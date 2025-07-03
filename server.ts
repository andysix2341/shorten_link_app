import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'
import express from 'express'
import dotenv from 'dotenv'
import ws from 'ws'

dotenv.config()

neonConfig.webSocketConstructor = ws

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon({ connectionString })
const prisma = new PrismaClient({adapter})


const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('view engine', 'ejs')


app.get("/", async(req: Request, res) => {
    try {
        const data = await prisma.link.findMany();
        res.render('home', { data })
        await prisma.$disconnect()
    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    }
})

app.listen(3000, (err: any) => {
    if (err) console.error(err)
    console.log("server is listening on port 3000")
})