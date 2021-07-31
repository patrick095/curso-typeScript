

//string
let nome = 'Patrick'
let nome2: string = 'Patrick'

//number
let idade = 28
idade = 28.5
let idade2: number = 28

//boolean
let possuiHobbies = false
let possuiHobbies2: boolean = false

// array
let hobbies: string[] = ["cozinhar", "Praticar esportes"]

// tuplas
let endereco: [string, number, string?] = ["Av principal", 99, "complemento"]

// enums
enum Cor {
    cinza, //0
    verde, //1
    azul = 50, // 50
    laranja, // 51
    vermelho = 3 // 3
}

let minhaCor: Cor = Cor.verde