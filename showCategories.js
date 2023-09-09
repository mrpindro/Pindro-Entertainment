import handleCategoryBtn from "./categoryBtns.js";
import navToFilm, { displayCastImg, displayCastName } from "./navToFilm.js";


export const showCategories = () => {

    fetch('https://pindro-entertainment-api.onrender.com/film')
        .then(res => res.json())
        .then(data => {   
            // const category = document.querySelector('.category');
            // const categoryBtns = document.querySelectorAll('.category-btn');
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
            const actionArray = data.filter((film) => {
                return film.action == 'on';
            })
            
            actionArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                actionBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // CRIME CATEGORY ------------------------------------------
            const crimeArray = data.filter((film) => {
                return film.crime == 'on';
            })
            
            crimeArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                crimeBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // DOCUMENTARY CATEGORY ------------------------------------------
            const documentaryArray = data.filter((film) => {
                return film.documentary == 'on';
            })
            
            documentaryArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                documentaryBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // DRAMA CATEGORY ------------------------------------------
            const dramaArray = data.filter((film) => {
                return film.drama == 'on';
            })
            
            dramaArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                dramaBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // BIOGRAPHY CATEGORY ------------------------------------------
            const biographyArray = data.filter((film) => {
                return film.biography == 'on';
            })
            
            biographyArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                biographyBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // SciFi CATEGORY ------------------------------------------
            const sciFiArray = data.filter((film) => {
                return film.scifi == 'on';
            })
            
            sciFiArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                sciFiBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // FANTASY CATEGORY ------------------------------------------
            const fantasyArray = data.filter((film) => {
                return film.fantasy == 'on';
            })
            
            fantasyArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                fantasyBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // ADVENTURE CATEGORY ------------------------------------------
            const adventureArray = data.filter((film) => {
                return film.adventure == 'on';
            })
            
            adventureArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                adventureBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // HORROR CATEGORY ------------------------------------------
            const horrorArray = data.filter((film) => {
                return film.horror == 'on';
            })
            
            horrorArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                horrorBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // NSFW CATEGORY ------------------------------------------
            const nsfwArray = data.filter((film) => {
                return film.nsfw == 'on';
            })
            
            nsfwArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                nsfwBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // ANIMATION CATEGORY ------------------------------------------
            const animationArray = data.filter((film) => {
                return film.animation == 'on';
            })
            
            animationArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                animationBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // WESTERN CATEGORY ------------------------------------------
            const westernArray = data.filter((film) => {
                return film.western == 'on';
            })
            
            westernArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                westernBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            
            // ROMANCE CATEGORY ------------------------------------------
            const romanceArray = data.filter((film) => {
                return film.romance == 'on';
            })
            
            romanceArray.map((film) => {
                const { 
                    image, title, year, rating, trailer, description, cast_names,
                    cast_image1, cast_image2, cast_image3, cast_image4, cast_image5
                } = film;
                        const card = document.createElement('a');
                        card.classList.add('card');
                        card.innerHTML = `
                            <div class="card-img-con">
                                <img src="${image}" alt="">
                            </div>
                            <div class="content">
                                <h3 class="title">${title}</h3>
                                <p class="year-rating">${year}
                                    <span>${rating}
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        `
                
                romanceBox.appendChild(card);
                card.addEventListener('click', () => {
                    navToFilm(trailer, image, title, description);
                    displayCastImg(cast_image1, cast_image2, cast_image3, cast_image4, cast_image5);
                    displayCastName(
                        cast_names[0], cast_names[1], cast_names[2], cast_names[3], cast_names[4]
                    );
                });
            });
            
            handleCategoryBtn();
        })
        .catch(err => console.log(err))
    ;
}  
