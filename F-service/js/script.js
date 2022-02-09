function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("html").classList.add("_webp");
  } else {
    document.querySelector("html").classList.add("_no-webp");
  }
});

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

let body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  let arrow = document.querySelectorAll(".arrow");
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add("parent");
    arrow[i].addEventListener("click", function () {
      subMenu.classList.toggle("open");
      thisArrow.classList.toggle("active");
    });
  }
} else {
  body.classList.add("mouse");
}

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
  if ($(".banner__slider").length) {
    $(".banner__slider").slick({
      arrows: false,
      dots: true,
      vertical: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: "ease",
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      touchThreshold: 10,
    });
  }

  if ($(".portfolio-slider").length) {
    $(".portfolio-slider").slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      easing: "ease",
      infinite: true,
      appendArrows: $(".arrows"),
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".modal-slider-main").length) {
    $(".modal-slider-main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".modal-slider-nav",
    });
  }

  if ($(".modal-slider-nav").length) {
    $(".modal-slider-nav").slick({
      slidesToShow: 6,
      arrows: false,
      slidesToScroll: 1,
      asNavFor: ".modal-slider-main",
      focusOnSelect: true,
    });
  }
});

$(document).ready(function () {
  $(".accordion-title").click(function (event) {
    if ($(".accordion-item").hasClass("one")) {
      $(".accordion-title").not($(this)).removeClass("active");
      $(".accordion-text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,

    center: { lat: 46.47741, lng: 30.70934 },
  });

  const image = {
    url: "../img/marker.png",
    // size: new google.maps.Size(50, 50),
    // origin: new google.maps.Point(-100, -100),
    anchor: new google.maps.Point(15, 5),
  };
  const beachMarker = new google.maps.Marker({
    position: { lat: 46.47741, lng: 30.70934 },
    map,
    icon: image,
  });
}

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
