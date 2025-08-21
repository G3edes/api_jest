//import da biblioteca do prisma client para executar os scripts SQL
const { PrismaClient } = require('@prisma/client')
//Instancia (criar um objeto a ser utilizado) a biblioteca do prisma/client
const prisma = new PrismaClient()

const inserirCliente = async (dados) => {
    try {
        let sql = `insert into cliente(
        nome,
        email,
        data_nascimento
        )values(
        ${dados.nome},
        ${dados.email},
        ${dados.data_nascimento}
        )`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        return false
    }
    
}
const atualizarCliente = async (dados) => {
    try {
        let sql = `insert into clientes(
        nome,
        email,
        data_nascimento
        )values(
        ${dados.nome},
        ${dados.email},
        ${dados.data_nascimento} 
        where id = ${dados.id}
        )`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        return false
    }
}
const selectClienteById = async function(id){
    try {
        let sql = `select * from clientes where id = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)

        if (result)
            return result
        else 
            return false
    } catch (error) {
        return false
    }
}
const selectAllClientes = async () => {
    try {
        let sql=`select * from clientes order by id desc`
        let result = await prisma.$queryRawUnsafe(sql)
    if (result)
        return result
    else 
        return false
    } catch (error) {
        return false
    }
    
}
module.exports = {
    inserirCliente,
    selectClienteById,
    atualizarCliente,
    selectAllClientes
}