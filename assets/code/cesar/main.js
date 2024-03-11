import {criptografia} from "./encryptCesar.js";
import {descriptografiaDeCesar} from "./decryptCesar.js";

document.getElementById("encryptCes").addEventListener("click",function(event) {
    let mensagem = document.getElementById("mensagem").value.toLowerCase();
    let deslocamento = parseInt(document.getElementById("desloc").value);
        
    let encrypt = criptografia(mensagem, deslocamento);
    document.getElementById("result").innerText = encrypt;
});


document.getElementById("decryptCes").addEventListener("click", function(event){
    let mensagem = document.getElementById("mensagem").value.toLowerCase();
    
    let deslocamento = parseInt(document.getElementById("desloc").value);
    let decrypt = descriptografiaDeCesar(mensagem, deslocamento);
    document.getElementById("result").innerText = decrypt
    
});
    
document.getElementById("toClean").addEventListener("click", function(event) {
    document.getElementById("mensagem").value = '';
    document.getElementById("desloc").value = '';
    document.getElementById("result").value = '';
});

document.getElementById("refresh").addEventListener("click", function(event) {
    location.reload();
});
