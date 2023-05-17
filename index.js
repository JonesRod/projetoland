var setaesquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("card1")
var Samantha=  window.document.getElementById("card2")
var Bruna = window.document.getElementById("card3")
var setadireita = window.document.getElementById("seta-direita")

function rolarparadireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaesquerda.style = "display:flex"
    setadireita.style = "display:none"
}
function rolarparaesquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}