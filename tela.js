const botaoPesquisar = document.getElementById('pesquisar');
const divOpcoesServico = document.getElementById('opcoes-servico');

// Oculta a div de opções de serviço na abertura do site
divOpcoesServico.style.display = 'none';

botaoPesquisar.addEventListener('click', function(event) {
  event.preventDefault();

  // Oculta o botão de pesquisa
  botaoPesquisar.style.display = 'none';

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
