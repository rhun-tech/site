document.getElementById('jsonFileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const fileName = file.name;  // Get the uploaded file name
            displayJSONContent(content, fileName);
        };

        reader.readAsText(file);
    }
}

function displayJSONContent(content, fileName) {
    const outputDiv = document.getElementById('output');

    try {
        const jsonData = JSON.parse(content);

        if (fileName === 'budget.json') {
            displayBudget(jsonData);
        } else {
            const prettyJson = JSON.stringify(jsonData, null, 2);
            outputDiv.innerHTML = '<pre>' + prettyJson + '</pre>';
        }
    } catch (error) {
        outputDiv.innerText = 'Error parsing JSON file: ' + error.message;
    }
}

function displayBudget(budgetData) {
    const outputDiv = document.getElementById('output');

    // Clear previous content
    outputDiv.innerHTML = '';

    // Create a Bootstrap row
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // Define colors for each major title
    const titleColors = {
        'Income': 'border-success',
        'Savings': 'border-info',
        'Expenditures': 'border-warning'
    };

    // Mapping object for major title icons
    const titleIcons = {
        'Income': 'game-icons:gold-mine',
        'Savings': 'game-icons:gold-stack',
        'Expenditures': 'game-icons:expense'
    };

    // Iterate over major titles (savings, income, expenditures)
    for (const majorTitle in budgetData.Budget) {
        // Create a Bootstrap card wrapper for each major title
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('col-md-4', 'mb-4');

        // Create a Bootstrap card for each major title
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'shadow', 'border-2');

        // Set border color based on the title
        if (titleColors.hasOwnProperty(majorTitle)) {
            cardDiv.classList.add(titleColors[majorTitle]);
        }
        
        // Create card body
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body', 'text-light-subtle');
        
        // Set icon based on the major title
        const iconCode = titleIcons[majorTitle] || 'default-icon-code';
        cardBodyDiv.innerHTML = `<span class="iconify rhun-10" data-icon="${iconCode}"></span>`;

        // Display major title in card body
        cardBodyDiv.innerHTML += `<h5 class="card-title">${majorTitle}</h5>`;

        // Create a sublist within the card body
        const subList = document.createElement('ul');

        // Iterate over subcategories within the major title
        for (const subCategory in budgetData.Budget[majorTitle]) {
            // Create list items for subcategories
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${subCategory}:</strong> ${budgetData.Budget[majorTitle][subCategory]}`;

            // Append list item to the sublist
            subList.appendChild(listItem);
        }

        // Append the sublist to the card body
        cardBodyDiv.appendChild(subList);

        // Append card body to card
        cardDiv.appendChild(cardBodyDiv);

        // Append wrapper to row
        rowDiv.appendChild(cardWrapper);

        // Append card to wrapper
        cardWrapper.appendChild(cardDiv);
    }

    // Append row to outputDiv
    outputDiv.appendChild(rowDiv);
}


