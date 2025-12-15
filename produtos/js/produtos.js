document.addEventListener('DOMContentLoaded', () => {
  const inputBusca = document.getElementById('busca');
  const botaoBusca = document.getElementById('btnBuscar');
  const cards = document.querySelectorAll('.produtos-card');

  const contadorCarrinho = document.getElementById('contadorCarrinho');
  const botoesComprar = document.querySelectorAll('.produto-texto button');

  let totalCarrinho = 0;

  // busca de produtos
  botaoBusca.addEventListener('click', () => {
    const texto = inputBusca.value.toLowerCase().trim();

    cards.forEach(card => {
      const nome = card.querySelector('h2').innerText.toLowerCase();
      const descricao = card.querySelector('h3').innerText.toLowerCase();

      card.style.display =
        nome.includes(texto) || descricao.includes(texto)
          ? 'flex'
          : 'none';
    });

    // limpa o input após buscar
    inputBusca.value = '';
  });

  // adiciona produtos ao carrinho
  botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
      totalCarrinho++;
      contadorCarrinho.textContent = totalCarrinho;
    });
  });
});
