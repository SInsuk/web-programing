const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
  alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
  console.log(e);      
});
box.addEventListener("mouseover", () =>{
  box.style.backgroundColor = "pink";
});
box.addEventListener("mouseleave", () =>{
  box.style.backgroundColor = "white";
});