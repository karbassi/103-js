// SET UP
const canvas = document.getElementById('lemur');
const ctx = canvas.getContext('2d');

const COLORS = {
  BROWN: '#3e2611',
  GREY: '#c1c1c2',
  WHITE: '#f0f0f0',
  FACE: '#dadadb',
  EYES: '#cda117'
};

// EARS
ctx.beginPath();
ctx.moveTo(140, 275);
ctx.lineTo(138, 164);
ctx.lineTo(169, 134);
ctx.lineTo(55, 92);
ctx.lineTo(34, 139);
ctx.lineTo(43, 181);
ctx.lineTo(140, 275);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(409, 275);
ctx.lineTo(409, 164);
ctx.lineTo(376, 134);
ctx.lineTo(496, 92);
ctx.lineTo(517, 139);
ctx.lineTo(506, 181);
ctx.lineTo(409, 275);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// INNER EARS
ctx.beginPath();
ctx.moveTo(44, 142);
ctx.lineTo(58, 102);
ctx.lineTo(130, 220);
ctx.lineTo(129, 253);
ctx.lineTo(53, 178);
ctx.lineTo(44, 142);
ctx.closePath();
ctx.fillStyle = COLORS.GREY;
ctx.fill();

ctx.beginPath();
ctx.moveTo(509, 142);
ctx.lineTo(493, 102);
ctx.lineTo(422, 220);
ctx.lineTo(423, 253);
ctx.lineTo(499, 178);
ctx.lineTo(509, 142);
ctx.closePath();
ctx.fillStyle = COLORS.GREY;
ctx.fill();

// NECK
ctx.beginPath();
ctx.moveTo(157, 440);
ctx.lineTo(137, 356);
ctx.lineTo(212, 440);
ctx.lineTo(335, 440);
ctx.lineTo(415, 356);
ctx.lineTo(468, 440);
ctx.lineTo(157, 440);
ctx.closePath();
ctx.fillStyle = COLORS.GREY;
ctx.fill();

// WHITE FACE
ctx.beginPath();
ctx.moveTo(137, 356);
ctx.lineTo(212, 440);
ctx.lineTo(335, 440);
ctx.lineTo(415, 356);
ctx.lineTo(413, 195);
ctx.lineTo(276, 174);
ctx.lineTo(137, 189);
ctx.lineTo(137, 356);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// GREY FACE
ctx.beginPath();
ctx.moveTo(137, 195);
ctx.lineTo(137, 275);
ctx.lineTo(188, 316);
ctx.lineTo(196, 352);
ctx.lineTo(226, 383);
ctx.lineTo(327, 383);
ctx.lineTo(353, 352);
ctx.lineTo(364, 316);
ctx.lineTo(414, 275);
ctx.lineTo(414, 195);
ctx.lineTo(273, 172);
ctx.lineTo(137, 195);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// OUTER EYES
ctx.beginPath();
ctx.moveTo(141, 236);
ctx.lineTo(141, 278);
ctx.lineTo(187, 315);
ctx.lineTo(256, 252);
ctx.lineTo(225, 202);
ctx.lineTo(161, 208);
ctx.lineTo(141, 236);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(411, 236);
ctx.lineTo(411, 278);
ctx.lineTo(364, 315);
ctx.lineTo(294, 252);
ctx.lineTo(323, 202);
ctx.lineTo(387, 208);
ctx.lineTo(411, 236);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// INNER EYES
ctx.beginPath();
ctx.moveTo(196, 252);
ctx.arc(196, 252, 24, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(196, 252);
ctx.arc(196, 252, 5, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(354, 252);
ctx.arc(354, 252, 24, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(354, 252);
ctx.arc(354, 252, 5, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(293, 300);
ctx.lineTo(323, 318);
ctx.lineTo(323, 373);
ctx.lineTo(316, 382);
ctx.lineTo(239, 382);
ctx.lineTo(226, 373);
ctx.lineTo(225, 318);
ctx.lineTo(257, 300);
ctx.lineTo(293, 300);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// BROWN FACE
ctx.beginPath();
ctx.moveTo(165, 131);
ctx.lineTo(138, 160);
ctx.lineTo(136, 197);
ctx.lineTo(273, 183);
ctx.lineTo(412, 196);
ctx.lineTo(414, 160);
ctx.lineTo(387, 131);
ctx.lineTo(275, 120);
ctx.lineTo(165, 131);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

