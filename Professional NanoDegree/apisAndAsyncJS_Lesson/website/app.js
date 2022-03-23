const postData = async (url = "", appData = {}) => {
  console.log(appData);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appData),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (e) {
    console.log(`error is: ${e}`);
  }

  // .then(
  // 	(resolve) => {
  // 	  const newData = resolve.json();
  // 	  console.log(newData);
  // 	  return newData;
  // 	},
  // 	(reject) => {
  // 	  console.log(`error is: ${reject}`);
  // 	}
  //   )
  //   .then((resolve) =>
  // 	console.log(`this is from second 'then' ${resolve}`)
  //   )
};

const getData = async (url = "") => {
  const request = await fetch(url);

  try {
    const allData = await request.json();
  } catch (e) {
    console.log(e);
  }
};

postData("/data", {
  posted: "newlyyyyyyyyyy posted data!",
  intelligence: 100,
});
postData("/movie", {
  movie: "The Witcher",
  score: 69,
});
