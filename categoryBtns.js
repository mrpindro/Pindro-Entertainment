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
        });
    });
}

export default handleCategoryBtn;