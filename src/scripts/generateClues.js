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

export default function generateClues(matrix) {
  const rowClues = matrix.map((row) => getClues(row));
  const colClues = [];

  const numCols = matrix[0].length;
  for (let col = 0; col < numCols; col += 1) {
    const column = matrix.map((row) => row[col]);
    colClues.push(getClues(column));
  }

  return { rowClues, colClues };
}
