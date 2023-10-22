const clientes = require("./clientes.json");

function ordenaNomes(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) {
            return -1;
        }
        else if(a[propriedade] > b[propriedade]) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return resultado;
};

console.log(ordenaNomes(clientes, "nome"));