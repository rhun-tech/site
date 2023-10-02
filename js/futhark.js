function fetchAndCreateCard() {
  var url = 'json/futhark.json';

  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomRune = data[randomIndex];

      const cardHTML = `
          <div class="card rhun-text">
            <div class="card-body">
              <div class="hstack">
                <div class="col-auto rhun-2 pe-3 rhun-text-secondary">${randomRune.rune}</div>
                <div class="col-auto rhun-text-secondary">${randomRune.name}</div>
              </div>
              <div>${randomRune.inspiration}</div>
            </div>
          </div>
        `;

      return cardHTML;
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
}
