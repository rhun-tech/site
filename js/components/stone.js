class Stone extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const titleText = this.getAttribute('title') || 'Stone';
      const titleIcon = this.getAttribute('icon') || '';
      const content = this.innerHTML;

      this.innerHTML = `
              <div class="rhun-stone">
                <div class="rhun-center">
                <span class="iconify rhun-2" data-icon="${titleIcon}"></span>
                </div>              

                <hr />
                
                <div class="rhun-stone-body">
                    ${content}
                </div>
              </div>
      `;
  }
}

// Define the custom element
customElements.define('stone-component', Stone);
