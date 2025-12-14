document.addEventListener('DOMContentLoaded', () => {
  const inputBusca = document.getElementById('busca');
  const botaoBusca = document.getElementById('btnBuscar');
  const cards = document.querySelectorAll('.produtos-card');

  botaoBusca.addEventListener('click', () => {
    const texto = inputBusca.value.toLowerCase().trim();

    cards.forEach(card => {
      const nome = card.querySelector('h2').innerText.toLowerCase();
      const descricao = card.querySelector('h3').innerText.toLowerCase();

      if (nome.includes(texto) || descricao.includes(texto)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // limpa o input após buscar
    inputBusca.value = '';
  });
});
