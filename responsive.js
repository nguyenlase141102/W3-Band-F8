var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const header = $("#header");
const currentHeight = header.clientHeight;
const allLink = $$("#header li a");
const iconBar = $(".icon-bar");

iconBar.addEventListener("click", function () {
  var headerHeight = header.clientHeight === currentHeight;

  if (headerHeight) {
    header.style.height = "auto";
    iconBar.style.backgroundColor = "#ccc";
  } else {
    header.style.height = "46px";
    iconBar.style.backgroundColor = "black";
    iconBar.style.color = "#fff";
  }
});

for (const i of allLink) {
  i.onclick = function () {
    header.style.height = "46px";
  };
}
