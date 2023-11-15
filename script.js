const landingPage = gsap.timeline();

landingPage.from(".title-text", {
  duration: 1,
  y: 200,
  stagger: 0.075,
  ease: "power4.out",
  delay: 0.5,
});

landingPage.from(
  ".nav",
  {
    duration: 2,
    width: "50%",
    ease: "expo.out",
    delay: 0.5,
  },
  0
);

landingPage.from(
  ".schedule-hero",
  {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power2.out",
  },
  "<"
);

const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img-container img");
let isScaled = false;

hero.addEventListener("click", (event) => {
  event.preventDefault();

  const isHeroImgClicked =
    event.target.closest(".hero-img-container img") === heroImg;

  if (isHeroImgClicked) {
    if (!isScaled) {
      gsap.to(heroImg, {
        duration: 0.5,
        scale: 0.9,
        ease: "power4.out",
      });
    } else {
      gsap.to(heroImg, {
        duration: 0.5,
        scale: 1,
        ease: "power4.out",
      });
    }

    isScaled = !isScaled;
  }
});
