import { films } from "./films/filmObject.js";
import { series } from "./series/seriesObject.js";
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


// Display search on minimum screen 
const searchbarIcon = document.querySelector('.search-bar-icon');
const searchIcon = document.querySelector('#search-icon');
const searchBar = document.querySelector('.searchBar');

searchbarIcon.onclick = function(){
    searchBar.style.display = 'flex';
    searchbarIcon.style.display = 'none';
}

searchIcon.addEventListener('click', () => {
    if (window.innerWidth >= 915) {
        searchBar.style.display = 'flex';
        
    } else {
        searchbarIcon.style.display = 'unset';
        searchBar.style.display = 'none';
    }
})


    
// LOGIN AND SIGNUP MODAL start -------------------------------------
const closeLogReg = document.querySelectorAll('.closeLogReg');
const logRegForm = document.querySelector('.logRegForm');
const profIcons = document.querySelector('.profIcons');
const profLists = document.querySelector('.profLists');
const accountLogin = document.querySelector('.accountLogin');
const improvReg = document.querySelector('#improvReg');
const improvLog = document.querySelector('#improvLog');
const register = document.querySelector('.register');
const login = document.querySelector('.login');

profIcons.onclick = () => {
    profLists.classList.toggle("profList");
}

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
// LOGIN AND SIGNUP MODAL End -------------------------------------

// PLAY VIDEO AND DISPLAY VIDEOPLAYER 
const bgVideos = document.querySelector('#bgVideos');
const seasonBgVideos = document.querySelector('#seasonBgVideos');

const videos = document.querySelector('#videos');
const closeVideo = document.querySelector('#closeVideo');
const myVideo = document.querySelector('#myVideo');

closeVideo.addEventListener('click', ()=>{
    myVideo.style.display = "none";
    videos.pause();
})

// FILM SYNOPSIS PAGE 
const synopImg = document.querySelector('#synopImg');
const titles = document.querySelector('#title');



// PLAY TRAILER
const trailer = document.querySelector('#trailer');
const seasonTrailer = document.querySelector('#seasonTrailer');

trailer.addEventListener('click', ()=>{
    videos.play();
    myVideo.style.display = "block";
})

const playVideo = (file) => {
    videos.src = file;
    myVideo.style.display = "block";
    videos.play();
}

// HOME PAGE, PAGINATIONS AND SLIDERS BTNS 
const homeContainer = document.querySelector('.homeContainer');
const paginationBtns = document.querySelectorAll('#paginationBtn');

window.addEventListener('load', () => {
    const homeBillboard = films.filter(film => {
        return film.billboard === "yes";
    });

    homeBillboard.map((billboard) => {
        const { title, duration, image, video, description } = billboard;
        const home1 = document.createElement('div');
        home1.className = "home1";
        const bgImg = document.createElement('div');
        bgImg.className = "bgImg";
        const img = document.createElement('img');
        img.src = image;
        const playBtn = document.createElement('button');
        playBtn.className = "playBtn";
        playBtn.textContent = "Watch"
        const i = document.createElement('i');
        i.className = "fa-sharp fa-solid fa-play"
        const span = document.createElement('span');
        span.textContent = `${duration}`
        const titleSpan = document.createElement('span');
        titleSpan.textContent = `${title} `
        const p = document.createElement('p');
        p.textContent = ` ${description}`;
        p.prepend(titleSpan);
        playBtn.append(i, span);
        bgImg.append(img, playBtn, p)
        home1.appendChild(bgImg);
        
        playBtn.onclick = () => {
            playVideo(video);
        }
        homeContainer.appendChild(home1);
    })
})

const homeSlider = ()=>{

    setTimeout(()=>{
        homeContainer.style.transform = "translateX(0vw)";
        paginationBtns[0].style.background = "#555";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#46d29d";
    }, 0)    
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-100vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#555";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#46d29d";
    }, 4000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-200vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#555";
        paginationBtns[3].style.background = "#46d29d";
    }, 8000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-300vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 12000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-400vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 16000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-500vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 20000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-600vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 24000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-700vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 28000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-800vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 32000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-900vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 36000)
    setTimeout(()=>{
        homeContainer.style.transform = "translateX(-1000vw)";
        paginationBtns[0].style.background = "#46d29d";
        paginationBtns[1].style.background = "#46d29d";
        paginationBtns[2].style.background = "#46d29d";
        paginationBtns[3].style.background = "#555";
    }, 40000)
}
setInterval(homeSlider, 44000);
homeSlider();

// HOME PAGE PAGINATIONS AND SLIDE
const seasonPaginationBtns = document.querySelectorAll('#season-paginationBtn');
const slideBtns = document.querySelectorAll('#slideBtn');
const slideBtns1 = document.querySelectorAll('#slideBtn1');

paginationBtns.forEach((slide, index)=>{
    slide.addEventListener('click', ()=>{
        // console.log('you clicked' + index);
        homeContainer.style.transform = `translateX(${-100 * index}vw)`;
    })
});

// FILM PAGE --------------------------------------
// FILM PAGE PAGINATIONS 
const film = document.querySelector('.film');
const filmPaginationBtns = document.querySelectorAll('#film-paginationBtn');

function navFilm(){
    document.getElementById('filmSynopsis').classList.add('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('films').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('seasonSynopsis').classList.remove('active');
}

filmPaginationBtns.forEach((slide, index)=>{
    slide.addEventListener('click', ()=>{
        // console.log('you clicked' + index);
        film.style.transform = `translateX(${-100 * index}vw)`;
    })
});

// DISPLAY FILM CARD IN FILM PAGE 
const filmPage = document.querySelector('.film1');
const playBtn = document.querySelector('#playBtn');
const synopContent = document.querySelector('.synop-content');

window.addEventListener('load', () => {
    films.forEach(film => {
        const { image, title, production, rating, description } = film;
        const card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
            <img src=${image} alt="">
            <div class="content">
                <h2 class="title">${title}</h2>
                <p class="year-rating">${production}
                    <span>${rating}
                        <i class="fa-solid fa-star"></i>
                    </span>
                </p>
            </div>
        `
        // console.log(film);

        filmPage.appendChild(card);
        card.addEventListener('click', () => {
            navFilm();
            bgVideos.src = film.video;
            synopImg.src = image;
            synopContent.textContent = description;
            titles.textContent = title;
            videos.src = film.video;
            trailer.addEventListener('click', film.playVideo)
            playBtn.addEventListener('click', film.playVideo)
        });
    })
});


// SERIES PAGE PAGINATION & SEASON SYNOPSIS PAGE 
const seasonsIndic = document.querySelector('#seasonsIndic');
const seasonSynopContent = document.querySelector('.seasonSynopContent');
const castIMG = document.querySelectorAll('.cast-img');
const castName = document.querySelectorAll('.cast-name');


const seasonImg = document.querySelector('#seasonImg');
const seasonTitles = document.querySelector('#seasonTitle');
const season = document.querySelector('.season');
const seasonPage = document.querySelector('.season1');
const seasonCount = document.querySelector('.season-count');

seasonPaginationBtns.forEach((slide, index)=>{
    slide.addEventListener('click', ()=>{
        // console.log('you clicked' + index);
        season.style.transform = `translateX(${-100 * index}vw)`;
    })
});


function displaySeries(video, description, title, image, duration){
    seasonImg.src = image;
    seasonBgVideos.src = video;
    seasonTitles.textContent = title;
    seasonCount.textContent = duration
    seasonSynopContent.textContent = description;
}

function displaySeriesCast(cast1, cast2, cast3, cast4, cast5){
    castName[0].textContent = cast1;
    castName[1].textContent = cast2;
    castName[2].textContent = cast3;
    castName[3].textContent = cast4;
    castName[4].textContent = cast5;
}

function seriesCastImg(img1, img2, img3, img4, img5){
    castIMG[0].src = img1;
    castIMG[1].src = img2;
    castIMG[2].src = img3;
    castIMG[3].src = img4;
    castIMG[4].src = img5;
}

function navSeries(){
    document.getElementById('seasonSynopsis').classList.add('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('films').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('filmSynopsis').classList.remove('active');
}

series.map((season) => {
    const { title, image, video, production, rating, duration, 
        description, castName, castImg, seasons, episodes 
    } = season;
    const card = document.createElement('div');
    card.className = "card";
    const img = document.createElement('img');
    img.src = image;
    const h2 = document.createElement('h2');
    h2.className = "title";
    h2.textContent = title;
    const p = document.createElement('p');
    p.className = "year-rating";
    p.textContent = production;
    const span = document.createElement('span');
    span.textContent = rating;
    p.appendChild(span);
    const i = document.createElement('i');
    i.className = "fa-solid fa-star";
    span.appendChild(i);
    card.append(img, h2, p);
    seasonPage.appendChild(card);

    card.addEventListener('click', () => {
        navSeries();
        displaySeries(video, description, title, image, duration);
        seasons();
        episodes();
        displaySeriesCast(castName[0], castName[1], castName[2], castName[3], castName[4]);
        seriesCastImg(castImg[0], castImg[1], castImg[2], castImg[3], castImg[4]);
        seasonTrailer.addEventListener('click', ()=>{
            myVideo.style.display = "block";
            videos.src = video;
            videos.play();
        })
    })
})


// SEARCH MOVIES -----------------------------------------
window.addEventListener('load', () => {
    const mySearchMenu = document.querySelector('#mySearchMenu');
    const mySearch = document.querySelector('#mySearch');

    films.forEach(film => {
        const { image, title, production, rating } = film;
        const card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
            <img src=${image} alt="">
            <div class="content">
                <h2 class="title">${title}</h2>
                <p class="year-rating">${production}
                    <span>${rating}
                        <i class="fa-solid fa-star"></i>
                    </span>
                </p>
            </div>
        `

        mySearchMenu.appendChild(card);
        card.addEventListener('click', () => {
            document.getElementById('filmSynopsis').classList.add('active');
            document.getElementById('home').classList.remove('active');
            document.getElementById('films').classList.remove('active');
            document.getElementById('series').classList.remove('active');
            document.getElementById('seasonSynopsis').classList.remove('active');
            bgVideos.src = film.video;
            synopImg.src = film.image;
            titles.textContent = film.title;
            videos.src = film.video;
            trailer.addEventListener('click', film.playVideo)
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
});


// SEARCH SERIES -----------------------------------------
window.addEventListener('load', () => {
    const mySearchMenu = document.querySelector('#mySearchMenu');
    const mySearch = document.querySelector('#mySearch');

    series.forEach(season => {
        const { image, title, production, rating, video, description, 
            castName, castImg, duration 
        } = season;
        const card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
            <img src=${image} alt="">
            <div class="content">
                <h2 class="title">${title}</h2>
                <p class="year-rating">${production}
                    <span>${rating}
                        <i class="fa-solid fa-star"></i>
                    </span>
                </p>
            </div>
        `

        mySearchMenu.appendChild(card);
        card.addEventListener('click', () => {
            navSeries();
            displaySeries(video, description, title, image, duration);
            displaySeriesCast(castName[0], castName[1], castName[2], castName[3], castName[4]);
            seriesCastImg(castImg[0], castImg[1], castImg[2], castImg[3], castImg[4]);
            seasonTrailer.addEventListener('click', ()=>{
                myVideo.style.display = "block";
                videos.src = video;
                videos.play();
            })
        })

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
});


// CATALOGUE'S PAGE ------------------------------------
const cataBtns = document.querySelectorAll('.cataBtn');
const cataContainer = document.querySelector('.cataContainer');
// const para = document.getElementById('para');


cataBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.id === "cataBtn1") {
            cataContainer.style.background = "red";
        }
        else if (btn.id === "cataBtn2") {
            cataContainer.style.background = "aliceBlue";
        }
        else {
            cataContainer.style.background = "transparent";
        }
    });
});

// SHOW CATEGORIES ------------------------------------
// SHOW CATEGORIES ------------------------------------
showCategories();
