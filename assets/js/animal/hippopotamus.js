// SET UP
const canvas = document.getElementById('hippopotamus');
const ctx = canvas.getContext('2d');

const COLORS = {
  BODY: '#B6C2CC',
  NOSE: '#333A4B',
  EYE: '#32394A',
  DOWNNOSE: '#54656F',
  FACE: '#6F838F',
  EARS: '#D26331',
  EARCURVE: '#FEC14D'
};

// BODY
ctx.beginPath();
ctx.moveTo(277, 296);
ctx.arc(279, 294, 214, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BODY;
ctx.fill();

// BODY LINES
ctx.beginPath();
ctx.moveTo(165, 472);
ctx.lineTo(165, 537);
ctx.lineTo(387, 537);
ctx.lineTo(387, 472);
ctx.closePath();
ctx.fillStyle = COLORS.BODY;
ctx.fill();

// DOWNNOSE
ctx.beginPath();
ctx.moveTo(378, 550);
ctx.lineTo(275, 544);
ctx.lineTo(172, 550);
ctx.lineTo(170, 467);
ctx.lineTo(201, 421);
ctx.lineTo(349, 421);
ctx.lineTo(378, 467);
ctx.lineTo(378, 550);
ctx.closePath();
ctx.fillStyle = COLORS.DOWNNOSE;
ctx.fill();

// RIGT NOSE
ctx.beginPath();
ctx.moveTo(228, 459);
ctx.arc(228, 459, 15, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

// LEFT NOSE
ctx.beginPath();
ctx.moveTo(323, 459);
ctx.arc(323, 459, 15, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(201, 421);
ctx.lineTo(184, 308);
ctx.lineTo(201, 274);
ctx.lineTo(277, 287);
ctx.lineTo(350, 275);
ctx.lineTo(368, 309);
ctx.lineTo(349, 421);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// RIGHT EYE
ctx.beginPath();
ctx.moveTo(208, 350);
ctx.arc(208, 350, 10, 0, Math.PI, 0);
ctx.fillStyle = COLORS.EYE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(198, 350);
ctx.bezierCurveTo(198, 350, 208, 338, 218, 350);
ctx.fillStyle = COLORS.EYE;
ctx.fill();

// LEFT EYE
ctx.beginPath();
ctx.moveTo(343, 350);
ctx.arc(343, 350, 10, 0, Math.PI, 0);
ctx.fillStyle = COLORS.EYE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(333, 350);
ctx.bezierCurveTo(333, 350, 345, 338, 353, 350);
ctx.fillStyle = COLORS.EYE;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(184, 309);
ctx.lineTo(188, 301);
ctx.lineTo(169, 256);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

// RIGHT EAR CURVE
ctx.beginPath();
ctx.moveTo(184, 310);
ctx.bezierCurveTo(184, 310, 130, 320, 169, 255);
ctx.fillStyle = COLORS.EARCURVE;
ctx.fill();

// LEFT EAR
ctx.beginPath();
ctx.moveTo(363, 301);
ctx.lineTo(368, 309);
ctx.lineTo(383, 256);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

// LEFT EAR CURVE
ctx.beginPath();
ctx.moveTo(367, 310);
ctx.bezierCurveTo(367, 310, 420, 320, 383, 256);
ctx.fillStyle = COLORS.EARCURVE;
ctx.fill();
