// express
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// use router
app.use('/', require('./routes/Router.js'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})