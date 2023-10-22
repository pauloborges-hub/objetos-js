const pessoa = {
    nome: "Paulo",
    idade: 26,
    cpf: "03789289096",
    email: "victorborges296@hotmail.com"
}

console.log(`O nome desta pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos.`);
console.log(`Podemos acessar os métodos da classe string inclusive, por exemplo os 3 primeiros dígitos do CPF são: ${pessoa.cpf.substring(0,3)}`);