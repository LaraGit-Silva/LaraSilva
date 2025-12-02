let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)

let adivinha = prompt('adivinha o numero da sorte entre 1 e 10:')
adivinha = Math.floor(Number(adivinha))


console.log('nº sorte:' + numeroSorte, 'nº visitante: ' + adivinha)

let ganhou = false
if (adivinha > 10 || adivinha <= 0) {
    alert('esse numero não é válido, tchau.')
    close()
} else
    if (numeroSorte === adivinha) {
        alert('Boa')
        ganhou = true
    } else if (numeroSorte > adivinha && (numeroSorte - adivinha) <= 2 || adivinha < numeroSorte && adivinha - numeroSorte <= 2) {
        alert('Womp Womp')
        let adivinha = prompt('adivinha o numero da sorte entre 1 e 10:')
        adivinha = Math.floor(Number(adivinha))
    } else if (numeroSorte > adivinha) {
        alert('muto abaixo')
        let adivinha = prompt('adivinha o numero da sorte entre 1 e 10:')
        adivinha = Math.floor(Number(adivinha))
    } else if (numeroSorte < adivinha) {
        alert('muito acima')
        let adivinha = prompt('adivinha o numero da sorte entre 1 e 10:')
        adivinha = Math.floor(Number(adivinha))

    }

for (i = 0; i <= 20; i++) {
    console.log('Olá people pela vez ${i}')
}