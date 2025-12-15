// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // impede envio real (para testar)
        alert("Seu cadastro foi realizado com sucesso!");
        // aqui você pode redirecionar ou resetar o form
        form.reset();
    });
});