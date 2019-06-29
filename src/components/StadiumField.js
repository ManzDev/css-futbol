import '/components/StadiumBillboard.js';
import '/components/FieldArea.js';
import '/components/PlayersZone.js';

const FIELD_TYPES = ['normal', 'classic', 'mosaic', 'dry', 'circle'];

class StadiumField extends HTMLElement {
  constructor () {
    super();

    this.currentField = 0;
    this.rx = 0;
    this.scale = 1;
    this.playerZ = 0;

    this.classList.add('field', FIELD_TYPES[this.currentField]);
    this.innerHTML = `
      <stadium-billboard></stadium-billboard>
      <field-area class="left"></field-area>
      <div class="middle zone"></div>
      <field-area class="right"></field-area>
      <players-zone class="playable"></players-zone>`;
  }

  connectedCallback () {
    addEventListener('keydown', this.keyListener.bind(this));
    this.addEventListener('wheel', this.onWheel.bind(this));
  }

  keyListener () {
    if (event.key === 't') {
      this.classList.remove(FIELD_TYPES[this.currentField]);
      this.currentField = (this.currentField + 1) % FIELD_TYPES.length;
      this.classList.add(FIELD_TYPES[this.currentField]);
    }
  }

  onWheel () {
    if (event.shiftKey) {
      this.scale += event.deltaY > 0 ? -0.1 : 0.1;
    } else {
      this.rx += event.deltaY > 0 ? 0.25 : -0.25;
      this.playerZ += event.deltaY > 0 ? 0.5 : -0.5;
    }

    // Update field
    this.style.setProperty('--field-rotate-x', `${Math.max(0, this.rx)}deg`);
    this.style.setProperty('--field-scale', this.scale);
    // Update player
    this.style.setProperty('--player-translate-z', `${Math.max(0, Math.min(20, this.playerZ))}px`);
  }
}

customElements.define('stadium-field', StadiumField);
