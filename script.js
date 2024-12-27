
const styleCaixaUm =
  "position: absolute;margin-left: 450px; margin-top: 300px;";
const styleCaixaDois =
  " position: absolute;margin-left: 300px;margin-top: 200px;";
const styleCaixaTres =
  " position: absolute;margin-left: 150px;margin-top: 100px;";
const styleCaixaQuatro = " ";

const fundoUm = "red";
const fundoDois = "yellow";
const fundoTres = "blue";
const fundoQuatro = "green";

const caixaUm = document.createElement("div");
caixaUm.classList.add("caixa_um");
caixaUm.style.cssText = styleCaixaUm;
caixaUm.style.backgroundColor = fundoUm;

const caixaDois = document.createElement("div");
caixaDois.classList.add("caixa_dois");
caixaDois.style.cssText = styleCaixaDois;
caixaDois.style.backgroundColor = fundoDois;


const caixaTres = document.createElement("div");
caixaTres.classList.add("caixa_tres");
caixaTres.style.cssText = styleCaixaTres;
caixaTres.style.backgroundColor = fundoTres;


const caixaQuatro = document.createElement("div");
caixaQuatro.classList.add("caixa_quatro");
caixaQuatro.style.cssText = styleCaixaQuatro;
caixaQuatro.style.backgroundColor = fundoQuatro;


document.body.appendChild(caixaUm);
document.body.appendChild(caixaDois);
document.body.appendChild(caixaTres);
document.body.appendChild(caixaQuatro);

function identificarCaixaClicada(event) {
  const caixaClicada = event.target;
    // console.log(`Você clicou na ${caixaClicada.classList[0]}`);

  if (caixaClicada === caixaUm) {
    const temporarioStyle = caixaUm.style.backgroundColor;
    caixaUm.style.backgroundColor = caixaDois.style.backgroundColor;
    caixaDois.style.backgroundColor = temporarioStyle;
  } else if (caixaClicada === caixaDois) {
    const temporarioStyle = caixaDois.style.backgroundColor;
    caixaDois.style.backgroundColor = caixaTres.style.backgroundColor;
    caixaTres.style.backgroundColor = temporarioStyle;
  } else if (caixaClicada === caixaTres) {
    const temporarioStyle = caixaTres.style.backgroundColor;
    caixaTres.style.backgroundColor = caixaQuatro.style.backgroundColor;
    caixaQuatro.style.backgroundColor = temporarioStyle;
  } else if (caixaClicada === caixaQuatro) {
    const temporarioStyle = caixaQuatro.style.backgroundColor;
    caixaQuatro.style.backgroundColor = caixaUm.style.backgroundColor;
    caixaUm.style.backgroundColor = temporarioStyle;
  }
}

const caixas = [caixaUm, caixaDois, caixaTres, caixaQuatro];
caixas.forEach((caixa) => {
  caixa.addEventListener("click", identificarCaixaClicada);
});
