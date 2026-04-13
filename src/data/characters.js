const Characters = [
  {
    id: "invincible",
    name: "Mark Grayson",
    alias: "Invincible",
    role: "Main Cast",
    description:
      "Mark is a typical high school student until he begins developing the incredible powers of his alien father. He struggles to balance his normal teenage life with the heavy responsibility of being Earth's newest protector. As he trains, he learns that being a hero requires much more than just physical strength.",
    powers: ["Superhuman strength", "Flight", "Speed", "Invulnerability"],
    status: "hero",
    image: "invincible.jpg"
  },

  {
    id: "omni-man",
    name: "Nolan Grayson",
    alias: "Omni-Man",
    role: "Main Cast",
    description:
      "Nolan is a powerful Viltrumite warrior who was sent to Earth to serve as its greatest superhero. He hides a dark imperialist agenda from his human family while pretending to be a benevolent guardian. His complex loyalty to his home planet eventually leads to a violent confrontation with his own son.",
    powers: ["Superhuman strength", "Interstellar flight", "Longevity", "Nigh-Invulnerability"],
    status: "enemy",
    image: "omniman-nolan.jpg"
  },

  {
    id: "atom-eve",
    name: "Samantha Eve Wilkins",
    alias: "Atom Eve",
    role: "Main Cast",
    description:
      "Eve is a brilliant hero who possesses the unique ability to manipulate matter at the molecular level. She decides to leave traditional superhero teams to use her powers for humanitarian efforts across the globe. Her journey focuses on finding her own path and defining what it truly means to help people.",
    powers: ["Subatomic transmutation", "Energy shields", "Flight"],
    status: "hero",
    image: "eve.jpg"
  },

  {
    id: "the-immortal",
    name: "Unknown",
    alias: "The Immortal",
    role: "Guardians of the Globe",
    description:
      "This legendary hero has lived for thousands of years and has witnessed the rise and fall of many civilizations. As the leader of the Guardians, he provides a stern and experienced voice to the world's premier superhero team. His unique physiology allows him to be resurrected even after suffering what would be fatal wounds for others.",
    powers: ["Resurrection", "Super strength", "Flight"],
    status: "hero",
    image: "the-immortal.jpg"
  },

  {
    id: "war-woman",
    name: "Holly",
    alias: "War Woman",
    role: "Guardians of the Globe",
    description:
      "Holly is a fierce warrior from an ancient culture who co-founded the original Guardians of the Globe. She wields a powerful enchanted mace and possesses combat skills that rival the most experienced fighters on Earth. Her dedication to justice is unmatched, making her a cornerstone of global security until the team's tragic end.",
    powers: ["Superhuman strength", "Combat mastery", "Weapon proficiency"],
    status: "hero",
    image: "holly-war-woman.jpg"
  },

  {
    id: "darkwing",
    name: "Unknown",
    alias: "Darkwing",
    role: "Guardians of the Globe",
    description:
      "This mysterious vigilante protects the streets of Midnight City using advanced gadgets and shadow-based tactics. He relies on his peak human athleticism and brilliant tactical mind to overcome much more powerful supernatural threats. As a core member of the Guardians, he proves that bravery and intellect are just as vital as raw power.",
    powers: ["Peak athleticism", "Advanced gadgets", "Shadow manipulation"],
    status: "hero",
    image: "darkwing.jpg"
  },

  {
    id: "red-rush",
    name: "Josef",
    alias: "Red Rush",
    role: "Guardians of the Globe",
    description:
      "Josef is a Russian speedster whose incredible velocity allows him to save lives in the blink of an eye. Because he moves so fast, he perceives the rest of the world as if it is standing perfectly still. This unique perspective makes every conversation a challenge, yet he remains deeply devoted to his wife and his heroic duties.",
    powers: ["Super speed", "Reflexes"],
    status: "hero",
    image: "josef-redwing.jpg"
  },

  {
    id: "mauler-twins",
    name: "Mauler Twins",
    alias: "The Maulers",
    role: "Main Enemies",
    description:
      "These blue-skinned genius scientists are master cloners who provide heavy muscle and high-tech weaponry to the underworld. They are trapped in a constant argument over which one is the original creator and which is merely the duplicate. Despite their bickering, their combined intellect makes them a persistent and dangerous threat to the global order.",
    powers: ["Super strength", "Genius intellect", "Cloning technology"],
    status: "enemy",
    image: "mauler-twins.jpg"
  },

  {
    id: "battle-beast",
    name: "Thokk",
    alias: "Battle Beast",
    role: "Main Enemies",
    description:
      "Thokk is an intergalactic warrior who travels across the universe in search of an opponent strong enough to defeat him. He views most planetary conflicts as beneath his dignity and only participates when he senses a truly worthy challenge. His raw physical power and savage combat style make him one of the most feared entities in the cosmos.",
    powers: ["Vast physical strength", "Advanced combat skills"],
    status: "enemy",
    image: "battle-beast.jpg"
  },

  {
    id: "machine-head",
    name: "Unknown",
    alias: "Machine Head",
    role: "Main Enemies",
    description:
      "This cyborg crime lord runs the city's most powerful criminal syndicate with a computer-chip brain. His technological enhancements allow him to calculate every possible outcome of a battle before the first punch is thrown. He uses his immense wealth to hire deadly mercenaries, ensuring that his grip on the underworld remains absolute.",
    powers: ["Probability calculation", "Enhanced technology", "Wealth"],
    status: "enemy",
    image: "machine-head.jpg"
  },

  {
    id: "sequids",
    name: "The Host",
    alias: "Sequids",
    role: "Main Enemies",
    description:
      "The Sequids are a parasitic hive-mind species that originated on the planet Mars. They are harmless individually but become a world-ending threat once they find a biological host to link their minds. Their goal is to swarm across the galaxy and absorb every living creature into their singular, collective consciousness.",
    powers: ["Hive-mind intelligence", "Mass-swarming", "Host possession"],
    status: "enemy",
    image: "sequids.jpg"
  },

  {
    id: "angstrom-levy",
    name: "Angstrom Levy",
    alias: "Levy",
    role: "Main Enemies",
    description:
      "Angstrom is a brilliant scientist who gained the ability to open portals to infinite alternate dimensions. After a tragic accident, he blames Invincible for his suffering and embarks on a multiversal quest for revenge. He uses his knowledge of different timelines to gather weapons and secrets that can destroy his enemies.",
    powers: [
      "Dimensional travel",
      "Enhanced intellect",
      "Multiversal knowledge",
    ],
    status: "enemy",
    image: "angstrom.jpg"
  },

];
export default Characters;


// filters through charachters to get all the heores
export const getHeroCharacter = selectedHero => {
  return Characters.filter(( persons ) => persons.status === selectedHero)
}

// filters through charachters to get all enemies
export const getEnemyCharacter = selectedEnemy => {
  return Characters.filter(( persons ) => persons.status === selectedEnemy)
}


export const getCharacterById = (id) => {
  return Characters.find(( persons ) => persons.id === id);
};