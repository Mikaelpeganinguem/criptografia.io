export function verificaTamanhoKey(senha, mensagem) {
    let newSenha = '';

    if (senha.length < mensagem.length) {
        let i = 0;
        while (newSenha.length < mensagem.length) {
            newSenha += senha[i];
            i = (i % senha.length);
        }
    } else if (senha.length > mensagem.length)
        newSenha = remove(senha, mensagem);

    return newSenha;
}

// Retorna um array com os índices das letras da  mensagem no alfabeto
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

// Converte um array de índices de letras em uma palavra criptografada
export function crypto(arrNumber) {
    const alfabeto = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let palavraCriptografada = '';

    for (let i = 0; i < arrNumber.length; i++)
        palavraCriptografada += alfabeto[parseInt(arrNumber[i])];
    

    return palavraCriptografada;
}

// Soma os valores das letras da mensagem com os valores das letras da senha
export function somaValorLetra(text, senha) {
    let valorMensagem = valorLetra(text);
    let valorSenha = valorLetra(senha);
    let valorNovaMensagem = [];

    for (let i = 0; i < valorMensagem.length; i++) {
        let soma = valorMensagem[i] + valorSenha[i]; //% valorSenha.length
        if (soma > 26)
            soma -= 26;

        valorNovaMensagem.push(soma);
    }

    return valorNovaMensagem;
}

/* Minhas funções */

// Retorna o índice de um caractere em uma string
export function indexOf(text, caractere) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === caractere)
            return i;
    }
    return -1;
}

// Remove os último caracteres da senha e deixa ela do mesmo tamanho que a mensagem 
export function remove(key, msg) {
    let newSenha = '';

    let i = 0;
    while (i < msg.length) {
        newSenha += key[i];
        if (newSenha.length === msg.length)
            break;

        i++;
    }
    return newSenha;
}


function teste() {
    let valorMensagem = valorLetra(mensagem);
    let valorSenha = valorLetra(senha);
    let mensagemCriptografada = somaValorLetra(mensagem, senha);
    let resultadoFinal = crypto(mensagemCriptografada);

    console.log('Valor mensagem:', valorMensagem);
    console.log('Valor senha:', valorSenha);
    console.log('Mensagem criptografada:', mensagemCriptografada);
    console.log('Resultado final:', resultadoFinal);
}

//teste();
