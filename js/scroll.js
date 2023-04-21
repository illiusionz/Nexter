const btn = document.querySelector('.header__btn');
const sectionHomes = document.querySelector('.homes');

//add a click event listener to the button
btn.addEventListener('click', () => {
    // scroll to the section using smooth behavior
    sectionHomes.scrollIntoView({behavior: 'smooth'});
});