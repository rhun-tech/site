const apiUrl = 'https://api.github.com/users';

function searchGitHubUser(username) {
    const userUrl = `${apiUrl}/${username}`;

    fetch(userUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`GitHub API Error: ${response.status}`);
            }
            return response.json();
        })
        .then((user) => {
            const userInfo = `
                <div class="rhun-text-tertiary">User: <span class="rhun-text">${user.login}</span></div>
                <div class="rhun-text-tertiary">Public Repositories: <span class="rhun-text">${user.public_repos}</span></div>
            `;

            document.getElementById("user-info").innerHTML = userInfo;

            const userReposUrl = `${userUrl}/repos`;
            return fetch(userReposUrl);
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`GitHub API Error: ${response.status}`);
            }
            return response.json();
        })
        .then((repos) => {
            const repoItems = repos.map((repo) => {
                return `
                    <div class="col-lg-6 col-md-12">
                        <a href="${repo.html_url}">
                            <stone-component title="${repo.full_name}" class="p-3 rhun-rounded rhun-shadow">
                                <div class="rhun-text-tertiary">Description: <span class="rhun-text">${repo.description || 'N/A'}</span></div>
                                <div class="rhun-text-tertiary">Language: <span class="rhun-text">${repo.language || 'N/A'}</span></div>
                            </stone-component>
                        </a>
                    </div>
                `;
            }).join('');

            const repoListContainer = document.getElementById("repo-list");
            repoListContainer.innerHTML = `<div class="row">${repoItems}</div>`;
        })
        .catch((error) => {
            console.error(error);
            document.getElementById("user-info").innerHTML = "Unable to fetch user data";
            document.getElementById("repo-list").innerHTML = "";
        });
}

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const usernameInput = document.getElementById("username-input").value.trim();
    if (usernameInput) {
        searchGitHubUser(usernameInput);
    } else {
        document.getElementById("user-info").innerHTML = "";
        document.getElementById("repo-list").innerHTML = "";
    }
});
