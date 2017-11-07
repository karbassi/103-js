// SET UP
const canvas = document.getElementById('gray-wolf');
const ctx = canvas.getContext('2d');

const COLORS = {
  ORANGE: '#be7732',
  WHITE: '#fdfbf2',
  GREY: '#e5e5e5',
  BROWN: '#54331c',
  FACE: '#d6c498',
  EARS: '#cea217',
  FACELINE: '#c39255'
};

// NECK
ctx.beginPath();
ctx.moveTo(175, 520);
ctx.lineTo(278, 550);
ctx.lineTo(375, 520);
ctx.lineTo(398, 439);
ctx.lineTo(156, 439);
ctx.lineTo(175, 520);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGE;
ctx.fill();

// FACE WHITE
ctx.beginPath();
ctx.moveTo(55, 364);
ctx.lineTo(216, 498);
ctx.lineTo(273, 485);
ctx.lineTo(330, 498);
ctx.lineTo(493, 364);
ctx.lineTo(424, 272);
ctx.lineTo(130, 272);
ctx.lineTo(55, 364);
ctx.closePath();
ctx.fillStyle = COLORS.GREY;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(123, 277);
ctx.lineTo(219, 434);
ctx.lineTo(274, 411);
ctx.lineTo(331, 432);
ctx.lineTo(428, 277);
ctx.lineTo(300, 225);
ctx.lineTo(274, 288);
ctx.lineTo(251, 225);
ctx.lineTo(123, 277);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// FACE LINE
ctx.beginPath();
ctx.moveTo(252, 229);
ctx.lineTo(276, 286);
ctx.lineTo(296, 229);
ctx.lineTo(331, 431);
ctx.lineTo(275, 410);
ctx.lineTo(220, 433);
ctx.lineTo(252, 229);
ctx.closePath();
ctx.fillStyle = COLORS.FACELINE;
ctx.fill();

// FACE BROWN
ctx.beginPath();
ctx.moveTo(114, 261);
ctx.lineTo(231, 164);
ctx.lineTo(317, 164);
ctx.lineTo(433, 262);
ctx.lineTo(428, 275);
ctx.lineTo(299, 225);
ctx.lineTo(275, 286);
ctx.lineTo(251, 225);
ctx.lineTo(122, 279);
ctx.lineTo(114, 261);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// OUTER NOSE
ctx.beginPath();
ctx.moveTo(222, 432);
ctx.lineTo(275, 411);
ctx.lineTo(331, 433);
ctx.lineTo(334, 498);
ctx.lineTo(275, 482);
ctx.lineTo(217, 499);
ctx.lineTo(222, 432);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// INNER NOSE
ctx.beginPath();
ctx.moveTo(275, 422);
ctx.lineTo(302, 431);
ctx.lineTo(302, 463);
ctx.lineTo(275, 468);
ctx.lineTo(249, 463);
ctx.lineTo(249, 431);
ctx.lineTo(275, 422);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(170, 268);
ctx.lineTo(220, 276);
ctx.lineTo(229, 311);
ctx.lineTo(217, 301);
ctx.lineTo(193, 303);
ctx.lineTo(170, 268);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(379, 268);
ctx.lineTo(328, 276);
ctx.lineTo(323, 311);
ctx.lineTo(335, 301);
ctx.lineTo(361, 303);
ctx.lineTo(379, 268);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(114, 261);
ctx.lineTo(231, 164);
ctx.lineTo(115, 108);
ctx.lineTo(114, 261);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(231, 164);
ctx.lineTo(153, 84);
ctx.lineTo(115, 108);
ctx.lineTo(231, 164);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(317, 164);
ctx.lineTo(433, 262);
ctx.lineTo(436, 104);
ctx.lineTo(317, 164);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(317, 164);
ctx.lineTo(399, 84);
ctx.lineTo(436, 104);
ctx.lineTo(317, 164);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGE;
ctx.fill();
