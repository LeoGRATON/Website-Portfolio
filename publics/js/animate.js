const ratio = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-right-visible')
            entry.target.classList.add('reveal-left-visible')
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal-right').forEach(function (r) {
    observer.observe(r)
})
document.querySelectorAll('.reveal-left').forEach(function (r) {
    observer.observe(r)
})

const divRealisations = document.querySelector('.container__realisations-global-right');

window.addEventListener('scroll', () => {
    if(window.scrollY > 1050){
        divRealisations.classList.add('realisations-visible');
    }
});