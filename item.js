document.addEventListener("DOMContentLoaded", function () {
  var loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", function (event) {
          event.preventDefault();
          includeMoreContent();
      });
  }
});

function includeMoreContent() {
  var itemRow = document.getElementById("itemRow");
  
  var originalContent = itemRow.innerHTML;

  itemRow.innerHTML += originalContent;
}
