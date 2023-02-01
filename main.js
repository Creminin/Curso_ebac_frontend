function Pessoas(nome, idade, altura) {
  this.nome = nome;
  this.idade = idade;
  this.altura = altura;
}

function DataFuncionarios(nome, idade, altura, cargo, salario, ehCarteiraAssinada, tempoNaEmpresa) {
  this.cargo = cargo;
  this.salario = salario;
  this.ehCarteiraAssinada = ehCarteiraAssinada;
  this.tempoNaEmpresa = tempoNaEmpresa;

  Pessoas.call(this, nome, idade, altura)
}


function Finally(nome, idade, altura, cargo, salario, ehCarteiraAssinada, tempoNaEmpresa) {
  DataFuncionarios.call(this, nome, idade, altura, cargo, salario, ehCarteiraAssinada, tempoNaEmpresa)

  setTimeout(() => {
    if (this.ehCarteiraAssinada) {
      console.log(`O funcionário ${this.nome}, trabalha de carteira assinada`)
    } else {
      console.log(`O funcionário ${this.nome}, não trabalha de carteira assinada`)
    }
  }, 300);
}

const funcionario1 = new Finally('nathan', 18, '1,60m', 'desenvolvedor', 5000, true, '1 ano')

console.log(funcionario1)