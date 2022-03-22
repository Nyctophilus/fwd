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
  fetchNasa(baseURL, apiKey).then(function (
    data,
    postedNewData
  ) {
    console.log(data);
    postData(
      "https://api.nasa.gov/planetary/apod?api_key=0hXwqe21GwLSfrufV2A6HXQrX4TUmbW0GfCAGUQ1",
      {
        copyright: data.copyright,
        url: data.url,
        posted: postedNewData,
      }
    );
  });
}

const fetchNasa = async (baseURL, key) => {
  const res = await fetch(`${baseURL}${key}`);
  try {
    const data = await res.json();
    console.log(data);
    // 1. We can do something with our returned data here-- like chain promises!

    // 2.
    // postData('/nasa', data)
    return data;
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
