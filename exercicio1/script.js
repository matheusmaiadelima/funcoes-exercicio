/* 
//a)

function meuNome (nome) {
    return `Olá ${nome}`
}
console.log(meuNome("Matheus"))

//b)

function tabuada (numero) { 
    console.log(numero*1, numero*2, numero*3, numero*4, numero*5, numero*6, numero*7, numero*8, numero*9, numero*10)
}

tabuada(2)
 */

//c) - a

const meuNome = (nome) => {
    return `Olá ${nome}`
}

console.log(meuNome("Matheus"))

//c) - b

const tabuada = (numero) => {

    console.log(`${numero} x 1 = ${numero*1}`)
    console.log(`${numero} x 1 = ${numero*2}`)
    console.log(`${numero} x 1 = ${numero*3}`)
    console.log(`${numero} x 1 = ${numero*4}`)
    console.log(`${numero} x 1 = ${numero*5}`)
    console.log(`${numero} x 1 = ${numero*6}`)
    console.log(`${numero} x 1 = ${numero*7}`)
    console.log(`${numero} x 1 = ${numero*8}`)
    console.log(`${numero} x 1 = ${numero*9}`)
    console.log(`${numero} x 1 = ${numero*10}`)

}

tabuada(2)
tabuada(5)
tabuada(8)






