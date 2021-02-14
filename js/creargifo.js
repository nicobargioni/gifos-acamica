function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('nav-desktop').classList.add('sticky');
      document.getElementById('nav-mobile').classList.add('sticky');
    } else {
      document.getElementById('nav-desktop').classList.remove('sticky');
      document.getElementById('nav-mobile').classList.remove('sticky');
    }
}

window.onscroll = function () {
    scrollFunction();
  };