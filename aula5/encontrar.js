const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

if(encontrado) {
    console.log(encontrado);
}
else {
    console.error("Valor não encontrado");
}