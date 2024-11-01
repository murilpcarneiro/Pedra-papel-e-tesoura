document.addEventListener("DOMContentLoaded", () => {
  let escolha;

  document.getElementById("pedra").addEventListener("click", () => {
    escolha = 1;
    verificarResultado(escolha);
  });

  document.getElementById("papel").addEventListener("click", () => {
    escolha = 2;
    verificarResultado(escolha);
  });

  document.getElementById("tesoura").addEventListener("click", () => {
    escolha = 3;
    verificarResultado(escolha);
  });

  function verificarResultado(escolhaJogador) {
    const escolhaComputador = Math.floor(Math.random() * 3) + 1;
    let resultado;

    if (escolhaJogador === escolhaComputador) {
      resultado = "Empate!";
    } else if (
      (escolhaJogador === 1 && escolhaComputador === 3) ||
      (escolhaJogador === 2 && escolhaComputador === 1) ||
      (escolhaJogador === 3 && escolhaComputador === 2)
    ) {
      resultado = "Você ganhou!";
    } else {
      resultado = "Você perdeu!";
    }

    const escolhas = ["Pedra", "Papel", "Tesoura"];
    const escolhaJogadorTexto = escolhas[escolhaJogador - 1];
    const escolhaComputadorTexto = escolhas[escolhaComputador - 1];

    document.getElementById("jogador").innerHTML = escolhaJogadorTexto;
    document.getElementById("computador").innerHTML = escolhaComputadorTexto;
    document.getElementById("resultado").innerHTML = resultado;
  }
});