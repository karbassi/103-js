// SET UP
const canvas = document.getElementById('boston-terrier');
const ctx = canvas.getContext('2d');

const COLORS = {
  BLACK: '#241F20',
  WHITE: '#F0F0F0',
  GREY: '#A39C99',
  BROWN: '#91632F',
  YELLOW: '#DAC79A',
  PINK: '#EF477C',
};

// NECK
ctx.beginPath();
ctx.moveTo(463, 551);
ctx.lineTo(146, 551);
ctx.lineTo(145, 467);
ctx.lineTo(119, 429);
ctx.lineTo(105, 307);
ctx.lineTo(192, 174);
ctx.lineTo(357, 174);
ctx.lineTo(444, 308);
ctx.lineTo(430, 426);
ctx.lineTo(413, 456);
ctx.lineTo(463, 551);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

// WHITE LINE
ctx.beginPath();
ctx.moveTo(237, 174);
ctx.lineTo(313, 174);
ctx.lineTo(313, 350);
ctx.lineTo(382, 404);
ctx.lineTo(394, 523);
ctx.lineTo(275, 468);
ctx.lineTo(155, 524);
ctx.lineTo(168, 404);
ctx.lineTo(237, 351);
ctx.lineTo(237, 175);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// NOSE GREY
ctx.beginPath();
ctx.moveTo(311, 359);
ctx.lineTo(348, 502);
ctx.lineTo(274, 468);
ctx.lineTo(202, 502);
ctx.lineTo(240, 358);
ctx.closePath();
ctx.fillStyle = COLORS.GREY;
ctx.fill();

// NOSE BLACK
ctx.beginPath();
ctx.moveTo(274, 348);
ctx.lineTo(311, 359);
ctx.lineTo(319, 397);
ctx.lineTo(285, 423);
ctx.lineTo(265, 423);
ctx.lineTo(229, 398);
ctx.lineTo(240, 358);
ctx.lineTo(274, 348);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

// OUTER EYE
ctx.beginPath();
ctx.moveTo(155, 355);
ctx.arc(155, 355, 17, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

ctx.beginPath();
ctx.moveTo(394, 355);
ctx.arc(394, 355, 17, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

// INNER EYE
ctx.beginPath();
ctx.moveTo(155, 355);
ctx.arc(155, 355, 12, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(394, 355);
ctx.arc(394, 355, 12, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// LEFT EAR
ctx.beginPath();
ctx.moveTo(192, 174);
ctx.lineTo(113, 69);
ctx.lineTo(90, 101);
ctx.lineTo(105, 309);
ctx.closePath();
ctx.fillStyle = COLORS.PINK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(90, 101);
ctx.lineTo(106, 309);
ctx.lineTo(88, 287);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

// RIGH EAR
ctx.beginPath();
ctx.moveTo(357, 174);
ctx.lineTo(437, 69);
ctx.lineTo(460, 101);
ctx.lineTo(444, 310);
ctx.lineTo(357, 174);
ctx.closePath();
ctx.fillStyle = COLORS.PINK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(444, 310);
ctx.lineTo(460, 101);
ctx.lineTo(460, 287);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();
