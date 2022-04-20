const navSlide = ()=>{
    const extension = document.querySelector('.extension');
    const nav = document.querySelector('.homepage');
    const homepage = document.querySelectorAll('.homepage li');

    extension.addEventListener('click', ()=> {
        nav.classList.toggle('homepage-active');
   
    });

    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1}s';
    });
    extension.classList.toggle('toggle');
}

navSlide();