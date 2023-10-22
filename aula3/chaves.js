const cliente = {
    nome: "Paulo", 
    idade: 26,
    email: "victorborges296@hotmail.com",
    telefone: ["984582888", "123456789"]
};
/*
cliente.enderecos = [
    {
        rua: "Bento Martins",
        numero: 554, 
        apartamento: false, 
        complemento: "entre ruas Uruguai e Gomes Carneiro",
    },
];
*/
const chavesDoObjeto = Object.keys(cliente);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. A chave endereços deve estar preenchida.");
}
else {
    console.log(chavesDoObjeto);
}