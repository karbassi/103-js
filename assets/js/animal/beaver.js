// SET UP
const canvas = document.getElementById('beaver');
const ctx = canvas.getContext('2d');

const COLORS = {
  YELLOW: '#fec14d',
  NOSE: '#c39255',
  LINES: '#2b2929',
  LIGHTBROWN: '#be7732',
  DEEPBROWN: '#54331c',
  FACE: '#91632f'
};

// FACE
ctx.beginPath();
ctx.moveTo(85, 353);
ctx.lineTo(276, 391);
ctx.lineTo(467, 356);
ctx.lineTo(413, 148);
ctx.lineTo(276, 114);
ctx.lineTo(138, 148);
ctx.lineTo(85, 353);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// NECK
ctx.beginPath();
ctx.moveTo(85, 466);
ctx.lineTo(85, 353);
ctx.lineTo(276, 390);
ctx.lineTo(467, 355);
ctx.lineTo(467, 466);
ctx.lineTo(85, 466);
ctx.closePath();
ctx.fillStyle = COLORS.DEEPBROWN;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(183, 186);
ctx.arc(183, 186, 12, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.DEEPBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(369, 186);
ctx.arc(369, 186, 12, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.DEEPBROWN;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(138, 148);
ctx.lineTo(94, 198);
ctx.lineTo(126, 199);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(413, 148);
ctx.lineTo(457, 198);
ctx.lineTo(424, 199);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(199, 194);
ctx.lineTo(275, 184);
ctx.lineTo(354, 194);
ctx.lineTo(401, 324);
ctx.lineTo(276, 351);
ctx.lineTo(150, 325);
ctx.lineTo(199, 194);
ctx.closePath();
ctx.fillStyle = COLORS.DEEPBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(199, 194);
ctx.lineTo(221, 191);
ctx.lineTo(221, 252);
ctx.lineTo(274, 271);
ctx.lineTo(274, 324);
ctx.lineTo(151, 325);
ctx.lineTo(199, 194);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(355, 194);
ctx.lineTo(401, 324);
ctx.lineTo(277, 324);
ctx.lineTo(277, 272);
ctx.lineTo(332, 253);
ctx.lineTo(332, 192);
ctx.lineTo(355, 194);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

// TEETH
ctx.beginPath();
ctx.moveTo(274, 324);
ctx.lineTo(252, 324);
ctx.lineTo(252, 340);
ctx.lineTo(274, 340);
ctx.lineTo(274, 324);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

ctx.beginPath();
ctx.moveTo(277, 324);
ctx.lineTo(300, 324);
ctx.lineTo(300, 340);
ctx.lineTo(277, 340);
ctx.lineTo(277, 324);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

// RIGHT LINES
ctx.beginPath();
ctx.moveTo(310, 283);
ctx.bezierCurveTo(310, 283, 370, 275, 477, 329);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310, 283);
ctx.bezierCurveTo(310, 283, 360, 305, 463, 364);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310, 283);
ctx.bezierCurveTo(310, 283, 350, 320, 435, 398);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(310, 283);
ctx.bezierCurveTo(310, 283, 395, 268, 478, 283);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

// LEFT LINES
ctx.beginPath();
ctx.moveTo(240, 284);
ctx.bezierCurveTo(240, 284, 180, 265, 74, 284);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 284);
ctx.bezierCurveTo(240, 284, 190, 275, 75, 328);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 284);
ctx.bezierCurveTo(240, 284, 190, 312, 89, 363);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 284);
ctx.bezierCurveTo(240, 284, 190, 320, 117, 397);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();
