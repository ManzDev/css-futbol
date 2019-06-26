import interact from 'interactjs';

const players = document.querySelectorAll('.playable .player');
players.forEach(e => {
  interact(e).draggable({
    speed: 0.5,
    onmove: event => {
      const target = event.target;

      target.dataset.x = (parseFloat(target.dataset.x) || 0) + event.dx;
      target.dataset.y = (parseFloat(target.dataset.y) || 0) + event.dy;

      target.style.transform = `translate(${target.dataset.x}px, ${target.dataset.y}px)`;
    },
    modifiers: [
      interact.modifiers.restrict({
        restriction: 'parent'
      })
    ]
  });
});
