import '/components/TeamPlayer.js';

class PlayersZone extends HTMLElement {
  constructor () {
    super();

    this.classList.add('numbers', 'tenerife');
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
  }
}

customElements.define('players-zone', PlayersZone);
