const FIELD_TYPES = ['normal', 'classic', 'mosaic', 'dry', 'circle'];
const TEAM_EQUIPATION = ['tenerife', 'barça', 'realmadrid', 'spain', 'atleti', 'pacman'];
const FORMATION_TYPES = ['initial', '1-2-6-2', '1-3-4-3', '1-5-2-3', '1-3-2-5', '1-5-1-4', '1-5-5-def'];

const dom = {
  field: document.querySelector('.field'),
  playable: document.querySelector('.playable')
};

let currentField = 0;
let currentEquipation = 0;
let currentFormation = 1;

addEventListener('keydown', function (event) {
  if (event.key === 't') {
    dom.field.classList.remove(FIELD_TYPES[currentField]);
    currentField = (currentField + 1) % FIELD_TYPES.length;
    dom.field.classList.add(FIELD_TYPES[currentField]);
  } else if (event.key === 'e') {
    dom.playable.classList.remove(TEAM_EQUIPATION[currentEquipation]);
    currentEquipation = (currentEquipation + 1) % TEAM_EQUIPATION.length;
    dom.playable.classList.add(TEAM_EQUIPATION[currentEquipation]);
  } else if (event.key === 'f') {
    currentFormation = (currentFormation + 1) % FORMATION_TYPES.length;
    dom.playable.dataset.formation = FORMATION_TYPES[currentFormation];
  }
});
