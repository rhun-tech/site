class Title extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const titleText = this.getAttribute('title') || 'Default Title';
      const titleIcon = this.getAttribute('icon') || '';

      this.innerHTML = `
          <div class="bg-body-tertiary p-3 rhun-rounded rhun-shadow mb-3">
              <div class="hstack p-1">
                  <div id="title" class="h2">${titleText}</div>
                  <span class="iconify rhun-2 ms-auto" data-icon="${titleIcon}"></span>
              </div>
          </div>
      `;
  }
}

// Define the custom element
customElements.define('title-component', Title);
