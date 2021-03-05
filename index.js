const lightMode = document.getElementById('light-mode');
const navbar = document.querySelector('.navbar');
const returnTop = document.getElementById('returnTop');
const openClassrooms = document.querySelector('.openclassrooms');


// Action à paramétrer 
lightMode.addEventListener('change', () => {
    document.body.classList.toggle('light');
})


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

//Apparition des Cours Openclassrooms
openClassrooms.addEventListener('click', (event)=> {
    openClassrooms.classList.toggle('apprentissage');
   event.preventDefault();
})






