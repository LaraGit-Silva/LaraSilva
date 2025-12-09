alert('Olá Mundo!')



let numero = Math.random() * 100
numero = Math.floor(numero)

let escolha = prompt('Insira um número')
escolha = Math.floor(Number(escolha))

if (escolha %= 0) {
    alert('é par')
} else if (escolha %= 1) {
    alert('é impar')
}