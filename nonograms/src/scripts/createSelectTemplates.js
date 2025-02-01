import nonograms from '../data/nonograms.json';
import gameState from './gameState';

export default function createSelectTemplates() {
  const selectWrapper = document.createElement('div');
  selectWrapper.className = 'select_wrapper';

  const templatesLabel = document.createElement('label');
  templatesLabel.htmlFor = 'templates-select';
  templatesLabel.className = 'templates_label';
  templatesLabel.textContent = 'Choose templates:';
  selectWrapper.appendChild(templatesLabel);

  const templatesSelect = document.createElement('select');
  templatesSelect.id = 'templates-select';
  templatesSelect.name = 'templates';
  templatesSelect.className = 'templates_select';

  Object.keys(nonograms.easy).forEach((key) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    option.className = 'templates_option';
    templatesSelect.appendChild(option);
  });

  templatesSelect.addEventListener('change', (event) => {
    gameState.template = event.target.value;
  });

  selectWrapper.appendChild(templatesSelect);

  return selectWrapper;
}
