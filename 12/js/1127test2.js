let xhr = new XMLHttpRequest();
xhr.open("GET", "student-2.json", true)
xhr.send();

xhr.onreadystatechange = () => {
    if(xhr.readyState ===4 && xhr.status===200){
        let students = JSON.parse(xhr.responseText);
        renderhtml(students);   //html 출력은 함수로 작성
    };
    function renderhtml(contents){
        let htmlString = "";
        for(let content of contents){
            htmlString +=`
                <h2>${content.name}</h2>
                <ul>
                    <li>전공:${content.major}</li>
                    <li>학년:${content.grade}</li>
                </ul>
                <hr>`;
        };
        document.querySelector("#result").innerHTML = htmlString;
    }
}
