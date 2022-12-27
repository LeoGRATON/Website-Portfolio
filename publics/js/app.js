const myWork = [
    {
        categories: '#UI DESIGN',
        name: 'Woodup',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lectus sit amet est scelerisque elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lectus sit amet est scelerisque elementum.',
        url:'./integration/img-real-1.png'
    },
    {
        categories: '#BRANDING',
        name: 'Dodai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lectus sit amet est scelerisque elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url:'./integration/realisations-dodai.png'
    },
    {
        categories: '#UI DESIGN',
        name: 'Atlanti craft',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lectus sit amet est scelerisque elementum. Lorem ipsum dolor sit.',
        url:'./integration/realisations-atlanticraft.png'
    },
]

const app = {
    toggleMenu: () => {
        const getNav = document.querySelector('.container__nav');
        const getOverlay = document.querySelector('.container__nav-overlay');
    
        if(getNav.classList.contains('active')){
            getOverlay.classList.remove('active');
            getNav.classList.remove('active');
        }else{
            getOverlay.classList.add('active');
            getNav.classList.add('active');
        }
    },
    changeSlide: (sens) => {
        numero = numero + sens
        console.log(sens);
        if (numero < 0){
          numero = myWork.length - 1;
        }
        if (numero > myWork.length - 1){
          numero = 0;
        }
        const imageRealisation = document.querySelector('.container__realisations-global-left-img');
        const titleRealisation = document.querySelector('.title-realisations');
        const categoriesRealisation = document.querySelector('.categories');
        const textRealisation = document.querySelector('.container__realisations-global-right-text');
        imageRealisation.style.background = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + myWork[numero].url + ')';
        titleRealisation.innerHTML = myWork[numero].name;
        categoriesRealisation.innerHTML = myWork[numero].categories;
        textRealisation.innerHTML = myWork[numero].description;
    },
    init: () => {
        app.changeSlide(0);
    }
}
var numero = 0;
app.init();