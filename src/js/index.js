const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

if (modoEscuroEstaAtivo) {
  imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/jojo arco.png");
}

botaoAlterarTema.addEventListener("click", () => {
  console.log("pensou que fosse um botão mas sou eu Dio!");

  body.classList.toggle("modo-escuro");

  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/jojo-icone2.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/jojo arco.png");
  }
});
