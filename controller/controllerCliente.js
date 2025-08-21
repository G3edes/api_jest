const message = require ('../modulo/config.js')

const criarCliente = async (dados, contentType) => {
    let dados = {}
    if (contentType ) {
        if (dados.nome == undefined || dados.nome == null || dados.nome.length >100    ||
            dados.email == undefined || dados.email == null || dados.email.length >100 ||
            dados.data_nascimento == undefined || dados.data_nascimento == null || dados.data_nascimento.length >100
        ) {
            return message.ERROR_REQUIRED_FIELDS
        }else{
            let result = await DAOcliente.inserirCliente(dados)
            if (result) {
                let idCliente = clienteInserido[0].id_cliente
            }
        }
    }
}