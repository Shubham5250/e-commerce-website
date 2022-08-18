const slideImage = document.querySelectorAll (".slide-images");
const slidesContainer = document.querySelector(".images-slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");
let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;


//______________IMAGE SLIDER________________________

function init(){

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });
    slideImage[0].classList.add("active");

    createNavigationDots();
}

init();

//_____________SLIDER DOTS__________________________________


function createNavigationDots(){
    for(let i = 0; i< numberOfImages; i++){
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }
    navigationDots.children[0].classList.add("active");

}


//________________SLIDER BUTTONS FUNCTIONING_________________________

nextBtn.addEventListener("click", ()=>{
    if(currentSlide >= numberOfImages - 1){
        goToSlide(0);
        currentSlide = 0;
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);


});



prevBtn.addEventListener("click", ()=>{
    if(currentSlide <= 0){
        goToSlide(numberOfImages - 1);
        currentSlide = numberOfImages - 1;
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);


});

function goToSlide(slideNumber){
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    setActiveClass();
}

function setActiveClass(){

    //set active class for slide image

    let currentActive = document.querySelector(".slide-images.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    //set active class for navigation dots

    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");


}


//__________________DARK MODE__________________

var moon = document.getElementById("moon");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}



let localData = localStorage.getItem("theme");



if(localData == "light"){
    moon.src = "images/moon.png";
    document.body.classList.remove("dark-theme")
}else if(localData == "dark"){
    moon.src = "images/sun.png"
    document.body.classList.add("dark-theme");
}




moon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.src = "images/sun.png";
        localStorage.setItem("theme", "dark");
    }
    else{
        moon.src = "images/moon.png"
        localStorage.setItem("theme", "light");
    }
}


