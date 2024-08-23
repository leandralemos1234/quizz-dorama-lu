const botoes_respostas = document.querySelectorAll("input");

var acertos = 0;
var erros = 0;

let pergunta_atual = 0;

const respostas = {
    "1": "Falso",
    "2": "Verdadeiro",
    "3": "Falso",
    "4": "Falso",
    "5": "Verdadeiro"
};

function resposta(pergunta_nome, valor) {
    if(valor != "Verdadeiro" && valor != "Falso"){
        avancar_pergunta();
        return;
    }

    if (respostas[pergunta_nome] == valor) {
        acertos += 1;
    } else {
        erros += 1;
    }
    avancar_pergunta();
}

function avancar_pergunta() {
    pergunta_atual += 1;

    for (const pergunta of document.querySelector("#perguntas").children) {
        if (pergunta.id == pergunta_atual) {
            pergunta.classList.replace("invisivel", "visivel");
        } else {
            pergunta.classList.replace("visivel", "invisivel");
        }
    }

    if (pergunta_atual > 5) {
        mostrar_resposta();
    }
}

function mostrar_resposta() {
    document.querySelector("div#resultado").classList.replace("invisivel", "visivel");

    document.getElementById("respostas_corretas").innerHTML += acertos;
    document.getElementById("respostas_incorretas").innerHTML += erros;
}

for (const botao of botoes_respostas) {
    botao.addEventListener("click", function () {
        resposta(botao.parentNode.parentNode.id, botao.value);
    })
}