import _ from "lodash";

const movies = [
  {
    _id: "1",
    rank: "17",
    img: `${process.env.PUBLIC_URL}/movie-images/1-nausicaa.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/nausicaa.jpg`,
    title: "Nausicaä of the Valley of the Wind",
    directed: "Miyazaki Hayao",
    released: "1984",
    runtime: 120,
    description:
      "Nausicaä is a charismatic young princess of the peaceful Valley of the Wind. Although a skillful fighter, Nausicaä is humane and peace-loving. She has an unusual gift for communicating with the giant insects (particularly with the Ohmu, gigantic, armored, caterpillar- or isopod-like insects who are the most intelligent creatures in the Toxic Jungle.) She is also noted for her empathy toward animals, humans, and other beings. ",
    category: { _id: "103", name: "War" },
  },
  {
    _id: "2",
    rank: "20",
    img: `${process.env.PUBLIC_URL}/movie-images/2-castle.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/laputa.jpg`,
    title: "Castle in the Sky",
    directed: "Miyazaki Hayao",
    released: "1986",
    runtime: 120,
    description:
      "One peaceful night, a skyliner travels through the clouds. Aboard, amongst the civilian passengers, are Sheeta, owner of a strange blue stone necklace, and Colonel Muska, the government secret agent who abducted her. Suddenly and without warning, Dola and her gang of air pirates attack the airship in search of Sheeta and her stone. The pirates invade the ship and, during the ensuing chaos, Sheeta manages to knock Muska unconscious and retrieve her stone. The pirates break into Sheeta's room, and she attempts to hide by clinging to the exterior of the ship. However, she loses her grip and plummets into the night sky.",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "3",
    rank: "19",
    img: `${process.env.PUBLIC_URL}/movie-images/3-totoro.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/totoro.jpg`,
    title: "My Neighbor Totoro",
    directed: "Miyazaki Hayao",
    released: "1988",
    runtime: 120,
    description:
      "This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "4",
    rank: "21",
    img: `${process.env.PUBLIC_URL}/movie-images/4-hotaru.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/kazetachinu.jpg`,
    title: "Grave of the Fireflies",
    directed: "Miyazaki Hayao",
    released: "1988",
    runtime: 120,
    description:
      "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    category: { _id: "103", name: "War" },
  },
  {
    _id: "5",
    rank: "12",
    img: `${process.env.PUBLIC_URL}/movie-images/5-majo.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/majo.jpg`,
    title: "Kiki's Delivery Service",
    directed: "Miyazaki Hayao",
    released: "1989",
    runtime: 120,
    description:
      "Under the shining full moon, people gather to send Kiki off. Kiki, a witch-in-training, is now 13 years old and according to a tradition, she has to leave her home to spend a year alone in a new town to establish herself as a full witch. Kissing her mom and dad good-bye, Kiki sets herself on her mother's broom with her father's transistor radio and her closest companion, Jiji the black cat, at her side. And she flies off - to a new town, to a new adventure, and to a new life. Finding herself a beautiful seaside city of Korico, Kiki sets up a flying delivery service, to take advantage of the only magic she knows - flying a broom.",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "6",
    rank: "14",
    img: `${process.env.PUBLIC_URL}/movie-images/6-omoide.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/omoide.jpg`,
    title: "Only Yesterday",
    directed: "Miyazaki Hayao",
    released: "1991",
    runtime: 120,
    description:
      "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "7",
    rank: "9",
    img: `${process.env.PUBLIC_URL}/movie-images/7-buta.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/porco.jpg`,
    title: "Porco Rosso",
    directed: "Miyazaki Hayao",
    released: "1992",
    runtime: 120,
    description:
      "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "8",
    rank: "22",
    img: `${process.env.PUBLIC_URL}/movie-images/8-umi.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/umi.jpg`,
    title: "Ocean Waves",
    directed: "Miyazaki Hayao",
    released: "1993",
    runtime: 120,
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "9",
    rank: "10",
    img: `${process.env.PUBLIC_URL}/movie-images/9-tanuki.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/tanuki.jpg`,
    title: "Pom Poko",
    directed: "Miyazaki Hayao",
    released: "1994",
    runtime: 120,
    description:
      "The story begins in late 1960s Japan. A group of tanuki are threatened by a gigantic suburban development project called New Tama, in the Tama Hills on the outskirts of Tokyo. The development is cutting into their forest habitat and dividing their land. The story resumes in early 1990s Japan, during the early years of the Heisei era. With limited living space and food decreasing every year, the tanuki begin fighting among themselves for the diminishing resources, but at the urging of the matriarch Oroku, they decide to unify to stop the development.Several tanuki lead the resistance, including the aggressive chief Gonta, the old guru Seizaemon, the wise-woman Oroku, and the young and resourceful Shoukichi.",
    category: { _id: "105", name: "Nature" },
  },
  {
    _id: "10",
    rank: "15",
    img: `${process.env.PUBLIC_URL}/movie-images/10-mimi.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/mimi.jpg`,
    title: "Whisper of the Heart",
    directed: "Miyazaki Hayao",
    released: "1995",
    runtime: 120,
    description:
      "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "11",
    rank: "7",
    img: `${process.env.PUBLIC_URL}/movie-images/11-mononoke.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/mononoke.jpg`,
    title: "Princess Mononoke",
    directed: "Miyazaki Hayao",
    released: "1997",
    runtime: 120,
    description:
      "In Muromachi Japan, an Emishi village is attacked by a demon. The last Emishi prince, Ashitaka, kills it before it reaches the village, but its corruption curses his right arm. The curse gives him superhuman strength, but will eventually spread through his body and kill him. The villagers discover that the demon was a boar god, Nago, corrupted by an iron ball lodged in his body. The village's wise woman tells Ashitaka that he may find a cure in the western lands Nago came from, but he cannot return to his homeland.",
    category: { _id: "105", name: "Nature" },
  },
  {
    _id: "12",
    rank: "23",
    img: `${process.env.PUBLIC_URL}/movie-images/12-yamada.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/totoro.jpg`,
    title: "My Neighbors the Yamadas",
    directed: "Miyazaki Hayao",
    released: "1999",
    runtime: 120,
    description:
      "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "13",
    rank: "1",
    img: `${process.env.PUBLIC_URL}/movie-images/13-chihiro.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/chihiro.jpg`,
    title: "Spirited Away",
    directed: "Miyazaki Hayao",
    released: "2001",
    runtime: 120,
    description:
      "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "14",
    rank: "8",
    img: `${process.env.PUBLIC_URL}/movie-images/14-neko.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/neko.jpg`,
    title: "The Cat Returns",
    directed: "Miyazaki Hayao",
    released: "2002",
    runtime: 120,
    description:
      "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",

    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "15",
    rank: "2",
    img: `${process.env.PUBLIC_URL}/movie-images/15-howl.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/howl.jpg`,
    title: "Howl's Moving Castle",
    directed: "Miyazaki Hayao",
    released: "2004",
    runtime: 120,
    description:
      "Sophie has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl, who lives in a magical flying castle. However, the evil Witch of Waste takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty..",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "16",
    rank: "7",
    img: `${process.env.PUBLIC_URL}/movie-images/16-gedo.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/gedo.jpg`,
    title: "Tales from Earthsea",
    directed: "Miyazaki Hayao",
    released: "2006",
    runtime: 120,
    description:
      "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
    category: { _id: "101", name: "Fantasy" },
  },
  {
    _id: "17",
    rank: "4",
    img: `${process.env.PUBLIC_URL}/movie-images/17-ponyo.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/ponyo.jpg`,
    title: "Ponyo",
    directed: "Miyazaki Hayao",
    released: "2008",
    runtime: 120,
    description:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    URL: "#",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "18",
    rank: "6",
    img: `${process.env.PUBLIC_URL}/movie-images/18-ari.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/ari.jpg`,
    title: "Arrietty",
    directed: "Miyazaki Hayao",
    released: "2010",
    runtime: 120,
    description:
      "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    category: { _id: "102", name: "Family" },
  },
  {
    _id: "19",
    rank: "11",
    img: `${process.env.PUBLIC_URL}/movie-images/19-kokuriko.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/kokuriko.jpg`,
    title: "From Up on Poppy Hill",
    directed: "Miyazaki Hayao",
    released: "2011",
    runtime: 120,
    description:
      "The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means “I pray for safe voyages”. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "20",
    rank: "5",
    img: `${process.env.PUBLIC_URL}/movie-images/20-kazetachinu.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/kaze.jpg`,
    title: "The Wind Rises",
    directed: "Miyazaki Hayao",
    released: "2013",
    runtime: 120,
    description:
      "Young Jiro Horikoshi is a nearsighted boy who has fantastical dreams of flying airplanes, swooping above the green fields of his country, the landscape unfurling below him like a magical land of possibility. Being a pilot is closed to him due to his eyesight, but he decides to go to school to be an engineer and design those beautiful dreams for others to fly. Through this endeavor, he is encouraged by an Italian aircraft pioneer, a Count Caproni, who is a muse-like character appearing to him in dreams, showing him the glorious possibilities of flight and the gigantic flying machines he has built, giving the young Japanese boy a sense of how far one can go in one's imagination. ",

    category: { _id: "103", name: "War" },
  },
  {
    _id: "21",
    rank: "16",
    img: `${process.env.PUBLIC_URL}/movie-images/21-kaguya.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/kaguya.jpg`,
    title: "The Tale of the Princess Kaguya",
    directed: "Miyazaki Hayao",
    released: "2013",
    runtime: 120,
    description:
      "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",

    category: { _id: "102", name: "Family" },
  },
  {
    _id: "22",
    rank: "13",
    img: `${process.env.PUBLIC_URL}/movie-images/22-mani.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/marnie.jpg`,
    title: "When Marnie Was There",
    directed: "Miyazaki Hayao",
    released: "2014",
    runtime: 120,
    description:
      "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
    category: { _id: "104", name: "Romance" },
  },
  {
    _id: "23",
    rank: "21",
    img: `${process.env.PUBLIC_URL}/movie-images/23-red.png`,
    imgDetail: `${process.env.PUBLIC_URL}/movie-images-detail/redturtle.jpg`,
    title: "The Red Turtle ",
    directed: "Miyazaki Hayao",
    released: "2016",
    runtime: 120,
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    category: { _id: "105", name: "Nature" },
  },
];

export const getMovieByID = (mid) => _.find(movies, { _id: mid });
export const getMovies = () => movies;
export const getMoviesByCategoryID = (cid) =>
  _.filter(movies, (m) => _.get(m, "category._id") === cid);
