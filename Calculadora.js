class Calculadora {
    numUm
    numDois

    Somar() {
        console.log(this.numUm + this.numDois)
    }
    Subtrair() {
        console.log(this.numUm - this.numDois)
    }
    Multiplicar() {
        console.log(this.numUm * this.numDois)
    }
    Dividir() {
        console.log(this.numUm / this.numDois)
    }
}

let continuar = true
let calculadora = new Calculadora();
calculadora.numUm = parseInt(prompt("Digite um Numero:"))
calculadora.numDois = parseInt(prompt("Digite um segundo Numero:"))

do {
    let opcao = prompt(" Digite 1 - Soma / 2 - Subtrair / 3 - Multiplicar / 4 - Dividir ")
    switch (opcao) {
        case "1":
            calculadora.Somar()
            break;
        case "2":
            calculadora.Subtrair()
            break;
        case "3":
            calculadora.Multiplicar()
            break;
        case "4":
            calculadora.Dividir()
            break;
    }
    let desejaEncerrar = prompt("Digite 1 para encerrar.")
    if (desejaEncerrar == 1) {
        continuar = false
    }
} while(continuar)

