import {verificaTamanhoKey, remove} from './encryptVigenere.js'

export function valorLetra(text) {
    const alfabeto = " abcdefghijklmnopqrstuvwxyz";
    let textoEmNumero = [];

    let i = 0;
    while (i < text.length) {
        let charIndex = indexOf(alfabeto, text[i]);
        if (charIndex !== -1) {
            textoEmNumero.push(charIndex);
        }
        i++;
    }
    return textoEmNumero;
}

export function subValorLetra(crypt, senha) {
    let valorCrypt = valorLetra(crypt);
    let valorSenha = valorLetra(senha);
    let msgDecrypt = [];

    for (let i = 0; i < valorCrypt.length; i++) {
        let sub = 0;
        if(valorCrypt[i] !== 0){
            sub = valorCrypt[i] - valorSenha[i];
            if (sub < 0)
                sub += 26;
        }
        msgDecrypt.push(sub);
    }

    return msgDecrypt;
}


export function decrypt(msgDecrypted) {
    const alfabeto = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o" ,"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let palavraDecriptada = '';

    for (let i = 0; i < msgDecrypted.length; i++) {
        palavraDecriptada += alfabeto[parseInt(msgDecrypted[i])];
    }

    return palavraDecriptada;
}


// Retorna o índice de um caractere em uma string
export function indexOf(text, caractere) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === caractere)
            return i;
    }
    return -1;
}


function teste() {
    let valorMensagem = valorLetra(crypt);
    let valorSenha = valorLetra(senha);
    let mensagemCriptografada = subValorLetra(crypt, senha);
    let resultadoFinal = decrypt(mensagemCriptografada);

    console.log('Valor mensagem criptada:', valorMensagem);
    console.log('Valor senha:', valorSenha);
    console.log('Mensagem Decriptada:', mensagemCriptografada);
    console.log('Resultado final:', resultadoFinal);
}

//teste();
