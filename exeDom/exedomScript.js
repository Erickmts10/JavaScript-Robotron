const lista = document.querySelector("ul");

document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostra");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});
