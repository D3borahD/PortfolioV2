const navbar = document.querySelector('.navbar');
const returnTop = document.getElementById('returnTop');

//Apparition de la NavBar format Mobile
navbar.addEventListener('click', ()=> {
    navbar.classList.toggle('visible');
})

//boutton de retour en haut de page
window.addEventListener('scroll', function(){
    const scroll = this.document.documentElement.scrollTop;

    if (scroll < 50){
        returnTop.style.opacity = '0';
    }else {
        returnTop.style.opacity = '1';
    }
})


//boutton de retour en haut de page mode PC
