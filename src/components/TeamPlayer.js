import Teams from '/utils/Teams';

// Fast deep clone (only primitive)
const cloneDeep = object => JSON.parse(JSON.stringify(object));

const team = Teams.createTeam();

const getEnergyColor = energy => {
  const i = Number.parseInt(energy);
  return i < 50 ? 'red' : i < 75 ? 'orange' : 'yellow';
};

class TeamPlayer extends HTMLElement {
  constructor () {
    super();
    this.number = Number.parseInt(this.getAttribute('number'));

    // Host
    this.dataset.number = this.number;
    this.classList.add('player', `p${this.number}`);
    Object.assign(this, cloneDeep(team[this.number - 1]));

    this.style.setProperty('--player-energy', `${this.stats.energy}%`);
    this.style.setProperty('--player-energy-color', getEnergyColor(this.stats.energy));

    this.innerHTML = `
      <div class="attrs">
        <div class="life">
          <div class="fill"></div>
        </div>
      </div>`;
  }

  enableAvatar () { this.style.backgroundImage = `url(${this.avatar})`; }
  disableAvatar () { this.style.backgroundImage = null; }
}

customElements.define('team-player', TeamPlayer);
