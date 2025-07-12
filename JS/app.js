if (localStorage.getItem("mode") == "dark-mode") {
  let darks = document.querySelectorAll(".text-black");
  for (let i = 0; i < darks.length; i++) {
    darks[i].classList.remove("text-black");
    darks[i].classList.add("text-white");
  }
  document.getElementById("dark-mode").classList.add("d-none");
  document.getElementById("light-mode").classList.remove("d-none");
  document.getElementsByTagName(
    "html"
  )[0].style.cssText = `  --primary-color: #471396;
  --secondary-color: #ffcc00;
  --defualt-font: "Roboto", sans-serif;
  --side-font: "Amatic SC", sans-serif;
  --primary-bg: #1E1E1E;
  --secondary-bg: #252525;
  --third-bg: #2C2C2C;`;
  document.querySelector(
    ".navbar-toggler-icon"
  ).style.cssText = `  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");`;
  document.getElementById("submit").classList.add("btn-prime");
    document.getElementById("submit").classList.remove("btn-second");
} else {
  let whites = document.querySelectorAll(".text-white");
  for (let i = 0; i < whites.length; i++) {
    whites[i].classList.remove("text-white");
    whites[i].classList.add("text-black");
  }
  document.getElementById("light-mode").classList.add("d-none");
  document.getElementById("dark-mode").classList.remove("d-none");
  document.getElementsByTagName(
    "html"
  )[0].style.cssText = `--primary-color: #ffcc00; 
  --secondary-color:   #471396;
  --defualt-font: "Roboto", sans-serif;
  --side-font: "Amatic SC", sans-serif;
  --primary-bg: white;
  --secondary-bg: rgb(235, 235, 235);
  --third-bg: rgb(190, 190, 190);`;
  document.querySelector(
    ".navbar-toggler-icon"
  ).style.cssText = `  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");`;
  document.getElementById("submit").classList.add("btn-second");
  document.getElementById("submit").classList.remove("btn-prime");
}
document.getElementById("dark-mode").addEventListener("click", function () {
  let darks = document.querySelectorAll(".text-black");
  for (let i = 0; i < darks.length; i++) {
    darks[i].classList.remove("text-black");
    darks[i].classList.add("text-white");
  }
  this.classList.add("d-none");
  document.getElementById("light-mode").classList.remove("d-none");
  document.getElementsByTagName(
    "html"
  )[0].style.cssText = `  --primary-color: #471396;
  --secondary-color: #ffcc00;
  --defualt-font: "Roboto", sans-serif;
  --side-font: "Amatic SC", sans-serif;
  --primary-bg: #1E1E1E;
  --secondary-bg: #252525;
  --third-bg: #2C2C2C;`;
  document.querySelector(
    ".navbar-toggler-icon"
  ).style.cssText = `  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");`;
  document.getElementById("submit").classList.add("btn-prime");
  document.getElementById("submit").classList.remove("btn-second");
  (function () {
    localStorage.setItem("mode", "dark-mode");
  })();
});
document.getElementById("light-mode").addEventListener("click", function () {
  let whites = document.querySelectorAll(".text-white");
  for (let i = 0; i < whites.length; i++) {
    whites[i].classList.remove("text-white");
    whites[i].classList.add("text-black");
  }
  this.classList.add("d-none");
  document.getElementById("dark-mode").classList.remove("d-none");
  document.getElementsByTagName(
    "html"
  )[0].style.cssText = `--primary-color: #ffcc00; 
  --secondary-color:   #471396;
  --defualt-font: "Roboto", sans-serif;
  --side-font: "Amatic SC", sans-serif;
  --primary-bg: white;
  --secondary-bg: rgb(235, 235, 235);
  --third-bg: rgb(190, 190, 190);`;
  document.querySelector(
    ".navbar-toggler-icon"
  ).style.cssText = `  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");`;
  document.getElementById("submit").classList.add("btn-second");
    document.getElementById("submit").classList.remove("btn-prime");
  (function () {
    localStorage.setItem("mode", "light-mode");
  })();
});
setTimeout(() => {
  document.getElementsByTagName("nav")[0].style.cssText =
    "transform: translateY(0px);";
}, 1200);
setTimeout(() => {
  document.getElementById("home-text").style.cssText = "opacity: 1;";
}, 800);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navit").style.top = "0";
  } else {
    document.getElementById("navit").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
};
console.log(window);

setTimeout(() => {
  var typed = new Typed("#element", {
    strings: [
      "Nigiri",
      "Temaki",
      "Sashimi",
      "Maki",
      "Gunkan",
      "Uramaki",
      "Makizushi",
      "Futomaki",
      "Chirashi",
      "Inari",
      "Narezushi",
      "Oshizushi",
    ],
    typeSpeed: 70,
    backSpeed: 70,
    loop: Infinity,
  });
}, 900);
const chefObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-chef");
      }
    });
  },
  { threshold: 0.5 }
);
const textObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-text");
      }
    });
  },
  { threshold: 0.2 }
);
const nameObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-name");
      }
    });
  },
  { threshold: 0.3 }
);
const frameObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-frame");
      }
    });
  },
  { threshold: 0.3 }
);
const iconObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-icons");
      }
    });
  },
  { threshold: 1 }
);
const statsObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-stats");
      }
    });
  },
  { threshold: 1 }
);
const dishObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-dish");
      } else {
        entery.target.classList.remove("show-dish");
      }
    });
  },
  { threshold: 0.3, delay: 100 }
);
const profObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-prof");
      }
    });
  },
  { threshold: 1 }
);
const slideObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-slides");
      } else {
        entery.target.classList.remove("show-slides");
      }
    });
  },
  { threshold: 0.3 }
);
const contactObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entery) => {
      if (entery.isIntersecting) {
        entery.target.classList.add("show-contact");
      }
    });
  },
  { threshold: 0.5 }
);
const hiddenFrame = document.querySelectorAll(".hidden-frame");
hiddenFrame.forEach((el) => frameObserver.observe(el));
const hiddenChef = document.querySelectorAll(".hidden-chef");
hiddenChef.forEach((el) => chefObserver.observe(el));
const hiddenName = document.querySelectorAll(".hidden-name");
hiddenName.forEach((el) => nameObserver.observe(el));
const hiddenText = document.querySelectorAll(".hidden-text");
hiddenText.forEach((el) => textObserver.observe(el));
const hiddenIcons = document.querySelectorAll(".hidden-icons");
hiddenIcons.forEach((el) => iconObserver.observe(el));
const hiddenStats = document.querySelectorAll(".hidden-stats");
hiddenStats.forEach((el) => statsObserver.observe(el));
const hiddenDishes = document.querySelectorAll(".hidden-dish");
hiddenDishes.forEach((el) => dishObserver.observe(el));
const hiddenProf = document.querySelectorAll(".hidden-prof");
hiddenProf.forEach((el) => profObserver.observe(el));
const hiddenSlides = document.querySelectorAll(".hidden-slides");
hiddenSlides.forEach((el) => slideObserver.observe(el));
const hiddenContact = document.querySelectorAll(".hidden-contact");
hiddenContact.forEach((el) => contactObserver.observe(el));
