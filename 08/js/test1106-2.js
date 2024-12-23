const result = document.querySelector("#result");
const firstday = new Date("2023-07-01");
const today = new Date();

let wtime = today.getTime() - firstday.getTime();
let wday = Math.round(wtime / (1000 * 60 * 60 * 24));

result.innerText = wday;