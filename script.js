// ========================================
// WEBMOON PORTFOLIO
// MOBILE + ANIMATION SCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // MOBILE MENU
  // ========================================

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");

      menuBtn.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

      });

    });


    // Close menu when clicking outside
    document.addEventListener("click", (event) => {

      if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
      ) {

        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

      }

    });

  }


  // ========================================
  // FAQ ACCORDION
  // ========================================

  const faqQuestions =
    document.querySelectorAll(".faq-question");

  faqQuestions.forEach((button) => {

    button.addEventListener("click", () => {

      const currentItem =
        button.closest(".faq-item");

      if (!currentItem) return;

      const currentAnswer =
        currentItem.querySelector(".faq-answer");


      document.querySelectorAll(".faq-item").forEach((item) => {

        if (item !== currentItem) {

          item.classList.remove("active");

          const answer =
            item.querySelector(".faq-answer");

          if (answer) {
            answer.style.maxHeight = null;
          }

        }

      });


      currentItem.classList.toggle("active");


      if (
        currentItem.classList.contains("active") &&
        currentAnswer
      ) {

        currentAnswer.style.maxHeight =
          currentAnswer.scrollHeight + "px";

      } else if (currentAnswer) {

        currentAnswer.style.maxHeight = null;

      }

    });

  });


  // ========================================
  // SCROLL REVEAL
  // ========================================

  const revealItems =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(

        (entries, observer) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("show");

              observer.unobserve(entry.target);

            }

          });

        },

        {
          threshold: 0.10
        }

      );


    revealItems.forEach((item) => {

      revealObserver.observe(item);

    });

  } else {

    revealItems.forEach((item) => {

      item.classList.add("show");

    });

  }


  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================

  const navbar =
    document.querySelector(".navbar");


  function navbarScroll() {

    if (!navbar) return;

    if (window.scrollY > 40) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  }


  window.addEventListener(
    "scroll",
    navbarScroll,
    { passive: true }
  );


  navbarScroll();


  // ========================================
  // SMOOTH SECTION SCROLL
  // ========================================

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  // ========================================
  // CARD MOUSE TILT
  // ========================================

  const cards = document.querySelectorAll(
    ".service-card, .project-card"
  );


  // Desktop only
  if (window.innerWidth > 768) {

    cards.forEach((card) => {

      card.addEventListener("mousemove", (event) => {

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          ((y - centerY) / centerY) * -3;

        const rotateY =
          ((x - centerX) / centerX) * 3;


        card.style.transform =
          `perspective(900px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-6px)`;

      });


      card.addEventListener("mouseleave", () => {

        card.style.transform = "";

      });

    });

  }


  // ========================================
  // CURSOR GLOW
  // ========================================

  const cursorGlow =
    document.createElement("div");

  cursorGlow.className =
    "cursor-glow";

  document.body.appendChild(cursorGlow);


  if (window.innerWidth > 768) {

    document.addEventListener("mousemove", (event) => {

      cursorGlow.style.left =
        event.clientX + "px";

      cursorGlow.style.top =
        event.clientY + "px";

    });

  }


  // ========================================
  // PAGE LOADED
  // ========================================

  document.body.classList.add("loaded");

});