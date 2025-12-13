let form = document.querySelector("form");

form.addEventListener('submit', function (event) {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("duv").value;

    event.preventDefault(event);
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!")
        form.reset();
    }
});