class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Define the theme details based on the selected theme
        const themeDetails = {
            '': 'Moon. It is there, always there. Behind clouds or not.',
            'winterforest': 'Winter Forest. It is true, just has not snowed yet.',
            'glacier': 'Glacier. It inevitably, slowly pulls you towards it. Drawing you ever closer. Ever colder.',
            'autumn': 'Autumn. In the distant night, all is ablaze with the colors of autum.',
            'monobat': 'Monobat. Much like halloween, much like a favorite theme, or much like a childrens novel.',
            'gayfeather': 'Gayfeather. Tall and vibrant in the midsummer sky.'
        };

        this.innerHTML = `
        <nav class="navbar navbar-dark bg-dark fixed-top rhun-shadow">
        <div class="container-fluid">
            <a class="navbar-brand rhun-text fw-bold rhun-2" href="index.html">Rhun</a>
            <button class="navbar-toggler rhun-rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <div class="fw-bold h1 ms-auto">
                    <span class="iconify rhun-text" data-icon="game-icons:dungeon-gate"></span>
                </div>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark rhun-border rounded" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
    
                <div class="offcanvas-header border-bottom-dark rhun-shadow">
                    <div class="offcanvas-title rhun-text rhun-2 p-1"
                        id="offcanvasDarkNavbarLabel"><a href="index.html">Rhun</a></div>
                    <button type="button" class="btn rhun-2" data-bs-dismiss="offcanvas"
                        aria-label="Close"><span class="iconify rhun-text"
                            data-icon="game-icons:closed-doors"></span></button>
                </div>
                <div class="offcanvas-body">
                    <div class="navbar-nav justify-content-end flex-grow-1 p-3" id="myTab" role="tablist">
                        <div class="bg-body-tertiary p-3 rhun-rounded rhun-shadow">
                            <div class="pb-3">
                                <a href="library.html" class="row rhun-text" type="button">
                                    <span class="col-9">Library</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:bookshelf"></span>
                                </a>
                            </div>
    
                            <div class="pb-3">
                                <a href="code.html" class="row rhun-text" type="button">
                                    <span class="col-9">Code</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:scroll-quill"></span>
                                </a>
                            </div>
    
                            <div class="pb-3">
                                <a href="spells.html" class="row rhun-text" type="button">
                                    <span class="col-9">Spells</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:book-pile"></span>
                                </a>
                            </div>                            

                            <div class="pb-3">
                                <a href="shopper.html" class="row rhun-text" type="button">
                                    <span class="col-9">Shopper</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:meat"></span>
                                </a>
                            </div>

                            <div class="pb-3">
                                <a href="rhunfall.html" class="row rhun-text" type="button">
                                    <span class="col-9">Rhunfall</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:stone-tablet"></span>
                                </a>
                            </div>                            

                            <div class="pb-3">
                                <a href="legend.html" class="row rhun-text" type="button">
                                    <span class="col-9">Legend</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:pointy-hat"></span>
                                </a>
                            </div>

                        </div>
    
                        <div class="pt-3"></div>
    
                        <div class="container bg-body-tertiary rhun-rounded rhun-shadow p-3">
                            <div class="rhun-text">Color Modes</div>
                            <div id="theme-changer" class="hidden w-100">
    
                                <div class="row p-2">
                                    <div class="form-check col rhun-text">
                                        <input class="form-check-input" type="radio" name="theme" id="theme1" value=""
                                            checked>
                                        <label class="form-check-label" for="theme1">
                                            Moon
                                        </label>
                                    </div>

                                    <div class="form-check col rhun-text">
                                    <input class="form-check-input" type="radio" name="theme" id="theme2" value="winterforest">
                                        <label class="form-check-label" for="theme2">
                                            Winter Forest
                                        </label>
                                    </div>
                                </div>                            

                                <div class="row p-2">
                                    <div class="form-check col rhun-text">
                                        <input class="form-check-input" type="radio" name="theme" id="theme3" value="glacier">
                                        <label class="form-check-label" for="theme3">
                                            Glacier
                                        </label>
                                    </div>
    
                                    <div class="form-check col rhun-text">
                                        <input class="form-check-input" type="radio" name="theme" id="theme4" value="autumn">
                                        <label class="form-check-label" for="theme4">
                                            Autumn
                                        </label>
                                    </div>
                                </div>
    
                                <div class="row p-2">
                                    <div class="form-check col rhun-text">
                                        <input class="form-check-input" type="radio" name="theme" id="theme5" value="monobat">
                                        <label class="form-check-label" for="theme5">
                                            Monobat
                                        </label>
                                    </div>
                                    <div class="form-check col rhun-text">
                                        <input class="form-check-input" type="radio" name="theme" id="theme6" value="gayfeather">
                                        <label class="form-check-label" for="theme6">
                                            Gayfeather
                                        </label>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
                        <div class="pt-3"></div>
    
                        <div class="container bg-body-tertiary rhun-rounded rhun-shadow p-3">
                            <div class="hstack p-1">
                            <div id="colorModeDetails" class="ms-auto rhun-text">
                                Moon. It is there, always there. Behind clouds or not.
                            </div>
                            <div class="ms-auto">
                                    <div class="rhun-theme-icon">
                                        <div class="rhun-icon-gradient">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <br><br><br><br>
    `;

        var themeChanger = document.querySelector('#theme-changer'),
            root = document.querySelector(':root'),
            themeRadios = document.querySelectorAll('input[name="theme"]'),
            currentTheme = sessionStorage.getItem("theme") || 'default';

        themeChanger.classList.remove('hidden');

        themeRadios.forEach(function (radio) {
            radio.addEventListener('change', function (e) {
                currentTheme = this.value;
                root.className = currentTheme;
                sessionStorage.setItem('theme', currentTheme);

                colorModeDetails.textContent = themeDetails[currentTheme] || 'Color mode details coming soon.';
            });

            if (radio.value === currentTheme) {
                radio.checked = true;
            }
        });

        if (currentTheme !== 'default') {
            root.className = currentTheme;
            colorModeDetails.textContent = themeDetails[currentTheme] || 'Color mode details coming soon.';
        }
    }
}

customElements.define('header-component', Header);

window.onload = function () {
    document.getElementById("fademe").style.opacity = 1;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
