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
      window.location.href = "novologin.html";
    }
  
    function redirecionar(event) {
      event.preventDefault();
  
      var usuario = document.querySelector('input[name="Usuario"]').value;
      var senha = document.querySelector('input[name="senha"]').value;
  
      var clienteValido = validarLogin(usuario, senha);
  
      if (clienteValido) {
        alert("Login realizado com sucesso!");
        // Redirecionar para a página de sucesso após o login
        window.location.href = "novologin.html";
      } else {
        alert("Usuário ou senha inválidos!");
      }
    }
  
    function validarLogin(usuario, senha) {
      var clientesCadastrados = localStorage.getItem("clientes");
      var clientes = clientesCadastrados ? JSON.parse(clientesCadastrados) : [];
  
      var clienteEncontrado = clientes.find(function(cliente) {
        return cliente.nome === usuario && cliente.senha === senha;
      });
  
      return clienteEncontrado;
    }
    
    var botaoCadastrar = document.getElementById("cadastrar");
    if (botaoCadastrar) {
      botaoCadastrar.addEventListener("click", function(event) {
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
  
    var cadastrarButton = document.getElementById("cadast");
    if (cadastrarButton) {
      cadastrarButton.addEventListener("click", function() {
        window.location.href = "novolcadastro.html";
      });
    }
  
    var isCadastroPage = document.body.classList.contains("cadastro");
  
    var entrarButton = document.getElementById("entrar");
    entrarButton.addEventListener("click", function() {
      window.location.href = "novologin.html";
    });
  });
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
      window.location.href = "página_de_sucesso.html";
    }
  
    function realizarLogin(usuario, senha) {
      var clientesCadastrados = localStorage.getItem("clientes");
      var clientes = clientesCadastrados ? JSON.parse(clientesCadastrados) : [];
  
      var clienteEncontrado = clientes.find(function(cliente) {
        return cliente.nome === usuario && cliente.senha === senha;
      });
  
      return clienteEncontrado;
    }
  
    var botaoCadastrar = document.getElementById("cadastrar");
    if (botaoCadastrar) {
      botaoCadastrar.addEventListener("click", function(event) {
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
    
    var entrarButton = document.querySelector('.bnt-login');
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
        window.location.href = "página_de_sucesso.html";
      } else {
        alert("Usuário ou senha inválidos!");
      }
    });
  });
  
  