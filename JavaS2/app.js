let artista_1 = 'Queen'
let artista_2 = 'System of a Down'
let artista_3 = 'Mitski'

let aceitarrespostas = prompt('aceitas que eu leia a tua resposta? SIM/NÃO')

if (aceitarrespostas === 'sim' || aceitarrespostas === 'Sim' || aceitarrespostas === 'SIM' || aceitarrespostas === 'yes') {
    let escolhaUtilizador = prompt('escolhe entre Queen, System of a Down e Mitski')

    if (escolhaUtilizador === artista_1) {
        alert('AAAAAAAAA')
    }

    else if (escolhaUtilizador === artista_2) {
        alert('SSSSSSSSS')
    }

    else if (escolhaUtilizador === artista_3) {
        alert('KKKKKKKKKKKKKKKKKK')
    }

    else {
        alert('escolhe um dos artistas listados.')
    }
} else {
    alert('Não posso ler a tua resposta.')

    aceitarrespostas = false
}

let bilhetes = prompt('Queres ir a um próximo concerto? Sim - 1 ; Não - 0')
bilhetes = Number(bilhetes)

if (bilhetes && aceitarrespostas) {
    alert('boa, vou procurar')
} else if (bilhetes && !aceitarrespostas) {
    alert('Não posso aceitar respostas')
} else {
    alert('Ok, eu vou sozinha.')
}

