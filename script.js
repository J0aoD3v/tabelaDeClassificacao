var lightningMcQueen = {
  // (chave): (valor)
  nome: "Lightning McQueen",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
};
var cruzRamirez = {
  nome: "Cruz Ramirez",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

lightningMcQueen.pontos = calculaPontos(lightningMcQueen);
cruzRamirez.pontos = calculaPontos(cruzRamirez);

var listaJogadores = [lightningMcQueen, cruzRamirez];

function exibeNaTela(listaJogadores) {
  var elemento = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    elemento += "<br>";
    elemento += "<tr><td>" + listaJogadores[i].nome + "</td>";
    elemento += "<td>" + listaJogadores[i].vitorias + "</td>";
    elemento += "<td>" + listaJogadores[i].empates + "</td>";
    elemento += "<td>" + listaJogadores[i].derrotas + "</td>";
    elemento += "<td>" + listaJogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeNaTela(listaJogadores);

function adicionarVitoria(i) {
  var jogador = listaJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeNaTela(listaJogadores);
}

function adicionarEmpate(i) {
  var jogador = listaJogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeNaTela(listaJogadores);
}

function adicionarDerrota(i) {
  var jogador = listaJogadores[i];
  jogador.derrotas++;
  exibeNaTela(listaJogadores);
}

//botoes
function adicionaJogador() {
  var formato = {
    nome: document.getElementById("adicionaNome").value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  listaJogadores.push(formato);
  exibeNaTela(listaJogadores);
  limpa();
}

function zerarPontos() {
  for (var i = 0; i < listaJogadores.length; i++) {
    listaJogadores[i].vitorias = 0;
    listaJogadores[i].empates = 0;
    listaJogadores[i].derrotas = 0;
    listaJogadores[i].pontos = 0;
  }
  exibeNaTela(listaJogadores);
}

function resetar() {
  listaJogadores = [];
  exibeNaTela(listaJogadores);
}

function limpa() {
  var input = document.querySelector("input");
  input.value = "";
  input.focus();
}