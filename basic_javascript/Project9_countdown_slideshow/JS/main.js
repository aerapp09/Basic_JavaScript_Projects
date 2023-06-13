let slideIndex = 1; //defining variable
showSlides(slideIndex); //function of variable

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex +=n); //function taking the valiriable slide index and adding n variable to it
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);//function that takes show slides function with slide index as n
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); //defining slides variable to element with id
    let dots = document.getElementsByClassName("dot"); //defining dots bariable to element with id
    if (n > slides.length) {slideIndex = 1} //flow if n is greater than length to change slideindex to 1
    if (n < 1) {slideIndex = slides.length} //if n less than one make variables equal
    for (i = 0; i < slides.length; i++) { //flow for i is 0 i is less than variable and incrementing i by one
        slides[i].style.display = "none"; //then changing i display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}