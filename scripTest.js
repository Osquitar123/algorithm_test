const Numbers = [] 

let totalPrimeraMitad = 0, totalSegundaMitad = 0, total = 0
let index = Numbers.length
const primeraMitadDeNumero = Numbers.slice(0, index / 2)
const segundaMitadDeNumero = Numbers.slice(index / 2, index)

for (const i of primeraMitadDeNumero) {
    totalPrimeraMitad += i;
}
for (const i of segundaMitadDeNumero) {
    totalSegundaMitad += i;
}
/**
 * 
 * @param {Array} array Es para validar si el array está de vacío
 * @param {Number} numberOne Es el total de la primera mitad de numeros
 * @param {Number} numberTwo Es el total de la segunda mitad de numeros
 */
const canBeSplitted = (array, numberOne, numberTwo) => {
    if (array.length !== 0) {
        if (numberOne === numberTwo) {
            console.log(1)
        } else if (numberOne !== numberTwo) {
            console.log(-1)
        }
    } else {
        console.log(0)
    }
}
canBeSplitted(Numbers, totalPrimeraMitad, totalSegundaMitad);
