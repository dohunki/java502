// %표시 글자 , 벡그라운드 객체 상수로 저장
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
// 로딩 숫자 초기값 0
let load = 0

let inteval = setInterval(blurring, 30) // 시간 0.03초에 한번씩 blurring 함수 실행

function blurring() {
  load++
  console.log(load)
  if (load > 99) {
    //로드가 숫자 100이상이면 clearInterval(인터벌객체이름) 으로 해제한다.
    clearInterval(inteval) // 위의 반복인터벌을 중지한다.
  }

  loadText.textContent = `${load}%` // load 변수를 벡틱`${변수}`(숫자 1옆의 따옴표)으로 표시한다.
  // 1. 블러필터를 사용, 처음에는 흐리게(30px) =>  선명하게(0px)
  // 2. 글자를 갈수록 흐리게 opacity 1 => 0 (안보이게)
  loadText.style.opacity = scale(load, 0, 100, 1, 0) // (0~100) => (1,0) 으로 변경한다.
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` // (0~100) => (30,0) 으로 변경한다.
}

// 한 레인지(0~100)를 다른 레인지 (1~0) , 블러(30~0) 로 변환하는 함수 공식 => 스택오버플로우 검색
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
