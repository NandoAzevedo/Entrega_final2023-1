const barraPesquisa = document.getElementById('barra-pesquisa');
const botoesTrabalho = document.getElementsByClassName('trabalho');

if (barraPesquisa) {
  barraPesquisa.addEventListener('input', function() {
    const termoPesquisa = barraPesquisa.value.toLowerCase();

    for (let i = 0; i < botoesTrabalho.length; i++) {
      const nomeBotao = botoesTrabalho[i].textContent.toLowerCase();


      if (nomeBotao.includes(termoPesquisa)) {
        botoesTrabalho[i].style.display = 'block';
      } else {
        botoesTrabalho[i].style.display = 'none';
      }
    }
  });
} else {
  console.log("Elemento 'barra-pesquisa' não encontrado.");
}

const imagemInput = document.getElementById('imagem-input');
const imagemPreview = document.getElementById('imagem-preview');

if (imagemInput && imagemPreview) {
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
} else {
  console.log("Elementos 'imagem-input' ou 'imagem-preview' não encontrados.");
}

function selecionarBotao(id) {
  const botoes = document.getElementsByClassName("trabalho");

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("selecionado");
  }

  const botaoSelecionado = document.getElementById(id);
  if (botaoSelecionado) {
    botaoSelecionado.classList.add("selecionado");
    localStorage.setItem("escolha", id);
  } else {
    console.log(`Elemento '${id}' não encontrado.`);
  }
}

const botoes = document.getElementsByClassName("trabalho");
for (let i = 0; i < botoes.length; i++) {
  const botao = botoes[i];
  botao.addEventListener("click", function() {
    selecionarBotao(botao.id);
  });
}

const escolhaSalva = localStorage.getItem("escolha");
if (escolhaSalva) {
  const botaoSelecionado = document.getElementById(escolhaSalva);
  if (botaoSelecionado) {
    botaoSelecionado.classList.add("selecionado");
  } else {
    console.log(`Elemento '${escolhaSalva}' não encontrado.`);
  }
}

function salvarEscolha() {
  const escolha = localStorage.getItem("escolha");
  const descricao = document.getElementById("descricao").value;

  if (escolha && descricao) {
    localStorage.setItem("escolhaSalva", escolha);
    localStorage.setItem("descricaoSalva", descricao);
    alert("Escolha salva: " + escolha + "\nDescrição: " + descricao);
  } else {
    alert("Preencha todos os campos.");
  }
}

const checkboxes = document.querySelectorAll('input[name="dias-semana"]');
if (checkboxes.length > 0) {
  const botaoSalvar = document.getElementById("salvado");
  botaoSalvar.addEventListener("click", salvarDiasSelecionados);

  function salvarDiasSelecionados() {
    const diasSelecionados = [];

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        diasSelecionados.push(checkboxes[i].value);
      }
    }

    localStorage.setItem("diasSelecionados", JSON.stringify(diasSelecionados));
    console.log("Dias selecionados salvos:", diasSelecionados);
  }
} else {
  console.log("Nenhum checkbox com nome 'dias-semana' encontrado.");
}

function salvarNumeroContato() {
  const numeroContato = document.getElementById("numero-contato-input").value;

  if (numeroContato) {
    localStorage.setItem("numeroContato", numeroContato);
    console.log("Número de contato salvo:", numeroContato);
    alert("Cadastrado com sucesso!");
    window.location.href = "tela.html";
  } else {
    console.log("Número de contato não fornecido.");
    alert("Preencha todos os campos.");
  }
}

const botaoCadastrar = document.getElementById("salvado");
if (botaoCadastrar) {
  botaoCadastrar.addEventListener("click", salvarNumeroContato);
} else {
  console.log("Elemento 'salvado' não encontrado.");
}


