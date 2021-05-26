"use strict";

// load projects from .json file
function loadProjects() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((result) => result[langOption.toLowerCase()].projects);
}
// add loaded projects to index.html page
function createCard(card) {
  return `
    <div class = "col col-xl-4 col-md-6 col-12 ">
      <div class="card m-2">
        <img class = "card-img-top" src="${card.img}" alt="${card.alt}" />
        <div class="card-body">
          <h2 class="card-title my-2">${card.title}</h2>
                
          <p class="card-text">
            ${card.description}
          </p>
          <a
                    
            href = "${card.url}"
            class = "mt-3 py-2 card-button btn"
            target ="_blank"
            rel = "noopener noreferrer"
          > ${card.detail}
          </a>
        </div>
      </div>
    </div>
  `;
}

// render loaded projects
function displayCards(cards) {
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML = cards.map((card) => createCard(card)).join("");
}

function showProjectList(){
  loadProjects().then((cards) => {
  displayCards(cards);
});

}
showProjectList();
