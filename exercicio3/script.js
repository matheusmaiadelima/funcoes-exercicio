//a)

const soma = (num1, num2) => {
    const somar = num1 + num2
    return `O resultado de ${num1} + ${num2} é: ${somar}`
}

const subtracao = (num1, num2) => {
    const subtrair = num1 - num2
    return `O resultado de ${num1} - ${num2} é: ${subtrair}`
}

const divisao = (num1, num2) => {
    const dividir = num1 / num2
    return `O resultado de ${num1} / ${num2} é: ${dividir}`
}

const multiplicacao = (num1, num2) => {
    const multiplicar = num1 * num2
    return `O resultado de ${num1} * ${num2} é: ${multiplicar}`
}

//b)

let numero1 = (Number(prompt("Insira o primeiro número")))
let numero2 = (Number(prompt("Insira o segundo número")))

//c)

console.log(soma(numero1, numero2))
console.log(subtracao(numero1, numero2))
console.log(divisao(numero1, numero2))
console.log(multiplicacao(numero1, numero2))

//d)

let resultadoSoma = (soma(numero1, numero2))
console.log(resultadoSoma)
let resultadoSub = (subtracao(numero1, numero2))
console.log(resultadoSub)
let resultadoDiv = (divisao(numero1, numero2))
console.log(resultadoDiv)
let resultadoMult = (multiplicacao(numero1, numero2))
console.log(resultadoMult)