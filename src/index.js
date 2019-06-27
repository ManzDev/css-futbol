import '/utils/panelEvents.js';
import '/utils/3dfield.js';
import '/components/FieldArea.js';
import '/components/StadiumBillboard.js';
import '/components/StadiumBoard.js';
import '/components/PlayersZone.js';

const board = document.querySelector('stadium-board');

addEventListener('playerData', function (event) {
  board.setData(event.detail);
});
