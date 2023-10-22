const cliente = {
    nome: "Paulo", 
    idade: 26,
    email: "victorborges296@hotmail.com",
    telefone: ["984582888", "123456789"]
};

cliente.endereco = {
    rua: "Bento Martins",
    numero: 554, 
    apartamento: false, 
    complemento: "entre ruas Uruguai e Gomes Carneiro"
};

console.log(cliente.endereco.rua);