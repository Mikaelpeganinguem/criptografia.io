import {verificaTamanhoKey,somaValorLetra,crypto} from "./encryptVigenere.js";
import {subValorLetra,decrypt} from "./decryptVigenere.js";

document.getElementById("encryptVig").addEventListener("click",function(event) {
    let mensagem = document.getElementById("mensagem").value.toLowerCase();
    let senha = document.getElementById("key").value.toLowerCase();

    if (senha.length !== mensagem.length)
        senha = verificaTamanhoKey(senha, mensagem);

    let encrypted = crypto(somaValorLetra(mensagem, senha));

    document.getElementById("resul").innerText = encrypted;
});

document.getElementById("decryptVig").addEventListener("click",function(event) {
    let mensagem = document.getElementById("mensagem").value.toLowerCase();
    let senha = document.getElementById("key").value.toLowerCase();

    if (senha.length !== mensagem.length)
        senha = verificaTamanhoKey(senha, mensagem);

    let decrypted = decrypt(subValorLetra(mensagem, senha));

    document.getElementById("resul").innerText = decrypted;
});

document.getElementById("toClean").addEventListener("click", function(event) {
    document.getElementById("mensagem").value = '';
    document.getElementById("key").value = '';
    document.getElementById("resul").value = '';
});

document.getElementById("reload").addEventListener("click", function(event) {
    location.reload();
});