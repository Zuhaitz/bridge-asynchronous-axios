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
const breedInput = document.querySelector("#breed");
const breedsList = document.querySelector("#breeds");
const findBtn = document.querySelector("#findBtn");
const randomImg = document.querySelector("#randomImg");
const allImages = document.querySelector("#allImages");

let breeds = [];

axios
  .get("https://dog.ceo/api/breeds/list/all")
  .then((res) => fillDataList(Object.keys(res.data.message)))
  .catch((error) => console.error(error));

function fillDataList(data) {
  breeds = data;
  data.forEach((breed) => {
    breedsList.innerHTML += `<option value="${breed}" />`;
  });

  findBtn.addEventListener("click", findImages);
}

function findImages(event) {
  event.preventDefault();
  let inputV = breedInput.value.toLowerCase();

  if (!inputV || !breeds.includes(inputV)) return;

  // axios
  //   .get(`https://dog.ceo/api/breed/${inputV}/images/random`)
  //   .then((res) => console.log(res.data.message))
  //   .catch((error) => console.error(error));
  axios
    .get(`https://dog.ceo/api/breed/${inputV}/images/random`)
    .then((res) =>
      addImageToDOM(
        randomImg,
        `Random image of a ${inputV} dog`,
        res.data.message
      )
    )
    .catch((error) => console.error(error));

  axios
    .get(`https://dog.ceo/api/breed/${inputV}/images`)
    .then((res) => addMultipleImagesToDOM(allImages, 5, res.data.message))
    .catch((error) => console.error(error));
}

function addImageToDOM(container, text, image) {
  container.innerHTML = `<p>${text}</p><img src="${image}" alt="Dog Image">`;
}

function addMultipleImagesToDOM(container, limit, images) {
  container.innerHTML = `<p>Only showing 
  ${Math.min(limit, images.length)} 
  results of ${images.length} images</p>`;

  for (let i = 0; i < limit && i < images.length; i++) {
    const image = images[i];
    container.innerHTML += `<img src="${image}" alt="Dog Image">`;
  }
}
