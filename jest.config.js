//Você pode recuperar os padrões do Jest para jest-configestendê-los, se necessário:

module.exports={
    testEnvironment: 'node', //indica qual ambiente que o jest fará os testes.
    testMatch: [ '**/__tests__/**/*.[jt]s?(x)','**/?(*.)+(spec|test).[jt]s?(x)'] //Direciona onde o jest deverá fazer o testes
//              qualquer pasta __tests__                           somente js
}

/* será necessário criar um script para que inicie o teste usando o jest : 
"scripts": {
  "test": "jest --passWithNoTests" --> esse passWithNoTests é usado para que retorne 0 mesmo sem a existência de testes.
  }
*/

//criar um arquivo onde será feito os testes usando o spec.
//clienteController.spec.js