// SET UP
const canvas = document.getElementById('fox');
const ctx = canvas.getContext('2d');

const COLORS = {
  NECK: '#cda117',
  BROWN: '#51331c',
  ORANGEFACE: '#ba752f',
  ORANGENOSE: '#c08040',
  EARS: '#91632f',
  WHITEFACE: '#e5e5e5',
  GREYNOSE: '#d5d5d6'
};

// NECK
ctx.beginPath();
ctx.moveTo(177, 521);
ctx.lineTo(273, 551);
ctx.lineTo(371, 521);
ctx.lineTo(396, 432);
ctx.lineTo(152, 432);
ctx.lineTo(177, 521);
ctx.closePath();
ctx.fillStyle = COLORS.NECK;
ctx.fill();

// FACE WHITE
ctx.beginPath();
ctx.moveTo(127, 295);
ctx.lineTo(219, 445);
ctx.lineTo(330, 445);
ctx.lineTo(421, 295);
ctx.lineTo(457, 381);
ctx.lineTo(330, 499);
ctx.lineTo(219, 499);
ctx.lineTo(94, 378);
ctx.lineTo(127, 295);
ctx.closePath();
ctx.fillStyle = COLORS.WHITEFACE;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(127, 295);
ctx.lineTo(219, 445);
ctx.lineTo(330, 445);
ctx.lineTo(421, 295);
ctx.lineTo(417, 247);
ctx.lineTo(330, 184);
ctx.lineTo(219, 184);
ctx.lineTo(135, 243);
ctx.lineTo(127, 295);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGEFACE;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(417, 247);
ctx.lineTo(330, 184);
ctx.lineTo(414, 110);
ctx.lineTo(417, 247);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(220, 184);
ctx.lineTo(135, 243);
ctx.lineTo(133, 110);
ctx.lineTo(220, 184);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(414, 110);
ctx.lineTo(384, 90);
ctx.lineTo(334, 184);
ctx.lineTo(414, 110);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGEFACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(133, 110);
ctx.lineTo(166, 90);
ctx.lineTo(217, 184);
ctx.lineTo(133, 110);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGEFACE;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(216, 325);
ctx.arc(216, 325, 14, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(336, 325);
ctx.arc(336, 325, 14, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(324, 315);
ctx.lineTo(350, 315);
ctx.lineTo(335, 295);
ctx.lineTo(324, 315);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGEFACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(202, 315);
ctx.lineTo(227, 315);
ctx.lineTo(213, 295);
ctx.lineTo(202, 315);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGEFACE;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(222, 444);
ctx.lineTo(274, 421);
ctx.lineTo(328, 444);
ctx.lineTo(328, 500);
ctx.lineTo(222, 500);
ctx.lineTo(222, 444);
ctx.closePath();
ctx.fillStyle = COLORS.GREYNOSE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(222, 444);
ctx.lineTo(274, 421);
ctx.lineTo(328, 444);
ctx.lineTo(303, 315);
ctx.lineTo(250, 315);
ctx.lineTo(222, 444);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGENOSE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(275, 446);
ctx.lineTo(250, 453);
ctx.lineTo(250, 484);
ctx.lineTo(297, 484);
ctx.lineTo(297, 453);
ctx.lineTo(275, 446);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();
