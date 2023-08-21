import { breaking_bad, how_to_get_away_with_murder, the_underground_railroad, twenty_four 
} from "./seasonEpisodes.js";
import { fiveSeasons, nineSeasons, oneSeason, sixSeasons } from "./seasonValue.js";

export const series = [
    {
        id: 1,
        title: "The underground railroad",
        production: 2021,
        rating: "8.0",
        duration: "1 season",
        seasons: oneSeason,
        episodes: the_underground_railroad,
        image: "img/theundergroundrailroad2021.jpg",
        video: "vid/The-Underground-Railroad.MP4",
        miniseries: "",
        description: `The underground railroad is an American historical drama 
            streaming television limited series created and directed 
            by Barry Jenkins based on the 2016 novel of the same name by Colson Whitehead. 
            The series premiered on Amazon Prime Video on May 14, 2021.
            The series won the Golden Globe Award for Best Miniseries or Television Film, 
            the BAFTA for Best International Programme, received a Peabody Award, and 
            garnered several other nominations including the Primetime Emmy Award for 
            Outstanding Limited or Anthology Series.
        `,
        director: "Barry Jenkins",
        castName: ["Thuso Mbedu", "Chase W. Dillon", "Joel Edgerton", "Aaron Pierre", "Sheila Atim"],
        castImg: ["cast/Thuso Mbedu.jpeg", "cast/Chase Dillon.jpeg", "cast/Joel Edgerton.jpeg",
            "cast/Aaron Pierre.jpeg", "cast/Sheila Atim.jpeg"
        ],
    },
    {
        id: 2,
        title: "How to get away with murder",
        production: "2014-2020",
        rating: "8.5",
        duration: "6 seasons",
        seasons: sixSeasons,
        episodes: how_to_get_away_with_murder,
        image: "img/How-to-get-away-with-murder-2014-2020.jpg",
        video: "vid/How to get away with murder.MP4",
        miniseries: "",
        description: `How to get away with murder is an American legal drama thriller television series 
            that premiered on ABC on September 25, 2014, and concluded on May 14, 2020.
            The series was created by Peter Nowalk, and produced by Shonda Rhimes and ABC Studios. 
            The series aired on ABC as part of a night of programming, 
            all under Rhimes's Shondaland production company.
        `,
        director: "Peter Nowalk",
        castName: ["Viola Davis", "Billy Brown", "Alfred Enoch", "Liza Weil", "Aja Naomi King"],
        castImg: ["cast/viola davis.jpeg", "cast/billy brown.jpeg", "cast/alfred enoch.jpeg", 
            "cast/liza weil.jpeg", "cast/aja naomi king.jpeg"
        ],
    },
    {
        id: 3,
        title: "Breaking Bad",
        production: "2008-2013",
        rating: "9.0",
        duration: "5 seasons",
        seasons: fiveSeasons,
        episodes: breaking_bad,
        image: "img/breakingBad.png",
        video: "vid/Breaking Bad Trailer.MP4",
        miniseries: "",
        description: `Breaking bad is an American neo-Western crime drama television series created 
            and produced by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, 
            the series follows Walter White (Bryan Cranston), an underpaid, overqualified, 
            and dispirited high-school chemistry teacher who is struggling with a recent diagnosis
            of stage-three lung cancer. White turns to a life of crime and partners with a former student, 
            Jesse Pinkman (Aaron Paul), to produce and distribute methamphetamine to secure his family's 
            financial future before he dies, while navigating the dangers of the criminal underworld. 
            Breaking Bad premiered on AMC on January 20, 2008, and concluded on September 29, 2013, 
            after five seasons consisting of 62 episodes.
        `,
        director: "Vince Gilligan",
        castName: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Giancarlo Esposito", "Dean Norris"],
        castImg: ["cast/bryanCranston.jpeg", "cast/AaronPaul.jpeg", "cast/AnnaGunn.jpeg", 
            "cast/GiancarloEsposito.jpeg", "cast/deanNorris.jpeg"
        ],
    },
    {
        id: 4,
        title: "24",
        production: "2001-2010",
        rating: "9.5",
        duration: "9 seasons",
        seasons: nineSeasons,
        episodes: twenty_four,
        image: "img/24-2001-2010.jpg",
        video: "vid/24.MP4",
        miniseries: "",
        description: `24 is an American crime drama television series created by Joel 
            Surnow and Robert Cochran for Fox. The series stars Kiefer Sutherland as US 
            counter-terrorist federal agent Jack Bauer. Each season covers 24 
            consecutive hours in Bauer's life using the real time method of narration. 
            Multiple interrelated plots are featured in each episode, which often include 
            Bauer's contacts in perilous crisis. The show premiered on November 6, 2001, 
            and spanned 204 episodes over nine seasons, with the series finale broadcast 
            on July 14, 2014. In addition, the television film 24: Redemption aired between 
            seasons six and seven, on November 23, 2008. 24 is a joint production by Imagine 
            Television and 20th Century Fox Television.
        `,
        director: "Robert Cochran",
        castName: ["Kiefer Sutherland", "Elisha Cuthbert", "Dennis Haysbert", 
            "Mary Lynn Rajskub", "Carlos Bernard"
        ],
        castImg: ["cast/kieferSutherland.jpeg", "cast/elishaCuthbert.jpeg", "cast/dennisHaysbert.jpeg", 
            "cast/maryLynnRajskub.jpeg", "cast/carlosBernard.jpeg"
        ],
    },
]

