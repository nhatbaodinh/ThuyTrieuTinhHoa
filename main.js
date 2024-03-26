window.addEventListener("scroll", function () {
  if (isScrolledToBottom()) {
    showSpinner();

    setTimeout(function () {
      window.location.href = "categories.html";
    }, 5000);
  }
});

function isScrolledToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function showSpinner() {
  var spinnerContainer = document.createElement("div");
  spinnerContainer.classList.add("spinner-container");

  var spinner = document.createElement("div");
  spinner.classList.add("spinner");

  var text = document.createElement("div");
  text.innerText = "ĐANG CHUẨN BỊ ĐỒ LẶN CHO BẠN NÈ, ĐỢI TÍ NHÉ!";
  text.classList.add("spinner-text");

  spinnerContainer.appendChild(spinner);
  spinnerContainer.appendChild(text);
  document.body.appendChild(spinnerContainer);
}