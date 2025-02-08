import nonograms from '../data/nonograms.json';
import gameState from './gameState';
import generateClues from './generateClues';
import showClues from './showClues';
import resetGrid from './resetGrid';

export default function createSelectTemplates() {
  const templatesSelect = document.createElement('select');
  templatesSelect.id = 'templates-select';
  templatesSelect.name = 'templates';
  templatesSelect.className = 'templates_select';

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select template';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  templatesSelect.appendChild(defaultOption);

  Object.keys(nonograms.easy).forEach((key) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    option.className = 'templates_option';
    templatesSelect.appendChild(option);
  });

  templatesSelect.addEventListener('change', (event) => {
    resetGrid();
    gameState.template = event.target.value;
    const templateMatrix = nonograms.easy[event.target.value];
    const { rowClues, colClues } = generateClues(templateMatrix);
    showClues(rowClues, colClues);
  });

  return templatesSelect;
}
