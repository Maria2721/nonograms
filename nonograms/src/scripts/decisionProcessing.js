import nonograms from '../data/nonograms.json';
import gameState from './gameState';
import createWinModal from './createWinModal';

export default function decisionProcessing() {
  const template = nonograms.easy[gameState.template];
  const { grid } = gameState;

  const isWin = grid.every((row, i) => row.every((cell, j) => cell === -1 || cell === template[i][j]));

  if (isWin) {
    createWinModal();
  }
}
