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

const champs = [
  {
    champ: 0,
    nome: 'Zeri',
    rota: 'Atiradora',
    imagem: 'Assets/Champs/Zeri/Zeri.webp',
    video: 'Assets/Champs/Zeri/Q1.webm'
  },
  {
    champ: 1,
    nome: 'Akshan',
    rota: 'Atirador',
    imagem: 'Assets/Champs/Akshan/Akshan.png',
    video: 'Assets/Champs/Akshan/Q1.webm'
  },
  {
    champ: 2,
    nome: 'Vex',
    rota: 'Maga',
    imagem: 'Assets/Champs/Vex/vex.png',
    video: 'Assets/Champs/Vex/Q1.webm'
  },
];

elementoBTN_left.addEventListener('click', () => {
  if (elementoBTN_left.value === "0") {    
    elementoNOME.innerText = champs[2].nome;
    elementoROTA.innerText = champs[2].rota;
    elementoIMAGEM.src = champs[2].imagem;
    elementoVIDEO.src = champs[2].video;
    elementoBTN_left.value = '2';

  } else if(elementoBTN_left.value === "2"){    
    elementoNOME.innerText = champs[1].nome;
    elementoROTA.innerText = champs[1].rota;
    elementoIMAGEM.src = champs[1].imagem;
    elementoVIDEO.src = champs[1].video;
    elementoBTN_left.value = '1';

  } else {
    elementoNOME.innerText = champs[0].nome;
    elementoROTA.innerText = champs[0].rota;
    elementoIMAGEM.src = champs[0].imagem;
    elementoVIDEO.src = champs[0].video;
    elementoBTN_left.value = '0';
  }  
});

elementoBTN_right.addEventListener('click', () => {
  if (elementoBTN_left.value === "0") {    
    elementoNOME.innerText = champs[1].nome;
    elementoROTA.innerText = champs[1].rota;
    elementoIMAGEM.src = champs[1].imagem;
    elementoVIDEO.src = champs[1].video;
    elementoBTN_left.value = '1';

  } else if(elementoBTN_left.value === "1"){
    
    elementoNOME.innerText = champs[2].nome;
    elementoROTA.innerText = champs[2].rota;
    elementoIMAGEM.src = champs[2].imagem;
    elementoVIDEO.src = champs[2].video;
    elementoBTN_left.value = '2';

  } else {
    elementoNOME.innerText = champs[0].nome;
    elementoROTA.innerText = champs[0].rota;
    elementoIMAGEM.src = champs[0].imagem;
    elementoVIDEO.src = champs[0].video;
    elementoBTN_left.value = '0';
  }  
});

elementoKEY_Q.addEventListener('click', () => {
  if(elementoNOME.innerText == champs[0].nome){
    elementoVIDEO.src = 'Assets/Champs/Zeri/Q1.webm'

  } else if (elementoNOME.innerText == champs[1].nome){
    elementoVIDEO.src = 'Assets/Champs/Akshan/Q1.webm'

  } else if (elementoNOME.innerText == champs[2].nome){
    elementoVIDEO.src = 'Assets/Champs/Vex/Q1.webm'
  }

})

elementoKEY_W.addEventListener('click', () => {
  if(elementoNOME.innerText == champs[0].nome){
    elementoVIDEO.src = 'Assets/Champs/Zeri/W1.webm'

  } else if (elementoNOME.innerText == champs[1].nome){
    elementoVIDEO.src = 'Assets/Champs/Akshan/W1.webm'

  } else if (elementoNOME.innerText == champs[2].nome){
    elementoVIDEO.src = 'Assets/Champs/Vex/W1.webm'
  }

})

elementoKEY_E.addEventListener('click', () => {
  if(elementoNOME.innerText == champs[0].nome){
    elementoVIDEO.src = 'Assets/Champs/Zeri/E1.webm'

  } else if (elementoNOME.innerText == champs[1].nome){
    elementoVIDEO.src = 'Assets/Champs/Akshan/E1.webm'

  } else if (elementoNOME.innerText == champs[2].nome){
    elementoVIDEO.src = 'Assets/Champs/Vex/E1.webm'
  }

})

elementoKEY_R.addEventListener('click', () => {
  if(elementoNOME.innerText == champs[0].nome){
    elementoVIDEO.src = 'Assets/Champs/Zeri/R1.webm'

  } else if (elementoNOME.innerText == champs[1].nome){
    elementoVIDEO.src = 'Assets/Champs/Akshan/R1.webm'

  } else if (elementoNOME.innerText == champs[2].nome){
    elementoVIDEO.src = 'Assets/Champs/Vex/R1.webm'
  }

})
