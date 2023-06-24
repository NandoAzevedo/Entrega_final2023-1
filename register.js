// Capturando referências dos elementos do formulário
var nomeInput = document.getElementById("nome");
var emailInput = document.getElementById("email");
var senhaInput = document.getElementById("senha");
var cpfInput = document.getElementById("cpf");
var dataInput = document.getElementById("data");

// Função para salvar os valores e redirecionar
function salvarDados() {
  var nome = nomeInput.value;
  var email = emailInput.value;
  var senha = senhaInput.value;
  var cpf = cpfInput.value;
  var data = dataInput.value;

  // Verificando se todos os campos foram preenchidos
  if (nome === "" || email === "" || senha === "" || cpf === "" || data === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Exibindo os valores salvos
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Senha:", senha);
  console.log("CPF:", cpf);
  console.log("Data de Nascimento:", data);

  // Redirecionando para a página tela.html
  window.location.href = "tela.html";
}

// Adicionando um evento de clique ao botão de envio
var enviarButton = document.querySelector("button[type='submit']");
enviarButton.addEventListener("click", salvarDados);
