export function criptografia(mensagem, deslocamento) {
    let alfabeto = ' abcdefghijklmnopqrstuvwxyz';
    let palavraCriptografada = '';

    for (let i = 0; i < mensagem.length; i++) {
        let convertido = mensagem[i].toLowerCase();

        if (convertido === " ") {
            palavraCriptografada += " ";
        } else {
            let indiceAlfabeto = alfabeto.indexOf(convertido);
            if (indiceAlfabeto !== -1) {
                let novoIndice = (indiceAlfabeto + deslocamento) % 27;
                let novoCaractere = alfabeto[novoIndice];

                if (mensagem[i] === mensagem[i].toUpperCase()) {
                    palavraCriptografada += novoCaractere.toUpperCase();
                } else {
                    palavraCriptografada += novoCaractere;
                }
            } else {
                palavraCriptografada += mensagem[i];
            }
        }
    }

    return palavraCriptografada;
}

/* console.log(criptografia("okay",)); */
