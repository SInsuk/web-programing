const openbt = document.querySelector("button");

openbt.addEventListener("click", () => {
    let left = (screen.availWidth - 600)/2;
    let top = (screen.availHeight - 500)/2;
    window.open("notice.html", "이벤트 팝업", `width=500, height=400, left=${left}, top=${top}`);
})