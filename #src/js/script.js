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

function addElement() {
  const menuLink = document.querySelector(".menu-item-has-children > a");

  menuLink.insertAdjacentHTML(
    "afterend",
    `<span class="header__list-arrow-mob arrow">
    <svg
      width="15"
      height="9"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.57574 5.42426C4.81005 5.65858 5.18995 5.65858 5.42426 5.42426L9.24264 1.60589C9.47696 1.37157 9.47696 0.991674 9.24264 0.757359C9.00833 0.523045 8.62843 0.523045 8.39411 0.757359L5 4.15147L1.60589 0.757359C1.37157 0.523044 0.991674 0.523044 0.757359 0.757359C0.523045 0.991674 0.523045 1.37157 0.757359 1.60589L4.57574 5.42426ZM4.4 4L4.4 5L5.6 5L5.6 4L4.4 4Z"
      />
    </svg>
  </span>`
  );
}

let body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  addElement();
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
            appendArrows: $(".arrows-mob"),
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
const modal = document.querySelector(".modal");
const input = document.getElementById("name-service");

if (modal) {
  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
      const isAttribure = button.hasAttribute("data-service-name");
      if (isAttribure) {
        const newValue = button.getAttribute("data-service-name");
        input.value = newValue;
        console.log(input.value);
        console.log(input.id);
      }
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
    input.value = "";
    console.log(input.value);
    console.log(input.id);
  }
}
