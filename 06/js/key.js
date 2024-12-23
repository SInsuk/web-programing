const body = document.body;
const result = document.querySelector("#kResult");

body.addEventListener("keydown", (e) => {
    result.innerText = `
    code : ${e.code}
    key : ${e.key}`;
})