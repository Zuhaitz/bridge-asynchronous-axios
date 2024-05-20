// Exercise 1 - Draw Users
const usersList = document.querySelector("#usersList");
const showUsersBtn = document.querySelector("#showUsersBtn");
let users = [];

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    users = res.data;
  })
  .then(showUsersBtn.addEventListener("click", showUsers))
  .catch((error) => console.error(error));

function showUsers() {
  // console.log(users);
  // console.log(users.map((user) => user.name));

  usersList.innerHTML = "";
  users.forEach((user) => {
    let name = document.createElement("p");
    name.innerHTML = user.name;
    usersList.appendChild(name);
  });
}

// Exercise 2 - Doge
axios
  .get("https://dog.ceo/api/breeds/list/all")
  .then((res) => console.log(Object.keys(res.data.message)))
  .catch((error) => console.error(error));

axios
  .get("https://dog.ceo/api/breed/affenpinscher/images/random")
  .then((res) => console.log(res.data.message))
  .catch((error) => console.error(error));

axios
  .get("https://dog.ceo/api/breed/affenpinscher/images")
  .then((res) => console.log(res.data.message))
  .catch((error) => console.error(error));
