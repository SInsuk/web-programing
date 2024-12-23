const orderbutton = document.querySelector("#order");
const orderinfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

orderbutton.addEventListener("click", () => {
    let newp = document.createElement("p");
    let txtnode = document.createTextNode(title.innerText);

    newp.appendChild(txtnode);
    orderinfo.appendChild(newp);
}, {once:true})