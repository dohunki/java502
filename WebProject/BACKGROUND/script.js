// alert('테스트')
// 사용할 객체를 상수로
const css = document.querySelector('h3')
const color1 = document.querySelector('color1')
const color2 = document.querySelector('color2')

// id 선택시 getElementById를 사용('id')
const body = document.querySelector('gradient')
const h1 = document.querySelector('h1')
const button = document.querySelector('button')

// 이벤트 리스너 달기
// button.addEventListener('이벤트타입', 함수이름)
// button.addEventListener('click', set) // 버튼을 클릭하면 set함수가 실행

// function set() {
//   h1.textContent = '클릭했음'
//   console.log('클릭했음')
// }

function set() {
  body.style.background =
    'linear-gradient(45DEG,' + color1.value + ',' + color2.value + ')'
}
color1.addEventListener('input', set)
color2.addEventListener('input', set)
