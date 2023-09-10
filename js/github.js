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
            const userContainer = document.getElementById("user-info");

            userContainer.innerHTML = `
                <div>User: ${user.login}</div>
                <p>Public Repositories: ${user.public_repos}</p>
            `;

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
            const userList = document.getElementById("repo-list");

            userList.innerHTML = "";
            repos.forEach((repo) => {
                const listItem = document.createElement("li");
                listItem.className = "list-group-item";
                
                // Create a link for the repository name
                const repoLink = document.createElement("a");
                repoLink.href = repo.html_url;
                repoLink.textContent = repo.full_name;
                
                // Create a <div> for the repository description
                const repoDescription = document.createElement("div");
                repoDescription.textContent = `Description: ${repo.description}`;
                
                // Create a <div> for the repository language
                const repoLanguage = document.createElement("div");
                repoLanguage.textContent = `Language: ${repo.language}`;
                
                listItem.appendChild(repoLink);
                listItem.appendChild(repoDescription);
                listItem.appendChild(repoLanguage);
                userList.appendChild(listItem);
            });
            
        })
        .catch((error) => {
            console.error(error);
            const userContainer = document.getElementById("user-info");
            const userList = document.getElementById("repo-list");
            userContainer.innerHTML = "Unable to fetch user data";
            userList.innerHTML = "";
        });
}

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const usernameInput = document.getElementById("username-input").value.trim();
    if (usernameInput) {
        searchGitHubUser(usernameInput);
    } else {
        const userContainer = document.getElementById("user-info");
        const userList = document.getElementById("repo-list");
        userContainer.innerHTML = "";
        userList.innerHTML = "";
    }
});
