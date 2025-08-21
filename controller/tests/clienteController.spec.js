//PRINCIPAIS TESTES:
//-DESCRIBE -> Declara um bloco de teste, reune um conujunto de testes
//-IT or TEST -> Declara um único teste únitario
//-EXPECT -> Asserções do resultado -Validar resultado

const clienteController = require ('../../controller/controllerCliente')
const DAOcliente = require ('../../model/DAO/DAOcliente')
jest.mock('../model/DAO/DAOcliente.js') //--> pra que não use os dados reais e realmente a função(usado para manter em ambientes de teste)

function sum (a, b){
    return a+b
}

describe("cliente Controller", () =>{
    test("Cliente cadastrado com sucesso", async () =>{
        const dados = {
            nome : "Gabriel Guedes",
            email : "GabrielGuedes@gmail.com",
            data_nascimento : "1980-02-02",
        }
        const contentType = 'application/json'



        await clienteController.criarCliente(dados, contentType)


        expect(DAOcliente.criarCliente).toHaveBeenCalledTimes(1); // Garante que a função DAO tenha sido chamada em formado mock uma única vez.
        expect(DAOcliente.criarCliente).toHaveBeenCalledWith({
            nome: "Gabriel Guedes",
            email: "GabrielGuedes@gmail.com",
            data_nascimento: "1980-02-02"
        })
        expect
    })
})



/*
describe("initial tests", () =>{
    it("First Unite tests", () =>{
        const firstArgument = 7; //-->argumentos da função sum
        const secondArgument = 1;

        let result = sum(firstArgument, secondArgument)

        expect(result).toBe(8)
    })
})
*/

/* 

    FUNÇÃO MOCk
    é uma função falsa criada para testes.
    Em vez de executar o comportamento real, ela simula esse comportamento.

    const mockFunc = jest.fn();
    cria um valor ficticio para realizar a função

*/