var menuIcon = document.querySelector(".menu-icon");

var ul = document.querySelector(".ul");

menuIcon.addEventListener("click", () => {
  if (ul.classList.contains("ativo")) {
    ul.classList.remove("ativo");
    document.querySelector(".menu-icon img").src = "../img/menu.png";
    document.querySelector(".logo img").src = "../img/logo-icone.png";
  } else {
    ul.classList.add("ativo");
    document.querySelector(".menu-icon img").src = "../img/close.png";
    document.querySelector(".logo img").src = "../img/logo-icone1.png";
  }
});
