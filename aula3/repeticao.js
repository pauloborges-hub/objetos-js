const cliente = {
    nome: "Paulo", 
    idade: 26,
    email: "victorborges296@hotmail.com",
    telefone: ["984582888", "123456789"]
};

cliente.enderecos = [
    {
        rua: "Bento Martins",
        numero: 554, 
        apartamento: false, 
        complemento: "entre ruas Uruguai e Gomes Carneiro",
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
    }
}