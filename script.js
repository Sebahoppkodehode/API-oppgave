const apiUrl = insertApiHere;

// fetch("apiUrl")
//   .then((response) => {
//     return response;
//   })
//   .then((data) => {
//     console.log(data.text());
//   });

async function getData() {
  try {
    const request = await fetch(apiUrl);
    const data = await request.json();

    console.log(data);
  } catch (error) {
    //show error
    console.log(error);
  }
}

getData();
