let ordenaPorPrecoBtn = document.getElementById('btnOrdenarPorPreco');

ordenaPorPrecoBtn.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirLivrosNaTela(livrosOrdenados)
}