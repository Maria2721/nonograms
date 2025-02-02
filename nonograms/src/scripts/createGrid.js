import gameState from './gameState';
import decisionProcessing from './decisionProcessing';

export default function createGrid(size) {
  const gridContainer = document.getElementById('nonogram-grid');
  gridContainer.innerHTML = '';

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const button = document.createElement('button');
      button.classList.add('cell');
      button.value = `${i},${j}`;

      button.addEventListener('mousedown', (event) => {
        const [row, col] = button.value.split(',').map(Number);

        if (event.button === 0) {
          // left mouse click
          button.classList.remove('crossed');
          button.classList.toggle('filled');
          gameState.grid[row][col] = button.classList.contains(
            'filled',
          )
            ? 1
            : 0;
        } else if (event.button === 2) {
          // right mouse click
          button.classList.remove('filled');
          button.classList.toggle('crossed');
          gameState.grid[row][col] = button.classList.contains(
            'crossed',
          )
            ? -1
            : 0;
        }

        decisionProcessing();
      });

      // prevent context menu on right mouse click!!!
      button.addEventListener('contextmenu', (event) => {
        event.preventDefault();
      });

      gridContainer.appendChild(button);
    }
  }
}
