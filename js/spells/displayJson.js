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
            outputDiv.innerHTML = '<pre class="language-json rounded"><code>' + prettyJson + '</code></pre>';
        }

        Prism.highlightAll();

    } catch (error) {
        outputDiv.innerText = 'Error parsing JSON file: ' + error.message;
    }
}

function displayBudget(budgetData) {
    const outputDiv = document.getElementById('output');

    // Clear previous content
    outputDiv.innerHTML = '';

    // Create a Bootstrap row for major titles (savings, income, expenditures)
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // Define colors for each major title
    const titleTextColors = {
        'Income': 'rhun-text',
        'Savings': 'rhun-text-secondary',
        'Expenditures': 'rhun-text-tertiary'
    };

    // Define colors for each major title
    const titleBorderColors = {
        'Income': 'rhun-border',
        'Savings': 'rhun-border-secondary',
        'Expenditures': 'rhun-border-tertiary'
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
        if (titleBorderColors.hasOwnProperty(majorTitle)) {
            cardDiv.classList.add(titleBorderColors[majorTitle]);
        }

        // Create card body
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body', titleTextColors[majorTitle]);

        // Set icon based on the major title
        const iconCode = titleIcons[majorTitle] || 'default-icon-code';

        // Display major title in card body
        cardBodyDiv.innerHTML = `<div class="card-title">
        <div class="hstack">
        <span class="${titleTextColors[majorTitle]}">${majorTitle}</span>
        <span class="iconify rhun-2 ms-auto ${titleTextColors[majorTitle]}" data-icon="${iconCode}"></span>
        </div>
        </div>
        <hr />`;

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

        // Initialize total for the major title
        let total = 0;

        // Iterate over subcategories within the major title again to calculate the total
        for (const subCategory in budgetData.Budget[majorTitle]) {
            total += budgetData.Budget[majorTitle][subCategory];
        }

        // Append the total as a separate div in the card body
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<strong>Total:</strong> ${total.toFixed(0)}`;
        cardBodyDiv.appendChild(totalDiv);

        // Append the sublist to the card body
        cardBodyDiv.appendChild(subList);

        // Append card body to card
        cardDiv.appendChild(cardBodyDiv);

        // Append wrapper to row
        rowDiv.appendChild(cardWrapper);

        // Append card to wrapper
        cardWrapper.appendChild(cardDiv);
    }

    // Append the row for analysis card
    const analysisRowDiv = document.createElement('div');
    analysisRowDiv.classList.add('row');

    // Create a Bootstrap card wrapper for the analysis card
    const analysisCardWrapper = document.createElement('div');
    analysisCardWrapper.classList.add('col-md-12', 'mb-4'); // Take up the entire row

    // Create a Bootstrap card for the analysis card
    const analysisCardDiv = document.createElement('div');
    analysisCardDiv.classList.add('card', 'shadow', 'border-2', 'rhun-border-callout');

    // Create card body for analysis card
    const analysisCardBodyDiv = document.createElement('div');
    analysisCardBodyDiv.classList.add('card-body', 'rhun-text-callout');

    // Display analysis title in card body
    analysisCardBodyDiv.innerHTML = `<div class="card-title">
    <div class="hstack rhun-text-callout">
    <span>Analysis</span>
    <span class="iconify rhun-2 ms-auto" data-icon="game-icons:standing-potion"></span>
    </div>
    </div>
    <hr />`;

    // Calculate the percentage and display in the analysis card
    const expendituresTotal = budgetData.Budget.Expenditures ? Object.values(budgetData.Budget.Expenditures).reduce((acc, val) => acc + val, 0) : 0;
    const incomeTotal = budgetData.Budget.Income ? Object.values(budgetData.Budget.Income).reduce((acc, val) => acc + val, 0) : 0;
    const percentage = (expendituresTotal / incomeTotal) * 100;

    analysisCardBodyDiv.innerHTML += `<p>Your total expenditures are ${percentage.toFixed(0)}% of your income.</p>`;

    // Calculate the percentage of housing relative to income and display in the analysis card
    const housingTotal = budgetData.Budget.Expenditures && budgetData.Budget.Expenditures.Housing
        ? budgetData.Budget.Expenditures.Housing
        : 0;

    const housingPercentage = (housingTotal / incomeTotal) * 100;

    analysisCardBodyDiv.innerHTML += `<p>Your housing expenses are ${housingPercentage.toFixed(0)}% of your income.</p>`;

    // Calculate the months your savings would last if you lost your income
    const savingsTotal = budgetData.Budget.Savings ? Object.values(budgetData.Budget.Savings).reduce((acc, val) => acc + val, 0) : 0;
    const monthsOfSavings = (savingsTotal / expendituresTotal).toFixed(0);

    analysisCardBodyDiv.innerHTML += `<p>If you lost your income, your savings would last ${monthsOfSavings} month(s) based on your expenditures.</p>`;

    // Calculate the percentage and display in the analysis card
    const expenditures = budgetData.Budget.Expenditures || {};
    const expenditureCategories = Object.keys(expenditures);
    const expenditureAmounts = expenditureCategories.map(category => expenditures[category]);

    // Call the function to create and display the chart
    // createDonutChart(expenditureCategories, expenditureAmounts, incomeTotal, 'Expenditures vs. Income', 'expendituresChart');

    // Append card body to analysis card
    analysisCardDiv.appendChild(analysisCardBodyDiv);

    // Append analysis card to analysis card wrapper
    analysisCardWrapper.appendChild(analysisCardDiv);

    // Append analysis card wrapper to analysis row
    analysisRowDiv.appendChild(analysisCardWrapper);

    // Append analysis row to outputDiv
    outputDiv.appendChild(analysisRowDiv);

    // Append row to outputDiv
    outputDiv.appendChild(rowDiv);
}

function createDonutChart(categories, amounts, incomeTotal, title, chartId) {
    // Create data for the donut chart
    const chartData = {
        labels: categories,
        datasets: [{
            data: amounts,
            backgroundColor: ['#C34973', '#EAD95F', /*...add more colors as needed */], // Customize colors as needed
        }],
    };

    // Get the canvas element
    const chartCanvas = document.getElementById(chartId);

    // Create a donut chart
    new Chart(chartCanvas, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    });
}