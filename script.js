// Crie um array que receba 5 itens e exiba no console.

let comiDas = ["lasanha", "farofa", "churrasco", "baião de 2", "pizza"]
console.log(comiDas);

// Utilize um método para adicionar um nome ao inicio do array.

let adiciOnar = comiDas.push("feijoada")
console.log(comiDas);

// Utilize um método para remover o último nome do array.

let favoRitas = ["lasanha", "farofa", "churrasco", "baião de 2", "pizza"]
let remOver = favoRitas.splice(4, 1)
console.log(favoRitas);

// Utilize um método para adicionar dois nomes ao fim do array.

let adiCionar = favoRitas.push(`empadao`, `coxinha`)
console.log(favoRitas);

// Utilize um método para remover o primeiro nome do array.

let foMe = ["lasanha", "farofa", "churrasco", "baião de 2", "pizza"]
let primEiro = foMe.splice(0, 1)
console.log(foMe);

// Utilize um método para organizar em ordem crescente o seguinte array:

const numbers = [7,5,6,3,8,9,2,1,4]
let cresCente = numbers.sort()
console.log(numbers);