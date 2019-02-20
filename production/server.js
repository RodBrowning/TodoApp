const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(cors())
app.use(bodyParser())
app.use(express.static(path.join(__dirname, 'dist')))
app.set("views", path.join(__dirname, 'dist'))

app.get('/',(req, res) => {
    res.render('index')
})

const routes = require('./Router')
app.use('/api', routes)

const PORT = process.env.PORT || 2000
app.listen(PORT)
console.log(`Todos list is open at port: ${PORT}`)