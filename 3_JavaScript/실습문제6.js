function count() {
  // 지금 현재 날짜와 비교해야 할 날짜
  const now = new Date();
  console.log(now);

  const last = new Date("2025-01-01 00:00:00");

  console.log(last);

  console.log(last - now); // 밀리 세컨드
  // 1초 = 밀리 세컨드 / 1000
  // 60초 = 1분, 60분 = 1시간, 24시간 = 1일

  const second = Math.floor((last - now) / 1000); //
  const minutes = Math.floor(second / 60);
  const hour = Math.floor(minutes / 60);
  const day = Math.floor(hour / 24);
  console.log(minutes);
  console.log(second);
  console.log(hour);
  console.log(day);
  clock.innerHTML = `${String(day).padStart(2, "0")}일 ${String(
    hour % 24
  ).padStart(2, "0")}시간 ${String(minutes % 60).padStart(2, "0")}분 ${String(
    second % 60
  ).padStart(2, "0")}초`;
}

count();
setInterval(count, 1000);
