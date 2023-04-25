const formPerguntaChat = document.getElementById('form-pergunta-chat');

if(formPerguntaChat) {
    formPerguntaChat.addEventListener("submit", async (e) => {
        // Bloqueia o recarregamento da página
        e.preventDefault();
        // Recebe o valor do campo de pergunta
        var pergunta = document.getElementById("campo-pergunta").value;
        console.log(pergunta);
    });
}