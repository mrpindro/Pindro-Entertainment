const episodesVal = document.querySelector('.episodes');

export const the_underground_railroad = () => {
    const episodes = [
        {
            title: "Episode 1",
            chapter: "Chapter 1: Gorgia",
            video: "vid/The-Underground-Railroad.MP4"
        },
        {
            title: "Episode 2",
            chapter: "Chapter 2: South Carolina",
            video: "vid/Genius.MP4"
        },
        {
            title: "Episode 3",
            chapter: "Chapter 3: North Carolina",
            video: "vid/Fences.MP4"
        },
    ]

    episodes.map((episode) => {
        const { title, chapter, video } = episode;
        const ep = document.createElement('div');
        ep.className = "episode";
        ep.innerHTML = `
            <button id="splayBtn">
                <i class="fa-sharp fa-solid fa-play"></i> 
                <span><h4>${title}</h4>  <p class="episode-name">${chapter}</p></span>
            </button>
        `

        ep.addEventListener('click', ()=>{
            videos.src = video;
            myVideo.style.display = "block";
            videos.play();
        })

        episodesVal.appendChild(ep);
    })
}

export const how_to_get_away_with_murder = () => {
    const episodes = [
        {
            title: "Episode 1",
            chapter: "Pilot",
            video: "vid/How to get away with murder.MP4"
        },
        {
            title: "Episode 2",
            chapter: "It's all her fault",
            video: "vid/Green-Book.MP4"
        },
        {
            title: "Episode 3",
            chapter: "Smile, or go to jail",
            video: "vid/Papillon.MP4"
        },
    ]

    episodes.map((episode) => {
        const { title, chapter, video } = episode;
        const ep = document.createElement('div');
        ep.className = "episode";
        ep.innerHTML = `
            <button id="splayBtn">
                <i class="fa-sharp fa-solid fa-play"></i> 
                <span><h4>${title}</h4>  <p class="episode-name">${chapter}</p></span>
            </button>
        `

        ep.addEventListener('click', ()=>{
            videos.src = video;
            myVideo.style.display = "block";
            videos.play();
        })

        episodesVal.appendChild(ep);
    })
}

export const breaking_bad = () => {
    const episodes = [
        {
            title: "Episode 1",
            chapter: "Pilot",
            video: "vid/Breaking Bad Trailer.MP4"
        },
        {
            title: "Episode 2",
            chapter: "Cat's in the Bag",
            video: "vid/theWhale.MP4"
        },
        {
            title: "Episode 3",
            chapter: "...And the Bag's in the River",
            video: "vid/Malcolm X.MP4"
        },
    ]

    episodes.map((episode) => {
        const { title, chapter, video } = episode;
        const ep = document.createElement('div');
        ep.className = "episode";
        ep.innerHTML = `
            <button id="splayBtn">
                <i class="fa-sharp fa-solid fa-play"></i> 
                <span><h4>${title}</h4>  <p class="episode-name">${chapter}</p></span>
            </button>
        `

        ep.addEventListener('click', ()=>{
            videos.src = video;
            myVideo.style.display = "block";
            videos.play();
        })

        episodesVal.appendChild(ep);
    })
}

export const twenty_four = () => {
    const episodes = [
        {
            title: "Episode 1",
            chapter: "12:00am - 1:00am",
            video: "vid/24.MP4"
        },
        {
            title: "Episode 2",
            chapter: "1:00am - 2:00am",
            video: "vid/theWhale.MP4"
        },
        {
            title: "Episode 3",
            chapter: "2:00am - 3:00am",
            video: "vid/Malcolm X.MP4"
        },
    ]

    episodes.map((episode) => {
        const { title, chapter, video } = episode;
        const ep = document.createElement('div');
        ep.className = "episode";
        ep.innerHTML = `
            <button id="splayBtn">
                <i class="fa-sharp fa-solid fa-play"></i> 
                <span><h4>${title}</h4>  <p class="episode-name">${chapter}</p></span>
            </button>
        `

        ep.addEventListener('click', ()=>{
            videos.src = video;
            myVideo.style.display = "block";
            videos.play();
        })

        episodesVal.appendChild(ep);
    })
}