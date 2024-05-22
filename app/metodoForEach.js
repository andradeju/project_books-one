const elementoInserirLivro = document.getElementById('livros');
const elementoValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosNaTela(listaLivros) {
  elementoValorTotalLivrosDisponiveis.innerHTML = ''
  elementoInserirLivro.innerHTML = ''
  listaLivros.forEach(livro => {
    let livroDisponivel = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementoInserirLivro.innerHTML += `
    <div class="livro">
    <img class="${livroDisponivel}" src="${livro.imagem}" 
      alt="${livro.alt}"/>
    <h2 class="livro__titulo">
      ${livro.titulo}
    </h2>
    <p class="livro__descricao">
      ${livro.autor}
    </p>
    <p class="livro__preco" id="preco">
      R$${livro.preco.toFixed(2)}
    </p>
    <div class="tags">
      <span class="tag">
        ${livro.categoria}
      </span>
    </div>
  </div>`
  })
}

