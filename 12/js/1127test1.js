let xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        let user = JSON.parse(xhr.responseText);
        document.querySelector('#result').innerHTML = `
        <h1> ${user.name}</h1>
        <ul>
            <li>전공:${user.major}</li>
            <li>학년:${user.grade}</li>
        </ul>
        `;
    }
}