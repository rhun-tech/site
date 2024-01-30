document.getElementById('jsonFileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            displayJSONContent(content);
        };

        reader.readAsText(file);
    }
}

function displayJSONContent(content) {
    const outputDiv = document.getElementById('output');
    
    try {
        const jsonData = JSON.parse(content);
        const prettyJson = JSON.stringify(jsonData, null, 2);
        outputDiv.innerHTML = '<pre>' + prettyJson + '</pre>';
    } catch (error) {
        outputDiv.innerText = 'Error parsing JSON file: ' + error.message;
    }
}
