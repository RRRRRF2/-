const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
];

let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown(event) {
  isPainting = true;
}
function cancelPainting(event) {
  isPainting = false;
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting)

lineWidth.addEventListener("change", onLineWidthChange);