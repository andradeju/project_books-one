let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

async function buscaEndereco(cep){
  var msgErro = document.getElementById('erro');
  msgErro.innerHTML = '';
  try {
    var consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvert = await consultaCEP.json();
    if (consultaCEPConvert.erro) {
      throw new Error('CEP não existente');
    }
    let logradouro = document.getElementById('endereco');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');

    logradouro.value = consultaCEPConvert.logradouro;
    bairro.value = consultaCEPConvert.bairro;
    cidade.value = consultaCEPConvert.localidade;
    estado.value = consultaCEPConvert.uf;

    return consultaCEPConvert;
  } catch (erro) {
    msgErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
    console.log(erro);
  }
}



