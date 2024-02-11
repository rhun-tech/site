// Mealfill
var MealArray = new Array();
function addMeal(x) {
    if (x !== '') {
        var MealNew = [x];
        MealArray.push(MealNew);
        var MealString = MealArray.toString();
        var MealResult = MealString.split(",");
        MealResult.sort();

        var dataset = MealResult,
            count = {};
        dataset.forEach(function (el) {
            count[el] = count[el] + 1 || 1;
        });

        var MealDisplay = '<div class="row"><div class="col-12"><div class="card border-2 rhun-text rhun-border-callout">';

        for (var item in count) {
            if (count.hasOwnProperty(item)) {
                MealDisplay += `<div class="hstack pb-2 m-2">
                    <div>${item}</div>
                    <div class="ms-auto">${count[item]}</div>
                </div>`;
            }
        }

        MealDisplay += "</div></div></div>";

        document.getElementById("MealSorter").innerHTML = MealDisplay;
    }
}

// Meatfill
var MeatArray = new Array();
function addMeat(x) {
    if (x !== '') {
        var MeatNew = [x];
        MeatArray.push(MeatNew);
        var MeatString = MeatArray.toString();
        var MeatResult = MeatString.split(",");
        MeatResult.sort();

        var dataset = MeatResult,
            count = {};
        dataset.forEach(function (el) {
            count[el] = count[el] + 1 || 1;
        });

        var MeatDisplay = '<div class="row"><div class="col-12"><div class="card border-2 rhun-text rhun-border-callout">';

        for (var item in count) {
            if (count.hasOwnProperty(item)) {
                MeatDisplay += `<div class="hstack pb-2 m-2">
                <div>${item}</div>
                <div class="ms-auto">${count[item]}</div>
            </div>`;
            }
        }

        MeatDisplay += "</div></div></div>";

        document.getElementById("MeatSorter").innerHTML = MeatDisplay;
    }
}

// Dairyfill
var DairyArray = new Array();
function addDairy(x) {
    if (x !== '') {
        var DairyNew = [x];
        DairyArray.push(DairyNew);
        var DairyString = DairyArray.toString();
        var DairyResult = DairyString.split(",");
        DairyResult.sort();

        var dataset = DairyResult,
            count = {};
        dataset.forEach(function (el) {
            count[el] = count[el] + 1 || 1;
        });

        var DairyDisplay = '<div class="row"><div class="col-12"><div class="card border-2 rhun-text rhun-border-callout">';

        for (var item in count) {
            if (count.hasOwnProperty(item)) {
                DairyDisplay += `<div class="hstack pb-2 m-2">
                <div>${item}</div>
                <div class="ms-auto">${count[item]}</div>
            </div>`;
            }
        }

        DairyDisplay += "</div></div></div>";

        document.getElementById("DairySorter").innerHTML = DairyDisplay;
    }
}

// Producefill
var ProduceArray = new Array();
function addProduce(x) {
    if (x !== '') {
        var ProduceNew = [x];
        ProduceArray.push(ProduceNew);
        var ProduceString = ProduceArray.toString();
        var ProduceResult = ProduceString.split(",");
        ProduceResult.sort();

        var dataset = ProduceResult,
            count = {};
        dataset.forEach(function (el) {
            count[el] = count[el] + 1 || 1;
        });

        var ProduceDisplay = '<div class="row"><div class="col-12"><div class="card border-2 rhun-text rhun-border-callout">';

        for (var item in count) {
            if (count.hasOwnProperty(item)) {
                ProduceDisplay += `<div class="hstack pb-2 m-2">
                <div>${item}</div>
                <div class="ms-auto">${count[item]}</div>
            </div>`;
            }
        }

        ProduceDisplay += "</div></div></div>";

        document.getElementById("ProduceSorter").innerHTML = ProduceDisplay;
    }
}

// Otherfill
var OtherArray = new Array();
function addOther(x) {
    if (x !== '') {
        var OtherNew = [x];
        OtherArray.push(OtherNew);
        var OtherString = OtherArray.toString();
        var OtherResult = OtherString.split(",");
        OtherResult.sort();

        var dataset = OtherResult,
            count = {};
        dataset.forEach(function (el) {
            count[el] = count[el] + 1 || 1;
        });

        var OtherDisplay = '<div class="row"><div class="col-12"><div class="card border-2 rhun-text rhun-border-callout">';

        for (var item in count) {
            if (count.hasOwnProperty(item)) {
                OtherDisplay += `<div class="hstack pb-2 m-2">
                <div>${item}</div>
                <div class="ms-auto">${count[item]}</div>
            </div>`;
            }
        }

        OtherDisplay += "</div></div></div>";

        document.getElementById("OtherSorter").innerHTML = OtherDisplay;
    }
}

function menuFunction() {
    var e = document.getElementById("menu").value;

    fetchJson(e);
}

function fetchJson(category) {
    var url = 'json/' + category + '.json';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (category === 'meals' || category === 'lunch') {
                appendMeal(data);
            } else if (category === 'meat' || category === 'produce') {
                appendNonMeal(data);
            } else {
                clearGroceryList();
            }
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function clearGroceryList() {
    document.getElementById("groceryList").innerHTML = "";
}

function appendMeal(MealData) {
    clearGroceryList();

    var mainContainer = document.getElementById("groceryList");
    var div = document.createElement("div");

    for (let i in MealData) {
        var mealButton = createMealButton(MealData[i]);
        div.appendChild(mealButton);
    }

    mainContainer.appendChild(div);
}

function appendNonMeal(NonMealData) {
    clearGroceryList();

    var mainContainer = document.getElementById("groceryList");
    var div = document.createElement("div");

    for (let i in NonMealData) {
        var nonMealButton = createNonMealButton(NonMealData[i]);
        div.appendChild(nonMealButton);
    }

    mainContainer.appendChild(div);
}

function createMealButton(data) {
    var button = document.createElement("button");
    button.innerHTML = data.icon + " " + data.meal + '\n';
    button.className = "btn rhun-button rhun-text mx-1 my-1";
    button.onclick = function () {
        addMeal(data.meal);
        addMeat(data.meat);
        addDairy(data.dairy);
        addProduce(data.produce);
        addOther(data.other);
    };
    return button;
}

function createNonMealButton(data) {
    var button = document.createElement("button");
    button.innerHTML = data.icon + " " + data.meal + '\n';
    button.className = "btn rhun-button rhun-text mx-1 my-1";
    button.onclick = function () {
        addMeat(data.meat);
        addProduce(data.produce);
    };
    return button;
}
