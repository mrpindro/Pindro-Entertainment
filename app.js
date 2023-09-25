import navToFilm, { displayCastImg, displayCastName } from "./navToFilm.js";
import { showCategories } from "./showCategories.js";

// PAGE NAVIGATIONS FUNCTION
(function(){
    [...document.querySelectorAll('.control')].forEach(button =>{
        button.addEventListener('click', function(){
            document.querySelector('.activeBtn').classList.remove('activeBtn');
            this.classList.add('activeBtn');
            document.querySelector('.active').classList.remove('active');
            document.getElementById(button.dataset.id).classList.add('active');
        });
    })
    document.getElementById('toggle-color').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        document.querySelector('#toggle-color-span').classList.toggle('toggle-span');
    })
})()


    
// LOGIN AND SIGNUP MODAL start -------------------------------------
const closeLogReg = document.querySelectorAll('.closeLogReg');
const logRegForm = document.querySelector('.logRegForm');
const profIcons = document.querySelector('.profIcons');
const profLists = document.querySelector('.profLists');
const profListsChild = document.querySelectorAll('.mobile-nav');
const accountLogin = document.querySelector('.accountLogin');
const improvReg = document.querySelector('#improvReg');
const improvLog = document.querySelector('#improvLog');
const register = document.querySelector('.register');
const login = document.querySelector('.login');

profIcons.onclick = () => {
    profLists.classList.toggle("profList");
}

profListsChild.forEach(para => {
    para.addEventListener('click', () => {
        profLists.style.display = 'none';
        profLists.classList.toggle("profList");
    })
})

closeLogReg.forEach(closure => {
    closure.onclick = () => {
        logRegForm.style.display = "none";
    }
})


accountLogin.onclick = function () {
    logRegForm.style.display = "flex";
    register.style.display = "none";
    login.style.display = "flex";
}

improvReg.onclick = function () {
    login.style.display ="flex";
    register.style.display = "none";
}

improvLog.onclick = function () {
    register.style.display ="flex";
    login.style.display = "none";
}


// PLAY VIDEO AND DISPLAY VIDEOPLAYER 
const videos = document.querySelector('#videos');
const closeVideo = document.querySelector('#closeVideo');
const myVideo = document.querySelector('#myVideo');

closeVideo.addEventListener('click', ()=>{
    myVideo.style.display = "none";
    videos.pause();
})


const playVideo = (file) => {
    videos.src = file;
    myVideo.style.display = "block";
    videos.play();
}

// // HOME PAGE, PAGINATIONS AND SLIDERS BTNS 
const homeBillboard = document.querySelector('.home-billboard');
const paginationBtns = document.querySelectorAll('.pagination-btn');

const homeSlider = ()=>{

    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(0vw)";
        paginationBtns[0].style.background = "#555";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#46d29d";
    }, 0)    
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-100vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#555";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#46d29d";
    }, 8000)
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-200vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#555";
        paginationBtns[3].style.background = "#46d29d";
    }, 16000)
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-300vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 24000)
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-400vw)";
    }, 32000)
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-500vw)";
    }, 40000)
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-600vw)";
    }, 48000)
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-700vw)";
    }, 56000)
    setTimeout(()=>{
        homeBillboard.style.transform = "translateX(-800vw)";
    }, 64000)
}
setInterval(homeSlider, 72000);
homeSlider();

paginationBtns.forEach((slide, index)=>{
    slide.addEventListener('click', ()=>{
        // console.log('you clicked' + index);
        homeBillboard.style.transform = `translateX(${-100 * index}vw)`;
    })
});

        
// DISPLAY FILM CARD IN FILM PAGE --------------------------------------------
const filmPage = document.querySelector('.film-page');
const loader = document.querySelector('.loader');

// Get films from database 
window.onload = function() {

    // // HOME PAGE, PAGINATIONS AND SLIDERS BTNS 
    fetch(`https://pindro-entertainment-api.onrender.com/film`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const homePage = document.createElement('div');
                homePage.className = "home-page";
                const synopTitleEtc = document.createElement('div');
                synopTitleEtc.className = 'synop-title-etc';
                synopTitleEtc.innerHTML = `
                    <h2 class="title">
                    ${data[i].title}                              
                    </h2>
                    <p class="year">
                        Production: ${data[i].year}
                    </p>
                    <p class="description">
                        ${data[i].description}
                    </p>
                `
                const bgImg = document.createElement('div');
                bgImg.className = 'big-img';
                bgImg.innerHTML=`
                    <img src="${data[i].image}" alt="">
                `

                const playBtn = document.createElement('button');
                
                playBtn.className = 'duration-playfilm';
                playBtn.innerHTML = `
                    ${data[i].duration} <i class="fa-solid fa-play"></i>
                `

                synopTitleEtc.appendChild(playBtn);
                homePage.append(synopTitleEtc, bgImg)
                
                playBtn.onclick = () => {
                    playVideo(data[i].trailer);
                }

                homeBillboard.appendChild(homePage);
            }
        })
        .catch(err => console.log(err))
    ;

    // DISPLAY FILM CARD IN FILM PAGE --------------------------------------------
    fetch(`https://pindro-entertainment-api.onrender.com/film`)
        .then((res) => res.json())
        .then(data => {
            if (data) {
                loader.style.display = 'none';
            }
            // display card on film page 
            for (let i = 0; i < data?.length; i++) {
                const card = document.createElement('a');
                card.className = 'card';
                card.innerHTML += `
                    <div class="card-img-con">
                        <img src="${data[i].image}" alt="">
                    </div>
                    <div class="content">
                        <h3 class="title">${data[i].title}</h3>
                        <p class="year-rating">
                            ${data[i].year}
                            <span>${data[i].rating}
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </p>
                    </div>
                `
                filmPage.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(
                        data[i].trailer, data[i].image, data[i].title, data[i].description
                    );
                    displayCastImg(
                        data[i].cast_image1, data[i].cast_image2, 
                        data[i].cast_image3, data[i].cast_image4, data[i].cast_image5
                    );
                    displayCastName(
                        data[i].cast_names[0], data[i].cast_names[1], 
                        data[i].cast_names[2], data[i].cast_names[3], data[i].cast_names[4]
                    );
                })
            }

            // // SEARCH SERIES -----------------------------------------
            const mySearchMenu = document.querySelector('#mySearchMenu');
            const mySearch = document.querySelector('#mySearch');

            data.forEach(film => {
                const { image, title, year, rating, trailer, description } = film;
                const card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                    <img src=${image} alt="">
                    <div class="content">
                        <h2 class="title">${title}</h2>
                        <p class="year-rating">${year}
                            <span>${rating}
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </p>
                    </div>
                `

                mySearchMenu.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(
                        film.cast_image1, film.cast_image2, film.cast_image3,
                        film.cast_image4, film.cast_image5
                    );
                    displayCastName(
                        film.cast_names[0], film.cast_names[1], film.cast_names[2], 
                        film.cast_names[3], film.cast_names[4]
                    );
                    mySearchMenu.style.display = "none";
                    // trailer.addEventListener('click', film.playVideo)
                });

                mySearch.onkeyup = function(){
                    let filter, a;
                    a = mySearchMenu.getElementsByTagName('a');
                    filter = mySearch.value.toUpperCase();

                    // Loop through all list items, and hide those who don't match the search query 
                    for(let i = 0; i < a.length; i++){
                        let b = a[i].getElementsByClassName('content')[0];
                        let c = b.getElementsByTagName('h2')[0];

                        let textValue = c.textContent || c.innerText;

                        if(textValue.toUpperCase().indexOf(filter) > -1){
                            a[i].style.display = "";
                            mySearchMenu.style.display = "flex";
                        }
                        else {
                            a[i].style.display = "none";
                        }

                        if (mySearch.value == 0) {
                            mySearchMenu.style.display = "none";
                        }
                    }
                }
            })
        })
        .catch(err => console.log(err))
    ;

    // // SHOW CATEGORIES ------------------------------------
    // // SHOW CATEGORIES ------------------------------------
    showCategories();
}