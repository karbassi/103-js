// SET UP
const canvas = document.getElementById('cow');
const ctx = canvas.getContext('2d');

const COLORS = {
  BLACK: '#1b2722',
  BROWN: '#a97940',
  DARKBROWN: '#785836',
  LIGHTBROWN: '#c39255',
  DEEPBROWN: '#54331c',
  YELLOW: '#cda117',
  PINK: '#ef477c',
  WHITE: '#dec29f'
};

// NECK
ctx.beginPath();
ctx.moveTo(31, 504);
ctx.lineTo(177, 366);
ctx.lineTo(376, 366);
ctx.lineTo(389, 503);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

// BROWN FACE PART
ctx.beginPath();
ctx.moveTo(230, 446);
ctx.bezierCurveTo(232, 501, 338, 482, 321, 446);
ctx.fillStyle = COLORS.DEEPBROWN;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(520, 244);
ctx.lineTo(482, 223);
ctx.lineTo(402, 218);
ctx.lineTo(385, 221);
ctx.lineTo(387, 205);
ctx.lineTo(403, 192);
ctx.lineTo(489, 219);
ctx.lineTo(520, 244);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(520, 244);
ctx.lineTo(481, 222);
ctx.lineTo(400, 217);
ctx.lineTo(360, 228);
ctx.lineTo(410, 276);
ctx.lineTo(477, 278);
ctx.lineTo(522, 245);
ctx.closePath();
ctx.fillStyle = COLORS.PINK;
ctx.fill();

// LEFT EAR
ctx.beginPath();
ctx.moveTo(30, 245);
ctx.lineTo(61, 218);
ctx.lineTo(149, 190);
ctx.lineTo(176, 224);
ctx.lineTo(151, 219);
ctx.lineTo(80, 224);
ctx.lineTo(30, 245);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(176, 224);
ctx.lineTo(150, 218);
ctx.lineTo(79, 223);
ctx.lineTo(30, 245);
ctx.lineTo(74, 277);
ctx.lineTo(139, 276);
ctx.lineTo(176, 224);
ctx.closePath();
ctx.fillStyle = COLORS.PINK;
ctx.fill();

// OUTER FACE LINE
ctx.beginPath();
ctx.moveTo(177, 366);
ctx.lineTo(155, 155);
ctx.lineTo(274, 106);
ctx.lineTo(394, 154);
ctx.lineTo(274, 247);
ctx.lineTo(155, 155);
ctx.lineTo(230, 398);
ctx.lineTo(319, 398);
ctx.lineTo(394, 152);
ctx.lineTo(375, 367);
ctx.lineTo(333, 452);
ctx.lineTo(218, 452);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// INNER FACE LINE
ctx.beginPath();
ctx.moveTo(155, 155);
ctx.lineTo(275, 246);
ctx.lineTo(394, 152);
ctx.lineTo(319, 401);
ctx.lineTo(230, 401);
ctx.lineTo(155, 155);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

//RIGHT EYE
ctx.beginPath();
ctx.moveTo(363, 274);
ctx.arc(363, 274, 15, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(330, 288);
ctx.lineTo(357, 260);
ctx.lineTo(363, 283);
ctx.lineTo(330, 288);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

//LEFT EYE
ctx.beginPath();
ctx.moveTo(184, 274);
ctx.arc(186, 274, 15, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(221, 289);
ctx.lineTo(193, 285);
ctx.lineTo(198, 265);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

// OUTER NOSE SHAPE
ctx.beginPath();
ctx.moveTo(230, 395);
ctx.lineTo(320, 395);
ctx.lineTo(337, 469);
ctx.lineTo(214, 469);
ctx.lineTo(230, 395);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// INNER NOSE SHAPE
ctx.beginPath();
ctx.moveTo(236, 407);
ctx.lineTo(275, 412);
ctx.lineTo(316, 407);
ctx.lineTo(298, 469);
ctx.lineTo(253, 469);
ctx.lineTo(236, 407);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

ctx.beginPath();
ctx.moveTo(265, 434);
ctx.lineTo(250, 425);
ctx.lineTo(256, 450);
ctx.closePath();
ctx.fillStyle = COLORS.DEEPBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(286, 434);
ctx.lineTo(297, 451);
ctx.lineTo(303, 426);
ctx.closePath();
ctx.fillStyle = COLORS.DEEPBROWN;
ctx.fill();
