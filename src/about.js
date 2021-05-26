"use strict";

// load projects from .json file
function loadAbout() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((result) => result[langOption.toLowerCase()].about);
}

// render loaded intro
function displayAbout(about) {
  const aboutContainer = document.querySelector(".description");
  aboutContainer.innerHTML = about;
}

function showAbout(){
  loadAbout().then((about) => {
  
    displayAbout(about)
});

}
showAbout();
