const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)                  // 1) json 파일을 읽어온다.
.then(response => response.json())       // 2) json 파일을 객체로 변환한다.
.then(users => console.log(users));