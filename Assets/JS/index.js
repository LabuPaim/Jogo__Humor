const elementoNOME = document.getElementById('nome');
const elementoROTA = document.getElementById('rota');
const elementoIMAGEM = document.getElementById('imagem');
const elementoVIDEO = document.getElementById('video');
let elementoBTN_left = document.getElementById('round1');
let elementoBTN_right = document.getElementById('round2');

const elementoKEY_Q = document.getElementById('key_q');
const elementoKEY_W = document.getElementById('key_w');
const elementoKEY_E = document.getElementById('key_e');
const elementoKEY_R = document.getElementById('key_r');

let elementoShare_id = document.getElementById('share_id');
let elementoOne_id = document.getElementById('one_id');
let elementoTwo_id = document.getElementById('two_id');
let elementoThree_id = document.getElementById('three_id');

const champs = [
  {
    champ: '0',
    nome: 'Zeri',
    rota: 'Atiradora',
    imagem: 'Assets/Champs/Zeri/Zeri.webp',
    video: 'Assets/Champs/Zeri/Q1.webm',
  },
  {
    champ: '1',
    nome: 'Akshan',
    rota: 'Atirador',
    imagem: 'Assets/Champs/Akshan/Akshan.png',
    video: 'Assets/Champs/Akshan/Q1.webm',
  },
  {
    champ: '2',
    nome: 'Vex',
    rota: 'Maga',
    imagem: 'Assets/Champs/Vex/vex.png',
    video: 'Assets/Champs/Vex/Q1.webm',
  },
];

elementoBTN_left.addEventListener('click', () => {
  let posicao = elementoBTN_left.value - 1;
  if (posicao > -1) {
    elementoNOME.innerText = champs[posicao].nome;
    elementoROTA.innerText = champs[posicao].rota;
    elementoIMAGEM.src = champs[posicao].imagem;
    elementoVIDEO.src = champs[posicao].video;
    elementoBTN_left.value = posicao;
  } else {
    posicao = champs.length - 1;
    elementoNOME.innerText = champs[posicao].nome;
    elementoROTA.innerText = champs[posicao].rota;
    elementoIMAGEM.src = champs[posicao].imagem;
    elementoVIDEO.src = champs[posicao].video;
    elementoBTN_left.value = posicao;
  }
});

elementoBTN_right.addEventListener('click', () => {
  let posicao = parseInt(elementoBTN_left.value) + 1;

  if (posicao >= champs.length) {
    posicao = 0;
    elementoNOME.innerText = champs[posicao].nome;
    elementoROTA.innerText = champs[posicao].rota;
    elementoIMAGEM.src = champs[posicao].imagem;
    elementoVIDEO.src = champs[posicao].video;
    elementoBTN_left.value = posicao;
  } else {
    elementoNOME.innerText = champs[posicao].nome;
    elementoROTA.innerText = champs[posicao].rota;
    elementoIMAGEM.src = champs[posicao].imagem;
    elementoVIDEO.src = champs[posicao].video;
    elementoBTN_left.value = posicao;
  }
});

document.addEventListener('keydown', event => {
  const tecla = event.keyCode;
  let posicao = elementoBTN_left.value - 1;
  if (tecla == 37) {
    if (posicao > -1) {
      elementoNOME.innerText = champs[posicao].nome;
      elementoROTA.innerText = champs[posicao].rota;
      elementoIMAGEM.src = champs[posicao].imagem;
      elementoVIDEO.src = champs[posicao].video;
      elementoBTN_left.value = posicao;
    } else {
      posicao = champs.length - 1;
      elementoNOME.innerText = champs[posicao].nome;
      elementoROTA.innerText = champs[posicao].rota;
      elementoIMAGEM.src = champs[posicao].imagem;
      elementoVIDEO.src = champs[posicao].video;
      elementoBTN_left.value = posicao;
    }
  }
});

document.addEventListener('keydown', event => {
  const tecla = event.keyCode;
  let posicao = parseInt(elementoBTN_left.value) + 1;
  if (tecla == 39) {
    if (posicao >= champs.length) {
      posicao = 0;
      elementoNOME.innerText = champs[posicao].nome;
      elementoROTA.innerText = champs[posicao].rota;
      elementoIMAGEM.src = champs[posicao].imagem;
      elementoVIDEO.src = champs[posicao].video;
      elementoBTN_left.value = posicao;
    } else {
      elementoNOME.innerText = champs[posicao].nome;
      elementoROTA.innerText = champs[posicao].rota;
      elementoIMAGEM.src = champs[posicao].imagem;
      elementoVIDEO.src = champs[posicao].video;
      elementoBTN_left.value = posicao;
    }
  }
});

elementoKEY_Q.addEventListener('click', () => {
  for (ch of champs) {
    if (elementoNOME.innerText == ch.nome) {
      elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/Q1.webm';
    }
  }
});

elementoKEY_W.addEventListener('click', () => {
  for (ch of champs) {
    if (elementoNOME.innerText == ch.nome) {
      elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/W1.webm';
    }
  }
});

elementoKEY_E.addEventListener('click', () => {
  for (ch of champs) {
    if (elementoNOME.innerText == ch.nome) {
      elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/E1.webm';
    }
  }
});

elementoKEY_R.addEventListener('click', () => {
  for (ch of champs) {
    if (elementoNOME.innerText == ch.nome) {
      elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/R1.webm';
    }
  }
});


document.addEventListener('keydown', event => {
  const tecla = event.keyCode;
  for (ch of champs) {
    if (elementoNOME.innerText == ch.nome) {
      if (tecla == 81) {
        elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/Q1.webm';
      } else if (tecla == 87) {
        elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/W1.webm';
      } else if (tecla == 82) {
        elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/R1.webm';
      } else if (tecla == 69) {
        elementoVIDEO.src = 'Assets/Champs/' + ch.nome + '/E1.webm';
      }
    }
  }
});
