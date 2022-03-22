/* WEB API WITH FETCH DEMO--  */
let baseURL =
  "https://api.nasa.gov/planetary/apod?api_key=";
let apiKey = "0hXwqe21GwLSfrufV2A6HXQrX4TUmbW0GfCAGUQ1";
let postedNewData = document.getElementById("animal").value;

document
  .getElementById("generate")
  .addEventListener("click", performAction);

function performAction(e) {
  getAnimalDemo(baseURL, postedNewData, apiKey).then(
    function (data) {
      console.log(data);
      postData("/addAnimal", {
        copyright: data.copyright,
        url: data.url,
        posted: NewData,
      });
    }
  );
}

const getAnimalDemo = async (baseURL, animal, key) => {
  const res = await fetch(`${baseURL}${key}`);
  try {
    const data = await res.json();
    console.log(data);
    // 1. We can do something with our returned data here-- like chain promises!

    // 2.
    // postData('/addAnimal', data)
  } catch (error) {
    // appropriately handle the error
    console.log("error", error);
  }
};

const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST", // *GET , POST , PUT , DELETE, etc
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

document
  .getElementById("generate")
  .addEventListener("click", performAction);

// function performAction(e) {
//   const newAnimal = document.getElementById("animal").value;
//   const favFact = document.getElementById("favorite").value;

//   getAnimal("/animalData")
//     // New Syntax!
//     .then(function (data) {
//       // Add data
//       console.log(data);
//       postData("/addAnimal", {
//         animal: data.animal,
//         fact: data.fact,
//         fav: favFact,
//       });
//     })
//     .then(updateUI());
// }

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("animalName").innerHTML =
      allData[0].animal;
    document.getElementById("animalFact").innerHTML =
      allData[0].facts;
    document.getElementById("animalFav").innerHTML =
      allData[0].fav;
  } catch (error) {
    console.log("error", error);
  }
};
