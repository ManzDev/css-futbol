const dom = {
  field: document.querySelector('.field')
};

const field = {
  rx: 0,
  scale: 1
};

const player = {
  z: 0
};

dom.field.addEventListener('wheel', function (event) {
  if (event.shiftKey) {
    field.scale += event.deltaY > 0 ? -0.1 : 0.1;
  } else {
    field.rx += event.deltaY > 0 ? 0.25 : -0.25;
    player.z += event.deltaY > 0 ? 0.5 : -0.5;
  }

  // Update field
  dom.field.style.setProperty('--field-rotate-x', `${Math.max(0, field.rx)}deg`);
  dom.field.style.setProperty('--field-scale', field.scale);
  // Update player
  dom.field.style.setProperty('--player-translate-z', `${Math.max(0, Math.min(20, player.z))}px`);
});
