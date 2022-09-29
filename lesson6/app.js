// // console.log("Подготвка...");
// // setTimeout(() => {
// //   const product = {
// //     name: "Phone",
// //     price: 4000,
// //   };
// //   console.log(product, "1");
// //   setTimeout(() => {
// //     product.status = "oredered";
// //     console.log(product, "2");
// //   }, 2000);
// // }, 2000);

// console.log("Подготвка...");
// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const product = {
//       name: "Phone",
//       price: 4000,
//     };
//     console.log(product, "1");
//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "oredered";
//         console.log(product, "2");
//         resolve(product);
//         // reject();
//       }, 2000);
//     });
//   })
//   .then((product) => {
//     product.isModified = true;
//     console.log(product, "3");
//   })
//   .finally(() => {
//     console.log("finilly");
//   });
// //   .catch(() => {
// //     console.log("error");
// //   })

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((json) => console.log(json));
//   .catch(() => console.log("error"));

// const arr = [1, 2, 4, 5, 6, 9];
// const obj = { key: "value" };

// arr.map((item, i) => {
//   console.log(item);
// });
