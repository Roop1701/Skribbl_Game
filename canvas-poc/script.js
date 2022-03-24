const canvas = document.querySelector("#drawing-area");
let is_drawing = false;
let is_erase = false;
let defaultColor = "rgb(255,255,255)";
let startX, startY, currentX, currentY;

let ctx = canvas.getContext("2d");
ctx.fillStyle = defaultColor;

canvas.addEventListener("mousedown", (e) => {
  startX = e.offsetX;
  startY = e.offsetY;
  is_drawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  currentX = e.offsetX;
  currentY = e.offsetY;

  if (is_drawing) {
    if (is_erase) {
      ctx.fillStyle = defaultColor;
      ctx.fillRect(currentX, currentY, 20, 20);
    } else {
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();

      startX = currentX;
      startY = currentY;
    }
  }
});

canvas.addEventListener("mouseup", (e) => {
  is_drawing = false;
});

const selectEraser = () => {
  is_erase = true;
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  is_erase = false;
};

const selectPencil = () => {
  is_erase = false;
};
