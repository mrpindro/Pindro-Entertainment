const bgVideos = document.querySelector('#film-bg-video');
const filmSynopImg = document.querySelector('#synop-img');
const titles = document.querySelector('#title');
const filmDescription = document.querySelector('.synop-content');
const trailerBtn = document.querySelector('#trailer-btn');
const playBtn = document.querySelector('#play-btn');
const videos = document.querySelector('#videos');
const myVideo = document.querySelector('#myVideo');



export default function navToFilm(trailer, image, title, description ) {
    const playVideo = () => {
        videos.src = trailer;
        myVideo.style.display = "block";
        videos.play();
    }

    document.getElementById('film-synopsis').classList.add('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('films').classList.remove('active');
    document.getElementById('series').classList.remove('active');
    document.getElementById('series-synopsis').classList.remove('active');
    bgVideos.src = trailer;
    filmSynopImg.src = image;
    titles.textContent = title;
    filmDescription.textContent = description;
    
    trailerBtn.addEventListener('click', playVideo);
    playBtn.addEventListener('click', playVideo);
}


// Cast Image --------------------------------
const castImg1 = document.querySelector('#cast-img1');
const castImg2 = document.querySelector('#cast-img2');
const castImg3 = document.querySelector('#cast-img3');
const castImg4 = document.querySelector('#cast-img4');
const castImg5 = document.querySelector('#cast-img5');

export function displayCastImg(castImage1, castImage2, castImage3, castImage4, castImage5) {
    castImg1.src = castImage1
    castImg2.src = castImage2
    castImg3.src = castImage3
    castImg4.src = castImage4
    castImg5.src = castImage5
}


// Cast Name -------------------------------
const castName1 = document.querySelector('#cast-name1');
const castName2 = document.querySelector('#cast-name2');
const castName3 = document.querySelector('#cast-name3');
const castName4 = document.querySelector('#cast-name4');
const castName5 = document.querySelector('#cast-name5');

export function displayCastName(castname1, castname2, castname3, castname4, castname5) {
    castName1.textContent = castname1;
    castName2.textContent = castname2;
    castName3.textContent = castname3;
    castName4.textContent = castname4;
    castName5.textContent = castname5;
}