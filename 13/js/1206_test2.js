//콘솔창에서 데이터 구조 파악부터 하기
// const quotesURL = "https://dummyjson.com/quotes";

// fetch(quotesURL)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(error => console.log(error));

const URL ="https://dummyjson.com/quotes";

function display(quotes) {
    const result = document.querySelector('#result');
    let string = "";
    quotes.forEach((data) => {
        string += `<table>
        <tr><th>명언</th><td>${data.quote}<td></tr>
        <tr><th>작가</th><td>${data.author}</td></tr>
        </table>`;
  });
        result.innerHTML = string;
}

fetch(URL)
.then(respones => respones.json())
//json최상위 레벨에 여러 키(예: quotes, total, skip, limit중)
//quotes키의 배열 가져오기
.then(datas => display(datas.quotes))
.catch(error => console.log(error));