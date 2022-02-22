// let isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// let body = document.querySelector("body");
// if (isMobile.any()) {
//   body.classList.add("touch");
//   let arrow = document.querySelectorAll(".arrow");
//   for (i = 0; i < arrow.length; i++) {
//     let thisLink = arrow[i].previousElementSibling;
//     let subMenu = arrow[i].nextElementSibling;
//     let thisArrow = arrow[i];

//     thisLink.classList.add("parent");
//     arrow[i].addEventListener("click", function () {
//       subMenu.classList.toggle("open");
//       thisArrow.classList.toggle("active");
//     });
//   }
// } else {
//   body.classList.add("mouse");
// }

const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
if (burger) {
  let delay = 500;
  let headerNav = document.querySelector(".header__nav");
  let bodyHide = document.querySelector("body");
  burger.addEventListener("click", function (e) {
    burger.classList.toggle("_active");
    headerNav.classList.toggle("_active");
    bodyHide.classList.toggle("_lock");
    header.classList.toggle("_active");
  });
}

$(document).ready(function () {
  if ($(".slider__slick").length) {
    $(".slider__slick").slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: "ease",
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      appendDots: $(".slider__dots"),
    });
  }
});

// const factsItems = document.querySelector(".facts__items");

// window.addEventListener("scroll", () => {
//   if (factsItems) {
//     let factsItemsCoords = factsItems.getBoundingClientRect();
//     console.log(factsItemsCoords.top);
//     console.log(innerHeight);

//     if (factsItemsCoords.top < innerHeight) {
//       jQuery(".Count").each(function () {
//         let $this = $(this);
//         jQuery({ Counter: 0 }).animate(
//           { Counter: $this.text() },
//           {
//             duration: 3000,
//             easing: "swing",
//             step: function () {
//               $this.text(Math.ceil(this.Counter));
//             },
//           }
//         );
//       });
//     }
//   }
// });

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

$(document).ready(function () {
  $(".youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    midClick: true,
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

$(".menu-items a").on("click", function () {
  let el = $(this);
  let dest = el.attr("href");
  if (dest !== undefined && dest !== "") {
    $("html").animate(
      {
        scrollTop: $(dest).offset().top,
      },
      1000
    );
  }
  return false;
});
