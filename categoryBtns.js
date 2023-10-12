const category = document.querySelector('.category');
const categoryBtns = document.querySelectorAll('.category-btn');
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

// CATEGORIES DISPLAY AND BUTTONS ----------------------------------
const handleCategoryBtn = () => {

    const displayCatoFilms = (toShow, toHide = []) => {
        toShow.style.transform = "translateX(0)";

        toHide.forEach(cato => {
            cato.style.transform = "translateX(-100%)";
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            switch (btn.id) {
                case "actionBtn":
                    displayCatoFilms(actionBox, 
                        [
                            crimeBox, documentaryBox, dramaBox, biographyBox, sciFiBox,
                            fantasyBox, adventureBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "crimeBtn":
                    displayCatoFilms(crimeBox, 
                        [
                            actionBox, documentaryBox, dramaBox, biographyBox, sciFiBox,
                            fantasyBox, adventureBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "documentaryBtn":
                    displayCatoFilms(documentaryBox, 
                        [
                            actionBox, crimeBox, dramaBox, biographyBox, sciFiBox,
                            fantasyBox, adventureBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "dramaBtn":
                    displayCatoFilms(dramaBox, 
                        [
                            actionBox, crimeBox, documentaryBox, biographyBox, sciFiBox,
                            fantasyBox, adventureBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "biographyBtn":
                    displayCatoFilms(biographyBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, sciFiBox,
                            fantasyBox, adventureBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "scifiBtn":
                    displayCatoFilms(sciFiBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox,
                            fantasyBox, adventureBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "fantasyBtn":
                    displayCatoFilms(fantasyBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox,
                            sciFiBox, adventureBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "adventureBtn":
                    displayCatoFilms(adventureBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox, 
                            sciFiBox, fantasyBox, horrorBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "horrorBtn":
                    displayCatoFilms(horrorBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox, 
                            sciFiBox, fantasyBox, adventureBox, nsfwBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "nsfwBtn":
                    displayCatoFilms(nsfwBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox,
                            fantasyBox, adventureBox, horrorBox, sciFiBox, animationBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "animationBtn":
                    displayCatoFilms(animationBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox,
                            fantasyBox, adventureBox, horrorBox, nsfwBox, sciFiBox,
                            westernBox, romanceBox
                        ]
                    );
                    break;
                case "westernBtn":
                    displayCatoFilms(westernBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox,
                            sciFiBox, fantasyBox, adventureBox, horrorBox, nsfwBox,
                            animationBox, romanceBox
                        ]
                    );
                    break;
                case "romanceBtn":
                    displayCatoFilms(romanceBox, 
                        [
                            actionBox, crimeBox, documentaryBox, dramaBox, biographyBox, 
                            sciFiBox, fantasyBox, adventureBox, horrorBox, nsfwBox, 
                            animationBox, westernBox,
                        ]
                    );
                    break;
            }
        });
    });
}

export default handleCategoryBtn;