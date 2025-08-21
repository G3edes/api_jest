const message = require ('../modulo/config.js')
const DAOcliente = require ('../model/DAO/DAOcliente.js')

const criarCliente = async (dados, contentType) => {
    
    try {
        if (contentType && contentType.includes('application/json')) {
            if (dados.nome == undefined || dados.nome == null || dados.nome.length >100    ||
                dados.email == undefined || dados.email == null || dados.email.length >100 ||
                dados.data_nascimento == undefined || dados.data_nascimento == null || dados.data_nascimento.length >100
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let result = await DAOcliente.inserirCliente(dados)
                if (result) {
                    return message.SUCESS_CREATED_ITEM
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }   
}
const atualizarCliente = async (id,dados, contentType) => {
    let dados = {}
    try {
        if (contentType && contentType.includes('application/json')) {
            if (dados.nome == undefined || dados.nome == null || dados.nome.length >100    ||
                dados.email == undefined || dados.email == null || dados.email.length >100 ||
                dados.data_nascimento == undefined || dados.data_nascimento == null || dados.data_nascimento.length >100
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{ 
                let result=await DAOEstado.selectClienteById(id)
                if (result != false || typeof(result)== 'object') {
                    if (result.length>0) {
                        dados.id = parseInt(id)

                    let result = await DAOcliente.atualizarCliente(dados)
                    if (result) {
                        return message.SUCESS_UPDATED_ITEM
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                    }else{
                        message.ERROR_NOT_FOUND
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}
const listarCliente = async () => {
    try {
        let dados = {}
        let result = await DAOcliente.selectAllClientes()
        if (result || typeof(result) === 'object') {
            if (result.length>0) {
                dados.itens = result.length
                dados.clientes = result
                return dados
            }else{
                return message.ERROR_NOT_FOUND
            }
            
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}
const listarClienteID = async (id) => {
    try {
        let dados = {}

        if (id == undefined || id == null || id == '' || id < 0) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let result = await DAOcliente.selectClienteById(id)

            if (result && typeof result === 'object') {
                if (result.length > 0) {
                    dados.itens = result.length
                    dados.clientes = result
                    return dados
                } else {
                    return message.ERROR_NOT_FOUND
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

const deleteCliente =  async (id) => {
    try {
        if (id == undefined || id == null || id == '' || id<0) {
            return message.ERROR_REQUIRED_FIELDS
        }else{
            let result = await DAOcliente.selectClienteById(parseInt(id))
            if (result != false || typeof(result) == 'object') {
                if (result.length>0) {
                    let result = await DAOcliente.deleteCliente(parseInt(id))
                    if (result) {
                        return message.SUCCESS_DELETED_ITEM
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
                    return message.ERROR_NOT_FOUND
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports={
    criarCliente,
    deleteCliente,
    atualizarCliente,
    listarClienteID,
    listarCliente
}