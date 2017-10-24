// SET UP
const canvas = document.getElementById('pug');
const ctx = canvas.getContext('2d');

const COLORS = {
  EYESBROWN: '#56341c',
  LINES: '#e9d8b9',
  LIGHTBROWN: '#54331c',
  BROWN: '#3e2611',
  BLACK: '#1c1f22',
  WHITE: '#f8efce'
};

// NECK
ctx.beginPath();
ctx.moveTo(135, 453);
ctx.lineTo(413, 453);
ctx.lineTo(389, 340);
ctx.lineTo(162, 340);
ctx.lineTo(135, 453);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(161, 124);
ctx.lineTo(123, 201);
ctx.lineTo(137, 347);
ctx.lineTo(407, 349);
ctx.lineTo(425, 202);
ctx.lineTo(386, 120);
ctx.lineTo(275, 102);
ctx.lineTo(161, 124);
ctx.closePath();
ctx.fillStyle = COLORS.WHITE;
ctx.fill();

// EYES BLACK
ctx.beginPath();
ctx.moveTo(251, 178);
ctx.lineTo(251, 243);
ctx.lineTo(160, 326);
ctx.lineTo(156, 210);
ctx.lineTo(251, 178);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(298, 178);
ctx.lineTo(298, 243);
ctx.lineTo(391, 326);
ctx.lineTo(395, 210);
ctx.lineTo(298, 178);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(188, 231);
ctx.arc(188, 231, 21, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.EYESBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(188, 231);
ctx.arc(188, 231, 15, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(188, 231);
ctx.arc(188, 231, 5, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(362, 231);
ctx.arc(362, 231, 21, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.EYESBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(362, 231);
ctx.arc(362, 231, 15, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(362, 231);
ctx.arc(362, 231, 5, 0, 2 * Math.PI, 0);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

// LINES
ctx.beginPath();
ctx.moveTo(276, 124);
ctx.lineTo(276, 230);
ctx.closePath();
ctx.lineWidth = 2.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(336, 168);
ctx.bezierCurveTo(336, 168, 265, 125, 286, 227);
ctx.lineWidth = 2.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(217, 168);
ctx.bezierCurveTo(217, 168, 280, 125, 266, 227);
ctx.lineWidth = 2.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

// NOSE
ctx.beginPath();
ctx.moveTo(142, 349);
ctx.lineTo(255, 260);
ctx.lineTo(298, 260);
ctx.lineTo(409, 349);
ctx.lineTo(341, 414);
ctx.lineTo(211, 414);
ctx.lineTo(142, 349);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(142, 350);
ctx.lineTo(256, 260);
ctx.lineTo(297, 260);
ctx.lineTo(408, 350);
ctx.lineTo(365, 280);
ctx.lineTo(300, 241);
ctx.lineTo(251, 241);
ctx.lineTo(187, 280);
ctx.lineTo(142, 350);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

// INNER NOSE
ctx.beginPath();
ctx.moveTo(261, 260);
ctx.lineTo(293, 260);
ctx.lineTo(310, 275);
ctx.lineTo(276, 288);
ctx.lineTo(241, 275);
ctx.lineTo(261, 260);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(276, 288);
ctx.lineTo(276, 340);
ctx.closePath();
ctx.lineWidth = 2;
ctx.strokeStyle = COLORS.BLACK;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(214, 412);
ctx.bezierCurveTo(213, 320, 337, 320, 334, 412);
ctx.lineWidth = 4.5;
ctx.strokeStyle = COLORS.BLACK;
ctx.stroke();

// EARS
ctx.beginPath();
ctx.moveTo(161, 124);
ctx.lineTo(123, 201);
ctx.lineTo(110, 280);
ctx.lineTo(87, 271);
ctx.lineTo(98, 168);
ctx.lineTo(161, 124);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(386, 120);
ctx.lineTo(425, 202);
ctx.lineTo(438, 278);
ctx.lineTo(460, 268);
ctx.lineTo(453, 169);
ctx.lineTo(386, 120);
ctx.closePath();
ctx.fillStyle = COLORS.LIGHTBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(161, 124);
ctx.lineTo(97, 123);
ctx.lineTo(57, 172);
ctx.lineTo(80, 209);
ctx.lineTo(88, 264);
ctx.lineTo(99, 168);
ctx.lineTo(161, 124);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(386, 120);
ctx.lineTo(453, 123);
ctx.lineTo(494, 172);
ctx.lineTo(469, 209);
ctx.lineTo(460, 264);
ctx.lineTo(451, 168);
ctx.lineTo(386, 120);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();
