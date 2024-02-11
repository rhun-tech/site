class TitleSection extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const titleText = this.getAttribute('title') || 'Default Title';
      const titleIcon = this.getAttribute('icon') || '';

      this.innerHTML = `
              <div class="hstack pb-2">
                  <div id="title" class="h4">${titleText}</div>
                  <span class="iconify rhun-2 ms-auto" data-icon="${titleIcon}"></span>
              </div>
              <hr />
      `;
  }
}

// Define the custom element
customElements.define('title-section-component', TitleSection);
