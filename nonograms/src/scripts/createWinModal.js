export default function createWinModal() {
  const modal = document.createElement('div');
  modal.className = 'win_modal';
  modal.id = 'win-modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal_content';

  const heading = document.createElement('h2');
  heading.className = 'heading';
  heading.textContent = 'Congratulations! 🎉';
  modalContent.appendChild(heading);

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Great! You have solved the nonogram!';
  modalContent.appendChild(paragraph);

  const closeButton = document.createElement('button');
  closeButton.className = 'close_modal';
  closeButton.id = 'close-modal';
  closeButton.textContent = 'Close';
  modalContent.appendChild(closeButton);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  setTimeout(() => {
    modal.classList.add('modal_show');
  }, 10);

  document.getElementById('close-modal').addEventListener('click', () => {
    modal.remove();
  });
}
