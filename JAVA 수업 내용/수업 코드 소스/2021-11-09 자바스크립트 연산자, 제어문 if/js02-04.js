var id = ""; // id 를 입력받기 위한 변수
var pw = ""; // 비밀번호를 입력받기 위한 변수

id = prompt("아이디를 입력하세요"); // 자바스크립트에 사용자의 입력을 받기 위한 명령
if (id == "admin") { // 사용자의 입력 내용과 프로그램 내의 정보가 동일한지 확인(id 정보)
    pw = prompt("비밀번호를 입력하세요");
    
    if (pw == "123456") { // 사용자의 입력 내용과 프로그램 내의 정보가 동일한지 확인(pw 정보)
        location.href = "./js02-04_login.html"; // location.href : 자바스크립트 명령어 중 하나로 지정된 페이지로 강제 이동시키는 명령어
    }
    else {
        location.href = "./js02-04_error.html"; // 입력된 비밀번호와 프로그램 내의 비밀번호가 다를 경우 지정된 페이지로 이동
    }
}
else {
    location.href = "js02-04_error.html";
}