function repeticao(alfabeto, mensagem, deslocamento) {
    let palavra = ""

    for (let i = 0; i < mensagem.length; i++) {
        let convertido = mensagem[i].toLowerCase()

        if (convertido === " ") {
            palavra += " "
        } else {
            let indiceAlfabeto = alfabeto.indexOf(convertido)
            if (indiceAlfabeto !== -1) {
                let novoIndice = (indiceAlfabeto + deslocamento) % 27
                let novoCaractere = alfabeto[novoIndice]

                if (mensagem[i] === mensagem[i].toUpperCase()) {
                    palavra += novoCaractere.toUpperCase()
                } else {
                    palavra += novoCaractere
                }
            } else {
                palavra += mensagem[i]
            }
        }
    }

    return palavra
}

function criptografiaDeCesar(mensagem, deslocamento) {
    let alfabeto = " abcdefghijklmnopqrstuvwxyz"
    return repeticao(alfabeto, mensagem, deslocamento)
}

export function descriptografiaDeCesar(mensagem, deslocamento) {
    let alfabetoContrario = " zyxwvutsrqponmlkjihgfedcba"
    return repeticao(alfabetoContrario, mensagem, deslocamento)
}

function teste() {
    let mensagem = "mika"
    let deslocamento = 3
    console.log(criptografiaDeCesar(mensagem, deslocamento))
    console.log(descriptografiaDeCesar(mensagem, deslocamento))
}

//teste()