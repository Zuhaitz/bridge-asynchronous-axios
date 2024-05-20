// Extra 2 - GitHub Users
const user = document.querySelector("#user");
const findUserBtn = document.querySelector("#findUserBtn");
const userInfo = document.querySelector("#userInfo");

findUserBtn.addEventListener("click", fetchUser);

function fetchUser(event) {
  event.preventDefault();

  axios
    .get(`https://api.github.com/users/${user.value}`)
    .then((res) => showUserInfo(res.data))
    .catch((error) => console.error(error));
}

function showUserInfo(data) {
  let { name, public_repos: numRepos, avatar_url: avatarImg } = data;

  userInfo.innerHTML = `
  <p>Name: ${name}</p>
  <p>Number of repositories: ${numRepos}</p>
  <img src="${avatarImg}" alt="${name} profile picture">
  `;
}
