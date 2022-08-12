var number = [9, 12, 9];
var count = document.querySelectorAll(".count-likes");
function increaseLike0() {
  number[0] = parseInt(count[0].innerText);
  console.log(number[0]);
  number[0]++;
  count[0].innerText = number[0];
}
function increaseLike1() {
  number[1] = parseInt(count[1].innerText);
  console.log(number[1]);
  number[1]++;
  count[1].innerText = number[1];
}
function increaseLike2() {
  number[2] = parseInt(count[2].innerText);
  console.log(number[2]);
  number[2]++;
  count[2].innerText = number[2];
}
