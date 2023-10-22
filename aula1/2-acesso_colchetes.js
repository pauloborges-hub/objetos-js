const pessoa = {
    nome: "Paulo",
    idade: 26,
    cpf: "03789289096",
    email: "victorborges296@hotmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${pessoa[chave]}`);
})