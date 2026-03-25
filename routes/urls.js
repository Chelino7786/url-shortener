const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const DB = path.join(__dirname, '../data/urls.json')

function readUrls() {
    return JSON.parse(fs.readFileSync(DB, 'utf-8'))
}

function saveUrls(urls) {
    fs.writeFileSync(DB, JSON.stringify(urls, null, 2))
}

function generateCode() {
    return Math.random().toString(36).substring(2, 8)
}

// POST /shorten — recibe una URL larga y devuelve una corta
router.post('/shorten', (req, res) => {
    const { url } = req.body
    if (!url) return res.status(400).json({ error: 'La URL es requerida' })

    const urls = readUrls()
    const code = generateCode()

    urls[code] = {
        original: url,
        createdAt: new Date().toISOString(),
        visits: 0
    }

    saveUrls(urls)

    res.status(201).json({
        code,
        short: `http://localhost:3000/${code}`,
        original: url
    })
})

// GET /urls — ver todas las URLs guardadas
router.get('/urls', (req, res) => {
    res.json(readUrls())
})

// GET /:code — redirige a la URL original
router.get('/:code', (req, res) => {
    const urls = readUrls()
    const entry = urls[req.params.code]

    if (!entry) return res.status(404).json({ error: 'URL no encontrada' })

    entry.visits++
    saveUrls(urls)

    res.redirect(entry.original)
})

module.exports = router