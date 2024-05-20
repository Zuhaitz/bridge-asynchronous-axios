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
