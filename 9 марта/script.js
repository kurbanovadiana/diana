const wrapper = document.querySelector('.wrapper')

const tovars=[
    {
      "name": "The Great Gatsby",
      "price": 10.99,
      "img": "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_FMjpg_UX1000_.jpg",
      "year": 1925
    },
    {
      "name": "To Kill a Mockingbird",
      "price": 12.5,
      "img": "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
      "year": 1960
    },
    {
      "name": "1984",
      "price": 9.99,
      "img": "https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg",
      "year": 1949
    },
    {
      "name": "Pride and Prejudice",
      "price": 7.99,
      "img": "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
      "year": 1813
    },
    {
      "name": "The Catcher in the Rye",
      "price": 8.75,
      "img": "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg",
      "year": 1951
    },
    {
      "name": "The Hobbit",
      "price": 11.25,
      "img": "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
      "year": 1937
    },
    {
      "name": "To the Lighthouse",
      "price": 9.5,
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639106809i/59716.jpg",
      "year": 1927
    },
    {
      "name": "Moby-Dick",
      "price": 13.99,
      "img": "https://m.media-amazon.com/images/I/81R91ODA9DL._AC_UF1000,1000_QL80_.jpg",
      "year": 1851
    },
    {
      "name": "War and Peace",
      "price": 15.99,
      "img": "https://m.media-amazon.com/images/I/71wXZB-VtBL._AC_UF1000,1000_QL80_.jpg",
      "year": 1869
    },
    {
      "name": "The Lord of the Rings",
      "price": 21.5,
      "img": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      "year": 1954
    }
  ]

tovars.map((item)=>{
    wrapper.innerHTML += `
    <div class="card">
        <img src="${item.img}" alt="">
        <p>год издания:${item.year}</p>
        <h2>${item.name}</h2>
        <b>${item.price} $</b>
        <button>Купить</button>
    </div>
    `
})