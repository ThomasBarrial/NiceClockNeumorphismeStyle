const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})


const couleur1 = document.querySelector('.whiteColorButton');
const couleur2 = document.querySelector('.blackColorButton');
const couleur3 = document.querySelector('.purpleColorButton');


couleur2.addEventListener('click', () => {
    document.querySelector('.productImg').src = "Images/Produit/TasseNoir.webp";  
});

couleur1.addEventListener('click', () => {
    document.querySelector('.productImg').src = "Images/Produit/TasseBlanche.webp";  
});








