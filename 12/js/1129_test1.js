const url = "https://jsonplaceholder.typicode.com/users";

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onreadystatechange = () => {
    if(xhr.readyState ===4 && xhr.status===200){
        let students = JSON.parse(xhr.responseText);
        console.log(students);
        renderhtml(students);   //html 출력은 함수로 작성
    };
    function renderhtml(contents){
        let htmlString = "";
        for(let content of contents){
            htmlString +=`
                <h2>${content.name}</h2>
                <ul>
                    <li>UserName: ${content.username}</li>
                    <li>email: ${content.email}</li>
                </ul>
                <hr>`;
        };
        document.querySelector("#userdata").innerHTML = htmlString;
    }
}
