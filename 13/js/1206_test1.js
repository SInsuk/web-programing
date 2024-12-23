//1)fetch를 사용하여 자료 가져오기
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then(respones => respones.json())
.then(users => console.log(users));