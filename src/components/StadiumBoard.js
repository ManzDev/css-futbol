class StadiumBoard extends HTMLElement {
  constructor () {
    super();

    this.localGoals = 0;
    this.visitorGoals = 0;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: center;
          top: 0;
          left: 0;
          font-size: 22px;
        }

        .board {
            width: 500px;
            height: 128px;
            background: black;
            border: 12px solid #000;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            transition: transform 0.25s linear;
        }

        .result {
            background: #400;
        }

        .screen {
            font-family: 'LCD2', monospace;
            font-size: 5rem;
            color: red;
            text-align: center;
            user-select: none;
        }

        .lcd {
            width: 100%;
            font-size: 2rem;
            grid-column: 3 span;
        }

        @media screen and (max-width: 700px) {
          .lcd {
            font-size: 1.5rem;
          }
        }
      </style>
      <div class="board">
        <div class="local result screen">${this.localGoals}</div>
        <div class="visitor result screen">${this.visitorGoals}</div>
        <div class="lcd screen"></div>
      </div>`;

    this.shadowRoot.querySelector('.local').addEventListener('click', this.incLocalGoals.bind(this));
    this.shadowRoot.querySelector('.visitor').addEventListener('click', this.incVisitorGoals.bind(this));
  }

  setData (data) {
    this.shadowRoot.querySelector('.lcd').textContent = data.number + '. ' + data.name;
  }

  incLocalGoals () {
    this.localGoals++;
    this.shadowRoot.querySelector('.local').textContent = this.localGoals;
  }

  incVisitorGoals () {
    this.visitorGoals++;
    this.shadowRoot.querySelector('.visitor').textContent = this.visitorGoals;
  }
}

customElements.define('stadium-board', StadiumBoard);
