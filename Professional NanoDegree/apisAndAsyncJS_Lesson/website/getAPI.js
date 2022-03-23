let baseURL =
  "https://api.nasa.gov/planetary/apod?api_key=";
let apiKey = "e8is1pZwrkABmFohbPlVsDZ4iMOwXxmcf0l1bkYa";

document
  .getElementById("generate")
  .addEventListener("click", performAction);

function performAction(e) {
  const value = document.getElementById("request").value;

  getRequest(baseURL, apiKey).then((resolve) => {
    console.log(resolve);
    postRequest(`${baseURL}${apiKey}`, {
      medo: "POST DATA BY ME!",
    });
  });
}

const getRequest = async (baseURL, key) => {
  const res = await fetch(`${baseURL}${key}`);

  try {
    const data = await res.json();
    console.log(data);
    console.log(data.hdurl);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const postRequest = async (url, data) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (e) {
    console.log(e);
  }
};
