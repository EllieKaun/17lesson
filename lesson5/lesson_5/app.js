const som = document.querySelector("#som");
const usd = document.querySelector("#usd");

// som.addEventListener("input", () => {
//   const req = new XMLHttpRequest();
//   req.open("GET", "data.json");
//   req.setRequestHeader("Content-type", "application/json");
//   req.send();
//   req.addEventListener("load", () => {
//     const response = JSON.parse(req.response);
//     usd.value = (som.value / response.usd).toFixed(2);
//   });
// });

const convert = (elem, target, isTrue) => {
  elem.addEventListener("input", () => {
    const req = new XMLHttpRequest();
    req.open("GET", "data.json");
    req.setRequestHeader("Content-type", "application/json");
    req.send();
    req.addEventListener("load", () => {
      const response = JSON.parse(req.response);
      isTrue
        ? (target.value = (elem.value / response.usd).toFixed(2))
        : (target.value = (elem.value * response.usd).toFixed(2));
      elem.value === "" && (target.value = "");
    });
  });
};

convert(som, usd, 23);
convert(usd, som, "");

//  '', NaN, false, null, undef
