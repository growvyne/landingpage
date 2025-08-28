
  // Form submission alert
  document.getElementById("leadForm").addEventListener("submit", (e) => {
    e.preventDefault();
   alert(" Work in progress. Please check back soon!");
  });

  const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,   // show 3 logos at a time
  spaceBetween: 30,   // space between slides
  loop: true,         // infinite loop
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },   // mobile
    480: { slidesPerView: 2 }, // small tablets
    768: { slidesPerView: 3 }, // tablets
    1024: { slidesPerView: 4 } // desktops
  }
});


  // Animate counters
  const counters = document.querySelectorAll(".counter-number");
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText.replace(/,/g, "");
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = (count + increment).toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#counter"));
