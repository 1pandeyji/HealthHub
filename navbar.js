// function toggleNavbar() {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('navbar-visible');
// }

function toggleNavbar () {
  const navbar = document.querySelector('.navbar')
  navbar.classList.toggle('navbar-visible')
}

function performSearch () {
  const searchInput = document.getElementById('searchInput')
  const searchTerm = searchInput.value.toLowerCase()

 
  console.log('Search Term:', searchTerm)
}
