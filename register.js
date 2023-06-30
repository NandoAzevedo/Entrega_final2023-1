
var Input = document.getElementById("nome");
var emailInput = document.getElementById("email");
var senhaInput = document.getElementById("senha");
var cpfInput = document.getElementById("cpf");
var dataInput = document.getElementById("data");

function salvarDados() {
  var nome = nomeInput.value;
  var email = emailInput.value;
  var senha = senhaInput.value;
  var cpf = cpfInput.value;
  var data = dataInput.value;

  if (nome === "" || email === "" || senha === "" || cpf === "" || data === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Senha:", senha);
  console.log("CPF:", cpf);
  console.log("Data de Nascimento:", data);

  window.location.href = "tela.html";
}

var enviarButton = document.querySelector("button[type='submit']");
enviarButton.addEventListener("click", salvarDados);
