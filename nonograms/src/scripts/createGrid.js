export default function createGrid(size) {
  const gridContainer = document.getElementById('nonogram-grid');
  gridContainer.innerHTML = '';

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const button = document.createElement('button');
      button.classList.add('cell');
      button.id = `cell${i}${j}`;

      // left mouse click
      button.addEventListener('click', (event) => {
        if (event.button === 0) {
          button.classList.remove('crossed');
          button.classList.toggle('filled');
        }
      });

      // right mouse click
      button.addEventListener('contextmenu', (event) => {
        event.preventDefault();

        if (event.button === 2) {
          button.classList.remove('filled');
          button.classList.toggle('crossed');
        }
      });

      gridContainer.appendChild(button);
    }
  }
}
