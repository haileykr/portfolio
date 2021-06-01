"use strict";
// scroll events
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
const sparkles = document.querySelector(".sparkles");

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header-up");
  } else {
    header.classList.remove("header-up");
  }

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

// Categories
function loadCategories() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((result) => result[langOption.toLowerCase()].categories);
}

function setCategories(categories) {
  const abouts = document.querySelectorAll(".navAbout");
  const educations = document.querySelectorAll(".navEducations");
  const techStacks = document.querySelectorAll(".navTechStack");
  const projects = document.querySelectorAll(".navProjects");
  const experiences = document.querySelectorAll(".navExperiences");
  const contacts = document.querySelectorAll(".navContacts");

  abouts.forEach((about) => (about.innerText = categories[0]));
  educations.forEach((education) => (education.innerText = categories[1]));
  techStacks.forEach((techStack) => (techStack.innerText = categories[2]));
  projects.forEach((project) => (project.innerText = categories[3]));
  experiences.forEach((experience) => (experience.innerText = categories[4]));
  contacts.forEach((contact) => (contact.innerText = categories[5]));
}

function showCategories() {
  loadCategories().then((categories) => {
    setCategories(categories);
  });
}

// Language Setting
let langOption = "en";

function setLanguage(e) {
  const enBtn = document.querySelector("#en");
  const koBtn = document.querySelector("#ko");
  
  enBtn.classList.toggle("activeLangButton");
  koBtn.classList.toggle("activeLangButton");
  langOption = e.target.id;
  showCategories();
  showAbout();
  showEducation();
  showProjectList();
  showExperienceList();
}

const languageSelector = document.querySelector(".language-selector");
languageSelector.addEventListener(
  "click",
  setLanguage
);

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
