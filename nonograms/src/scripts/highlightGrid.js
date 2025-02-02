import nonograms from '../data/nonograms.json';
import gameState from './gameState';

export default function highlightGrid() {
  if (gameState.template === '') return;

  const template = nonograms.easy[gameState.template];
  const buttons = document.querySelectorAll('.cell');
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
      button.classList.add('filled');
    }
  });
}
