const FIELD_TYPES = ['normal', 'classic', 'mosaic', 'dry', 'circle'];

const dom = {
  field: document.querySelector('.field'),
  playable: document.querySelector('.playable')
};

let currentField = 0;

addEventListener('keydown', function (event) {
  if (event.key === 't') {
    dom.field.classList.remove(FIELD_TYPES[currentField]);
    currentField = (currentField + 1) % FIELD_TYPES.length;
    dom.field.classList.add(FIELD_TYPES[currentField]);
  }
});
