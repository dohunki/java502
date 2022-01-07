// v 버튼을 클릭했을 때 active 클래스를 객체(.faq)에 준다.
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
  // 모든 토글에 클릭시 상위객체 (.parentNode)를 찾아서 active 클래스를 토글
  toggle.addEventListener('click', () => {
    // console.log(toggle.parentNode)
    toggle.parentNode.classList.toggle('active')
    // e.target.parentNode.parentNode.classList.toggle('active'); // 'click'옆에 (e)로 바꾸면 동일한 결과
    // 클래스가 있으면 제거, 없으면 추가
  })
})
