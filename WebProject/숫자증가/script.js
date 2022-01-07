// counter 클래스가 있는 모든 객체들을 counters에 저장
const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.textContent = '0'
  업데이트카운터(counter)
})

function 업데이트카운터(counter) {
  // +는 문자열을 숫자로 바꾼다. parseInt()를 사용해도 된다.
  const target = +counter.getAttribute('data-target')
  // console.log(target); // 12000, 7000, 5000
  const c = +counter.textContent // 현재는 0

  const increment = target / 400 // 1/400 의 비율만큼 증가

  if (c < target) {
    counter.textContent = `${Math.ceil(c + increment)}` // 반올림 제거
    setTimeout(() => {
      업데이트카운터(counter)
    }, 1) // 타겟값보다 작으면 0.001초 뒤에 함수 실행
  } else {
    counter.textContent = target // 타겟값 입력
  }
}
