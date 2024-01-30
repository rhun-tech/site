class WeatherLoading extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="placeholder-glow">
        <div class="col-auto p-1 rhun-text-tertiary">Current Conditions</div>
        <div class="hstack">
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
        </div>
        <div class="col-auto p-1 rhun-text-tertiary">Forecast</div>
        <div class="hstack">
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
        </div>
        <div class="hstack">
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
        </div>
        <div class="hstack">
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
        </div>
        <div class="hstack">
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
        </div>
        <div class="hstack">
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
          <div class="col-3 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
        </div>
        <div class="hstack pt-1">
          <div class="col-12 p-1 placeholder rounded rhun-text mx-1 my-1"></div>
        </div>
      </div>
      `;
    }
  }

  // Define the custom element
  customElements.define('weather-loading', WeatherLoading);