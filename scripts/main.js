var link = document.querySelector(".search-hotels__button");
var popup = document.querySelector(".modal-search-hotels");
var isStorageSupport = true;
var storage="";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
