
function validateForm() {
    const isValid = true;

    // Nome 
    const nome = document.getElementById("nome");
    const nomeWarn = document.getElementById("nome-warn");

    if(nome.value.trim() === "") {
        nomeWarn.style.display = "block";
        isValid = false;
    } else {
        nomeWarn.style.display = "none";
    }

    // Email
    const email = document.getElementById('email');
    const emailWarn = document.getElementById('email-warn');
    if (email.value.trim() === '' || !email.value.includes('@')) {
        emailWarn.style.display = 'block';
        isValid = false;
    } else {
        emailWarn.style.display = 'none';
    }

    // Assunto
    const assunto = document.getElementById('assunto');
    const assuntoWarn = document.getElementById('assunto-warn');
    if (assunto.value.trim() === '') {
        assuntoWarn.style.display = 'block';
        isValid = false;
    } else {
        assuntoWarn.style.display = 'none';
    }

    // Mensagem
    const mensagem = document.getElementById('mensagem');
    const mensagemWarn = document.getElementById('mensagem-warn');
    if (mensagem.value.trim() === '') {
        mensagemWarn.style.display = 'block';
        isValid = false;
    } else {
        mensagemWarn.style.display = 'none';
    }

    if (isValid) {
        Toastify({
            text: "Mensagem enviada com sucesso!",
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "#10bd00",
              },
        }).showToast();
    }

    limparCampos();
}

// Limpar campos input
function limparCampos() {
    nome.value = "";
    email.value = "";
    assunto.value = "";
    mensagem.value = "";
}