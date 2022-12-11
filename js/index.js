let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;

    if (header && scrollPos > 10) {
        header.classList.add("header--active");
    } else {
        header.classList.remove("header--active");
    }
});

$(".menu a").on("click", function () {

    let href = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,
        easing: "linear"
    });

    return false;
});

const more = document.querySelector(".more")
const wrap = document.querySelector(".what__wrapper")
const hide = document.querySelectorAll(".hide")

more.addEventListener('click', function (){
    more.classList.add("nomore");
    wrap.classList.add("what__wrapper-active");
    hide.forEach(el => {
        el.classList.add("visible");
    })
})

const burger = document.querySelector(".menu__burger")
const menuTel = document.querySelector(".menu__tel")
const footerButton = document.querySelector(".footer__button")

burger.addEventListener('click', function (){
    menuTel.classList.toggle("menu__tel--active")
    burger.classList.toggle("menu__burger--close")
})

footerButton.addEventListener('click', function (){
    menuTel.classList.toggle("menu__tel--active")
    burger.classList.toggle("menu__burger--close")
})

const linkin = document.querySelectorAll(".linkin")
linkin.forEach(function (removingTel) {
    removingTel.addEventListener('click', function () {
        menuTel.classList.remove("menu__tel--active")
    })
})
