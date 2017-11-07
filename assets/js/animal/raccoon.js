// SET UP
const canvas = document.getElementById('raccoon');
const ctx = canvas.getContext('2d');

const COLORS = {
  DARKBROWN: '#3e2611',
  LIGHTBROWN: '#54331c',
  FACEBROWN: '#6c4d36',
  WHITE: '#f0f0f0',
  NOSEGREY: '#dadadb',
  FACEGREY: '#c1c1c1',
  MOUTH: '#c47732',
  EYES: '#cea417'
};

// NECK
ctx.beginPath();
ctx.moveTo(104, 211);
ctx.lineTo(198, 173);
ctx.lineTo(350, 173);
ctx.lineTo(450, 211);
ctx.lineTo(450, 406);
ctx.lineTo(104, 406);
ctx.lineTo(104, 211);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(171, 118);
ctx.lineTo(149, 87);
ctx.lineTo(90, 83);
ctx.lineTo(92, 124);
ctx.lineTo(126, 181);
ctx.lineTo(171, 118);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(378, 117);
ctx.lineTo(400, 82);
ctx.lineTo(459, 82);
ctx.lineTo(459, 124);
ctx.lineTo(423, 178);
ctx.lineTo(378, 117);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(319, 370);
ctx.lineTo(235, 370);
ctx.lineTo(188, 321);
ctx.lineTo(276, 240);
ctx.lineTo(365, 320);
ctx.lineTo(319, 370);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEGREY;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(106, 281);
ctx.lineTo(200, 194);
ctx.lineTo(234, 194);
ctx.lineTo(260, 249);
ctx.lineTo(188, 321);
ctx.lineTo(106, 281);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(448, 281);
ctx.lineTo(365, 321);
ctx.lineTo(294, 249);
ctx.lineTo(320, 194);
ctx.lineTo(353, 194);
ctx.lineTo(448, 281);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

ctx.beginPath();
ctx.arc(209, 222, 11, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.arc(345, 222, 11, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(259, 171);
ctx.lineTo(294, 171);
ctx.lineTo(294, 313);
ctx.lineTo(259, 313);
ctx.lineTo(259, 171);
ctx.closePath();
ctx.fillStyle = COLORS.FACEBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(104, 211);
ctx.lineTo(198, 173);
ctx.lineTo(350, 173);
ctx.lineTo(450, 211);
ctx.lineTo(378, 117);
ctx.lineTo(277, 108);
ctx.lineTo(171, 118);
ctx.lineTo(104, 211);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(106, 281);
ctx.lineTo(188, 321);
ctx.lineTo(234, 370);
ctx.lineTo(200, 370);
ctx.lineTo(106, 281);
ctx.closePath();
ctx.fillStyle = COLORS.FACEGREY;
ctx.fill();

ctx.beginPath();
ctx.moveTo(448, 281);
ctx.lineTo(365, 321);
ctx.lineTo(319, 370);
ctx.lineTo(355, 370);
ctx.lineTo(448, 281);
ctx.closePath();
ctx.fillStyle = COLORS.FACEGREY;
ctx.fill();

ctx.beginPath();
ctx.moveTo(319, 370);
ctx.lineTo(235, 370);
ctx.lineTo(243, 377);
ctx.lineTo(310, 377);
ctx.lineTo(319, 370);
ctx.closePath();
ctx.fillStyle = COLORS.MOUTH;
ctx.fill();

// NOSE CURVE
ctx.beginPath();
ctx.moveTo(277, 305);
ctx.quadraticCurveTo(255, 305, 247, 322);
ctx.lineTo(247, 341);
ctx.quadraticCurveTo(248, 348, 257, 351);
ctx.lineTo(296, 351);
ctx.quadraticCurveTo(303, 349, 305, 341);
ctx.lineTo(305, 324);
ctx.quadraticCurveTo(303, 308, 277, 305);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

// RIGHT LINES
ctx.beginPath();
ctx.moveTo(313, 320);
ctx.bezierCurveTo(313, 320, 407, 270, 513, 322);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.WHITE;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(314, 329);
ctx.bezierCurveTo(314, 329, 398, 300, 475, 335);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.WHITE;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(314, 337);
ctx.bezierCurveTo(314, 337, 385, 315, 476, 372);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.WHITE;
ctx.stroke();

// LEFT LINES
ctx.beginPath();
ctx.moveTo(238, 320);
ctx.bezierCurveTo(238, 321, 128, 270, 38, 323);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.WHITE;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(238, 330);
ctx.bezierCurveTo(238, 330, 150, 308, 76, 335);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.WHITE;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(238, 337);
ctx.bezierCurveTo(238, 337, 167, 325, 77, 369);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.WHITE;
ctx.stroke();
