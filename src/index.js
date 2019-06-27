import '/utils/panelEvents.js';
import '/utils/3dfield.js';
import '/components/FieldArea.js';
import '/components/TeamPlayer.js';
import '/components/StadiumBillboard.js';
import '/components/StadiumBoard.js';

const board = document.querySelector('stadium-board');
const players = Array.from(document.querySelectorAll('team-player'));

for (const player of players) {
  player.addEventListener('mouseenter', function () {
    board.setData(this.getData());
    this.enableAvatar();
  });
  player.addEventListener('mouseleave', function () {
    this.disableAvatar();
  });
}
