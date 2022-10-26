//a)

const somar = (n1, n2) => {
    return n1 + n2
}

console.log(somar(2, 5))

//b)

const rest = (r1, r2) => {
    const restTest = r1 >= r2
    return `O número ${r1} é maior que ${r2} portanto, essa afirmação é ${restTest}`
}

console.log(rest(2, 7))

//c)
const parImpar = (num) => {
    const result = num%2 == 0
    return `O número ${num} é par? ${result}`
}

console.log(parImpar(4))

//d)

const salario = (desc) => {
    const desconto = 0.1
    return `O desconto foi de ${desc*desconto}`
}

console.log(salario(1450))