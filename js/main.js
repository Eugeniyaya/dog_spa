"use strict"
const tabBtn = document.querySelectorAll(".tabs__item");
const tabsItems = document.querySelectorAll(".tabs__block");


tabBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        tabBtn.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItems.forEach(function(item){
            item.classList.remove("shown");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("shown");
    });
});

let burger = document.querySelector(".header-top__bg");
let close = document.querySelector(".close-button");
let menu = document.querySelector(".nav");

burger.onclick = function(evt) {
    evt.preventDefault();
    menu.classList.add('active');    
    close.classList.remove('visually-hidden');    
}

close.onclick = function () {
    menu.classList.remove('active');
    close.classList.add('visually-hidden');    
}

const time = 5000;
const step = 1;
let counter = document.getElementById("counter");

function counterNumTh (num, elem, step) {
    let сount = document.querySelector('#' + elem);
    let n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        сount.innerHTML = n;
    }, t )
}

function counterNumUn (num, elem, step) {
    let сount = document.querySelector('#' + elem);
    let n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        сount.innerHTML = n;
    }, t )
}
    
       
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
            if(entry.isIntersecting) {
                setTimeout(function () {
                counterNumUn(700, 'counterUnits', 20);
                counterNumTh ( 5, 'counterThausands', 1);
                },1000)
            }
        })
});
let c = document.querySelector('.stat__count');
observer.observe(c);
