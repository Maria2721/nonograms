(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const easy = { "pazl": [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]], "turtle": [[1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [1, 0, 1, 0, 1]], "heart": [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]], "rocket": [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 1, 1, 1, 0]], "house": [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 1, 1, 1, 1]] };
const medium = { "phone": [[0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 0, 1, 1, 0], [1, 1, 0, 0, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0, 1, 1, 1, 0], [0, 1, 1, 1, 0, 0, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]], "chick": [[0, 0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 1, 0, 1, 1], [0, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 1, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]], "snail": [[1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 1, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 1, 1, 1, 0, 1], [1, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 1, 1, 0, 0, 0, 1], [0, 1, 0, 0, 1, 1, 1, 1, 1, 1], [0, 1, 1, 0, 0, 0, 0, 0, 0, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0]], "butterfly": [[0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [1, 1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 0, 1, 0, 1, 1, 0, 1, 0, 1], [1, 0, 0, 1, 1, 1, 1, 0, 0, 1], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0], [1, 0, 1, 0, 1, 1, 0, 1, 0, 1], [1, 0, 0, 1, 1, 1, 1, 0, 0, 1], [1, 0, 0, 1, 1, 1, 1, 0, 0, 1], [1, 0, 1, 0, 1, 1, 0, 1, 0, 1], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0]], "candy": [[0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 1, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]] };
const hard = { "lamp": [[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]], "helicopter": [[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0]], "ant": [[0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]], "christmas-tree": [[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]], "binoculars": [[0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1], [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1], [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]] };
const nonograms = {
  easy,
  medium,
  hard
};
const gameState = {
  level: "",
  template: "",
  grid: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ]
};
function getClues(arr) {
  const clues = [];
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 1) {
      count += 1;
    } else if (count > 0) {
      clues.push(count);
      count = 0;
    }
  }
  if (count > 0) {
    clues.push(count);
  }
  return clues;
}
function generateClues(matrix) {
  const rowClues = matrix.map((row) => getClues(row));
  const colClues = [];
  const numCols = matrix[0].length;
  for (let col = 0; col < numCols; col += 1) {
    const column = matrix.map((row) => row[col]);
    colClues.push(getClues(column));
  }
  return { rowClues, colClues };
}
function showClues(rowClues, colClues) {
  const nonogramRowClues = document.getElementById("nonogram-rowClues");
  const nonogramColClues = document.getElementById("nonogram-colClues");
  nonogramRowClues.innerHTML = "";
  nonogramColClues.innerHTML = "";
  rowClues.forEach((row) => {
    const clues = document.createElement("span");
    clues.textContent = row.join(" ");
    clues.className = "rowClue";
    nonogramRowClues.appendChild(clues);
  });
  colClues.forEach((row) => {
    const clues = document.createElement("span");
    clues.textContent = row.join("\n");
    clues.style.whiteSpace = "pre-line";
    clues.className = "colClue";
    nonogramColClues.appendChild(clues);
  });
}
function resetGrid() {
  const buttons = document.querySelectorAll(".cell");
  buttons.forEach((button) => {
    button.classList.remove("filled", "crossed");
  });
  for (let i = 0; i < gameState.grid.length; i += 1) {
    for (let j = 0; j < gameState.grid.length; j += 1) {
      gameState.grid[i][j] = 0;
    }
  }
}
function createSelectTemplates() {
  const templatesSelect = document.createElement("select");
  templatesSelect.id = "templates-select";
  templatesSelect.name = "templates";
  templatesSelect.className = "templates_select";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select template";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  templatesSelect.appendChild(defaultOption);
  Object.keys(nonograms.easy).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    option.className = "templates_option";
    templatesSelect.appendChild(option);
  });
  templatesSelect.addEventListener("change", (event) => {
    resetGrid();
    gameState.template = event.target.value;
    const templateMatrix = nonograms.easy[event.target.value];
    const { rowClues, colClues } = generateClues(templateMatrix);
    showClues(rowClues, colClues);
  });
  return templatesSelect;
}
function highlightGrid() {
  if (gameState.template === "") return;
  const template = nonograms.easy[gameState.template];
  const buttons = document.querySelectorAll(".cell");
  const buttonValuesArray = [];
  for (let i = 0; i < template.length; i += 1) {
    for (let j = 0; j < template.length; j += 1) {
      if (template[i][j] === 1) {
        buttonValuesArray.push(`${i},${j}`);
      }
    }
  }
  buttons.forEach((button) => {
    if (buttonValuesArray.includes(button.value)) {
      button.classList.add("filled");
    }
  });
}
const svgCode = `<svg width="64"height="64"viewBox="0 0 192 192"xmlns="http://www.w3.org/2000/svg"fill="none"><path stroke="currentColor"stroke-linecap="round"stroke-linejoin="round"stroke-width="8"
d="M23.271 155.421a8.131 8.131 0 0 0 5.404 7.66M60.518 136.8V64.58h80.186m-117.15 74.586a8.13 8.13 0 1 1 8.131 8.131m69.711 14.614-18.512-18.674m17.646-5.656-23.26 23.464m85.448-32.946H124.03v38.688h38.688v-38.688ZM25.674 84.396l8.565-7.317v27.602M80.55 27.53l8.566-7.317v27.603m44.226-19.109a8.499 8.499 0 0 1 6.201-8.18A8.496 8.496 0 0 1 148.05 34.5m-.275.307-13.722 13.009h16.46M20.504 172h17.478s7.799.324 15.194-4.859c7.395-5.182 86.163-77.77 86.163-77.77l-10.975-10.796L20.504 172Z"/><path stroke="currentColor"stroke-linecap="round"stroke-linejoin="round"stroke-width="8"
d="M134.269 95.095s6.49 8.621 13.087 2.453c6.808-6.366.702-12.488.702-12.488l-16.931-16.78s-5.361-5.428-11.168.636c-5.806 6.064.729 11.967.729 11.967m26.265 1.092 25.134-25.949-11.258-10.925-25.518 26.4m28.727-6.922H172M39.522 154.995a8.132 8.132 0 0 0-7.836-7.7m53.567-32.836h-12.61V76.631h37.78v16.447"/></svg>`;
function initializeApp(callback) {
  const app = document.createElement("div");
  app.className = "container";
  const header = document.createElement("header");
  header.className = "header";
  const headerLogo = document.createElement("div");
  headerLogo.className = "header_logo";
  headerLogo.innerHTML = svgCode;
  header.appendChild(headerLogo);
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "Nonograms Game";
  headerTitle.className = "header_title";
  header.appendChild(headerTitle);
  app.appendChild(header);
  const main = document.createElement("main");
  main.className = "main";
  const options = document.createElement("div");
  options.id = "options";
  options.className = "options";
  const selectTemplates = createSelectTemplates();
  options.appendChild(selectTemplates);
  const solutionButton = document.createElement("button");
  solutionButton.id = "solution-button";
  solutionButton.type = "button";
  solutionButton.textContent = "Solution";
  solutionButton.className = "action_button";
  options.appendChild(solutionButton);
  solutionButton.addEventListener("click", () => {
    resetGrid();
    highlightGrid();
  });
  const resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.type = "button";
  resetButton.textContent = "Reset game";
  resetButton.className = "action_button";
  options.appendChild(resetButton);
  resetButton.addEventListener("click", () => resetGrid());
  main.appendChild(options);
  const nonogramWrapper = document.createElement("div");
  nonogramWrapper.className = "nonogram_wrapper";
  nonogramWrapper.id = "nonogram-wrapper";
  const nonogramRowClues = document.createElement("div");
  nonogramRowClues.className = "nonogram_rowClues";
  nonogramRowClues.id = "nonogram-rowClues";
  nonogramWrapper.appendChild(nonogramRowClues);
  const nonogramColClues = document.createElement("div");
  nonogramColClues.className = "nonogram_colClues";
  nonogramColClues.id = "nonogram-colClues";
  nonogramWrapper.appendChild(nonogramColClues);
  const grid = document.createElement("div");
  grid.className = "nonogram_grid";
  grid.id = "nonogram-grid";
  nonogramWrapper.appendChild(grid);
  main.appendChild(nonogramWrapper);
  app.appendChild(main);
  document.body.appendChild(app);
  callback();
}
function createWinModal() {
  const modal = document.createElement("div");
  modal.className = "win_modal";
  modal.id = "win-modal";
  const modalContent = document.createElement("div");
  modalContent.className = "modal_content";
  const heading = document.createElement("h2");
  heading.className = "heading";
  heading.textContent = "Congratulations! 🎉";
  modalContent.appendChild(heading);
  const paragraph = document.createElement("p");
  paragraph.textContent = "Great! You have solved the nonogram!";
  modalContent.appendChild(paragraph);
  const closeButton = document.createElement("button");
  closeButton.className = "close_modal";
  closeButton.id = "close-modal";
  closeButton.textContent = "Close";
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.classList.add("modal_show");
  }, 10);
  document.getElementById("close-modal").addEventListener("click", () => {
    modal.remove();
  });
}
function decisionProcessing() {
  const template = nonograms.easy[gameState.template];
  const { grid } = gameState;
  const isWin = grid.every((row, i) => row.every((cell, j) => cell === -1 || cell === template[i][j]));
  if (isWin) {
    createWinModal();
  }
}
function createGrid(size) {
  const gridContainer = document.getElementById("nonogram-grid");
  gridContainer.innerHTML = "";
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const button = document.createElement("button");
      button.classList.add("cell");
      button.value = `${i},${j}`;
      button.addEventListener("mousedown", (event) => {
        const [row, col] = button.value.split(",").map(Number);
        if (gameState.template === "") return;
        if (event.button === 0) {
          button.classList.remove("crossed");
          button.classList.toggle("filled");
          gameState.grid[row][col] = button.classList.contains(
            "filled"
          ) ? 1 : 0;
        } else if (event.button === 2) {
          button.classList.remove("filled");
          button.classList.toggle("crossed");
          gameState.grid[row][col] = button.classList.contains(
            "crossed"
          ) ? -1 : 0;
        }
        decisionProcessing();
      });
      button.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });
      gridContainer.appendChild(button);
    }
  }
}
initializeApp(() => {
  createGrid(5);
});
