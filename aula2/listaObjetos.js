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

cliente.enderecos.push(
    {
        rua: "pinto martins", 
        numero: 123, 
        apartamento: true, 
        complemento: "padaria",
    },
);


const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

