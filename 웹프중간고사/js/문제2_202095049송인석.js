const button = document.querySelectorAll("bt");//버튼


button.addEventListener("click", () => {    //확인을 클릭했을 때
    const pw = document.querySelector("#pw1").value;    //텍스트 필드
    const result = document.querySelectorAll("#result"); //결과값 표시할 영역
    if(pw == 12345){
        result.innerHTML = "당신은 멋진 분";
    }else{
        result.innerHTML = "암호가 일치하지 않습니다.";
    }
})