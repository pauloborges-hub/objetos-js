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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const  encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda);