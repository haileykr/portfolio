"use strict";

// load projects from .json file
function loadExperience() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((result) =>result[langOption.toLowerCase()].experiences);
}
// add loaded projects to index.html page
function createExperienceList(experience) {
  return `
  
          <li class="row d-flex justify-content-center  my-3">
            <div class="d-flex justify-content-end col col-3 ">
              <img
                class="logos"
                src="${experience.img}"
                alt="${experience.alt}"
              />
            </div>
            <div class="col col-9">
              <h2>${experience.period}</h2>
              
              <h2>${experience.name}</h2>

              <p>${experience.title}</p>
              </div>
          </li>
          `;
}

// render loaded projects
function displayExperienceList(experiences) {
  const experienceList = document.querySelector(".experiences-list");
  experienceList.innerHTML = experiences
    .map((experience) => createExperienceList(experience))
    .join("");
}



function showExperienceList(){
  loadExperience().then((experiences) => {
  displayExperienceList(experiences);
});

}
showExperienceList();
