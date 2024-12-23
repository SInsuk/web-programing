const seedInput = document.getElementById('seed');
const totalInput = document.getElementById('total');
const raffle = document.getElementById('raffle');
const result = document.getElementById('result');

raffle.addEventListener("click", (e) => {
    e.preventDefault();  
    const seed = parseInt(seedInput.value);
    const total = parseInt(totalInput.value);
    result.innerText = "당첨자 : "
    var winner = [];
    if (seed >= total) {
        while (winner.length < total) {
          const randomWinner = Math.floor(Math.random() * seed) + 1;
          if (!winner.includes(randomWinner)) {
            winner.push(randomWinner);
          }
        }
        result.textContent = '당첨자: ' + winner.join(', ');
      } else {
        result.textContent = '전체 인원 수가 더 적습니다.';
      }
})
const reset = document.getElementById('clear');
reset.addEventListener("click", (e) => {
  result.innerText = " ";
})