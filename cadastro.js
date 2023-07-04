document.addEventListener("DOMContentLoaded", function() {
  function adicionarCliente(nome, email, dataNascimento, cpf, senha) {
    var clientesCadastrados = localStorage.getItem("clientes");
    var clientes = clientesCadastrados ? JSON.parse(clientesCadastrados) : [];

    // Verificar se o CPF já existe na lista de clientes
    var clienteExistente = clientes.find(function(cliente) {
      return cliente.cpf === cpf;
    });

    if (clienteExistente) {
      alert("CPF já cadastrado!");
      return;
    }

    var novoCliente = {
      nome: nome,
      email: email,
      dataNascimento: dataNascimento,
      cpf: cpf,
      senha: senha
    };

    clientes.push(novoCliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    alert("Cadastro realizado com sucesso!");
    // Redirecionar para a página de sucesso após o cadastro
    window.location.href = "index.html";
  }

  function realizarLogin(usuario, senha) {
    var clientesCadastrados = localStorage.getItem("clientes");
    var clientes = clientesCadastrados ? JSON.parse(clientesCadastrados) : [];

    var clienteEncontrado = clientes.find(function(cliente) {
      return cliente.nome === usuario && cliente.senha === senha;
    });

    return clienteEncontrado;
  }

  var cadastrarButton = document.getElementById("cadast");
  if (cadastrarButton) {
    cadastrarButton.addEventListener("click", function() {
      window.location.href = "novolcadastro.html";
    });
  }

  var entrarButton = document.getElementById("login-entrar");
  if (entrarButton) {
    entrarButton.addEventListener("click", function(event) {
      event.preventDefault();

      var usuario = document.querySelector('input[name="Usuario"]').value;
      var senha = document.querySelector('input[name="senha"]').value;

      if (!usuario || !senha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      var clienteValido = realizarLogin(usuario, senha);

      if (clienteValido) {
        alert("Login realizado com sucesso!");
        // Redirecionar para a página de sucesso após o login
        window.location.href = "tela.html";
      } else {
        alert("Usuário ou senha inválidos!");
      }
    });
  }

  var cadastrarButton2 = document.getElementById("cadastrar");
  if (cadastrarButton2) {
    cadastrarButton2.addEventListener("click", function(event) {
      event.preventDefault();

      var nome = document.getElementById("nome").value;
      var email = document.getElementById("email").value;
      var dataNascimento = document.getElementById("dataNascimento").value;
      var cpf = document.getElementById("cpf").value;
      var senha = document.getElementById("senha").value;
      var confirmarSenha = document.getElementById("confirmarSenha").value;

      // Verificar se todos os campos foram preenchidos
      if (!nome || !email || !dataNascimento || !cpf || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      // Verificar se as senhas coincidem
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
      }

      adicionarCliente(nome, email, dataNascimento, cpf, senha);
    });
  }

  var entrarButton2 = document.getElementById("entrar");
  if (entrarButton2) {
    entrarButton2.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  }
});
 // Obtém referências para os elementos de entrada
 const senhaInput = document.getElementById('senha');
 const confirmarSenhaInput = document.getElementById('confirmarSenha');

 // Adiciona um evento de validação para os elementos de entrada
 senhaInput.addEventListener('input', validarSenha);
 confirmarSenhaInput.addEventListener('input', validarSenha);

 function validarSenha() {
   const senha = senhaInput.value;
   const confirmarSenha = confirmarSenhaInput.value;

   // Verifica se a senha contém espaços em branco
   if (senha.includes(' ')) {
     senhaInput.setCustomValidity('A senha não pode conter espaços em branco.');
   } else {
     senhaInput.setCustomValidity('');
   }

   // Verifica se as senhas coincidem
   if (senha !== confirmarSenha) {
     confirmarSenhaInput.setCustomValidity('As senhas não coincidem.');
   } else {
     confirmarSenhaInput.setCustomValidity('');
   }
 }
 function formatarCPF() {
  const cpfInput = document.getElementById('cpf');
  let cpf = cpfInput.value;

  // Remove qualquer caractere que não seja número
  cpf = cpf.replace(/\D/g, '');

  // Aplica a formatação do CPF
  if (cpf.length > 3 && cpf.length <= 6) {
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  } else if (cpf.length > 6 && cpf.length <= 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } else if (cpf.length > 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  }

  // Atualiza o valor no campo
  cpfInput.value = cpf;
}
function validarEmail() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  // Verifica se o email contém o símbolo "@"
  if (!email.includes('@')) {
    emailInput.setCustomValidity('O e-mail deve conter o símbolo "@"');
  } else {
    emailInput.setCustomValidity('');
  }
}
function formatarData() {
  const dataInput = document.getElementById('dataNascimento');
  let data = dataInput.value;

  // Remove qualquer caractere que não seja número
  data = data.replace(/\D/g, '');

  // Verifica o tamanho do valor e aplica a formatação adequada
  if (data.length > 2) {
    data = data.replace(/(\d{2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
  }

  // Atualiza o valor no campo
  dataInput.value = data;
}