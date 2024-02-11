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
        resultDiv.innerHTML = `<div class='row'>
            <div class='col-md-6 mb-4'>
                <div class='card shadow border-2 rhun-border rhun-text'>
                    <div class='card-title m-2'>Weeks</div>
                        <div class='card-body'>${weeksDifference} weeks and ${daysDifference % 7} days
                        </div>
                    </div>
                </div>
            <div class='col-md-6 mb-4'>
                <div class='card shadow border-2 rhun-border rhun-text'>
                    <div class='card-title m-2'>Days</div>
                        <div class='card-body'>${daysDifference} days
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}