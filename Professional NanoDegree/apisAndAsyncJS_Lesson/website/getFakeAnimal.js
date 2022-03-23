document
  .getElementById("generate")
  .addEventListener("click", performAction);

function performAction(e) {
  const value = document.getElementById("request").value;

  getRequest("/fakeAnimalData").then((data) => {
    postRequest("/addFake", {
      animal: data.animal,
      fact: data.fact,
      fav: value,
    });

    updateUI();
  });
}

const getRequest = async (url) => {
  // get from fake animal data
  const res = await fetch(url);

  try {
    const data = await res.json();
    console.log(data);
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

const updateUI = async () => {
  const res = await fetch("/all");

  try {
    const allData = await res.json();
    console.log(allData);

    document.getElementById("animal").textContent =
      allData[0].animal;
    document.getElementById("fact").textContent =
      allData[0].fact;
    document.getElementById("fav").textContent =
      allData[0].fav;
  } catch (e) {
    console.log(e);
  }
};
