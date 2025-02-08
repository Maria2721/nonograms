import 'normalize.css';
import '../styles/style.css';

import initializeApp from './initializeApp';
import createGrid from './createGrid';

initializeApp(() => {
  createGrid(5);
});
