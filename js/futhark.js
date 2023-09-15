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
              <div class="card-title">Futhark</div>
              <span class="card-text col-auto">${randomRune.rune}</span>
              <span class="card-text col-auto">${randomRune.name}</span>
            </div>
          </div>
        `;
  
        return cardHTML;
      })
      .catch(function (err) {
        console.log('error: ' + err);
      });
  }
  