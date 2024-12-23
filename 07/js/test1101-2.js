const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const booklist = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
    e.preventDefault();
    const item = document.createElement("li");
    item.innerHTML = 
    `${title.value} - ${author.value}
    <span class="delButton">삭제</span>`;
    booklist.appendChild(item);
    title.value = "";
    author.value = "";

    const delButtons = document.querySelectorAll(".delButton");
    for(let delButton of delButtons){
        delButton.addEventListener("click", function(){
            // this.parentNode.parentNode.removeChild(this.parentNode); 둘 다 가능
            this.parentNode.remove(this.parentNode);
            //let list = this.parentNode
            //this.parentNode.remove(list);와 같이 변수를 사용할 수 도 있음
        })
    }
})