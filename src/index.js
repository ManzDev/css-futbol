import '/components/StadiumBoard.js';
import '/components/StadiumField.js';

const board = document.querySelector('stadium-board');

addEventListener('playerData', function (event) {
  board.setData(event.detail);
});
