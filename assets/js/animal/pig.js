// SET UP
const canvas = document.getElementById('pig');
const ctx = canvas.getContext('2d');

const COLORS = {
  EARSNECK: '#F27B97',
  FACE: '#F8AFBC',
  EYES: '#6F3619',
  NOSE: '#CF055C',
  EARSNOSE: '#EF477C'
};

// NECK
ctx.beginPath();
ctx.moveTo(503, 428);
ctx.lineTo(411, 368);
ctx.lineTo(274, 413);
ctx.lineTo(139, 369);
ctx.lineTo(139, 428);
ctx.lineTo(503, 428);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNECK;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(139, 369);
ctx.lineTo(146, 245);
ctx.lineTo(191, 130);
ctx.lineTo(358, 130);
ctx.lineTo(403, 245);
ctx.lineTo(411, 368);
ctx.lineTo(274, 413);
ctx.lineTo(139, 369);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(358, 130);
ctx.lineTo(403, 245);
ctx.lineTo(483, 54);
ctx.lineTo(358, 130);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNECK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(483, 54);
ctx.lineTo(403, 245);
ctx.lineTo(451, 227);
ctx.lineTo(483, 54);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNOSE;
ctx.fill();

// LEFT EAR
ctx.beginPath();
ctx.moveTo(146, 245);
ctx.lineTo(191, 130);
ctx.lineTo(65, 54);
ctx.lineTo(146, 245);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNECK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(65, 54);
ctx.lineTo(97, 227);
ctx.lineTo(146, 246);
ctx.lineTo(65, 54);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNOSE;
ctx.fill();

// EYES
ctx.beginPath();
ctx.arc(351, 261, 12, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.arc(198, 261, 12, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(274, 239);
ctx.lineTo(325, 257);
ctx.lineTo(325, 321);
ctx.lineTo(274, 335);
ctx.lineTo(222, 321);
ctx.lineTo(222, 257);
ctx.lineTo(274, 239);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNOSE;
ctx.fill();

// NOSTRILS
ctx.beginPath();
ctx.arc(250, 286, 13, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

ctx.beginPath();
ctx.arc(298, 286, 13, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();
