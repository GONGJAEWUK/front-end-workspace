// DOMContentLoaded : DOM 구조가 로드되고 실행! -> js파일을 맨 하단으로 놓으면 굳이 필요 없음!

window.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  h1.onmouseenter = function () {
    h1.style.backgroundColor = "purple";
  };
  h1.onmouseleave = function () {
    h1.style.backgroundColor = "pink";
  };
  h1.addEventListener(
    //이벤트명(ex :
    "click",
    //이벤트 객체 이벤트가 발생했을 때 일어날 함수))
    function () {
      h1.style.backgroundColor = "skyblue";
    }
  );
});

const img = document.querySelectorAll(".container img");

/* 이미지마다 이벤트 걸려면 반복문 필요! */
/*for (const i in img) {
  img[i].addEventListener("click", function (e) {
    console.log(e.currentTarget);
    img[i].style.display = "none";
  });
}*/

/* for (const item of img) {
  item.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.display = "none";
  });
} */

const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}
/*
container.addEventListener("click", function (e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
});*/
