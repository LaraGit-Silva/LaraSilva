let numeroSorte = Math.random() * 100 + 1
numeroSorte = Math.floor(numeroSorte)

alert('Olá mundo! Adivinha o numero em que estou a pensar.')

let adivinha = prompt('Insere um numero entre 1 e 100:')
adivinha = Math.floor(Number(adivinha))

let ganhou = false

if (adivinha > 100 || adivinha <= 0) {
    alert('Este numero não é válido.')
} else {
    while (!ganhou) {
        if (numeroSorte === adivinha) {
            alert('Boa')

            ganhou = true
        } else if (numeroSorte > adivinha && numeroSorte - adivinha <= 5 || numeroSorte < adivinha && numeroSorte - adivinha <= 5) {
            alert('Quase')

            adivinha = prompt('adivinha o numero da sorte entre 1 e 100:')
            adivinha = Math.floor(Number(adivinha))
        } else if (numeroSorte > adivinha) {
            alert('muito abaixo')

            adivinha = prompt('adivinha o numero da sorte entre 1 e 100:')
            adivinha = Math.floor(Number(adivinha))
        } else if (numeroSorte < adivinha) {
            alert('muito acima')

            adivinha = prompt('adivinha o numero da sorte entre 1 e 100:')
            adivinha = Math.floor(Number(adivinha))

        }
    }
}