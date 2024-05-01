document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = new URL(window.location.href);

    const tabParam = currentUrl.searchParams.get('tab');

    if (tabParam) {
        const tabLink = document.querySelector(`.nav-link[href="#${tabParam}"]`);

        if (tabLink) {
            tabLink.click();
        }
    }

    const tabLinks = document.querySelectorAll('.nav-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const tabId = this.getAttribute('href').substring(1);

            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('tab', tabId);

            window.history.replaceState({}, '', newUrl);
        });
    });
});