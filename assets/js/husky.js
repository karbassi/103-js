// SET UP
const canvas = document.getElementById('husky');
const ctx = canvas.getContext('2d');

const COLORS = {
  EYES: '#60aca8',
  FACE: '#d6c498',
  EARS: '#6c4d36',
  BROWN: '#3a1f09',
  WHITE: '#f8efce'
};

// EARS
ctx.beginPath();
ctx.moveTo(105, 257);
ctx.lineTo(78, 175);
ctx.lineTo(66, 74);
ctx.lineTo(132, 83);
ctx.lineTo(176, 150);
ctx.lineTo(105, 257);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(105, 257);
ctx.lineTo(78, 175);
ctx.lineTo(66, 75);
ctx.lineTo(62, 183);
ctx.lineTo(105, 257);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(442, 257);
ctx.lineTo(471, 175);
ctx.lineTo(482, 74);
ctx.lineTo(416, 83);
ctx.lineTo(377, 150);
ctx.lineTo(442, 257);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(442, 257);
ctx.lineTo(471, 175);
ctx.lineTo(482, 75);
ctx.lineTo(485, 183);
ctx.lineTo(442, 257);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(396, 185);
ctx.lineTo(416, 215);
ctx.lineTo(441, 125);
ctx.lineTo(396, 178);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(135, 216);
ctx.lineTo(108, 125);
ctx.lineTo(157, 185);
ctx.lineTo(135, 216);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

// INNER FACE
ctx.beginPath();
ctx.moveTo(148, 530);
ctx.lineTo(148, 498);
ctx.lineTo(94, 368);
ctx.lineTo(214, 215);
ctx.lineTo(264, 294);
ctx.lineTo(273, 337);
ctx.lineTo(285, 297);
ctx.lineTo(335, 216);
ctx.lineTo(455, 368);
ctx.lineTo(401, 494);
ctx.lineTo(404, 532);
ctx.lineTo(148, 530);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// OUTER FACE
ctx.beginPath();
ctx.moveTo(402, 531);
ctx.lineTo(475, 531);
ctx.lineTo(475, 312);
ctx.lineTo(377, 146);
ctx.lineTo(174, 146);
ctx.lineTo(73, 312);
ctx.lineTo(72, 531);
ctx.lineTo(148, 531);
ctx.lineTo(148, 498);
ctx.lineTo(94, 368);
ctx.lineTo(214, 215);
ctx.lineTo(264, 296);
ctx.lineTo(273, 337);
ctx.lineTo(287, 296);
ctx.lineTo(335, 216);
ctx.lineTo(455, 368);
ctx.lineTo(401, 494);
ctx.lineTo(402, 531);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// FACE LINE
ctx.beginPath();
ctx.moveTo(148, 498);
ctx.lineTo(402, 498);
ctx.lineTo(454, 368);
ctx.lineTo(413, 313);
ctx.lineTo(325, 458);
ctx.lineTo(276, 478);
ctx.lineTo(224, 458);
ctx.lineTo(138, 313);
ctx.lineTo(96, 368);
ctx.lineTo(148, 498);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// MOUTH
ctx.beginPath();
ctx.moveTo(325, 458);
ctx.lineTo(276, 478);
ctx.lineTo(224, 458);
ctx.lineTo(325, 458);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(275, 360);
ctx.lineTo(243, 373);
ctx.lineTo(243, 411);
ctx.lineTo(275, 422);
ctx.lineTo(306, 411);
ctx.lineTo(306, 373);
ctx.lineTo(275, 360);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(199, 339);
ctx.lineTo(166, 277);
ctx.lineTo(264, 297);
ctx.lineTo(199, 339);
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(353, 339);
ctx.lineTo(384, 277);
ctx.lineTo(285, 297);
ctx.lineTo(353, 339);
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// INNER EYES
ctx.beginPath();
ctx.moveTo(208, 297);
ctx.lineTo(214, 315);
ctx.lineTo(240, 302);
ctx.lineTo(208, 297);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(342, 297);
ctx.lineTo(335, 315);
ctx.lineTo(312, 302);
ctx.lineTo(342, 297);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();
