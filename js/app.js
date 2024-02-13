
function criptografar() {
    let texto = document.getElementById('texto_entrada').value;
    let texto_saida = document.getElementById('texto_saida');
    let texto_criptografado = '';

    /* se nenhum texto for digitado pare a execucao */
    if (texto.length == 0) {
        return;
    }

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (letra == 'e') {
            texto_criptografado += 'enter';
        }else if (letra == 'i') {
            texto_criptografado += 'imes';
        }else if (letra == 'a') {
            texto_criptografado += 'ai';
        }else if (letra == 'o') {
            texto_criptografado += 'ober';
        }else if (letra == 'u') {
            texto_criptografado += 'ufat';
        }else{
            let letra_minuscula = checarApenasMinusculas(letra);

            if (letra_minuscula) {
                texto_criptografado += letra;
            }
            else {
                let mensagem_erro = document.getElementById('alert__box');
                mensagem_erro.style.color = 'red';
                mensagem_erro.style.fontWeight = 'bold';
                document.getElementById('texto_entrada').value = '';
                return;
            }
        }
    }
    document.getElementById('texto_entrada').value = ''; // limpa o campo de texto
    texto_saida.innerHTML = texto_criptografado;
    texto_saida.style.overflow = 'auto'; // habilita a barra de rolagem

    // habilita o botao de copiar e muda a cor para o padrao
    let botao_copiar = document.getElementById('botao_copiar');
    botao_copiar.disabled = false;
    botao_copiar.innerHTML = 'Copiar Texto';
    botao_copiar.style.backgroundColor = '#bdd1e9';
}

function descriptografar() {
    let texto = document.getElementById('texto_entrada').value;
    let texto_saida = document.getElementById('texto_saida');
    let texto_descriptografado = '';

    /* se nenhum texto for digitado pare a execucao */
    if (texto.length == 0) {
        return;
    }
    // checa se as letras sao validas
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let letra_minuscula = checarApenasMinusculas(letra);

        if (letra_minuscula === false) {
            let mensagem_erro = document.getElementById('alert__box');
            mensagem_erro.style.color = 'red';
            mensagem_erro.style.fontWeight = 'bold';
            document.getElementById('texto_entrada').value = '';
            return;
        }
    }


    if (texto.includes('enter')) {
        texto = texto.replace(/enter/g, 'e');
    }
    if (texto.includes('imes')) {
        texto = texto.replace(/imes/g, 'i');
    }
    if (texto.includes('ai')) {
        texto = texto.replace(/ai/g, 'a');
    }
    if (texto.includes('ober')) {
        texto = texto.replace(/ober/g, 'o');
    }
    if (texto.includes('ufat')) {
        texto = texto.replace(/ufat/g, 'u');
    }


    // habilita o botao de copiar e muda a cor para o padrao
    texto_saida.innerHTML = texto;
    texto_saida.style.overflow = 'auto'; // habilita a barra de rolagem

    let botao_copiar = document.getElementById('botao_copiar');
    botao_copiar.disabled = false;
    botao_copiar.innerHTML = 'Copiar Texto';
    botao_copiar.style.backgroundColor = '#bdd1e9';
    
}

function checarApenasMinusculas(letra) {
    if (letra.charCodeAt() >= 97 && letra.charCodeAt() <= 122) {
        return true;
    }else{
        if (letra.charCodeAt() == 32) {
            return true; // retorna verdadeiro caso seja um espaco
        }
        return false;
    }
}

function copiar_texto() {
    var texto_para_copiar = document.getElementById("texto_saida").innerText;
    var textarea = document.createElement('textarea'); // é necessário criar essa textarea para copiar o texto
    textarea.value = texto_para_copiar;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    
    let botao_copiar = document.getElementById('botao_copiar');

    botao_copiar.innerHTML = '✔ Copiado!';
    botao_copiar.style.backgroundColor = '#006400';
    botao_copiar.style.color = 'white';
    botao_copiar.style.border = '2px solid white';
    botao_copiar.style.opacity = '0.5';
    botao_copiar.style.textShadow = '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';

}