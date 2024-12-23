//배경색 바꾸기
const bt2 = document.querySelector('#bg');
bt2.addEventListener('click', () => {
    document.body.style.backgroundColor ='green';
});

//글자 수 확인
const bt3 = document.querySelector('#word_bt');
const word = document.querySelector('#word');
const result = document.querySelector('#result');

bt3.addEventListener('click', () => {
    result.innerText = `${word.value.length}개 입니다.`;
})