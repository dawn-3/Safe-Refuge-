// This part of the code dynamically sets scroll padding based on the height of the navigation element.
const navigation = document.querySelector('.nav');
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px");

// This part of the code is for the "all the way up button". The function is to scroll the window to the top with smooth behavior.
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// This code switches between dark mode and the default mode for the website.
function toggleDarkMode() {
  document.body.classList.toggle("dark__mode");
}
