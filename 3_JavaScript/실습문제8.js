/* 
    사용자가 입력을 했을 때
    해당 조건이 틀릴 경우 빨간색으로 표시
               맞을 경우 초록색 표시와 함께 "OK!"
*/

const userid = document.querySelector("#userid");
const useridspan = document.querySelector("#userid+span");
userid.addEventListener("input", function () {
  // 첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오
  const regExp = /^[a-zA-z][a-zA-z0-9]{3,11}$/;
  const check = regExp.test(userid.value);
  if (check) {
    useridspan.style.color = "green";
    useridspan.innerHTML = "OK!";
  } else {
    useridspan.style.color = "red";
    useridspan.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오";
  }
});

const pw = document.querySelector("#pw");
const pwspan = document.querySelector("#pw+span");

pw.addEventListener("input", function () {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(pw.value);
  if (check) {
    pwspan.style.color = "green";
    pwspan.innerHTML = "OK!";
  } else {
    pwspan.style.color = "red";
    pwspan.innerHTML = "영문자,숫자,특수문자 포함하여 총 8~15자로 입력하시오";
  }
});

const pwt = document.querySelector("#pwt");
const pwtspan = document.querySelector("#pwt+span");

pwt.addEventListener("input", function () {
  if (pw.value === pwt.value) {
    pwtspan.style.color = "green";
    pwtspan.innerHTML = "OK!";
  } else {
    pwtspan.style.color = "red";
    pwtspan.innerHTML = "위의 비밀번호와 일치하게 입력하시오";
  }
  // 비밀번호와 데이터 값이 같아야함
  // 비밀번호와 같을 경우 ok표시
  // 비밀번호와 다를 경우 빨간글씨 표시
});

const username = document.querySelector("#username");
const usernamespan = document.querySelector("#username+span");

username.addEventListener("input", function () {
  const regExp = /^.+[가-힣]{1}$/;
  const check = regExp.test(username.value);
  if (check) {
    usernamespan.style.color = "green";
    usernamespan.innerHTML = "OK!";
  } else {
    usernamespan.style.color = "red";
    usernamespan.innerHTML =
      "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});

const email = document.querySelector("#email");
const emailspan = document.querySelector("#email+span");

email.addEventListener("input", function () {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(email.value);
  if (check) {
    emailspan.style.color = "green";
    emailspan.innerHTML = "OK!";
  } else {
    emailspan.style.color = "red";
    emailspan.innerHTML = "이메일 형식에 맞춰서 입력하시오";
  }
});

const userjoin = document.querySelector("#userjoin");
userjoin.setAttribute;
const cancel = document.querySelector("#cancel");
