alert('Olá Mundo! Vamos fazer contas simples.')

let operacoes = prompt('Escolhe uma operação soma, subração, multiplicação, divisão')
if (operacoes !== 'soma' &&
    operacoes !== 'subração' &&
    operacoes !== 'multipilação' &&
    operacoes !== 'divisão') {

    alert('Operação Inválida')

} else {
    let numb1 = Number(prompt('Escolhe o numero que ficará à esquerda da esquação.'))
    let numb2 = Number(prompt('Escolhe o numero que ficará à direita da esquação.'))
    let resultado
    let conta


    if (operacoes === 'soma') {
        resultado = numb1 + numb2
        conta = '+'

    } else if (operacoes === 'subração') {
        resultado = numb1 - numb2
        conta = '-'

    } else if (operacoes === 'multiplicação') {
        resultado = numb1 * numb2
        conta = '*'
    } else if (operacoes === 'divisão')
        resultado = numb1 / numb2
    conta = '/'
}

console.log(`${numb1} ${conta} ${numb2} = ${resultado}`)


