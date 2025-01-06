function openPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  setTimeout(function() {
    window.scrollTo(0,0);
  },0);
}