const meubutao = document.querySelector('.btn-menu');
const menu = document.querySelector('.cont-menu');

meubutao.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Correção: usar '=' para atribuir valor
    } else {
        menu.style.display = "block"; // Correção: usar '=' para atribuir valor
    }
});
