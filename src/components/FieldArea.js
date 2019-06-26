class FieldArea extends HTMLElement {
  constructor () {
    super();
    this.classList.add('zone');

    this.innerHTML = `
      <div class="top corner"></div>
        <div class="area">
          <div class="goal"></div>
          <div class="smallarea"></div>
        </div>
      <div class="bottom corner"></div>`;
  }
}

customElements.define('field-area', FieldArea);
