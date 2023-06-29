const barraPesquisa = document.getElementById('barra-pesquisa');
const botoesTrabalho = document.getElementsByClassName('trabalho');

barraPesquisa.addEventListener('input', function() {
  const termoPesquisa = barraPesquisa.value.toLowerCase();

  // Percorre os botões de trabalho
  for (let i = 0; i < botoesTrabalho.length; i++) {
    const nomeBotao = botoesTrabalho[i].textContent.toLowerCase();
    
    // Verifica se o nome do botão contém o termo de pesquisa
    if (nomeBotao.includes(termoPesquisa)) {
      botoesTrabalho[i].style.display = 'block';  // Exibe o botão
    } else {
      botoesTrabalho[i].style.display = 'none';   // Oculta o botão
    }
  }
});
const imagemInput = document.getElementById('imagem-input');
const imagemPreview = document.getElementById('imagem-preview');

imagemInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    imagemPreview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    imagemPreview.src = '#';
  }
});

