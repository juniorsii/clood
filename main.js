import "./assets/css/tailus.css";

const mainHeader = document.querySelector("#header");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  mainHeader.dataset.state = mainHeader.dataset.state === "active" ? "closed" : "active";
})


// Seleciona os botões das tabs e os itens da galeria
const tabButtons = document.querySelectorAll('.tab-btn');
const imageItems = document.querySelectorAll('.image-item');

// Adiciona o evento de clique a cada botão
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove a classe "active" de todos os botões
    tabButtons.forEach((btn) => btn.classList.remove('underline','active'));
    button.classList.add('underline', 'active');

    // Filtra os itens da galeria com base na categoria
    const category = button.dataset.category;
    imageItems.forEach((item) => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});