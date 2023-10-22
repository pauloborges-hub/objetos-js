const cliente = {
    nome: "Paulo", 
    idade: 26,
    email: "victorborges296@hotmail.com",
    telefone: ["984582888", "123456789"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado com sucesso. Novo saldo ${this.saldo}`);
        }
    } 
};

cliente.efetuaPagamento(300);