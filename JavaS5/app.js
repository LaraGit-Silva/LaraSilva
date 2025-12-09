alert('Olá Mundo!')

let nome = prompt('insira o seu nome')

alert('Olá! ' + nome)

let artista = prompt('Qual é o teu artista de multimedia de eleição?')

alert('Não conheço a/o ' + artista + '! Eu gosto muito da Mileece: https://www.mileece.is/bio')

let escolha = prompt('Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não')

if (escolha === 'sim') {
    alert('Ótimo, vamos comçar')

} else if (escolha === 'não') {
    alert('Que pena, fica para a próxima')
}
