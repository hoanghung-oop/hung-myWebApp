// product.js
const PRODUCTS_PER_PAGE = 12;

function renderHTMLPagination(currentPage = 1) {
  const cards = Array.from(document.querySelectorAll(".product-card"));
  const totalPages = Math.ceil(cards.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  cards.forEach((card, i) => {
    card.style.display = (i >= start && i < end) ? "flex" : "none";
  });

  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  if (totalPages <= 1) {
    pagination.innerHTML = '<button class="page-btn active">1</button>';
    return;
  }

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("page-btn");
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      renderHTMLPagination(i);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    pagination.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderHTMLPagination();
});
