let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];


left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})

let json_url = "movie.json";
fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let{name, date, sposter, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <div class="card">
                    <a href="monney heist.html"><img src="${sposter}" alt=""></a>
                    <div class="content">
                    <h6>${name}<h6>
                    <p>${date}</p>
            </div>
            `
            cards.appendChild(card);
        });

    });
// -----------------------------------------

let cardrs = document.getElementsByClassName('cardrs')[0];
let lefts_btn = document.getElementsByClassName('bi-chevron-lefts')[0];
let rights_btn = document.getElementsByClassName('bi-chevron-rights')[0];


lefts_btn.addEventListener('click', () => {
    cardrs.scrollLeft -= 140;
})
rights_btn.addEventListener('click', () => {
    cardrs.scrollLeft += 140;
})


let John_url = "John.json";
fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let{name, date, sposter, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <div class="card">
                    <a href="monney heist.html"><img src="${sposter}" alt=""></a>
                    <div class="content">
                    <h6>${name}<h6>
                    <p>${date}</p>
            </div>
            `
            cardrs.appendChild(card);
        });

    });

// --------------------------------------------------------------

let cardst = document.getElementsByClassName('cardst')[0];
let leftst_btn = document.getElementsByClassName('bi-chevron-leftst')[0];
let rightst_btn = document.getElementsByClassName('bi-chevron-rightst')[0];


leftst_btn.addEventListener('click', () => {
    cardst.scrollLeft -= 140;
})
rightst_btn.addEventListener('click', () => {
    cardst.scrollLeft += 140;
})


let John1_url = "John1.json";
fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let{name, date, sposter, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <div class="card">
                    <a href="monney heist.html"><img src="${sposter}" alt=""></a>
                    <div class="content">
                    <h6>${name}<h6>
                    <p>${date}</p>
            </div>
            `
            cardst.appendChild(card);
        });

    });

    // -----------------------------------------------

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}