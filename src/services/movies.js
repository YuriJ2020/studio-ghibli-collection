import _ from "lodash";

const movies = [
  {
    _id: "1",
    img: `${process.env.PUBLIC_URL}/movie-images/1-nausicaa.png`,
    title: "Nausicaä of the Valley of the Wind",
    released: "1984",
    description:
      "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    URL: "#",
    category: { _id: "103", name: "War" },
  },
  {
    _id: "2",
    img: `${process.env.PUBLIC_URL}/movie-images/2-castle.png`,
    title: "Castle in the Sky",
    released: "1986",
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa.",
    URL: "#",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "3",
    img: `${process.env.PUBLIC_URL}/movie-images/3-totoro.png`,
    title: "My Neighbor Totoro",
    released: "1988",
    description:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros.",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "4",
    img: `${process.env.PUBLIC_URL}/movie-images/4-hotaru.png`,
    title: "Grave of the Fireflies",
    released: "1988",
    description:
      "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan.",
    URL: "#",
    category: { _id: "103", name: "War" },
  },
  {
    _id: "5",
    img: `${process.env.PUBLIC_URL}/movie-images/5-majo.png`,
    title: "Kiki's Delivery Service",
    released: "1989",
    description:
      "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "6",
    img: `${process.env.PUBLIC_URL}/movie-images/6-omoide.png`,
    title: "Only Yesterday",
    released: "1991",
    description:
      "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years.",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "7",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Porco Rosso",
    released: "1992",
    description:
      " You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. ",
    URL: "#",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "8",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Ocean Waves",
    released: "1993",
    description:
      " Taku is a young man at a train station in Tokyo when he spots a familiar face on another platform.",
    URL: "#",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "9",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Pom Poko",
    released: "1994",
    description:
      "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    URL: "#",
    category: { _id: "105", name: "Nature" },
  },
  {
    _id: "10",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Whisper of the Heart",
    released: "1995",
    description:
      "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'.",
    URL: "#",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "11",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Princess Mononoke",
    released: "1997",
    description:
      "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it.",
    URL: "#",
    category: { _id: "105", name: "Nature" },
  },
  {
    _id: "12",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "My Neighbors the Yamadas",
    released: "1999",
    description:
      "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. ",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "13",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Spirited Away",
    released: "2001",
    description:
      "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals.",
    URL: "#",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "14",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "The Cat Returns",
    released: "2002",
    description:
      "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined.",
    URL: "#",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "15",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Howl's Moving Castle",
    released: "2004",
    description:
      "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    URL: "#",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "16",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Tales from Earthsea",
    released: "2006",
    description:
      "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans.",
    URL: "#",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "17",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Ponyo",
    released: "2008",
    description:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. ",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "18",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "Arrietty",
    released: "2010",
    description:
      "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "19",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "From Up on Poppy Hill",
    released: "2011",
    description:
      "Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. ",
    URL: "#",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "20",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "The Wind Rises",
    released: "2013",
    description:
      "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    URL: "#",
    category: { _id: "103", name: "War" },
  },
  {
    _id: "21",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "The Tale of the Princess Kaguya",
    released: "2013",
    description:
      "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "22",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "When Marnie Was There",
    released: "2014",
    description:
      " Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. ",
    URL: "#",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "23",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    title: "The Red Turtle ",
    released: "2016",
    description:
      "Surrounded by the immense and furious ocean, a shipwrecked mariner battles for his life with the relentless towering waves. ",
    URL: "#",
    category: { _id: "105", name: "Nature" },
  },
];

export const getMovies = () => movies;
export const getMovieByID = (id) => _.find(movies, { _id: id });
