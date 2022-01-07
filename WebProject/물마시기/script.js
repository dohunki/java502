// 상수 정의
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

// 작은컵을 마우스 클릭시 => 큰컵 물채우기(full클래스);

//forEach( (아이템,인덱스) => {})
smallCups.forEach((cup, idx) => {
  // 작은컵에 클릭이벤트 달때 함수에 idx(인덱스번호) 매개변수
  cup.addEventListener('click', () => 작은컵들채우기(idx))
})

function 작은컵들채우기(idx) {
  // console.log(idx)
  // 마지막컵을 클릭했을 때 이미 가득차 있는 경우와 중간컵을 클릭했는데 다 차있을 경우
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx--
  else if (
    smallCups[idx].classList.contains('full') &&
    smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--
  }
  // 일반적인 경우 클릭한 컵 이하로는 다 full 아니면 다 full 제거
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  큰컵물채우기()
}

function 큰컵물채우기() {
  // 물이 채워진(full) 작은컵의 개수를 저장
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length // 총 작은 물컵의 개수

  if (fullCups === 0) {
    // 채운컵이 없을 경우 %는 안보이고 높이가 0
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    // 채운컵이 있으면 %는 보이고 높이는 ( fullCups/totalCups )*330 px
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%` // innerText는 textContent와 같다.
  }

  if (fullCups === totalCups) {
    // 모든 컵이 다 채워졌을 겨우 리메인은 안보이고 높이는 0
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    // 다 채워지지 않은 경우 남은 양은 계산해서 보여주기
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
