const barraPesquisa = document.getElementById('barra-pesquisa');
const botoesTrabalho = document.getElementsByClassName('trabalho');

if (barraPesquisa) {
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
} else {
  console.log("Elemento 'barra-pesquisa' não encontrado.");
}

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

// Função para definir o botão selecionado e salvar no Local Storage
function selecionarBotao(id) {
  // Obter todos os botões com a classe "trabalho"
  const botoes = document.getElementsByClassName("trabalho");

  // Remover a classe "selecionado" de todos os botões
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("selecionado");
  }

  // Adicionar a classe "selecionado" ao botão clicado
  const botaoSelecionado = document.getElementById(id);
  botaoSelecionado.classList.add("selecionado");

  // Salvar a escolha no Local Storage
  localStorage.setItem("escolha", id);
}

// Adicionar o evento de clique aos botões
const botoes = document.getElementsByClassName("trabalho");
for (let i = 0; i < botoes.length; i++) {
  const botao = botoes[i];
  botao.addEventListener("click", function() {
    selecionarBotao(botao.id);
  });
}

// Verificar se há uma escolha salva no Local Storage e marcar o botão selecionado
const escolhaSalva = localStorage.getItem("escolha");
if (escolhaSalva) {
  const botaoSelecionado = document.getElementById(escolhaSalva);
  if (botaoSelecionado) {
    botaoSelecionado.classList.add("selecionado");
  }
}

// Função para salvar a escolha e o conteúdo do textarea
function salvarEscolha() {
  // Obter a escolha selecionada
  const escolha = localStorage.getItem("escolha");

  // Obter o conteúdo do textarea
  const descricao = document.getElementById("descricao").value;

  // Verificar se há uma escolha e conteúdo do textarea
  if (escolha && descricao) {
    // Salvar a escolha no Local Storage
    localStorage.setItem("escolhaSalva", escolha);

    // Salvar o conteúdo do textarea no Local Storage
    localStorage.setItem("descricaoSalva", descricao);

    // Exibir o alerta com a escolha e conteúdo do textarea
    alert("Escolha salva: " + escolha + "\nDescrição: " + descricao);
  } else {
    // Caso não haja escolha ou conteúdo do textarea
    alert("Preencha todos os campos.");
  }
}

// Obter os checkboxes dos dias da semana
const checkboxes = document.querySelectorAll('input[name="dias-semana"]');

// Função para salvar os dias selecionados no Local Storage
function salvarDiasSelecionados() {
  const diasSelecionados = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      diasSelecionados.push(checkboxes[i].value);
    }
  }

  // Salvar os dias selecionados no Local Storage
  localStorage.setItem("diasSelecionados", JSON.stringify(diasSelecionados));

  console.log("Dias selecionados salvos:", diasSelecionados);
}

// Adicionar o evento de clique ao botão "salvado"
const botaoSalvar = document.getElementById("salvado");
botaoSalvar.addEventListener("click", salvarDiasSelecionados);

// Função para salvar o número de contato no Local Storage
function salvarNumeroContato() {
  const numeroContato = document.getElementById("numero-contato-input").value;

  // Verificar se o número de contato foi fornecido
  if (numeroContato) {
    // Salvar o número de contato no Local Storage
    localStorage.setItem("numeroContato", numeroContato);

    console.log("Número de contato salvo:", numeroContato);
    
    // Exibir o alerta "Cadastrado com sucesso!"
    alert("Cadastrado com sucesso!");

    // Redirecionar para a página "tela.html"
    window.location.href = "tela.html";
  } else {
    console.log("Número de contato não fornecido.");
    alert("Preencha todos os campos.");
  }
}

// Adicionar o evento de clique ao botão "Cadastrar"
const botaoCadastrar = document.getElementById("salvado");
botaoCadastrar.addEventListener("click", salvarNumeroContato);
