// const caixas = [
//   document.querySelector(".caixa_um"),
//   document.querySelector(".caixa_dois"),
//   document.querySelector(".caixa_tres"),
//   document.querySelector(".caixa_quatro"),
// ];

// function trocarClasses(indice1, indice2) {
//   const caixa1 = caixas[indice1];
//   const caixa2 = caixas[indice2];

//   const tempClass = caixa1.className;
//   caixa1.className = caixa2.className;
//   caixa2.className = tempClass;
// }

// caixas.forEach((caixa, index) => {
//   caixa.addEventListener("click", () => {
//     if (index === 0) {
//       trocarClasses(0, 1);
//     } else if (index === 1) {
//       trocarClasses(1, 2);
//     } else if (index === 2) {
//       trocarClasses(2, 3);
//     } else if (index === 3) {
//       trocarClasses(3, 0);
//     }
//   });
// });


const caixaUm = document.createElement('div');
caixaUm.classList.add('caixa_um');

const caixaDois = document.createElement('div');
caixaDois.classList.add('caixa_dois');

const caixaTres = document.createElement('div');
caixaTres.classList.add('caixa_tres');

const caixaQuatro = document.createElement('div');
caixaQuatro.classList.add('caixa_quatro');

document.body.appendChild(caixaUm);
document.body.appendChild(caixaDois);
document.body.appendChild(caixaTres);
document.body.appendChild(caixaQuatro);


