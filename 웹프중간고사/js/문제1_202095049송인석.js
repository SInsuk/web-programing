const button = document.getElementById("price");    //버튼
const sumtext = document.querySelectorAll("sumtext");   //결과값 출력
const checkbox = document.querySelectorAll("input[name='menu']:checked");   //체크박스 값

button.addEventListener("click", () => {
    const value = menuForm.menu[i].value;   //체크박스 value
    for(i=0; i<=input.length; i++){
    sum = sum + value;
    }
    sumtext.innerHTML.preventDefault(`지불할 총 금액은 ${sum}원 입니다.`);
})