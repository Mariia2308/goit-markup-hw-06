const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener("input", biggerer);
function biggerer(e) {
  text.style.fontSize = `${e.target.value}px`;
}