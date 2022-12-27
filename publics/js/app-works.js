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


function OverWorks(){
    const getDivWorks = document.querySelector('.container__page-work-card-display');
    console.log(getDivWorks);
    if(getDivWorks.classList.contains('active')){
        getDivWorks.classList.remove('active');
    }else{
        getDivWorks.classList.add('active');
    }
}