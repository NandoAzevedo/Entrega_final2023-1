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