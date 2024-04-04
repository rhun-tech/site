class WeatherModal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="weatherModal">
        <div class="modal-dialog rhun-border rhun-border-radius">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title me-auto rhun-text" id="weatherModal">Elements</h5>
              <button type="button" class="btn rhun-2" data-bs-dismiss="modal"><span class="iconify rhun-text opacity-50"
                  data-icon="game-icons:closed-doors"></span></button>
            </div>
            <div class="modal-body">
              <label for="weatherApiKey" class="form-label rhun-text">Tomorrow.io Key:</label>
              <input type="text" class="form-control custom-input rhun-text" id="weatherApiKey" name="rhunWeatherApiKey" autocomplete="on" placeholder="">
    
              <div class="p-3">
                <details-component summary='More Details'>
                <label for="geoApiKey" class="form-label rhun-text mt-2">Geocode Key:</label>
                <input type="text" class="form-control custom-input rhun-text" id="geoApiKey" name="rhunGeoApiKey" autocomplete="on" placeholder="">    
                </details-component>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn rhun-button" onclick="promptForAPIKeys()">See the Elements!</button>
            </div>
          </div>
        </div>
      </div>  
        `;
    }
}

// Define the custom element
customElements.define('weather-modal-component', WeatherModal);
