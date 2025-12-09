// vai ser um jogo sobreperdedores e ganhadores, se a pessoa escrever em "perdedor" ela perde se clicar em "vencedor" ela ganha, porém, irá haver outro jogo em que o vencedor tem que apanhar
// o pássaro




let game = prompt('Estás pronto para jogar o jogo mais dificil do mundo? sim/nao')

if (game === 'sim') {
    let escolha = prompt('És um vencedor ou um perdedor?')

    if (escolha === 'vencedor') {
        alert('Muito bem jovem sábio, vamos lá para o verdadeiro jogo.')
    } else if (escolha === 'perdedor') {
        alert('O que estás a fazer aqui então?')
        close()
    }
}

let regras = prompt('queres aprender as regras do jogo? sim/não')

let chance = Math.floor(Math.random() * 100) + 1
alert(chance)
let percentagem = 30

let apanharpassaro = false




if (regras === 'sim') {
    alert('Neste jogo o teu objetivo é apanhar o passaro, simples, não é?')
    alert('É, é só isso, apanha o passarinho')
    let apanhar = prompt('Tenta apanhar o passaro')
    while (!apanharpassaro) {
        if (apanhar === 'apanhar') {
            if (chance < percentagem) {
                alert(`${chance}, ${percentagem}`)
                alert('Boa, apanhaste o passaro!')

                apanharpassaro = true
            } else {
                chance = Math.floor(Math.random()) * 100
                alert('Não apanhaste o passaro')
                apanhar = prompt('Tenta apanhar o passaro')
            }
        } else {
            alert('palavra errada')
            break
        }


    }

} else if (regras === 'não') {
    alert('É tarde para negar agora.')
    alert('Neste jogo o teu objetivo é apanhar o passaro, simples, não é?')
    alert('É, é só isso, apanha o passarinho')
}







