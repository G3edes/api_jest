const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')
const { get } = require('http')

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

/*********************************************************************************
 * 
 *                              CLIENTES
 * 
 *******************************************************************************/

const controllerCliente = require('./controller/controllerCliente.js')

app.get('v1/api_jest/cliente', cors(), bodyParserJSON, async function (request, response) {
    let result= await controllerCliente.listarCliente()
    response.status(result)
    response.json(result)
})
app.get('v1/api_jest/cliente/:id', cors(), bodyParserJSON, async function (request, response) {
    let id = request.params.id
    let result= await controllerCliente.listarClienteID(id)
    response.status(result)
    response.json(result)
})
app.delete('v1/api_jest/cliente/:id', cors(), bodyParserJSON, async function (request, response) {
    let id = request.params.id
    let result= await controllerCliente.deleteCliente(id)
    response.status(result)
    response.json(result)
})
app.post('v1/api_jest/cliente/', cors(), bodyParserJSON, async function (request, response) {
    //recebe o content-type da requisição
    let contentType=request.headers['content-type']
    //recebe do body da requisição os dados encaminhados
    let dadosBody=request.body
    let result= await controllerCliente.criarCliente(dadosBody, contentType)
    response.status(result)
    response.json(result)
})
app.put('v1/api_jest/cliente/:id', cors(), bodyParserJSON, async function (request, response) {
    //recebe o content-type da requisição
    let contentType=request.headers['content-type']
    //recebe do body da requisição os dados encaminhados
    let dadosBody=request.body
    let id =request.params.id
    let result= await controllerCliente.atualizarCliente(id, dadosBody, contentType)
    response.status(result)
    response.json(result)
})

/***********************************************************************************************/

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições..')
})