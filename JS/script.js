// =========================================================
// FOCINHO DE PET — interações da página
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  setupFilterPills();
  setupCarousels();
  setupSearch();
});

/**
 * Alterna o estado "ativo" dentro de cada grupo de filtros
 * (ex.: Rações / Coleiras / Brinquedos...).
 */
function setupFilterPills() {
  document.querySelectorAll('.filters-bar').forEach((bar) => {
    bar.addEventListener('click', (event) => {
      const pill = event.target.closest('.filter-pill');
      if (!pill) return;

      bar.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
    });
  });
}

/**
 * Faz o botão de seta rolar o carrossel horizontalmente
 * por uma "página" de conteúdo a cada clique.
 */
function setupCarousels() {
  document.querySelectorAll('.carousel-wrapper').forEach((wrapper) => {
    const track = wrapper.querySelector(
      '.products-grid, .circles-grid, .content-cards-grid'
    );
    const button = wrapper.querySelector('.nav-arrow-btn');
    if (!track || !button) return;

    button.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth * 0.9, behavior: 'smooth' });
    });
  });
}

/**
 * Filtra os cards de produto visíveis pelo texto digitado na busca.
 */
function setupSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    document.querySelectorAll('.product-card').forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(term) ? '' : 'none';
    });
  });
}
