const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal__img");
const modalBg = document.querySelector(".modal__bg");
const modalClose = document.querySelector(".modal__close");
const body = document.querySelector("body");

const galleryItems = document.querySelectorAll(".gallery__item");

galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        // Show Modal
        modal.classList.add("active");
        body.classList.add('u-overflow-hidden')
        // Set modal image source
        const imgSrc = event.target.getAttribute("src");
        modalImg.setAttribute("src", imgSrc);
    });
});

// Add click event listener to modal background
modal.addEventListener("click", (event) => {
    // if user clicked on background, close modal
    if(event.target === modal){
        modal.classList.remove("active");
        modalImg.classList.remove("active");
    }
});

// Add click event listener to close button
modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    modalImg.classList.remove("active");
    body.classList.remove('u-overflow-hidden')

});

modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
    modalImg.classList.remove("active");
    body.classList.remove('u-overflow-hidden')

});


