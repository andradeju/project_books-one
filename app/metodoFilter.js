const btnFiltros = document.querySelectorAll('.btn')


btnFiltros.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
  console.table(livrosFiltrados);
}