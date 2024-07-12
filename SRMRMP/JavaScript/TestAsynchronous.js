// function fetchData(callback) {
//   console.log("fetching data ...");
//   setTimeout(() => {
//     const data = {
//       name: "Ravi",
//       age: 25,
//     };
//     callback(data);
//   }, 10000);
// }
// function processData(data) {
//   console.log(data);
// }
// fetchData(processData);

function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("fetching data ...");
    setTimeout(() => {
      const data = {
        name: "Ravi",
        age: 25,
      };
      resolve(data);
    }, 10000);
  });
}
fetchData()
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
