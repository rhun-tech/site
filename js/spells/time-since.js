function calculateTimeSince() {
    const inputDate = new Date(document.getElementById("inputDate").value);
    const currentDate = new Date();

    if (isNaN(inputDate)) {
        alert("Please enter a valid date.");
    } else {
        const timeDifference = currentDate - inputDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const weeksDifference = Math.floor(daysDifference / 7);

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<div>${weeksDifference} weeks and ${daysDifference % 7} days</div>`;
        resultDiv.innerHTML += `<div>or</div>`;
        resultDiv.innerHTML += `<div>${daysDifference} days</div>`;
    }
}