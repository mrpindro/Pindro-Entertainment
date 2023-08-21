import { films } from "./films/filmObject.js";

export const showCategories = () => {
    
    const showCato = document.querySelector('.showCato');
    const splayBtn = document.querySelectorAll('#splayBtn');
    const categoryBtns = document.querySelectorAll('.categoryBtn');
    const actionBox = document.querySelector('.action-bx');
    const crimeBox = document.querySelector('.crime-bx');
    const documentaryBox = document.querySelector('.documentary-bx');
    const dramaBox = document.querySelector('.drama-bx');
    const biographyBox = document.querySelector('.biography-bx');
    const sciFiBox = document.querySelector('.scifi-bx');
    const fantasyBox = document.querySelector('.fantasy-bx');
    const adventureBox = document.querySelector('.adventure-bx');
    const horrorBox = document.querySelector('.horror-bx');
    const nsfwBox = document.querySelector('.nsfw-bx');
    const animationBox = document.querySelector('.animation-bx');
    const westernBox = document.querySelector('.western-bx');
    const romanceBox = document.querySelector('.romance-bx');
    
    
    // Action CATEGORY ------------------------------------------------
    // const actionBtn = document.querySelector('#actionBtn');
    
    const actionArray = films.filter((film) => {
        return film.category == 'Action';
    })
    
    actionArray.map((film) => {
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
        
        actionBox.appendChild(card);
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
    });
    
    
    // CRIME CATEGORY ------------------------------------------
    const crimeArray = films.filter((film) => {
        return film.categoryCri == 'Crime';
    })
    
    crimeArray.map((film) => {
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
        
        crimeBox.appendChild(card);
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
    });
    
    
    // DOCUMENTARY CATEGORY ------------------------------------------
    const documentaryArray = films.filter((film) => {
        return film.categoryDoc == 'Documentary';
    })
    
    documentaryArray.map((film) => {
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
        
        documentaryBox.appendChild(card);
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
    });
    
    
    // DRAMA CATEGORY ------------------------------------------
    const dramaArray = films.filter((film) => {
        return film.categoryDra == 'Drama';
    })
    
    dramaArray.map((film) => {
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
        
        dramaBox.appendChild(card);
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
    });
    
    
    // BIOGRAPHY CATEGORY ------------------------------------------
    const biographyArray = films.filter((film) => {
        return film.categoryBio == 'Biography';
    })
    
    biographyArray.map((film) => {
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
        
        biographyBox.appendChild(card);
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
    });
    
    
    // SciFi CATEGORY ------------------------------------------
    const sciFiArray = films.filter((film) => {
        return film.categorySci == 'SciFi';
    })
    
    sciFiArray.map((film) => {
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
        
        sciFiBox.appendChild(card);
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
    });
    
    
    // FANTASY CATEGORY ------------------------------------------
    const fantasyArray = films.filter((film) => {
        return film.categoryFan == 'Fantasy';
    })
    
    fantasyArray.map((film) => {
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
        
        fantasyBox.appendChild(card);
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
    });
    
    
    // ADVENTURE CATEGORY ------------------------------------------
    const adventureArray = films.filter((film) => {
        return film.categoryAdv == 'Adventure';
    })
    
    adventureArray.map((film) => {
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
        
        adventureBox.appendChild(card);
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
    });
    
    
    // HORROR CATEGORY ------------------------------------------
    const horrorArray = films.filter((film) => {
        return film.categoryHor == 'Horror';
    })
    
    horrorArray.map((film) => {
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
        
        horrorBox.appendChild(card);
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
    });
    
    
    // NSFW CATEGORY ------------------------------------------
    const nsfwArray = films.filter((film) => {
        return film.categoryNSFW == 'NSFW';
    })
    
    nsfwArray.map((film) => {
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
        
        nsfwBox.appendChild(card);
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
    });
    
    
    // ANIMATION CATEGORY ------------------------------------------
    const animationArray = films.filter((film) => {
        return film.categoryAni == 'Animation';
    })
    
    animationArray.map((film) => {
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
        
        animationBox.appendChild(card);
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
    });
    
    
    // WESTERN CATEGORY ------------------------------------------
    const westernArray = films.filter((film) => {
        return film.categoryWes == 'Western';
    })
    
    westernArray.map((film) => {
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
        
        westernBox.appendChild(card);
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
    });
    
    
    // ROMANCE CATEGORY ------------------------------------------
    const romanceArray = films.filter((film) => {
        return film.categoryRom == 'Romance';
    })
    
    romanceArray.map((film) => {
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
        
        romanceBox.appendChild(card);
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
    });
    
    // CATEGORIES DISPLAY AND BUTTONS ----------------------------------
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (btn.id === "actionBtn") {
                actionBox.style.transform = "translateX(0)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "crimeBtn") {
                crimeBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "documentaryBtn") {
                documentaryBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "dramaBtn") {
                dramaBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "biographyBtn") {
                biographyBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "scifiBtn") {
                sciFiBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "fantasyBtn") {
                fantasyBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "adventureBtn") {
                adventureBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "horrorBtn") {
                horrorBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "nsfwBtn") {
                nsfwBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "animationBtn") {
                animationBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "westernBtn") {
                westernBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                romanceBox.style.transform = "translateX(-100%)";
            }
            else if (btn.id === "romanceBtn") {
                romanceBox.style.transform = "translateX(0)";
                actionBox.style.transform = "translateX(-100%)";
                crimeBox.style.transform = "translateX(-100%)";
                documentaryBox.style.transform = "translateX(-100%)";
                dramaBox.style.transform = "translateX(-100%)";
                biographyBox.style.transform = "translateX(-100%)";
                sciFiBox.style.transform = "translateX(-100%)";
                fantasyBox.style.transform = "translateX(-100%)";
                adventureBox.style.transform = "translateX(-100%)";
                horrorBox.style.transform = "translateX(-100%)";
                nsfwBox.style.transform = "translateX(-100%)";
                animationBox.style.transform = "translateX(-100%)";
                westernBox.style.transform = "translateX(-100%)";
            }
            // else {
            //     showCato.style.display = "none";
            // }
        });
    });
}