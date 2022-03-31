const imgbx = document.querySelector('.imgbx');
const slides = imgbx.getElementsByTagName('img');
var i = 0;
function nextslide() {
    slides[i].classList.remove('active')
    i=(i+1)%slides.length;
    slides[i].classList.add('active');
}
function prevslide() {
    slides[i].classList.remove('active')
    i=(i-1+slides.length)%slides.length;
    slides[i].classList.add('active');
}

const contentbx = document.querySelector('.contentbx');
const slidetext = contentbx.getElementsByTagName('div');
var j = 0;
function nextslidetext() {
    slidetext[j].classList.remove('active')
    j=(j+1)%slidetext.length;
    slidetext[j].classList.add('active');
}
function prevslidetext() {
    slidetext[j].classList.remove('active')
    j=(j-1+slidetext.length)%slidetext.length;
    slidetext[j].classList.add('active');
}