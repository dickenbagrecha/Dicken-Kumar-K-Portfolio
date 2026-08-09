import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const elementsToSplit = [
    ".landing-intro h2",
    ".landing-intro h1",
    ".landing-intro .hero-title",
    ".landing-intro .hero-subtitles"
  ];

  var landingText = new SplitText(elementsToSplit, {
    type: "chars,lines",
    linesClass: "split-line",
  });

  // Animate left side text characters entrance
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.015,
      delay: 0.3,
    }
  );

  // Fade and slide right side content container to preserve HTML formatting and avoid word clipping
  gsap.fromTo(
    ".landing-info",
    { opacity: 0, y: 40, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      delay: 0.6,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
