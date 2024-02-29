const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    title: "Pulp Fiction",
    year: 1995,
    director: "Quentin Tarantino",
    duration: "2h 29min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/17/06/12/10/21/182251.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "2h 49min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img2.acsta.net/c_310_420/pictures/14/10/02/11/07/341344.jpg",
  },
  {
    title: "Se7en",
    year: 1996,
    director: "David Fincher",
    duration: "2h 10min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/69/04/89/19757783.jpg",
  },
  {
    title: "El silencio de los corderos",
    year: 1991,
    director: "Jonathan Demme",
    duration: "1h 58min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/74/29/15/19757760.jpg",
  },
  {
    title: "Memento",
    year: 2000,
    director: "Christopher Nolan",
    duration: "1h 55min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://pics.filmaffinity.com/memento-230609861-mmed.jpg",
  },
  {
    title: "Réquiem por un sueño",
    year: 2001,
    director: "Darren Aronofsky",
    duration: "1h 42min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/11/71/20081723.jpg",
  },
  {
    title: "Shutter Island",
    year: 2010,
    director: "Martin Scorsese",
    duration: "2h 17min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/69/96/74/19239968.jpg",
  },
  {
    title: "Donnie Darko",
    year: 2002,
    director: "Richard Kelly",
    duration: "1h 53min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/68/79/41/20078179.jpg",
  },
  {
    title: "The Prestige",
    year: 2007,
    director: "Christopher Nolan",
    duration: "2h 08min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://pics.filmaffinity.com/the_prestige-464630296-mmed.jpg",
  },
  {
    title: "El sexto sentido",
    year: 2000,
    director: "M. Night Shyamalan",
    duration: "1h 47min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/84/77/79/19757766.jpg",
  },
  {
    title: "Split",
    year: 2017,
    director: "M. Night Shyamalan",
    duration: "1h 57min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img2.acsta.net/c_310_420/pictures/16/11/30/17/12/481084.jpg",
  },
  {
    title: "La la Land",
    year: 2017,
    director: "Damien Chazelle",
    duration: "2h 08min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/16/11/30/17/44/581119.jpg",
  },
  {
    title: "Midsommar",
    year: 2019,
    director: "Ari Aster",
    duration: "2h 27min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/19/06/21/14/22/1409242.jpg",
  },
  {
    title: "Mid 90s",
    year: 2019,
    director: "Jonah Hill",
    duration: "1h 24min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/19/05/31/11/23/0221213.jpg",
  },
  {
    title: "Parásitos",
    year: 2019,
    director: "Bong Joon Ho",
    duration: "2h 12min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/19/09/17/17/13/3740579.jpg",
  },
  {
    title: "Milagro en la celda 7",
    year: 2022,
    director: "Mehmet Ada Öztekin",
    duration: "2h 12min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img2.acsta.net/c_310_420/pictures/19/10/08/15/52/1926679.jpg",
  },
  {
    title: "Jojo Rabbit",
    year: 2020,
    director: "Taika Waititi",
    duration: "1h 48min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img2.acsta.net/c_310_420/pictures/20/01/17/08/50/0932472.jpg",
  },
  {
    title: "Sin novedad en el frente",
    year: 2022,
    director: "Edward Berger",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/22/10/04/15/28/0809302.jpg",
  },
  {
    title: "Your Name",
    year: 2017,
    director: "Makoto Shinkai",
    duration: "1h 50min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/17/02/08/13/45/536055.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/66/74/01/20350623.jpg",
  },
  {
    title: "La lista de Schindler",
    year: 1994,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/19/02/12/18/49/4078948.jpg",
  },
  {
    title: "La tumba de las luciernagas",
    year: 2020,
    director: "Isao Takahata",
    duration: "1h 30min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://pics.filmaffinity.com/hotaru_no_haka_aka_grave_of_the_fireflies_aka-128332096-mmed.jpg",
  },
  {
    title: "La vida es bella",
    year: 1999,
    director: "Roberto Benigni",
    duration: "1h 57min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/61/66/20098979.jpg",
  },
  {
    title: "El pianista",
    year: 2002,
    director: "Roman Polanski",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img3.acsta.net/c_310_420/pictures/14/05/27/12/07/438875.jpg",
  },
  {
    title: "El perfecto asesino",
    year: 1995,
    director: "Luc Besson",
    duration: "1h 50min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/11/59/20081632.jpg",
  },

];
