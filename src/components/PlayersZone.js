import '/components/TeamPlayer.js';

const TEAM_EQUIPATION = ['tenerife', 'barça', 'realmadrid', 'spain', 'atleti', 'pacman'];
const FORMATION_TYPES = ['initial', '1-2-6-2', '1-3-4-3', '1-5-2-3', '1-3-2-5', '1-5-1-4', '1-5-5-def'];

class PlayersZone extends HTMLElement {
  constructor () {
    super();

    this.currentEquipation = 0;
    this.currentFormation = 5;

    this.classList.add('numbers', TEAM_EQUIPATION[this.currentEquipation]);
    this.dataset.formation = FORMATION_TYPES[this.currentFormation];

    this.innerHTML = `
        <team-player number="1" class="goalkeeper"></team-player>
        <team-player number="2"></team-player>
        <team-player number="3"></team-player>
        <team-player number="4"></team-player>
        <team-player number="5"></team-player>
        <team-player number="6"></team-player>
        <team-player number="7"></team-player>
        <team-player number="8"></team-player>
        <team-player number="9"></team-player>
        <team-player number="10"></team-player>
        <team-player number="11"></team-player>`;

    addEventListener('keydown', this.keyListener.bind(this));
  }

  keyListener (event) {
    if (event.key === 'e') {
      this.classList.remove(TEAM_EQUIPATION[this.currentEquipation]);
      this.currentEquipation = (this.currentEquipation + 1) % TEAM_EQUIPATION.length;
      this.classList.add(TEAM_EQUIPATION[this.currentEquipation]);
    } else if (event.key === 'f') {
      this.currentFormation = (this.currentFormation + 1) % FORMATION_TYPES.length;
      this.dataset.formation = FORMATION_TYPES[this.currentFormation];
    }
  }
}

customElements.define('players-zone', PlayersZone);
