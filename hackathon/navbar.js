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

  // Perform your search logic here, you can filter or manipulate content based on the search term.
  // For demonstration, let's just log the search term to the console.
  console.log('Search Term:', searchTerm)
}
