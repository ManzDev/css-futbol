import Teams from '/utils/Teams';
import Commentator from '/utils/Commentator';

// Fast deep clone (only primitive)
const cloneDeep = object => JSON.parse(JSON.stringify(object));

const commentator = new Commentator();
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

    this.addEventListener('click', this.playName);
    this.addEventListener('mouseenter', this.onMouseEnter);
    this.addEventListener('mouseleave', this.disableAvatar);
  }

  enableAvatar () { this.style.backgroundImage = `url(${this.avatar})`; }
  disableAvatar () { this.style.backgroundImage = null; }

  playName () {
    commentator.speak(this.name);
  }

  onMouseEnter () {
    this.enableAvatar();
    const event = new CustomEvent('playerData', { detail: this.getData() });
    dispatchEvent(event);
  }

  getData () {
    return {
      avatar: this.avatar,
      number: this.number,
      name: this.name
    };
  }
}

customElements.define('team-player', TeamPlayer);
