"use strict";

// load projects from .json file
function loadEducation() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((result) => result.education);
}
// add loaded projects to index.html page
function createEducationList(education) {
  return `
  
          <li class="row d-flex justify-content-center  my-3">
            <div class="d-flex justify-content-end col col-3 ">
              <img
                class="logos"
                src="${education.img}"
                alt="${education.alt}"
              />
            </div>
            <div class="col col-9">
              <h2>${education.period}</h2>
              
              <h2>${education.title}</h2>

              <p>${education.degree}</p>
              </div>
          </li>
          `;
}

// render loaded projects
function displayEducationList(educations) {
  const educationList = document.querySelector(".education-list");
  educationList.innerHTML = educations
    .map((education) => createEducationList(education))
    .join("");
}

loadEducation().then((educations) => {
  displayEducationList(educations);
});
