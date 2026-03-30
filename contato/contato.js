const form = document.getElementById("formContato");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("https://formsubmit.co/ajax/byvictooriiaa@gmail.com", {
        method: "POST",
        body: data
    })
    .then(response => response.json())
    .then(data => {
        msg.innerText = "Mensagem enviada com sucesso!";
        msg.style.color = "green";
        form.reset();
    })
    .catch(error => {
        msg.innerText = "Erro ao enviar a mensagem. Por favor, tente novamente.";
        msg.style.color = "red";
    });
});