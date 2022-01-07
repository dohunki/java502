// alert('테스트 ');
// 상수 const 로 태그 객체를 생성
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const h1 = document.querySelector('h1')

// 랜덤 숫자를 만들어 그 숫자값의 주사위를 출력한다.
// 변수는 let (자바스크립트는 타입이 필요없다.)
let n1 = Math.floor(Math.random() * 6) + 1
let n2 = Math.floor(Math.random() * 6) + 1

console.log(n1)
console.log(n2)

img1.setAttribute('src', 'images/dice' + n1 + '.png')
img2.setAttribute('src', 'images/dice' + n2 + '.png')

if (n1 > n2) {
  h1.textContent = '🎂Player 1 Wins!'
} else if (n2 > n1) {
  h1.textContent = 'Player 2 Wins!🎂'
} else {
  h1.textContent = 'Draw! 💥'
};

