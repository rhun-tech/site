class DepictionsModal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="uploadModal">
        <div class="modal-dialog rhun-border rhun-border-radius">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title rhun-text me-auto rhun-text" id="uploadModal">File Upload</h5>
                    <button type="button" class="btn rhun-2" data-bs-dismiss="modal"><span
                            class="iconify rhun-text opacity-50" data-icon="game-icons:closed-doors"></span></button>
                </div>
                <div class="modal-body">
                    <div class="pb-2">
                        <span>Choose a json file. For example formats check the details below.</span>
                    </div>
                    <div class="p-3">
                        <details-component summary='Budget'>
                            <span>Make a file called budget.json</span>
                            <pre class="language-json rounded"><code>{
    "Budget": {
        "Income": {
            "Salary": 5000,
            "Other Income": 500
        },
        "Savings": {
            "Savings": 500,
            "Retirement": 1500,
            "Emergency Fund": 1000
        },
        "Expenditures": {
            "Housing": 1500,
            "Savings": 500,
            "Utilities": 200,
            "Groceries": 300,
            "Miscellaneous": 50,
            "Entertainment": 100,
            "Transportation": 150
        }
    }
}</code></pre>
                        </details-component>
                    </div>
                    <div class="p-3">
                        <details-component summary='Anything Else'>
                            <span>Any file not named budget.json e.g., rhun.json</span>
<pre class="language-json rounded"><code>{
    "id": "9",
    "meal": "Hungarian Goulash",
    "meat": "Beef Chuck",
    "dairy": [
        ""
    ],
    "produce": [
        "White Onion",
        "Garlic"
    ],
    "other": [
        "Tomato Paste",
        "Red Wine",
        "Marjoram",
        "Spaetzle"
    ],
    "icon": "🍲"
}</code></pre>
                        </details-component>
                    </div>
                </div>
                <div class="modal-footer">
                    <label for="jsonFileInput" class="btn rhun-button">Choose File</label>
                    <input type="file" id="jsonFileInput" accept=".json">
                </div>
            </div>
        </div>
    </div>
        `;
    }
}

// Define the custom element
customElements.define('depictions-modal-component', DepictionsModal);
