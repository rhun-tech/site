class Title extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const titleText = this.getAttribute('title') || 'Default Title';
      const titleIcon = this.getAttribute('icon') || '';

      this.innerHTML = `
          <div class="bg-body-tertiary p-3 rounded-2 mb-3 shadow">
              <div class="hstack pb-2">
                  <div id="title" class="h2">${titleText}</div>
                  <span class="iconify rhun-2 ms-auto" data-icon="${titleIcon}"></span>
              </div>
          </div>
      `;
  }
}

// Define the custom element
customElements.define('title-component', Title);
