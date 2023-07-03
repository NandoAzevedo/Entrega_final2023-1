const botaoPesquisar = document.getElementById('pesquisar');
const divOpcoesServico = document.getElementById('opcoes-servico');

// Oculta a div de opções de serviço na abertura do site
divOpcoesServico.style.display = 'none';

botaoPesquisar.addEventListener('click', function(event) {
  event.preventDefault();


  // Verifica se a div de opções de serviço está visível
  if (divOpcoesServico.style.display === 'none') {
    // Exibe as opções de serviço
    divOpcoesServico.style.display = 'block';
  } else {
    // Oculta as opções de serviço
    divOpcoesServico.style.display = 'none';
  }
});
const button = document.getElementById('Acessar');

button.addEventListener('click', () => {
  window.location.href = 'perfilnovo.html';
});



/*
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.trabalho');
  var categories = document.querySelectorAll('.categoria-servico');
  var activeCategory = null;

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var categoryId = this.id.replace('btn-', 'div-');
      var categoryToShow = document.getElementById(categoryId);

      if (activeCategory && activeCategory !== categoryToShow) {
        activeCategory.style.display = 'none';
        activeCategory.classList.remove('nova-div-estilo');
        activeCategory = null;
      }

      if (categoryToShow && activeCategory !== categoryToShow) {
        categoryToShow.style.display = 'block';
        categoryToShow.classList.add('nova-div-estilo');
        activeCategory = categoryToShow;
      } else {
        categoryToShow.style.display = 'none';
        categoryToShow.classList.remove('nova-div-estilo');
        activeCategory = null;
      }

      var opcoesServico = document.getElementById('opcoes-servico');
      if (categoryToShow && opcoesServico.nextSibling !== categoryToShow) {
        opcoesServico.insertAdjacentElement('afterend', categoryToShow);
      }

      // Adicionar o conteúdo HTML correspondente à div
      var divContent = document.getElementById('div-' + this.id.replace('btn-', ''));
      if (divContent) {
        categoryToShow.innerHTML = divContent.innerHTML;
      }
    });
  });
});
*/
const enviarButton = document.getElementById("Enviar");
const chatMessages = document.getElementById("chat-messages");

let isChatVisible = true;

enviarButton.addEventListener("click", function() {
  if (isChatVisible) {
    chatMessages.style.display = "none";
  } else {
    chatMessages.style.display = "block";
  }
  
  isChatVisible = !isChatVisible;
});
      // Função para exibir as mensagens no chat
      function displayMessage(message) {
        const chatMessages = document.getElementById("chat-messages");
        const messageElement = document.createElement("p");
        messageElement.textContent = message;
        messageElement.classList.add("message");
      
        // Adicione a classe "sent" para simular mensagens enviadas pelo usuário
        // messageElement.classList.add("sent");
      
        // Adicione a classe "received" para simular mensagens recebidas
        // messageElement.classList.add("received");
      
        chatMessages.appendChild(messageElement);
      }

      // Função para enviar uma mensagem
      function sendMessage() {
        const messageInput = document.getElementById("message-input");
        const message = messageInput.value;

        if (message) {
          displayMessage(message);
          messageInput.value = "";
        }
      }

      // Evento de clique do botão de enviar
      const sendButton = document.getElementById("send-button");
      sendButton.addEventListener("click", sendMessage);

      // Evento de pressionar a tecla Enter no campo de entrada de mensagem
      const messageInput = document.getElementById("message-input");
      messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          sendMessage();
        }
      });
      document.addEventListener('DOMContentLoaded', function() {
        const cadastrarButton = document.getElementById('Cadastro');
    
        cadastrarButton.addEventListener('click', function() {
            // Redirecionar para a página "novoprestar.html"
            window.location.href = 'novoprestar.html';
        });
    });