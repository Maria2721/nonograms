import gameState from './gameState';

export default function resetGrid() {
  const buttons = document.querySelectorAll('.cell');

  buttons.forEach((button) => {
    button.classList.remove('filled', 'crossed');
  });

  for (let i = 0; i < gameState.grid.length; i += 1) {
    for (let j = 0; j < gameState.grid.length; j += 1) {
      gameState.grid[i][j] = 0;
    }
  }
}
