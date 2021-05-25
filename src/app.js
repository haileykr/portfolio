"use strict";

const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
const sparkles = document.querySelector(".sparkles");

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header-up");
  } else {
    header.classList.remove("header-up");
  }
  console.dir(sparkles);

  if (
    window.scrollY + window.innerHeight <
    document.documentElement.scrollHeight - 100
  ) {
    sparkles.style.transform = `translateY(${window.scrollY}px)`;
  }
});

//move to menu when clicked
const navbar = document.querySelector(".navbar-list");
navbar.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  console.log(target.dataset);
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// change opacity of home contents and arrow
const greetings = document.querySelector(".greetings");
const introBtn = document.getElementById("introBtn");

const arrow = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  greetings.style.opacity = 1 - window.scrollY / 800;
  introBtn.style.opacity = 1 - window.scrollY / 1300;

  if (window.scrollY > 300) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// go to About when introBtn is clicked
introBtn.addEventListener("click", () => {
  scrollIntoView("#about");
});

// go to Home when arrow is clicked
arrow.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Email - Clipboard Funcionality
const clipboard = new ClipboardJS(".copy-btn");
const tooltip = document.querySelector(".tooltipText");

clipboard.on("success", (e) => {
  tooltip.innerText = "Copied!";
  showTooltip();
  e.clearSelection();
});

clipboard.on("error", (e) => {
  tooltip.innerText = "Your browser is not supported";
  showTooltip();
  e.clearSelection();
});

function showTooltip() {
  tooltip.classList.toggle("hideToolTip");
  setTimeout(() => {
    tooltip.classList.toggle("hideToolTip");
  }, 1500);
}
