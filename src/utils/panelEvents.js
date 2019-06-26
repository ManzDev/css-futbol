const FIELD_TYPES = ['normal', 'classic', 'mosaic', 'dry', 'circle'];
const TEAM_EQUIPATION = ['tenerife', 'barça', 'realmadrid', 'spain', 'atleti', 'pacman'];

const dom = {
  field: document.querySelector('.field'),
  playable: document.querySelector('.playable')
};

let currentField = 0;
let currentEquipation = 0;

addEventListener('keydown', function (event) {
  if (event.key === 't') {
    dom.field.classList.remove(FIELD_TYPES[currentField]);
    currentField = (currentField + 1) % FIELD_TYPES.length;
    dom.field.classList.add(FIELD_TYPES[currentField]);
  } else if (event.key === 'e') {
    dom.playable.classList.remove(TEAM_EQUIPATION[currentEquipation]);
    currentEquipation = (currentEquipation + 1) % TEAM_EQUIPATION.length;
    dom.playable.classList.add(TEAM_EQUIPATION[currentEquipation]);
  }
});
