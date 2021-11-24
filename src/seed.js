export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Hotstar ============================================ */
  // Family
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Mary Poppins",
    description:
      "Mr Banks is looking for a nanny for his two mischievous children and comes across Mary Poppins, an angelic nanny. She not only brings a change in their lives but also spreads happiness.",
    genre: "family",
    maturity: "All",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "The Lion King",
    description:
      "Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.",
    genre: "family",
    maturity: "7",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Wall-E",
    description:
      "A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.",
    genre: "family",
    maturity: "7",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "The Many Adventures of Winnie the Pooh",
    description:
      "Pooh, an adorable bear, and his lovable friends embark on an epic adventure as they sing, dance and chase bees through the Hundred Acre Woods.",
    genre: "family",
    maturity: "7",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Soul",
    description:
      " A jazz musician, stuck in a mediocre job, finally gets his big break. However, when a wrong step takes him to the Great Before, he tries to help an infant soul in order to return to reality.",
    genre: "family",
    maturity: "7",
  });

  //Action
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Avengers-Infinity War",
    description:
      "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
    genre: "action",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Avengers-Endgame",
    description:
      "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    genre: "action",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Star Wars-A New Hope",
    description:
      "Princess Leia gets abducted by the insidious Darth Vader. Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to free her and to save the galaxy from the violent Galactic Empire.",
    genre: "action",
    maturity: "7",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Star Wars-The Empire Strikes Back",
    description:
      "Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.",
    genre: "action",
    maturity: "7",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Guardians of the Galaxy",
    description:
      "Peter escapes from the planet Morag with a valuable orb that Ronan the Accuser wants. He eventually forms a group with unwilling heroes to stop Ronan.",
    genre: "action",
    maturity: "13",
  });

  //Thriller
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Baby",
    description:
      "An elite team of the Indian intelligence system perpetually strives to detect and eliminate terrorists and their plots. Officer Ajay leads a team to destroy one such potentially lethal operation.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Talvar",
    description:
      "A hardened investigator deals with conflicting perspectives involving a brutal double murder. The case gets complicated when the parents of the murdered girl emerge as the prime suspects.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Drishyam",
    description:
      "When the disappearance of a policewomans son threatens to ruin Vijays family, he leaves no stone unturned in order to shield his family.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Neerja",
    description:
      "Neerja, a flight attendant, boards Pan Am flight 73 in 1986. When the flight is hijacked by terrorists, Neerja risks her life to stall the terrorists from attacking the passengers on board.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Pink",
    description:
      "After being molested, Minal, along with her friends, tries to file an FIR against a politicians nephew. When the subsequent case gets rigged, Deepak, a retired lawyer, helps them to fight the case.",
    genre: "thriller",
    maturity: "13",
  });

  // Scifi
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Free Guy",
    description:
      "When a bank teller discovers hes actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where theres no limits, hes determined to save the day his way before its too late, and maybe find a little romance with the coder who conceived him.",
    genre: "scifi",
    maturity: "15",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Black Widow",
    description:
      "Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past.",
    genre: "scifi",
    maturity: "15",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Maze Runner The Death Cure",
    description:
      "When a deadly disease called the Flare breaks out, Thomas and his group of escaped Gladers break into the Last City to find the cure and save their friends.",
    genre: "scifi",
    maturity: "15",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Tomorrowland",
    description:
      "Frank, a former inventor, and Casey, a curious teenager, embark on a dangerous mission to unravel the secrets of Tomorrowland, an unexplored dimension in time and space.",
    genre: "scifi",
    maturity: "15",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Independence Day-Resurgence",
    description:
      "Frank, a former inventor, and Casey, a curious teenager, embark on a dangerous mission to unravel the secrets of Tomorrowland, an unexplored dimension in time and space.",
    genre: "scifi",
    maturity: "15",
  });

  // Romance
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Love, Simon",
    description:
      "Simon Spier keeps his sexual orientation a secret from his family. However, when a blackmailer threatens to reveal it, he goes on a roller-coaster journey to come to terms with his identity.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Pretty Woman",
    description:
      "Edward, a rich entrepreneur, hires Vivian, a prostitute, to accompany him to a few social events. Trouble ensues when he falls in love with her and they try to bridge the gap between their worlds.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "The beauty and the beast",
    description:
      "Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "27 Dresses",
    description:
      "After serving as a bridesmaid 27 times, Jane is shocked when her younger sister announces her engagement to the man she loves. Meanwhile, she also meets a cynical journalist who has a hidden agenda.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Hotstar").add({
    id: getUUID(),
    title: "Aladdin",
    description:
      "Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with the help of Genie. When Jafar, the grand vizier, tries to usurp the king, Jasmine, Aladdin and Genie must stop him from succeeding.",
    genre: "romance",
    maturity: "13",
  });

  /* Prime ============================================ */
  // Action
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Mardaani",
    description:
      "A cop search for a missing teenage girl leads her to the depraved world of child trafficking. What follows is a cat-and-mouse game between the fearless cop and a ruthless mafia kingpin.",
    genre: "action",
    maturity: "18",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Dishoom",
    description:
      "Grip your seats as Dishoom is all set to take you on an action-packed ride of entertainment! Two days before the big clash between India and Pakistan, top cricketer Viraj Sharma goes missing. With only 36 hours left to find him, the Emirates Police Department hires an Indian officer, Kabir Shergill, to solve the case.",
    genre: "action",
    maturity: "18",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Aurangzeb",
    description:
      "Gurgaon rose from a small town to a boom town satellite city in just 15 years.Under the guise of a respected citizen Yashwardhan (Jackie Shroff) runs a parallel world where he is an Emperor. When Vishal (Arjun Kapoor) is planted in Yashwardhan's world in place of Ajay (Arjun Kapoor) the lawmakers (Rishi Kapoor & Prithviraj) roll the dice to unravel events in a world where Kingship knows no Kinship.",
    genre: "action",
    maturity: "16",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Captain America - Civil War",
    description:
      'The Avengers are forced to "party" with Ultron when he seeks to disassemble the team by taking control of Iron Man armor and enact a nefarious scheme to take over the world.',
    genre: "action",
    maturity: "12",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Wonder Woman (2017)",
    description:
      "Before she was Wonder Woman, she was Diana, princess of the Amazons. Fighting alongside man in a war to end all wars, Diana will discover her full powersâ€¦and her true destiny.",
    genre: "action",
    maturity: "16",
  });

  // Comedies
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Honeymoon Travels Pvt Ltd",
    description:
      "The honeymoon trip covers many aspects of life around the lives of six very different married couples travelling together in a bus. The movie brings the lives of each couple closer depicting how each of them deals with their problems differently. The story is filled with real life incidents, comedy and many more hidden secrets, making for an entertaining drama and a must watch!",
    genre: "comedies",
    maturity: "12",
  });

  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Bad Boys II",
    description:
      "The action and comedy never stop when superstars Martin Lawrence and Will Smith reunite as out-of-control trash-talking buddy cops.",
    genre: "comidies",
    maturity: "16",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Ta Ra Rum Pum",
    description:
      "When RV (Saif Ali Khan) is spotted by Harry (Jaaved Jaafery) the Manager of a failing Racing car team, everything changes for RV and the team. They shoot to the top. The dream is complete when he meets Radhika (Rani Mukerji) and both tie the knot. But when he meets with an accident, he loses everything he had once gained. RV is on the road, but can he reclaim the glory for his family? ",
    genre: "comedies",
    maturity: "16",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Welcome",
    description:
      "Two dons want their sister to get married. They find a suitable match, but the grooms uncle wants him to get married to a girl from a decent family. The only way they can get married is, if both the dons give up their life of crime.",
    genre: "comidies",
    maturity: "12",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Hera Pheri",
    description:
      "Three unemployed men find the answer to all their money problems when they recieve a call from a kidnapper. However, things do not go as planned.",
    genre: "comidies",
    maturity: "12",
  });

  // Adventure
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Golmaal Again",
    description:
      "Golmaal Again is fun filled ride about two gangs who are unable to stand each other since their childhood and how they repulse each other even after they grow up. It is an adventure with its fair share of thrills that are sure to surprise the audience and fill their hearts with laughter and joy. This film will surely make everyone laugh, cry and realize the importance of how beautiful life is.",
    genre: "adventure",
    maturity: "15",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Transformers - Revenge of the Fallen",
    description:
      "The battle for Earth continues when college-bound Sam Witwicky learns the truth about the ancient origins of the Transformers and must join in their continued battle against the Decepticons.",
    genre: "adventure",
    maturity: "14",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Zombieland - Double Tap",
    description:
      "Through comic mayhem from the White House to the heartland, four slayers face off against new kinds of evolved zombies and new human survivors.",
    genre: "adventure",
    maturity: "18",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Resident Evil - Apocalypse",
    description:
      "After narrowly escaping the horrors of the underground Hive facility, Alice (Milla Jovovich) is quickly thrust back into a war raging above ground between the living and the Undead. As the city is locked down under quarantine, Alice joins a small band of elite soldiers, led by Valentine (Sienna Guillory, Love, Actually) and Carlos.",
    genre: "adventure",
    maturity: "16",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Men in Black II",
    description:
      "Tommy Lee Jones and Will Smith are back in black as the scum-fighting super-agents Kay and Jay - regulators of all things alien on planet earth. Their latest mission: to save the world from a total intergalactic disaster!",
    genre: "adventure",
    maturity: "18",
  });

  // Thriller
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Bhoot Part One - The Haunted Ship",
    description:
      "In June 2012, A huge, dead, unmanned ship-â€œSea Birdâ€, on its way to a shipyard, broke its ties and ran ashore Juhu beach. Prithvi, a shipping officer recovering from psychotic depression due to the loss of his family, is in charge of getting Sea Bird back afloat.",
    genre: "thriller",
    maturity: "18",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Gangs of Wasseypur Part 1",
    description:
      "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
    genre: "thriller",
    maturity: "18",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Jack Ryan - Shadow Recruit",
    description:
      "Jack Ryan must quickly evolve from soldier to analyst to full-fledged operative to stop a devastating terrorist plot against the United States.",
    genre: "thriller",
    maturity: "18",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "K.G.F - Chapter 1 ",
    description:
      "KGF Chapter 1 is a film based on the gold mines that represents absolute power. The film is based on power struggle to rule these fields which eventually becomes one manâ€™s destiny and his final destination.",
    genre: "thriller",
    maturity: "16",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Lucy",
    description:
      "From the visionary director of La Femme Nikita and The Professional and starring Scarlett Johansson and Academy AwardÂ® winner Morgan Freeman comes an action-thriller about a woman accidentally caught in a dark deal who turns the tables on her captors. Altered by a dangerous new drug allowing her to use 100% of her brain capacity.",
    genre: "thriller",
    maturity: "16",
  });
  // Romance
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Prem Ratan Dhan Payo",
    description:
      "Yuvraj Vijay Singh, a prince of Pritampur, is soon to be crowned as king and is engaged to Princess Maithili, but due to his stiff and stubborn nature, Vijay faces many problems with Maithili as well as with his brother and sisters. His step sisters, Rajkumari Chandrika and Rajkumari Radhika, live in a separate house outside the royal palace, while his step brother Yuvraj Ajay Singh wants to ...",
    genre: "romance",
    maturity: "16",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Ae Dil Hai Mushkil",
    description:
      "In this romantic drama, a popular singer Ayan Senger (Ranbir Kapoor) recounts his turbulent relationship with Alizeh Khan (Anushka Sharma) during an interview based on the love of his life. He reminisces about their chance meeting in London, their troubled, unrequited love, his personal growth over the years and how this relationship shaped his destiny.",
    genre: "romance",
    maturity: "18",
  });

  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Liar, Liar",
    description:
      "Comic genius Jim Carrey stars as a fast-talking attorney and habitual liar who, forced by his sons birthday wish, must tell the truth for the next 24 hours.",
    genre: "romance",
    maturity: "15",
  });

  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Chitchor",
    description:
      "Geeta ends up with two suitors after her father goes to bring home a prospective groom and mistakenly picks up the wrong man.",
    genre: "romance",
    maturity: "16",
  });
  firebase.firestore().collection("Prime").add({
    id: getUUID(),
    title: "Gully Boy",
    description:
      "Inspired by the lives of Indian street rappers Divine and Naezy, the film is a coming-of-age story about an aspiring street rapper from the Dharavi slums of Mumbai.",
    genre: "romance",
    maturity: "16",
  });

  /* Netflix ============================================ */
  //Romance
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Holidate",
    description: "Fed up with being single on holidays, two strangers agree to be each other's platonic plus-ones all year long, only to catch real feelings along the way.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "To All The Boys I've Loved Before 2",
    description: "As her relationship with Peter continues to grow, Lara Jean reunites with another recipient of one of her old love letters.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Ginny Weds Sunny",
    description: "Eager to marry but constantly rejected by women, a bachelor hopes to win over a former crush by accepting help from an unlikely source: her mother.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "The Kissing Booth",
    description: "Determined to make the most of her final summer before college, Elle plans the ultimate bucket list as she navigates what comes next with Noah and Lee.",
    genre: "romance",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Palm Springs",
    description: "Stuck in a time loop, two wedding guests develop a budding romance while living the same day over and over again.",
    genre: "romance",
    maturity: "13",
  });

  //Thriller
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Dhamaka",
    description: "When a cynical ex-TV news anchor gets an alarming call on his radio show, he sees a chance for a career comeback -- but it may cost him his conscience.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Red Notice",
    description: "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Haseen Dilruba",
    description: "A woman suspected of killing her husband narrates an interesting story about her marriage while investigating police officers look for clues to arrest her.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "6 Underground",
    description: "Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.",
    genre: "thriller",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Raat Akeli Hai",
    description: "When a newly married landlord is murdered, a misfit cop's investigation is complicated by the victim's secretive family.",
    genre: "thriller",
    maturity: "13",
  });

  //Action
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Venom",
    description: "Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.",
    genre: "action",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Naam Shabana",
    description: "Jai dies in an altercation with some gangsters, who are teasing Shabana. Later, Shabana gets a call offering help to avenge Jai's death provided that she agrees to join a secret intelligence agency.",
    genre: "action",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Madras Cafe",
    description: "Vikram, an Indian intelligence agent who visits Sri Lanka on a secret mission, finds himself embroiled in a civil war and a conspiracy to kill the former prime minister of India.",
    genre: "action",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Delhi Belly",
    description: "Tashi, Nitin and Arup, three strugglers who are also roommates, unknowingly become the target of a powerful gangster when they misplace his expensive diamonds.",
    genre: "action",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Phantom",
    description: "Daniyal, a disgraced Indian soldier, and Nawaz, who works for an American security agency, face many trials and tribulations while they go on a dangerous mission to kill 26/11 suspects.",
    genre: "action",
    maturity: "13",
  });
  //Comedy
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Murder Mystery",
    description: "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.",
    genre: "comedy",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Central Intelligence",
    description: "Accountant Calvin Joyner's life changes drastically after Bob Stone, his classmate in high school, drags him into a dubious covert operation.",
    genre: "comedy",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Phir Hera Pheri",
    description: "The lives of Raju, Shyam and Baburao change completely when they get cheated by a fraudster. Now, they must find another way to repay the loan they took from a dreaded gangster.",
    genre: "comedy",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Fukrey",
    description: "Hunny, Choocha, Lali and Zafar want to make easy money and approach the notorious Bholi to invest in their plan. But when they lose her money, they must come up with a plan or face the consequences.",
    genre: "comedy",
    maturity: "13",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Welcome",
    description: "Two thugs meet Rajiv, who belongs to a respectable family, and want to fix their sister's wedding with him. However, when Rajiv's uncle refuses to the match, a series of hilarious situations occur.",
    genre: "comedy",
    maturity: "13",
  });
  //Family
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "The Secret Life Of Pets 2",
    description: "At a farm, Max meets the sheepdog Rooster who tries to help him overcome his fears. Back home, Gidget loses Max's favourite toy, while Snowball tries to rescue a white tiger cub, Hu.",
    genre: "family",
    maturity: "7",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Hotel transylvania",
    description: "Count Dracula feels lonely and depressed while running his hotel for monsters. To show him a good time, his family books a luxury vacation cruise exclusively for monsters.",
    genre: "family",
    maturity: "7",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "The Lego Movie 2",
    description: "Five years after saving the world, Emmet sets out to rescue his friends from the mysterious planet Duplon and gets help from newcomer Rick Dangervest.",
    genre: "family",
    maturity: "7",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Pokemon Detective Pikachu",
    description: "After the demise of his father, Tim travels to Ryme city where he runs into his father's Pokemon partner, Pikachu. They team up and try to work on the case left unfinished by Tim's father.",
    genre: "family",
    maturity: "7",
  });
  firebase.firestore().collection("Netflix").add({
    id: getUUID(),
    title: "Vivo",
    description: "A music-loving kinkajou embarks on the journey of a lifetime to fulfill his destiny and deliver a love song for an old friend.",
    genre: "family",
    maturity: "7",
  });
}
