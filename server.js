const express = require('express')
const urlRoutes = require('./routes/urls')

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/', urlRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})