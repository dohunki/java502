// 사용자 데이터 입력
function inputScore() {
    for (var i = 0; i < 3; i++) {
        var tmp = prompt("점수를 입력해주세요");
        tmp = Number(tmp);
        scores.push(tmp);
    }
}

// 점수 총합 계산
function totalScore() {
    for (var i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }
}

// 점수 평균 계산
function avgScore() {
    avg = total / scores.length;
}

// 총합 및 평균 점수 출력
function printScore() {
    console.log("입력된 점수의 총합은 " + total + "점이고, \n점수의 평균은 " + avg + "점 입니다.");
}