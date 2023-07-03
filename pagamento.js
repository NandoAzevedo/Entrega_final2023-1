const cartaoInput = document.getElementById('texto2');

cartaoInput.addEventListener('input', function(event) {
  const { value } = event.target;
  
  // Remove todos os caracteres que não são dígitos
  const numericValue = value.replace(/\D/g, '');

  // Insere o separador "-" a cada 4 dígitos
  const formattedValue = numericValue.replace(/(\d{4})/g, '$1-');

  // Remove o último separador "-" se estiver presente
  const trimmedValue = formattedValue.replace(/-$/, '');

  // Limita o valor a 16 dígitos
  const limitedValue = trimmedValue.slice(0, 19);

  // Define o valor formatado no campo de input
  event.target.value = limitedValue;
});

const mmInput = document.getElementById('MM');

mmInput.addEventListener('input', function(event) {
  const { value } = event.target;
  
  // Remove todos os caracteres que não são dígitos
  const numericValue = value.replace(/\D/g, '');

  // Insere o separador "/" após os primeiros 2 dígitos
  const formattedValue = numericValue.replace(/^(\d{2})/, '$1/');

  // Remove caracteres além do formato "xx/xx"
  const trimmedValue = formattedValue.slice(0, 5);

  // Define o valor formatado no campo de input
  event.target.value = trimmedValue;
});

const btnPagar = document.getElementById('pagar');

btnPagar.addEventListener('click', function() {
  const cartaoInput = document.getElementById('texto2');
  const mmInput = document.getElementById('MM');
  const cvcInput = document.getElementById('CVC');
  const nomeCartaoInput = document.getElementById('nomecarto');
  const paisInput = document.getElementById('pais');
  const bandeiraCartaoSelect = document.querySelector('select[name="bandeira"]');
  const parcelasSelect = document.querySelector('select[name="parcelas"]');

  if (
    cartaoInput.value !== '' &&
    mmInput.value !== '' &&
    cvcInput.value !== '' &&
    nomeCartaoInput.value !== ''
  ) {
    alert('Pagamento realizado com sucesso!');
    window.location.href = 'tela.html'; // Redireciona para a tela.html
  } else {
    alert('Por favor, preencha todos os campos corretamente.');
  }
});
