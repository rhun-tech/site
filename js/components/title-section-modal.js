class TitleSectionModal extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const titleText = this.getAttribute('title') || 'Default Title';
      const titleIcon = this.getAttribute('icon') || '';
      const target = this.getAttribute('target') || '';

      this.innerHTML = `
              <div class="hstack pb-2">
                  <div id="title" class="h4">${titleText}</div>
                  <div class="btn rhun-button rhun-rounded rhun-shadow ms-auto" data-bs-toggle="modal" data-bs-target="${target}"
                    data-bs-title="" data-bs-toggle="tooltip" data-bs-placement="bottom"
                    data-bs-custom-class="custom-tooltip">
                  <span class="iconify rhun-2" data-icon="${titleIcon}"></span>
                </div>
              </div>
              <hr />
      `;
  }
}

// Define the custom element
customElements.define('title-section-modal-component', TitleSectionModal);
