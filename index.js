//  Promise and its arguments resolve and return

// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This promise is resolved")
//     reject("This promise is rejected");
//   }, 2000);
// });

// // inside this item we will get the promise if it is resolved
// data.then((item) => console.log(item)).catch((err) => console.log('Catch block', err))

// fetch : methods by default returns promise

// let data = fetch("https://jsonplaceholder.typicode.com/posts");
// data
//   .then((item) => {                 // we resolve first promise and convert it to json format
//     return item.json();
//   })                                // second promise needs to be resolved for getting the data from the api
//   .then((item) => console.log(item));
//  // and this resolving of promise one after another means promise chaining

// Promise chaining

let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("data issue");
    resolve(10);
  }, 2000);
});
data
  .then((item) => {
    console.log("First promise", item);
    return item * 10;
  })
  .then((item) => {
    console.log("Second Promise", item);
    return item * 10;
  })
  .then((item) => {
    console.log("Third promise", item);
  })
  .catch((err) => console.log("Error resolving ", err));


  
// finally method will always run even if the promise is resolved or rejected
// data.finally((item) =>
//   console.log(
//     "Finally methods always runs whether promise is resolved or rejected",
//     item
//   )
// );






