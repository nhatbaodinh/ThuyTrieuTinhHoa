function navigateToHome() {
  window.location.href = "home.html";
  return false;
}

function navigateToSignin() {
  window.location.href = "signin.html";
  return false;
}

function handleForgotSubmit(event) {
  event.preventDefault();

  var userInput = document.querySelector(".form-input").value;

  if (userInput.trim() !== "") {
    alert("Đã gửi mã OTP đến Email của bạn.");
    window.location.href = "otp.html";
  } else {
    alert("Hãy nhập thông tin tài khoản để tìm kiếm.");
  }
}

function handleOTPSubmit(event) {
  event.preventDefault();
  var userInput = document.querySelector(".form-input").value;
  if (userInput.trim() !== "") {
    window.location.href = "signin.html";
  } else {
    alert("Hãy nhập mã OTP.");
  }
}
