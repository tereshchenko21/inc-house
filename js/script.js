document.querySelector('.header__burger').addEventListener('click', ()=>{
    document.querySelector('.menu__list').classList.toggle('active');
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
})