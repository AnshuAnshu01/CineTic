import logo from './logo.PNG';
import marvelLogo from './marvelLogo.svg';
import googlePlay from './googlePlay.svg';
import appStore from './appStore.svg';
import screenImage from './screenImage.svg';
import profile from './profile.png';

export const assets = {
  logo,
  marvelLogo,
  googlePlay,
  appStore,
  screenImage,
  profile
};

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoId: 'WpW36ldAqnM',
    title: 'Trailer 1'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmpNR2hLZ0tqUrXYLPzEp5Q-OAYvS62NigQ&s",
    videoId: 'xGQuT1wm2qk',
    title: 'Trailer 2'
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoId: '1pHDWnXmK7Y',
    title: 'Trailer 3'
  },
  {
    image: "https://static.toiimg.com/thumb/msid-122353655,imgsize-186392,width-400,resizemode-4/122353655.jpg",
    videoId: 'p7eE_dn9u4k',
    title: 'Trailer 4'
  },
  {
    image: "https://www.yashrajfilms.com/images/default-source/news1/saiyaaraeca22a1c-f19f-47fd-9f07-48618d3e7ebe.jpg?sfvrsn=572adecc_1",
    videoId: '9r-tT5IN0vg',
    title: 'Trailer 5'
  },
  {
    image: "https://i.ytimg.com/vi/2A_pLk9dgDY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3pfkxBEvWKP1cZ1EbIxe2jBuZGQ",
    videoId: 'L8Wfzxch7Xo',
    title: 'Trailer 6'
  },
  {
    image: "https://i.ytimg.com/vi/PKsVB1wPZ78/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCu8FoPhxanKlZxDZPpscTQbGGTbA",
    videoId: 'PKsVB1wPZ78',
    title: 'Trailer 7'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiXwstwzKvyDbIQBAJwsLM7RvL8jP5agYNg&s",
    videoId: 'vW86G9SYPjk',
    title: 'Trailer 8'
  }
];


const dummyCastsData = [
  { name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
  { name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
  { name: "Arly Jover", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
  { name: "Amara Okereke", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
  { name: "Fraser James", profile_path: "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg" },
  { name: "Deirdre Mullins", profile_path: "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg" },
  { name: "Sebastian Stankiewicz", profile_path: "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg" },
  { name: "Tue Lunding", profile_path: "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg" },
  { name: "Jacek Dzisiewicz", profile_path: "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg" },
  { name: "Ian Hanmore", profile_path: "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg" },
  { name: "Eveline Hall", profile_path: "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg" },
  { name: "Kamila Klamut", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
  { name: "Caoilinn Springall", profile_path: "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg" },
  { name: "Jan Kowalewski", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
  { name: "Pawel Wysocki", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
  { name: "Simon Lööf", profile_path: "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg" },
  { name: "Tomasz Cymerman", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" }
];

export const dummyShowsData = [
    {
    _id:"1001",
    id:1001,
    title: "War 2",
    overview: "A rogue agent teams up with an unlikely ally to stop a global conspiracy that threatens to plunge the world into chaos.",
    poster_path: "https://variety.com/wp-content/uploads/2025/05/War-2-poster.jpg?w=1000&h=667&crop=1",
    backdrop_path: "https://variety.com/wp-content/uploads/2025/05/War-2-poster.jpg?w=1000&h=667&crop=1",
    genres: [
      { id: 28, name: "Action" },
      { id: 53, name: "Thriller" }
    ],
    casts: dummyCastsData,
    release_date: "2025-08-14",
    original_language: "hi",
    tagline: "War knows no loyalty.",
    vote_average: 8.2,
    vote_count: 145000,
    runtime: 152,
    amount:50
  },
  {
    _id:"1002",
    id:1002,
    title: "Saiyaara",
    overview: "A coming-of-age romance set against the backdrop of college rivalry and dreams of stardom.",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/d/db/Saiyaara_film_poster.jpg",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/en/d/db/Saiyaara_film_poster.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" }
    ],
    casts: dummyCastsData,
    release_date: "2025-07-18",
    original_language: "hi",
    tagline: "Love beyond ambition.",
    vote_average: 7.4,
    vote_count: 92000,
    runtime: 134,
    showPrice:250
  },
  {
    _id:"1003",
    id:1003,
    title: "Housefull 5",
    overview: "A chaotic family holiday turns into a hilarious adventure as mistaken identities and double trouble unfold.",
    poster_path: "https://i.ytimg.com/vi/e2eX1HGeBFE/maxresdefault.jpg",
    backdrop_path: "https://i.ytimg.com/vi/e2eX1HGeBFE/maxresdefault.jpg",
    genres: [
      { id: 35, name: "Comedy" }
    ],
    casts: dummyCastsData,
    release_date: "2025-06-06",
    original_language: "hi",
    tagline: "Five times the fun, five times the madness!",
    vote_average: 6.8,
    vote_count: 102000,
    runtime: 148
  },
  {
    _id: "1004",
    id: 1004,
    title: "Dhadak 2",
    overview: "Two lovers from different social backgrounds fight for their right to love in a conservative society.",
    poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxE-KZZ3YFOK4yp-_iacB3DR2O11q7D9sHg&s",
    backdrop_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxE-KZZ3YFOK4yp-_iacB3DR2O11q7D9sHg&s",
    genres: [
      { id: 10749, name: "Romance" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-08-01",
    original_language: "hi",
    tagline: "Love is never easy.",
    vote_average: 7.0,
    vote_count: 86000,
    runtime: 142
  },
  {
    _id: "1005",
    id: 1005,
    title: "Phule",
    overview: "The story of Jyotiba and Savitribai Phule and their fight for social justice and education.",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/51/Phule_film_poster.jpeg",
    backdrop_path: "https://upload.wikimedia.org/wikipedia/en/5/51/Phule_film_poster.jpeg",
    genres: [
      { id: 36, name: "History" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-04-25",
    original_language: "hi",
    tagline: "Reforming a nation, one step at a time.",
    vote_average: 8.0,
    vote_count: 74000,
    runtime: 140
  },
  {
    _id: "1006",
    id: 1006,
    title: "Mission Mumbai",
    overview: "An undercover agent must dismantle a powerful crime syndicate in the heart of the city.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZjg1Mjg2NWYtN2NkZC00MDAyLTk4YzgtODg5NjA3M2UyMmU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZjg1Mjg2NWYtN2NkZC00MDAyLTk4YzgtODg5NjA3M2UyMmU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" }
    ],
    casts: dummyCastsData,
    release_date: "2025-05-15",
    original_language: "hi",
    tagline: "The city never sleeps. Neither does he.",
    vote_average: 7.5,
    vote_count: 87000,
    runtime: 130
  },
  {
    _id: "1007",
    id: 1007,
    title: "Jewel Thief: The Heist Begins",
    overview: "A notorious thief is back with the ultimate plan to steal a priceless diamond.",
    poster_path: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2gZ_n0jbTzvEhpzJFRYhLy48QsBbl4b51xhOlXSYLOITpMWKqxQvaAbx5JzmdMU7o81WOJg",
    backdrop_path: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2gZ_n0jbTzvEhpzJFRYhLy48QsBbl4b51xhOlXSYLOITpMWKqxQvaAbx5JzmdMU7o81WOJg",
    genres: [
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" }
    ],
    casts: dummyCastsData,
    release_date: "2025-04-10",
    original_language: "hi",
    tagline: "Every legend starts with a heist.",
    vote_average: 7.3,
    vote_count: 67000,
    runtime: 138
  },
  {
    _id: "1008",
    id: 1008,
    title: "The Great Tanvi",
    overview: "A young girl's dream to become a singer takes her from small-town struggles to national stardom.",
    poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb080KB3xe19kV8nSx10nMzRFOVCk_uTfAWX_YoWThYIqX-TM&s",
    backdrop_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb080KB3xe19kV8nSx10nMzRFOVCk_uTfAWX_YoWThYIqX-TM&s",
    genres: [
      { id: 18, name: "Drama" },
      { id: 10402, name: "Music" }
    ],
    casts: dummyCastsData,
    release_date: "2025-07-18",
    original_language: "hi",
    tagline: "Sing your story.",
    vote_average: 7.6,
    vote_count: 56000,
    runtime: 137
  },
  {
    _id: "1009",
    id: 1009,
    title: "Metro... In Dino",
    overview: "Interconnected stories of love and loneliness in the ever-moving metro city.",
    poster_path: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjDgQ3_aavt9OVNjE5oa-V3Z8hBJBwXpwFsw9LYT7jfzpTMd_GiAHrpWACHt2KJAgcSPdAqQ",
    backdrop_path: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjDgQ3_aavt9OVNjE5oa-V3Z8hBJBwXpwFsw9LYT7jfzpTMd_GiAHrpWACHt2KJAgcSPdAqQ",
    genres: [
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" }
    ],
    casts: dummyCastsData,
    release_date: "2025-06-20",
    original_language: "hi",
    tagline: "Every soul has a story.",
    vote_average: 7.1,
    vote_count: 61000,
    runtime: 144
  },
  {
    _id: "1010",
    id: 1010,
    title: "Heer Express",
    overview: "A hilarious train journey leads to unexpected friendships, chaos, and romance.",
    poster_path: "https://static.toiimg.com/thumb/msid-121722805,imgsize-37476,width-400,resizemode-4/121722805.jpg",
    backdrop_path: "https://static.toiimg.com/thumb/msid-121722805,imgsize-37476,width-400,resizemode-4/121722805.jpg",
    genres: [
      { id: 35, name: "Comedy" }
    ],
    casts: dummyCastsData,
    release_date: "2025-08-08",
    original_language: "hi",
    tagline: "All aboard the comedy express!",
    vote_average: 6.9,
    vote_count: 53000,
    runtime: 126
  },
    {
    _id: "1011",
    id: 1011,
    title: "Aankhon Ki Gustaakhiyan",
    overview: "A tale of two strangers whose eyes meet in a city of chaos and slowly fall into a timeless love.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BOWM2N2U3YjctODkzOS00ODkzLWExNGMtNjZhMzBmYzJkODU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BOWM2N2U3YjctODkzOS00ODkzLWExNGMtNjZhMzBmYzJkODU2XkEyXkFqcGc@._V1_.jpg",
    genres: [
      { id: 10749, name: "Romance" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-07-11",
    original_language: "hi",
    tagline: "Their eyes told stories words couldn’t.",
    vote_average: 7.7,
    vote_count: 69000,
    runtime: 136
  },
  {
    _id: "1012",
    id: 1012,
    title: "Param Sundari",
    overview: "A small-town girl's journey to becoming a viral sensation, overcoming stereotypes and doubts.",
    poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HHseSTadGGMwu7aBlYhdewKgm9QTAJnsdQ&s",
    backdrop_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HHseSTadGGMwu7aBlYhdewKgm9QTAJnsdQ&s",
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-08-22",
    original_language: "hi",
    tagline: "She’s not just pretty — she’s powerful.",
    vote_average: 7.0,
    vote_count: 51000,
    runtime: 128
  },
  {
    _id: "1013",
    id: 1013,
    title: "So Long Valley",
    overview: "An investigative journalist uncovers a forgotten village with a deadly secret buried for decades.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNDVjZGJjMDMtZDg5My00MjQwLTgwNzgtMjEwNzMzNzY3ZTNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDVjZGJjMDMtZDg5My00MjQwLTgwNzgtMjEwNzMzNzY3ZTNkXkEyXkFqcGc@._V1_.jpg",
    genres: [
      { id: 9648, name: "Mystery" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-07-25",
    original_language: "hi",
    tagline: "Some truths should remain buried.",
    vote_average: 7.9,
    vote_count: 62000,
    runtime: 139
  },
  {
   _id: "1014",
  id: 1014,
  title: "Sanam Teri Kasam",
  overview: "A touching love story of two star-crossed individuals, whose love story transcends time, fate, and heartbreak.",
  poster_path: "https://m.media-amazon.com/images/M/MV5BYTJmYmI0YWQtYjI3MC00MWU4LWI2OTQtNDYyOGEyNThjZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  backdrop_path: "https://m.media-amazon.com/images/M/MV5BYTJmYmI0YWQtYjI3MC00MWU4LWI2OTQtNDYyOGEyNThjZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  genres: [
    { id: 10749, name: "Romance" },
    { id: 18, name: "Drama" }
  ],
  casts: dummyCastsData,
  release_date: "2016-02-05",
  original_language: "hi",
  tagline: "A love story sealed with a curse.",
  vote_average: 7.5,
  vote_count: 47000,
  runtime: 154
  },
  {
    _id: "1015",
    id: 1015,
    title: "Rasa",
    overview: "A mythological fantasy adventure where a boy must fulfill a prophecy to restore cosmic balance.",
    poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zyTQfFMXUyQwpvF8VnB-nZTO4GCKEE6JVA&s",
    backdrop_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zyTQfFMXUyQwpvF8VnB-nZTO4GCKEE6JVA&s",
    genres: [
      { id: 14, name: "Fantasy" },
      { id: 12, name: "Adventure" }
    ],
    casts: dummyCastsData,
    release_date: "2025-07-25",
    original_language: "hi",
    tagline: "A journey through realms, bound by faith.",
    vote_average: 7.5,
    vote_count: 58000,
    runtime: 145
  },
  {
    _id: "1016",
    id: 1016,
    title: "Superboys of Malegaon",
    overview: "A hilarious yet touching documentary-style film about small-town filmmakers with big dreams.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNTllODgyODEtMTk4Zi00YzRlLWEzNDUtMjAwYmZiMDk2MTkxXkEyXkFqcGc@._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNTllODgyODEtMTk4Zi00YzRlLWEzNDUtMjAwYmZiMDk2MTkxXkEyXkFqcGc@._V1_.jpg",
    genres: [
      { id: 35, name: "Comedy" },
      { id: 99, name: "Documentary" }
    ],
    casts: dummyCastsData,
    release_date: "2025-02-28",
    original_language: "hi",
    tagline: "Dreams shot on a budget.",
    vote_average: 8.3,
    vote_count: 49000,
    runtime: 119
  },
  {
    _id: "1017",
    id: 1017,
    title: "Sarzameen",
    overview: "A mother uncovers a web of lies after her son is accused of being a terrorist.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNzUwNTQwMzMtODZhYy00MGFiLTkwYzMtMWRiMDY1ZmFiZDljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNzUwNTQwMzMtODZhYy00MGFiLTkwYzMtMWRiMDY1ZmFiZDljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" }
    ],
    casts: dummyCastsData,
    release_date: "2025-07-25",
    original_language: "hi",
    tagline: "The truth is a battle no one wants to fight.",
    vote_average: 7.8,
    vote_count: 67000,
    runtime: 132
  },
  {
    _id: "1018",
    id: 1018,
    title: "Baaghi 4",
    overview: "A renegade fighter returns to save his country from a bio-terror threat.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYTRkNDdlZDItMWMzYi00ZDEzLTgyNDQtNGZmM2UxZTY5YmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BYTRkNDdlZDItMWMzYi00ZDEzLTgyNDQtNGZmM2UxZTY5YmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 53, name: "Thriller" }
    ],
    casts: dummyCastsData,
    release_date: "2025-09-05",
    original_language: "hi",
    tagline: "His rebellion has just begun.",
    vote_average: 6.9,
    vote_count: 88000,
    runtime: 144
  },
  {
    _id: "1019",
    id: 1019,
    title: "Mere Husband Ki Biwi",
    overview: "Chaos ensues when a woman finds out her husband might be in love with someone else — and it’s her!",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNDgxNDlkYjgtMWZiZS00ZTk0LWIxNDMtYzZkYjQ5ZWI4OWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNDgxNDlkYjgtMWZiZS00ZTk0LWIxNDMtYzZkYjQ5ZWI4OWYyXkEyXkFqcGc@._V1_.jpg",
    genres: [
      { id: 35, name: "Comedy" },
      { id: 10749, name: "Romance" }
    ],
    casts: dummyCastsData,
    release_date: "2025-02-21",
    original_language: "hi",
    tagline: "Love triangle just got personal.",
    vote_average: 6.8,
    vote_count: 44000,
    runtime: 124
  },
  {
    _id: "1020",
    id: 1020,
    title: "Son of Sardaar 2",
    overview: "Jassi is back, older but no less wild, to protect his family from an old feud reignited.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTU0Y2YxMmEtZTNiNS00OGI0LTgxNDUtOGViNDM4ZWM4YmM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMTU0Y2YxMmEtZTNiNS00OGI0LTgxNDUtOGViNDM4ZWM4YmM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 35, name: "Comedy" }
    ],
    casts: dummyCastsData,
    release_date: "2025-08-01",
    original_language: "hi",
    tagline: "Some legacies refuse to die.",
    vote_average: 6.7,
    vote_count: 57000,
    runtime: 143
  }
];



export const dummyDateTimeData = {
  "2025-08-01": [
    { time: "2025-07-24T01:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
    { time: "2025-07-24T03:00:00.000Z", showId: "68395b407f6329be2bb45bd2" },
    { time: "2025-07-24T05:00:00.000Z", showId: "68395b407f6329be2bb45bd3" }
  ],
  "2025-08-02": [
    { time: "2025-07-25T01:00:00.000Z", showId: "68395b407f6329be2bb45bd4" },
    { time: "2025-07-25T03:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
    { time: "2025-07-25T05:00:00.000Z", showId: "68395b407f6329be2bb45bd6" }
  ],
  "2025-08-03": [
    { time: "2025-07-26T01:00:00.000Z", showId: "68395b407f6329be2bb45bd7" },
    { time: "2025-07-26T03:00:00.000Z", showId: "68395b407f6329be2bb45bd8" },
    { time: "2025-07-26T05:00:00.000Z", showId: "68395b407f6329be2bb45bd9" }
  ],
  "2025-08-04": [
    { time: "2025-07-27T01:00:00.000Z", showId: "68395b407f6329be2bb45bda" },
    { time: "2025-07-27T03:00:00.000Z", showId: "68395b407f6329be2bb45bdb" },
    { time: "2025-07-27T05:00:00.000Z", showId: "68395b407f6329be2bb45bdc" }
  ]
};

export const dummyDashboardData = {
  totalBookings: 14,
  totalRevenue: 1517,
  totalUser: 5,
  activeShows: [
    {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221a9",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T03:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221aa",
      movie: dummyShowsData[3],
      showDateTime: "2025-07-15T16:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "683682072b5989c29fc6dc0d",
      movie: dummyShowsData[4],
      showDateTime: "2025-06-05T15:30:00.000Z",
      showPrice: 49,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
      __v: 0,
    },
    {
      _id: "68380044686d454f2116b39a",
      movie: dummyShowsData[5],
      showDateTime: "2025-06-20T16:00:00.000Z",
      showPrice: 79,
      occupiedSeats: {
        A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
      },
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "Anshuman" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 98,
    bookedSeats: ["D1", "D2"],
    isPaid: false,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 49,
    bookedSeats: ["A1"],
    isPaid: true,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 147,
    bookedSeats: ["A1", "A2", "A3"],
    isPaid: true,
  },
];


// export const dummyDateTimeData = [
//   {
//     date: "2025-08-01",
//     theater: "INOX Bhubaneswar Mall",
//     timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "PVR KIIT Square",
//     timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "Cinepolis Esplanade",
//     timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "Maya Cinemas Cuttack",
//     timings: ["10:45 AM", "1:45 PM", "4:45 PM", "7:45 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "Keshari Talkies",
//     timings: ["10:15 AM", "1:15 PM", "4:15 PM", "7:15 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "Rajhans Cinemas Saheed Nagar",
//     timings: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "Stutee Galaxy Patia",
//     timings: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "Premiere Multiplex Janpath",
//     timings: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "INOX DN Regalia",
//     timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
//   },
//   {
//     date: "2025-08-01",
//     theater: "PVR Forum Esplanade",
//     timings: ["9:45 AM", "12:45 PM", "3:45 PM", "6:45 PM"]
//   }
// ];
