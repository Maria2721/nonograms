import createSelectTemplates from './createSelectTemplates';

const svgCode = ` <svg width="64"height="64"viewBox="0 0 192 192"xmlns="http://www.w3.org/2000/svg"fill="none"><path stroke="currentColor"stroke-linecap="round"stroke-linejoin="round"stroke-width="8"
d="M23.271 155.421a8.131 8.131 0 0 0 5.404 7.66M60.518 136.8V64.58h80.186m-117.15 74.586a8.13 8.13 0 1 1 8.131 8.131m69.711 14.614-18.512-18.674m17.646-5.656-23.26 23.464m85.448-32.946H124.03v38.688h38.688v-38.688ZM25.674 84.396l8.565-7.317v27.602M80.55 27.53l8.566-7.317v27.603m44.226-19.109a8.499 8.499 0 0 1 6.201-8.18A8.496 8.496 0 0 1 148.05 34.5m-.275.307-13.722 13.009h16.46M20.504 172h17.478s7.799.324 15.194-4.859c7.395-5.182 86.163-77.77 86.163-77.77l-10.975-10.796L20.504 172Z"/><path stroke="currentColor"stroke-linecap="round"stroke-linejoin="round"stroke-width="8"
d="M134.269 95.095s6.49 8.621 13.087 2.453c6.808-6.366.702-12.488.702-12.488l-16.931-16.78s-5.361-5.428-11.168.636c-5.806 6.064.729 11.967.729 11.967m26.265 1.092 25.134-25.949-11.258-10.925-25.518 26.4m28.727-6.922H172M39.522 154.995a8.132 8.132 0 0 0-7.836-7.7m53.567-32.836h-12.61V76.631h37.78v16.447"/></svg>`;

export default function initializeApp(callback) {
  const app = document.createElement('div');
  app.className = 'container';

  const header = document.createElement('header');
  header.className = 'header';

  const headerLogo = document.createElement('div');
  headerLogo.className = 'header_logo';
  headerLogo.innerHTML = svgCode;
  header.appendChild(headerLogo);

  const headerTitle = document.createElement('span');
  headerTitle.textContent = 'Nonograms Game';
  headerTitle.className = 'header_title';
  header.appendChild(headerTitle);
  app.appendChild(header);

  const main = document.createElement('main');
  main.className = 'main';

  const options = document.createElement('div');
  options.id = 'options';
  options.className = 'options';

  const selectTemplates = createSelectTemplates();
  options.appendChild(selectTemplates);

  const solutionButton = document.createElement('button');
  solutionButton.id = 'solution-button';
  solutionButton.type = 'button';
  solutionButton.textContent = 'Solution';
  solutionButton.className = 'action_button';
  options.appendChild(solutionButton);
  main.appendChild(options);

  const grid = document.createElement('div');
  grid.className = 'nonogram_grid';
  grid.id = 'nonogram-grid';
  main.appendChild(grid);

  app.appendChild(main);

  document.body.appendChild(app);
  callback();
}
