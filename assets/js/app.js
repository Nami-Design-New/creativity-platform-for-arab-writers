// hero section swiper
function calculateAutoplayDelay(video, minimumDelay) {
  if (video) {
    const videoDuration = video.duration * 1000;
    return Math.max(videoDuration, minimumDelay);
  }
  return minimumDelay;
}
const mainSlider = new Swiper(".heroSwiper", {
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".mainSliderPagination",
    clickable: true
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  on: {
    init: function() {
      setAutoplayDelay(this);
    },
    slideChange: function() {
      pauseAllVideos();
      const activeSlide = this.slides[this.activeIndex];
      const activeVideo = activeSlide.querySelector(".heroSwiper video");
      if (activeVideo) {
        activeVideo.play();
        setAutoplayDelay(this);
      }
    }
  }
});
function setAutoplayDelay(slider) {
  const activeSlide = slider.slides[slider.activeIndex];
  const activeVideo = activeSlide.querySelector(".heroSwiper video");
  const autoplayDelay = calculateAutoplayDelay(activeVideo, 2000);
  slider.params.autoplay.delay = autoplayDelay;
  slider.autoplay.start();
}
function pauseAllVideos() {
  const allVideos = document.querySelectorAll(".heroSwiper video");
  allVideos.forEach(function(video) {
    video.pause();
  });
}
//parteners slider
let parteners = new Swiper(".partenersSwiper", {
  spaceBetween: 50,
  grabCursor: true,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 3000
  },
  autoplayTimeout: 5000,
  breakpoints: {
    992: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3
    },
    350: {
      slidesPerView: 2
    }
  }
});
// menu
let toggler = document.querySelector(".menu-btn");
let menue = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  toggler.querySelector(".menu-bar").classList.toggle("menu-transform");
  menue.classList.toggle("show");
});
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    toggler.querySelector(".menu-bar").classList.remove("menu-transform");
    menue.classList.remove("show");
  });
});
//aos
$(document).ready(function() {
  $("section").each(function() {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function(index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true
  });
});
function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}
function togglePasswordVisibility(event, passwordClass, button) {
  event.preventDefault();
  let passStateTogglerIcon = button.querySelector("i");
  let passInpt = document.querySelector("." + passwordClass);
  if (passInpt.type === "password") {
    passInpt.type = "text";
    passStateTogglerIcon.classList.remove("fa-eye-slash");
    passStateTogglerIcon.classList.add("fa-eye");
  } else {
    passInpt.type = "password";
    passStateTogglerIcon.classList.remove("fa-eye");
    passStateTogglerIcon.classList.add("fa-eye-slash");
  }
  return false;
}
