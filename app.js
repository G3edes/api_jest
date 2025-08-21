const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Manipular o body da requisição para chegar apenas JSON
const bodyParserJSON = bodyParser.json()
// Cria o objeto app com referência ao express
const app = express()

// Middleware para permitir requisições CORS
app.use(cors())

// Corrige o cabeçalho CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

// Middleware para interpretar JSON no body
app.use(express.json())