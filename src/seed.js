export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Hotstar
    ============================================ */
  // Family
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Mary Poppins',
    description:
      'Mr Banks is looking for a nanny for his two mischievous children and comes across Mary Poppins, an angelic nanny. She not only brings a change in their lives but also spreads happiness.',    
      genre: 'family',
    maturity: 'All',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'The Lion King',
    description:
     'Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.',
    genre: 'family',
    maturity: '7',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Wall-E',
    description:
      'A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind.',
    genre: 'family',
    maturity: '7',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'The Many Adventures of Winnie the Pooh',
    description:
      'Pooh, an adorable bear, and his lovable friends embark on an epic adventure as they sing, dance and chase bees through the Hundred Acre Woods.',
    genre: 'family',
    maturity: '7',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Soul',
    description:
      ' A jazz musician, stuck in a mediocre job, finally gets his big break. However, when a wrong step takes him to the Great Before, he tries to help an infant soul in order to return to reality.',
    genre: 'family',
    maturity: '7',
  });
  
  //Action
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Avengers: Infinity War',
    description:
      'The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.',
    genre: 'action',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Avengers: Endgame',
    description:
      'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
    genre: 'action',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Star Wars: A New Hope',
    description:
      'Princess Leia gets abducted by the insidious Darth Vader. Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to free her and to save the galaxy from the violent Galactic Empire.',
    genre: 'action',
    maturity: '7',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Star Wars: The Empire Strikes Back',
    description:
      'Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.',
    genre: 'action',
    maturity: '7',
  }); 
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Guardians of the Galaxy',
    description:
      'Peter escapes from the planet Morag with a valuable orb that Ronan the Accuser wants. He eventually forms a group with unwilling heroes to stop Ronan.',
    genre: 'action',
    maturity: '13',
  });

  //Thriller
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Baby',
    description:
      'An elite team of the Indian intelligence system perpetually strives to detect and eliminate terrorists and their plots. Officer Ajay leads a team to destroy one such potentially lethal operation.',
    genre: 'thriller',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Talvar',
    description:
      'A hardened investigator deals with conflicting perspectives involving a brutal double murder. The case gets complicated when the parents of the murdered girl emerge as the prime suspects.',
    genre: 'thriller',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Drishyam',
    description:
      'When the disappearance of a policewomans son threatens to ruin Vijays family, he leaves no stone unturned in order to shield his family.',
    genre: 'thriller',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Neerja',
    description:
      'Neerja, a flight attendant, boards Pan Am flight 73 in 1986. When the flight is hijacked by terrorists, Neerja risks her life to stall the terrorists from attacking the passengers on board.',
    genre: 'thriller',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Pink',
    description:
      'After being molested, Minal, along with her friends, tries to file an FIR against a politicians nephew. When the subsequent case gets rigged, Deepak, a retired lawyer, helps them to fight the case.',
    genre: 'thriller',
    maturity: '13',
  });

  // Scifi
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Free Guy',
    description:
      'When a bank teller discovers hes actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where theres no limits, hes determined to save the day his way before its too late, and maybe find a little romance with the coder who conceived him.',
    genre: 'scifi',
    maturity: '15',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Black Widow',
    description:
      'Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past.',
    genre: 'scifi',
    maturity: '15',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Maze Runner; The Death Cure',
    description:
      'When a deadly disease called the Flare breaks out, Thomas and his group of escaped Gladers break into the Last City to find the cure and save their friends.',
    genre: 'scifi',
    maturity: '15',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Tomorrowland',
    description:
      'Frank, a former inventor, and Casey, a curious teenager, embark on a dangerous mission to unravel the secrets of Tomorrowland, an unexplored dimension in time and space.',
    genre: 'scifi',
    maturity: '15',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Independence Day : Resurgence',
    description:
      'Frank, a former inventor, and Casey, a curious teenager, embark on a dangerous mission to unravel the secrets of Tomorrowland, an unexplored dimension in time and space.',
    genre: 'scifi',
    maturity: '15',
  });

  // Romance
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Love, Simon',
    description:
      'Simon Spier keeps his sexual orientation a secret from his family. However, when a blackmailer threatens to reveal it, he goes on a roller-coaster journey to come to terms with his identity.',
    genre: 'romance',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Pretty Woman',
    description:
      'Edward, a rich entrepreneur, hires Vivian, a prostitute, to accompany him to a few social events. Trouble ensues when he falls in love with her and they try to bridge the gap between their worlds.',
    genre: 'romance',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'The beauty and the beast',
    description:
      'Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.',
    genre: 'romance',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: '27 Dresses',
    description:
      'After serving as a bridesmaid 27 times, Jane is shocked when her younger sister announces her engagement to the man she loves. Meanwhile, she also meets a cynical journalist who has a hidden agenda.',
    genre: 'romance',
    maturity: '13',
  });
  firebase.firestore().collection('Hotstar').add({
    id: getUUID(),
    title: 'Aladdin',
    description:
      'Aladdin, a kind thief, woos Jasmine, the princess of Agrabah, with the help of Genie. When Jafar, the grand vizier, tries to usurp the king, Jasmine, Aladdin and Genie must stop him from succeeding.',
    genre: 'romance',
    maturity: '13',
  });
}
