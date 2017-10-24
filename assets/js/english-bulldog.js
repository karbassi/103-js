// SET UP
const canvas = document.getElementById('english-bulldog');
const ctx = canvas.getContext('2d');

const COLORS = {
  BROWN: '#54331c',
  MOUTH: '#ef477c',
  NOSE: '#f8efce',
  FACE: '#be7732',
  EARS: '#60aca8',
  EARBROWN: '#6c4d36'
};

// NECK
ctx.beginPath();
ctx.moveTo(45, 468);
ctx.lineTo(503, 469);
ctx.lineTo(439, 264);
ctx.lineTo(111, 264);
ctx.lineTo(45, 468);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(163, 122);
ctx.lineTo(95, 113);
ctx.lineTo(48, 152);
ctx.lineTo(163, 122);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(162, 122);
ctx.lineTo(142, 161);
ctx.lineTo(106, 137);
ctx.lineTo(162, 122);
ctx.closePath();
ctx.fillStyle = COLORS.EARBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(388, 122);
ctx.lineTo(456, 114);
ctx.lineTo(503, 152);
ctx.lineTo(388, 122);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(388, 122);
ctx.lineTo(409, 161);
ctx.lineTo(446, 137);
ctx.lineTo(388, 122);
ctx.closePath();
ctx.fillStyle = COLORS.EARBROWN;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(101, 231);
ctx.lineTo(161, 121);
ctx.lineTo(274, 132);
ctx.lineTo(387, 121);
ctx.lineTo(449, 229);
ctx.lineTo(411, 380);
ctx.lineTo(296, 384);
ctx.lineTo(276, 334);
ctx.lineTo(253, 384);
ctx.lineTo(140, 380);
ctx.lineTo(101, 231);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(175, 255);
ctx.arc(174, 255, 20, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(151, 261);
ctx.lineTo(181, 231);
ctx.lineTo(155, 230);
ctx.lineTo(151, 261);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(375, 255);
ctx.arc(375, 255, 20, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(367, 232);
ctx.lineTo(404, 269);
ctx.lineTo(411, 221);
ctx.lineTo(370, 232);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// NECK
ctx.beginPath();
ctx.moveTo(274, 337);
ctx.lineTo(261, 371);
ctx.lineTo(290, 371);
ctx.lineTo(274, 337);
ctx.closePath();
ctx.fillStyle = COLORS.MOUTH;
ctx.fill();

// NOSE WHITE
ctx.beginPath();
ctx.moveTo(274, 132);
ctx.lineTo(125, 409);
ctx.lineTo(246, 410);
ctx.lineTo(276, 337);
ctx.lineTo(307, 408);
ctx.lineTo(428, 410);
ctx.lineTo(274, 132);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(275, 242);
ctx.lineTo(314, 261);
ctx.lineTo(314, 302);
ctx.lineTo(275, 318);
ctx.lineTo(237, 302);
ctx.lineTo(237, 261);
ctx.lineTo(275, 242);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(276, 314);
ctx.lineTo(276, 342);
ctx.lineWidth = 4;
ctx.strokeStyle = COLORS.BROWN;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(276, 338);
ctx.lineTo(247, 410);
ctx.lineWidth = 3.5;
ctx.strokeStyle = COLORS.BROWN;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(276, 338);
ctx.lineTo(307, 410);
ctx.lineWidth = 3.5;
ctx.strokeStyle = COLORS.BROWN;
ctx.stroke();
