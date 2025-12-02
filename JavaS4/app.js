// vai ser um jogo sobreperdedores e ganhadores, se a pessoa clicar em "loser" ela perde se clicar em winner ela ganha, porém, irá haver outro jogo emque o vencedor tem que "apanhar"
// o pássaro




let jogo = prompt('Estás pronto para jogar o jogo mais dificil do mundo? sim/nao')

if (jogo === 'sim') {
    let escolha = prompt('És um vencedor ou um perdedor?')

    if (escolha === 'vencedor') {
        alert('Muito bem jovem sábio, vamos lá para o verdadeiro jogo.')
    } else if (escolha === 'perdedor') {
        alert('O que estás a fazer aqui então?')
        close()
    }
}
