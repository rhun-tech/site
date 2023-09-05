function copyShoppingListToClipboard() {
    // Select the "shoppingList" div and clone its content
    const copyThisDiv = document.getElementById("shoppingList").cloneNode(true);

    // Remove the content of the cloned div with the "OtherSorter" ID
    const otherSorter = copyThisDiv.querySelector("#OtherSorter");
    otherSorter.innerHTML = "";

    // Create a temporary textarea element to hold the content
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = copyThisDiv.textContent;
    document.body.appendChild(tempTextArea);

    // Select the content in the textarea and copy it to the clipboard
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
}

// Select the button
const copyButton = document.getElementById("copyButton");

// Event listener for the copy button
copyButton.addEventListener("click", copyShoppingListToClipboard);


