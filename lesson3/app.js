// function varTest() {
//   var x = 1;
//   console.log(x, "a");
//   if (true) {
//     var x = 2;
//     console.log(x, "b");
//   }
//   console.log(x, "c");
// }

// varTest();

// const letTest = () => {
//   let x = 1;
//   console.log(x, "a");
//   if (true) {
//     let x = 2;
//     console.log(x, "b");
//   }
//   console.log(x, "c");
// };

// letTest();

// const doHomeWork = (subject, callback) => {
//   alert(`Starting my ${subject} homework`);
//   callback();
// };

// function doHomeWork(subject, callback) {
//   alert(`Starting my ${subject} homework`);
//   callback();
// }
// const alertFinished = () => {
//   alert("DONE!!!");
// };

// doHomeWork("scince", alertFinished);

const btn = document.querySelectorAll("button");
// console.log(btn);

// btn.forEach((item) => {
//   //   console.log(item);
//   item.addEventListener("click", (event) => {
//     console.log(event.target);
//     const targetButton = event.target.classList;
//     if (targetButton.contains("red")) {
//       targetButton.remove("red");
//     } else {
//       targetButton.add("red");
//     }
//   });
// });

const wrapper = document.querySelector(".wrapper");

const newBtn = document.createElement("button");

wrapper.append(newBtn);

wrapper.addEventListener("click", (event) => {
  console.dir(event.target);
  if (event.target.tagName === "BUTTON") {
    const targetButton = event.target.classList;
    targetButton.toggle("red");
  }
});
