const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const epxress = require('express')
const app = epxress()

app.use(epxress.static('public'))
app.use(epxress.urlencoded({extended: false}))
app.use(epxress.json())

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    try {
        const data = await prisma.link.findMany()
        res.render('home', {data})
        await prisma.$disconnect()
    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    }
})

function getRandomString() {
    let text = ''
    const alphaNumeric = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789'
    for (let i = 0; i < 6; i++) {
        text += alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)]
    }
    return text
}

async function uploadToDb(originalLink, randomString) {
    try {
        await prisma.link.create({
            data: {
                id: Date.now(),
                original_link: originalLink,
                shorten_link: randomString()
            }
        })
    
        const allLink = await prisma.link.findMany()
        console.log(allLink)
        await prisma.$disconnect()
    } catch (err) {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    }
}

const another = require('./routes/another')
app.use('/', another)

app.post('/upload', (req, res) => {
    const { originalLink } = req.body
    uploadToDb(originalLink, getRandomString)
    res.status(200).json({message: 'link is here'})
})

// app.get('/upload/:id', async (req, res) => {
//     const { id } = req.params
//     const data = await prisma.link.findUnique({
//         where: {
//             id
//         }
//     })
//     console.log(data)
//     res.redirect('http://localhost:3000/another')
//     res.status(200).json({message: "this is "})
// })

app.listen(3000, err => {
    if (err) console.error(err)
    console.log("server is listening on port 3000")
})