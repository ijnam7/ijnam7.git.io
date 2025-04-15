function setCopyHandler(id) {
  document.getElementById(id).addEventListener("click", function () {
    const text = this.innerText;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        showAlert(`복사되었습니다: ${text}`);
      })
      .catch((err) => {
        showAlert(`복사 실패: ${err}`);
      });
  });
}

// 복사 이벤트 연결
setCopyHandler("textToCopy1");
setCopyHandler("textToCopy2");

// 알림 표시 함수
// 알림을 보여주는 함수
let alertTimeout1, alertTimeout2;

function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  // 이전 타이머 제거 (중복 방지)
  clearTimeout(alertTimeout1);
  clearTimeout(alertTimeout2);

  // 메시지 설정 및 표시
  alertMessage.textContent = message;
  alertBox.style.display = "block";

  // 살짝 기다렸다가 opacity 1 (fade in)
  setTimeout(() => {
    alertBox.style.opacity = 1;
  }, 10);

  // 5초 후 서서히 사라짐 (fade out)
  alertTimeout1 = setTimeout(() => {
    alertBox.style.opacity = 0;
  }, 800);

  // 6초 후 완전히 숨김
  alertTimeout2 = setTimeout(() => {
    alertBox.style.display = "none";
  }, 1600);
}
