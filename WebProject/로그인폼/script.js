// 라벨들을 선언
const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.textContent // "이메일"의 경우
    .split('') // ["이", "메", "일"]
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`,
    )
    .join('') // 각각의 span태그를 다 합침
})

// <label>
//       <span style="transition-delay: 0ms">이</span>
//       <span style="transition-delay: 80ms">메</span>
//       <span style="transition-delay: 160ms">일</span>
// </label>
// /http://tcpschool.com/css/css3_transform_transition
