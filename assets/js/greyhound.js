// SET UP
const canvas = document.getElementById('greyhound');
const ctx = canvas.getContext('2d');

const COLORS = {
  EARS: '#91632f',
  DARKBROWN: '#3a1f09',
  LIGHTBROWN: '#c39255',
  WHITE: '#f8efce'
};

// EARS
ctx.beginPath();
ctx.moveTo(189, 177);
ctx.lineTo(118, 99);
ctx.lineTo(209, 137);
ctx.lineTo(189, 177);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(440, 95);
ctx.lineTo(355, 185);
ctx.lineTo(326, 148);
ctx.lineTo(440, 95);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(245, 126);
ctx.lineTo(198, 137);
ctx.lineTo(120, 104);
ctx.lineTo(99, 126);
ctx.lineTo(99, 86);
ctx.lineTo(245, 126);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(270, 137);
ctx.lineTo(310, 156);
ctx.lineTo(429, 104);
ctx.lineTo(450, 126);
ctx.lineTo(449, 86);
ctx.lineTo(270, 137);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(221, 551);
ctx.lineTo(327, 551);
ctx.lineTo(328, 354);
ctx.lineTo(374, 140);
ctx.lineTo(276, 118);
ctx.lineTo(178, 140);
ctx.lineTo(220, 354);
ctx.lineTo(221, 551);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

// WHITE SPOT
ctx.beginPath();
ctx.moveTo(327, 348);
ctx.lineTo(311, 422);
ctx.lineTo(273, 445);
ctx.lineTo(235, 422);
ctx.lineTo(219, 354);
ctx.lineTo(258, 265);
ctx.lineTo(275, 118);
ctx.lineTo(288, 265);
ctx.lineTo(327, 348);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(273, 445);
ctx.lineTo(249, 431);
ctx.lineTo(250, 411);
ctx.lineTo(273, 398);
ctx.lineTo(296, 411);
ctx.lineTo(298, 431);
ctx.lineTo(273, 445);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(193, 209);
ctx.lineTo(232, 206);
ctx.lineTo(257, 268);
ctx.lineTo(218, 270);
ctx.lineTo(193, 209);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(315, 206);
ctx.lineTo(358, 211);
ctx.lineTo(333, 270);
ctx.lineTo(290, 267);
ctx.lineTo(315, 206);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();
