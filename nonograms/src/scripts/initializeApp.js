export default function initializeApp() {
  const app = document.createElement('div');
  app.className = 'container';

  const header = document.createElement('div');
  header.className = 'header';

  const heading = document.createElement('h1');
  heading.textContent = 'Nonograms game!';
  heading.className = 'heading';
  header.appendChild(heading);

  const image = document.createElement('img');
  image.src = 'favicon.svg';
  image.alt = 'Example of a Nonogram';
  image.className = 'game-image';
  header.appendChild(image);

  app.appendChild(header);
  document.body.appendChild(app);
}
