class Details extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const summaryText = this.getAttribute('summary') || 'Default Summary';
      const contentText = this.innerHTML || 'Default Content';
      const open = this.getAttribute('open') || '';

      this.innerHTML = `
        <details class="pb-3" ${this.hasAttribute('open') ? 'open' : ''}>
            <summary class="rhun-text-tertiary">${summaryText}</summary>
            <div class="m-3">
                ${contentText}
            </div>
        </details>
      `;
  }
}

// Define the custom element
customElements.define('details-component', Details);
