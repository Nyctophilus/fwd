/* WEB API WITH FETCH DEMO--  */
let baseURL =
  "https://api.nasa.gov/planetary/apod?api_key=";
let apiKey = "0hXwqe21GwLSfrufV2A6HXQrX4TUmbW0GfCAGUQ1";
let postedNewData =
  document.getElementById("promise").value;

document
  .getElementById("generate")
  .addEventListener("click", performAction);

function performAction(e) {
  fetchNasa();
}

const myPromise = new Promise((resolve, reject) => {
  // Only One State Allowed
  // resolve("Resolved");
  // reject("Rejected"); // Ignored

  if (Math.random() * 100 < 50) {
    resolve("Good");
  } else {
    reject("Bad");
  }
});

myPromise.then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

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
