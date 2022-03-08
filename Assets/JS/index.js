const elementoNome = document.getElementById('nome');
const elementoSituacao = document.getElementById('situacao');
const elementoAlterarImagem = document.getElementById('container');
let elementoBtn = document.getElementById('alterar');

/* Adiciona o evento de click no elementoBtn e executa a função (arrow function) */
elementoBtn.addEventListener('click', () => {
  if (elementoBtn.value == 'primeiro') {
    elementoAlterarImagem.style.backgroundImage = "url('../Image/02.jpg')";
    elementoNome.innerText = 'Dr. Banner';
    elementoSituacao.innerText = 'Sério';
    elementoBtn.value = 'segundo';
  } else if (elementoBtn.value == 'segundo') {
    elementoAlterarImagem.style.backgroundImage = 'url("../Image/03.png")';
    elementoNome.innerText = 'Dr. Banner';
    elementoSituacao.innerText = 'Pensativo';
    elementoBtn.value = 'terceiro';
  } else if (elementoBtn.value == 'terceiro') {
    elementoAlterarImagem.style.backgroundImage = 'url("../Image/04.png")';
    elementoNome.innerText = 'Dr. Banner';
    elementoSituacao.innerText = 'Geek';
    elementoBtn.value = 'quarto';
  } else if (elementoBtn.value == 'quarto') {
    elementoAlterarImagem.style.backgroundImage = 'url("../Image/05.jpg")';
    elementoNome.innerText = 'Dr. Banner';
    elementoSituacao.innerText = 'Pistola geek';
    elementoBtn.value = 'quinto';
  } else if (elementoBtn.value == 'quinto') {
    elementoAlterarImagem.style.backgroundImage = 'url("../Image/06.jpg")';
    elementoNome.innerText = 'Dr. Hulk';
    elementoSituacao.innerText = 'Geek';
    elementoBtn.value = 'sexto';
  } else if (elementoBtn.value == 'sexto') {
    elementoAlterarImagem.style.backgroundImage = 'url("../Image/07.jpg")';
    elementoNome.innerText = 'Hulk';
    elementoSituacao.innerText = 'Pistola';
    elementoBtn.value = 'setimo';
  } else if (elementoBtn.value == 'setimo') {
    elementoAlterarImagem.style.backgroundImage = 'url("../Image/08.jpg")';
    elementoNome.innerText = 'Hulk';
    elementoSituacao.innerText = 'CORREEEEEEEE';
    elementoBtn.value = 'oitavo';
  } else {
    elementoAlterarImagem.style.backgroundImage = 'url("../Image/01.jpg")';
    elementoNome.innerText = 'Dr. Banner';
    elementoSituacao.innerText = 'Feliz';
    elementoBtn.value = 'primeiro';
  }
});
