// 입력받는 창
const textarea = document.getElementById('textarea')
// 태그들을 넣을 태그 객체
const tagsEl = document.getElementById('tags')

// 처음 시작시 커스를 입력항에
textarea.focus()

textarea.addEventListener('keyup', (e) => {
  // console.log(e.target.value) // 입력한 값
  createTags(e.target.value)
  // 엔터 입력시
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '' // 클리어(공백)
    }, 10) // 시간 뒤에 한 번 함수 실행
    randomSelect() // 랜덤 선택
  }
})

function randomSelect() {
  const times = 30 // 시간을 바꿀 수 있도록
  // 계속 반복되는 함수
  const interval = setInterval(() => {
    // 0.1초마다 실행됨
    const randomTag = 랜덤태그선택()
    하이라이트(randomTag)

    setTimeout(() => {
      하이라이트제거(randomTag)
    }, 100) // 0.1초 뒤에 하이라이트 제거
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = 랜덤태그선택()
      하이라이트(randomTag)
    }, 100)
  }, times * 100) // 주어진 시간뒤에 멈추기
}

function 랜덤태그선택() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function 하이라이트(tag) {
  tag.classList.add('highlight')
}

function 하이라이트제거(tag) {
  tag.classList.remove('highlight')
}

function createTags(input) {
  // input이 e.target.value이다.
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '') // 필터 => 공백만 있는 것 제거
    .map((tag) => tag.trim()) // 맵 => 공백이 있을 때 공백제거

  // console.log(tags); //콤마로 분리된 배열확인
  tagsEl.innerHTML = '' // 안의 태그드를 전부 삭제 후 여기에 태그들을 입력한다.
  tags.forEach((tag) => {
    const tagEl = document.createElement('span') // JS 스팬 태그 만들기
    tagEl.classList.add('tag') // 태그 클래스 추가
    tagEl.textContent = tag // 글자내용을 tag로 입력
    tagsEl.appendChild(tagEl) // tags에 자식태그로 입력
  })
}
