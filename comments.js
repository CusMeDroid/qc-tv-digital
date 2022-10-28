var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var qik;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (qik = 0; qik < slides.length; qik++) {
      slides[qik].style.display = 'none';  
  }
  slides[slideIndex-1].style.display = 'block';
}

var slideIndex2 = 1;
showSlides2();
  
function showSlides2() {
    var qik;
    var slides = document.getElementsByClassName('mySlides');
    for (qik = 0; qik < slides.length; qik++) {
      slides[qik].style.display = 'none';  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    
    slides[slideIndex2-1].style.display = 'block';  
    setTimeout(showSlides2, 5000); // Change image every 5 seconds
}

let kmurl = 'https://docs.google.com/spreadsheets/d/166qN52LTkPiIjhktPsQMr2HAc5LziQsnsTJhWV4GTd0/gviz/tq?';
const kmn = document.querySelector('.kmn');
const kmquery = encodeURIComponent('Select B,C,D');
console.log(kmquery);
kmurl = kmurl + '&tq=' + kmquery;

fetch(kmurl)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('class', 'slideshow-container');
    data.table.rows.forEach((main)=>{
    kmn.append(container);
    console.log(main.c[0]);
    const nama = main.c[0];
    console.log(main.c[1]);
    const komen = main.c[1];
    console.log(main.c[2]);
    const merk = main.c[2];
    const fullName = nama.v;
    const fullKomen = komen.v;
    const fullMerk = merk.v;
    const lum = document.createElement('div');
    const q = document.createElement('q');
    const p = document.createElement('p');
    lum.setAttribute('class', 'mySlides');
    q.innerHTML = fullKomen;
    p.setAttribute('class', 'author');
    p.innerHTML = fullName + ', ' + fullMerk;

    container.appendChild(lum);
    lum.appendChild(q);
    lum.appendChild(p);
  })
  console.log(data);
})
