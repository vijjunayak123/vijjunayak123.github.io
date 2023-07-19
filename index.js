function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var menuIcon = document.querySelector(".menu-icon");
  
    navLinks.classList.toggle("nav-active");
    menuIcon.classList.toggle("menu-icon-active");
  
    // Fade-in animation for mobile menu
    var navLinksItems = navLinks.getElementsByTagName("li");
    for (var i = 0; i < navLinksItems.length; i++) {
      navLinksItems[i].style.animation = `fadeIn 0.5s ease forwards ${i / 7 + 0.3}s`;
    }
  }
  