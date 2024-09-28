
// functions for different parts of the site

function togglefaqClass(e) {
    e.classList.toggle("active");
}

function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }