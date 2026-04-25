 const botao = document.getElementById("btn-tema");

  if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
    botao.textContent = "Modo Escuro";
  }

  botao.addEventListener("click", () => {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
      botao.textContent = "Modo Escuro";
      localStorage.setItem("tema", "claro");
    } else {
      botao.textContent = "Modo Claro";
      localStorage.setItem("tema", "escuro");
    }
  });
