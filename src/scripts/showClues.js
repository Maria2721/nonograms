export default function showClues(rowClues, colClues) {
  const nonogramRowClues = document.getElementById('nonogram-rowClues');
  const nonogramColClues = document.getElementById('nonogram-colClues');

  nonogramRowClues.innerHTML = '';
  nonogramColClues.innerHTML = '';

  rowClues.forEach((row) => {
    const clues = document.createElement('span');
    clues.textContent = row.join(' ');
    clues.className = 'rowClue';
    nonogramRowClues.appendChild(clues);
  });

  colClues.forEach((row) => {
    const clues = document.createElement('span');
    clues.textContent = row.join('\n');
    clues.style.whiteSpace = 'pre-line';
    clues.className = 'colClue';
    nonogramColClues.appendChild(clues);
  });
}
