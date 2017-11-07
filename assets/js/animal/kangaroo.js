// SET UP
const canvas = document.getElementById('kangaroo');
const ctx = canvas.getContext('2d');

const COLORS = {
  EARSNECK: '#be7732',
  FACE: '#d6c498',
  EARS: '#cda117',
  EYES: '#241f20',
  NOSEBROWN: '#6c4d36',
  NOSE: '#f8efce'
};

// NECK
ctx.beginPath();
ctx.moveTo(340, 551);
ctx.lineTo(207, 551);
ctx.lineTo(207, 420);
ctx.lineTo(345, 420);
ctx.lineTo(340, 551);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNECK;
ctx.fill();

// EARS
ctx.beginPath();
ctx.beginPath();
ctx.moveTo(185, 279);
ctx.lineTo(197, 170);
ctx.lineTo(85, 86);
ctx.lineTo(185, 279);
ctx.bezierCurveTo(185, 279, 90, 240, 85, 86);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNECK;
ctx.fill();

ctx.beginPath();
ctx.beginPath();
ctx.moveTo(361, 279);
ctx.lineTo(356, 171);
ctx.lineTo(465, 83);
ctx.lineTo(361, 279);
ctx.bezierCurveTo(361, 279, 480, 190, 465, 83);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNECK;
ctx.fill();

ctx.beginPath();
ctx.beginPath();
ctx.moveTo(185, 279);
ctx.lineTo(197, 170);
ctx.lineTo(85, 86);
ctx.lineTo(185, 279);
ctx.bezierCurveTo(205, 269, 80, 250, 85, 86);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNECK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(184, 276);
ctx.lineTo(197, 172);
ctx.lineTo(85, 86);
ctx.lineTo(231, 167);
ctx.lineTo(242, 250);
ctx.lineTo(187, 277);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(363, 276);
ctx.lineTo(356, 172);
ctx.lineTo(465, 83);
ctx.lineTo(319, 167);
ctx.lineTo(305, 244);
ctx.lineTo(363, 321);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(186, 278);
ctx.lineTo(243, 244);
ctx.lineTo(275, 234);
ctx.lineTo(306, 244);
ctx.lineTo(363, 275);
ctx.lineTo(375, 389);
ctx.lineTo(317, 460);
ctx.lineTo(226, 460);
ctx.lineTo(176, 389);
ctx.lineTo(186, 278);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// OUTER NOSE
ctx.beginPath();
ctx.moveTo(225, 385);
ctx.lineTo(275, 393);
ctx.lineTo(322, 388);
ctx.lineTo(330, 477);
ctx.lineTo(275, 486);
ctx.lineTo(218, 477);
ctx.lineTo(225, 385);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

// INNER NOSE
ctx.beginPath();
ctx.moveTo(237, 393);
ctx.lineTo(276, 403);
ctx.lineTo(312, 393);
ctx.lineTo(307, 414);
ctx.lineTo(276, 424);
ctx.lineTo(246, 414);
ctx.lineTo(237, 393);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(276, 423);
ctx.lineTo(276, 486);
ctx.lineWidth = 2.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

// EYES
ctx.beginPath();
ctx.moveTo(184, 321);
ctx.lineTo(180, 344);
ctx.lineTo(233, 344);
ctx.lineTo(202, 321);
ctx.lineTo(184, 321);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(347, 321);
ctx.lineTo(366, 321);
ctx.lineTo(370, 344);
ctx.lineTo(316, 344);
ctx.lineTo(347, 321);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();
