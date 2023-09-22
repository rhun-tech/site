class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand rhun-text fw-bold rhun-2" href="Index.html">Rhun</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <div class="fw-bold h1 ms-auto">
                    <span class="iconify rhun-text" data-icon="game-icons:dungeon-gate"></span>
                </div>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark rhun-border rounded" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
    
                <div class="offcanvas-header">
                    <div class="offcanvas-title rhun-text rhun-2 top-0 start-0 position-absolute p-1"
                        id="offcanvasDarkNavbarLabel"><a href="Index.html">Rhun</a></div>
                    <button type="button" class="btn rhun-2 top-0 end-0 position-absolute" data-bs-dismiss="offcanvas"
                        aria-label="Close"><span class="iconify rhun-text"
                            data-icon="game-icons:closed-doors"></span></button>
                </div>
                <div class="offcanvas-body">
                    <div class="navbar-nav justify-content-end flex-grow-1 pe-3" id="myTab" role="tablist">
                        <div class="bg-body-tertiary p-3 rounded-2">
                            <div class="pb-3">
                                <a href="Library.html" class="row rhun-text" type="button">
                                    <span class="col-9">Library</span>
                                    <span class="iconify rhun-2 col-3"
                                        data-icon="game-icons:bookshelf"></span>
                                </a>
                            </div>
    
                            <div class="pb-3">
                                <a href="Code.html" class="row rhun-text" type="button">
                                    <span class="col-9">Code</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:scroll-quill"></span>
                                </a>
                            </div>
    
                            <div class="pb-3">
                                <a href="Shopper.html" class="row rhun-text" type="button">
                                    <span class="col-9">Shopper</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:meat"></span>
                                </a>
                            </div>
    
                            <div class="pb-3">
                                <a href="Shuffle.html" class="row rhun-text" type="button">
                                    <span class="col-9">Shuffle</span>
                                    <span class="iconify rhun-2 col-3" data-icon="game-icons:book-pile"></span>
                                </a>
                            </div>
                        </div>
    
                        <div class="pt-3"></div>
    
                        <div class="container bg-body-tertiary rounded p-3">
                            <div class="rhun-text">Color Modes</div>
                            <div id="theme-changer" class="hidden w-100">
    
                                <div class="row p-2">
                                    <div class="form-check col">
                                        <input class="form-check-input" type="radio" name="theme" id="theme1" value=""
                                            checked>
                                        <label class="form-check-label" for="theme1">
                                            Smoldering Glacier
                                        </label>
                                    </div>
    
                                    <div class="form-check col">
                                        <input class="form-check-input" type="radio" name="theme" id="theme2" value="red">
                                        <label class="form-check-label" for="theme2">
                                            Autumn
                                        </label>
                                    </div>
                                </div>
    
                                <div class="row p-2">
                                    <div class="form-check col">
                                        <input class="form-check-input" type="radio" name="theme" id="theme3" value="blue">
                                        <label class="form-check-label" for="theme3">
                                            Sword
                                        </label>
                                    </div>
                                    <div class="form-check col">
                                        <input class="form-check-input" type="radio" name="theme" id="theme4" value="green">
                                        <label class="form-check-label" for="theme4">
                                            Gayfeather
                                        </label>
                                    </div>
                                </div>
    
                            </div>
                        </div>
    
                    </div>
                </div>
                <span class="position-absolute bottom-0 end-0">
                    <div class="rhun-theme-icon">
                        <div class="rhun-icon-gradient">
                        </div>
                    </div>
                </span>
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
            });

            if (radio.value === currentTheme) {
                radio.checked = true;
            }
        });

        if (currentTheme !== 'default') {
            root.className = currentTheme;
        }
    }
}

customElements.define('header-component', Header);

window.onload = function () {
    document.getElementById("fademe").style.opacity = 1;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
