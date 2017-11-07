// SET UP
const canvas = document.getElementById('rhinoceros');
const ctx = canvas.getContext('2d');

const COLORS = {
  LIGHTGREY: '#cbd2da',
  DARKGREY: '#54656f',
  GREY: '#90a6b5',
  YELLOW: '#fdc14d',
  ORANGE: '#f89b1c'
};

// BODY
ctx.beginPath();
ctx.moveTo(49, 551);
ctx.lineTo(499, 551);
ctx.lineTo(390, 227);
ctx.lineTo(156, 227);
ctx.closePath();
ctx.fillStyle = COLORS.GREY;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(160, 204);
ctx.lineTo(155, 238);
ctx.lineTo(101, 104);
ctx.lineTo(160, 204);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(155, 238);
ctx.bezierCurveTo(155, 238, -35, 275, 101, 104);
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

ctx.beginPath();
ctx.moveTo(392, 204);
ctx.lineTo(392, 239);
ctx.lineTo(450, 104);
ctx.lineTo(392, 204);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(392, 239);
ctx.bezierCurveTo(392, 239, 570, 270, 450, 104);
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(159, 202);
ctx.lineTo(275, 177);
ctx.lineTo(392, 200);
ctx.lineTo(410, 499);
ctx.lineTo(275, 539);
ctx.lineTo(139, 497);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTGREY;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(149, 332);
ctx.lineTo(149, 353);
ctx.lineTo(182, 353);
ctx.lineTo(149, 332);
ctx.closePath();
ctx.fillStyle = COLORS.DARKGREY;
ctx.fill();

ctx.beginPath();
ctx.moveTo(369, 353);
ctx.lineTo(402, 353);
ctx.lineTo(402, 333);
ctx.lineTo(369, 353);
ctx.closePath();
ctx.fillStyle = COLORS.DARKGREY;
ctx.fill();

// NOSE PARTS
ctx.beginPath();
ctx.moveTo(225, 354);
ctx.lineTo(322, 354);
ctx.lineTo(274, 109);
ctx.lineTo(225, 354);
ctx.closePath();
ctx.fillStyle = COLORS.GREY;
ctx.fill();

ctx.beginPath();
ctx.moveTo(236, 469);
ctx.arc(236, 469, 10, 0, Math.PI, 1);
ctx.fillStyle = COLORS.DARKGREY;
ctx.fill();

ctx.beginPath();
ctx.moveTo(315, 469);
ctx.arc(315, 469, 10, 0, Math.PI, 1);
ctx.fillStyle = COLORS.DARKGREY;
ctx.fill();
