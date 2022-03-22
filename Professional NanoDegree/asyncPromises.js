var promise = new Promise(function (resolve, reject) {
  // do a thing, possibly async, then…

  if ("everything turned out fine") {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});

// -HL The keywords 'try' and 'catch' mirror the Promise functionality of resolving or rejecting

// -HL 'await' ... in places where the next actions requires data from the current action.... to wait until the data has been received before continuing with the next steps--

// async post
const postData = async (url = "", data = {}) => {
  // console.log(data);
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
    console.log(`Aw, error occurs: ${error}`);
  }
};

postData("/all", { moive: `The Witcher` });

// async get
const getData = async (url = "") => {
  const request = await fetch(url);

  try {
    const allData = await request.json();
  } catch (e) {
    console.log(`error: ${e}`);
  }
};
getData("/animal");
