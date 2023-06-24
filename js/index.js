const botaoPesquisar = document.getElementById('pesquisar');

const mensagens = [
  'Arquiteto',
  'Pedreiro',
  'Mecanico',
  'animador de festa',
  'eletricista'
];

botaoPesquisar.addEventListener('click', function(event) {
  event.preventDefault(); 

  const sectionJavascript = document.querySelector('.javascript');

  const novoContainer = document.createElement('div');
  novoContainer.classList.add('novo-container'); 

  const aba = document.createElement('div');
  aba.classList.add('aba');

  const tituloAba = document.createElement('h2');
  tituloAba.textContent = 'Informações';
  tituloAba.classList.add('aba-titulo'); 

  const listaRetangulos = document.createElement('ul');

  for (let i = 0; i < mensagens.length; i++) {
    const retangulo = document.createElement('li');
    retangulo.textContent = mensagens[i];
    retangulo.classList.add('retangulo');


    retangulo.addEventListener('click', function() {
      console.log(`Clicou no retângulo ${i + 1}`);
      console.log(`Mensagem: ${mensagens[i]}`);
    });

    listaRetangulos.appendChild(retangulo);
  }


  aba.appendChild(tituloAba);
  aba.appendChild(listaRetangulos);

  novoContainer.appendChild(aba);

  sectionJavascript.appendChild(novoContainer);

  botaoPesquisar.style.display = 'none';
});
