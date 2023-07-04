document.addEventListener('DOMContentLoaded', function() {
    const enderecoForm = document.querySelector('.endereço form');
    const emailInput = document.getElementById('Email');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const casaInput = document.getElementById('casa');
    const cepInput = document.getElementById('cep');
    const salvarButton = document.getElementById('salvar');

    salvarButton.addEventListener('click', function(event) {
      event.preventDefault();


      if (emailInput.value && bairroInput.value && cidadeInput.value && casaInput.value && cepInput.value) {

        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('bairro', bairroInput.value);
        localStorage.setItem('cidade', cidadeInput.value);
        localStorage.setItem('casa', casaInput.value);
        localStorage.setItem('cep', cepInput.value);


        alert('Endereço salvo com sucesso!');
      } else {

        alert('Por favor, preencha todos os campos.');
      }
    });


    emailInput.value = localStorage.getItem('email') || '';
    bairroInput.value = localStorage.getItem('bairro') || '';
    cidadeInput.value = localStorage.getItem('cidade') || '';
    casaInput.value = localStorage.getItem('casa') || '';
    cepInput.value = localStorage.getItem('cep') || '';
  });
  document.addEventListener('DOMContentLoaded', function() {
    const alterarSenhaForm = document.querySelector('#alterar-senha form');
    const emailInput = document.getElementById('Email1');
    const senhaInput = document.getElementById('bairro2');
    const telefoneInput = document.getElementById('telefone');
    const alterarSenhaButton = document.getElementById('submit');

    alterarSenhaButton.addEventListener('click', function(event) {
      event.preventDefault();


      if (emailInput.value && senhaInput.value && telefoneInput.value) {

        alert('Senha alterada com sucesso!');
      } else {

        alert('Por favor, preencha todos os campos.');
      }
    });


    emailInput.value = localStorage.getItem('email') || '';
    senhaInput.value = localStorage.getItem('senha') || '';
    telefoneInput.value = localStorage.getItem('telefone') || '';
});