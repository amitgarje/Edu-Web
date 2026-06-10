//change the nav bar color

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 100)
})


//show /hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');


        // icon is change to -
         const icons =faq.querySelector('.faq__icon i');
         if(icons.className==='uil uil-plus-circle'){
            icons.className= "uil uil-minus"
         }
         else{
            icons.className= "uil uil-plus-circle"
         }
    })
})


//menu bar button workflow

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", closeNav);
