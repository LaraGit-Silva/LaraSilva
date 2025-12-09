alert('Olá Mundo')

let nome = prompt('Insere o teu nome')
alert('Olá ' + nome)

let artista = prompt('Qual é o teu artistas multimédia de eleição')
alert('Não conheço a/o nome! Eu gosto muito da Mileece: https://www.mileece.is/bio')

let escolha = prompt('Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não')
escolha = Math.floor(Number(escolha))
if (escolha === 1) {
    alert('Boa, vamos começar!')
} else if (escolha === 0) {
    alert('Que pena, fica para a próxima.')
}