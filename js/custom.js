const formPerguntaChat = document.getElementById('form-pergunta-chat');

// Cadastre-se no site do ChatGPT e gere sua API KEY
const OPENAI_API_KEY = API_KEY;

if(formPerguntaChat) {
    formPerguntaChat.addEventListener("submit", async (e) => {
        // Bloqueia o recarregamento da página
        e.preventDefault();

        document.getElementById("btn-pergunta-chat").value = "Pesquisando...";

        // Recebe o valor do campo de pergunta
        var pergunta = document.getElementById("campo-pergunta").value;

        document.getElementById("pergunta").innerHTML = pergunta;

        document.getElementById("resposta").innerHTML = "<span></span>";

        // Requisição para o ChatGPT

        await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
            },
            body: JSON.stringify({
                model: "text-davinci-003", // Modelo
                prompt: pergunta,
                max_tokens: 2048, // Tamanho da resposta
                temperature: 0.5 // Criatividade na resposta
            }),
        })
        .then((resposta) => resposta.json())
        .then((dados) => {
            // console.log(dados);
            // console.log(dados.choices[0].text);
            document.getElementById("resposta").innerHTML = dados.choices[0].text;
        })
        .catch((error) => {
            document.getElementById("resposta").innerHTML = "Ops, Sem resposta para essa pergunta.";
        });
        document.getElementById("btn-pergunta-chat").value = "Enviar";
    });
}