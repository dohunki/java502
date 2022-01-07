// 입력할 태그 객체
const insert = document.getElementById('insert')

// 키 입력 이벤트 : 윈도우창에 이벤트 발생
// 현재화면에서 키입력시 이벤트 발생
window.addEventListener('keydown', (event) => {
  // console.log(event.key)
  // console.log(event.keyCode)
  // console.log(event.code)

  insert.innerHTML = `
  <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
    `
})

window.addEventListener('click', (e) => {
  console.log(`클릭한 좌표: (${e.clientX}px, ${e.clientY}px)`)
})
