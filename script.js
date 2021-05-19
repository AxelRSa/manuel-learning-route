// respect height of the stickynavbar
navbarHeight = navbar.offsetHeight;
home.setAttribute("data-bs-offset", navbarHeight);
sections = [home, ruta, tarea, historial];
//  offsetTop
buttons = document.querySelectorAll(".navbarSticky__a");
i = 0;
buttons.forEach((ele) => {
 let index = i;
 ele.onclick = function (e) {
  e.preventDefault();
  document.documentElement.scrollTop = sections[index].offsetTop - navbarHeight;
 };
 i++;
});
