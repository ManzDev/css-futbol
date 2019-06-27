import images from '../assets/billboard*.jpg';

const UPDATE_TIME = 15; // Seconds

class StadiumBillboard extends HTMLElement {
  constructor () {
    super();

    this.left = 1;
    this.right = 2;
    this.max = 4;

    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `
      <style>
      :host {
        --billboard-height: 50px;

        position: absolute;
        background: black;
        border-top: 2px solid #777;
        width: 100%;
        height: var(--billboard-height);

        display: flex;
        top: calc(var(--billboard-height) * -1 - 8px);
        transform:
          rotateX(calc(var(--field-rotate-x) * -1))
          translateZ(6px);
        transition: transform 0.2s;
      }

      .panel {
        width: 50%;
        background-position: center;
        background-size: contain;
      }

      @media screen and (max-width: 700px) {
        :host {
          height: 25px;
          top: -25px;
        }
      }
      </style>
      <div class="left panel"></div>
      <div class="right panel"></div>`;

    this.enable();
  }

  enable () {
    this.changeBillBoard();
    this.timer = setInterval(this.changeBillBoard.bind(this), UPDATE_TIME * 1000);
  }

  disable () {
    clearInterval(this.timer);
  }

  changeBillBoard () {
    this.left = 1 + ~~(Math.random() * this.max);
    this.right = 1 + ~~(Math.random() * this.max);
    this.shadow.querySelector('.left').style.backgroundImage = `url(${images[this.left]})`;
    this.shadow.querySelector('.right').style.backgroundImage = `url(${images[this.right]})`;
  }
}

customElements.define('stadium-billboard', StadiumBillboard);
