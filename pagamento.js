const cartaoInput = document.getElementById('texto2');

cartaoInput.addEventListener('input', function(event) {
  const { value } = event.target;
  

  const numericValue = value.replace(/\D/g, '');


  const formattedValue = numericValue.replace(/(\d{4})/g, '$1-');


  const trimmedValue = formattedValue.replace(/-$/, '');


  const limitedValue = trimmedValue.slice(0, 19);


  event.target.value = limitedValue;
});

const mmInput = document.getElementById('MM');

mmInput.addEventListener('input', function(event) {
  const { value } = event.target;
  

  const numericValue = value.replace(/\D/g, '');


  const formattedValue = numericValue.replace(/^(\d{2})/, '$1/');


  const trimmedValue = formattedValue.slice(0, 5);


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
    window.location.href = 'tela.html';
  } else {
    alert('Por favor, preencha todos os campos corretamente.');
  }
});
