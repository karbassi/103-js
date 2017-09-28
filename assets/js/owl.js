// SET UP
const canvas = document.getElementById('owl');
const ctx = canvas.getContext('2d');

const COLORS = {
  NECK: 'rgb(210, 82, 29)',
  ORANGEEYE: 'rgb(248, 155, 28)',
  YELLOWEYE: 'rgb(253, 180, 20)',
  WHITEEYE: 'rgb(255, 255, 255)',
  GREYFACE: 'rgb(229, 229, 229)',
  BROWNFACE: 'rgb(84, 51, 28)',
  YELLOWFACE: 'rgb(254, 194, 77)',
  BROWNNOSE: 'rgb(73, 37, 37)',
  GREYNOSE: 'rgb(213, 213, 214)',
  BLACKEARS: 'rgb(35, 31, 32)',
  LEFTEARS: 'rgb(96, 172, 168)',
  RIGHTEARS: 'rgb(128, 184, 183)'
};

// NECK
ctx.beginPath();
ctx.moveTo(347, 552);
ctx.lineTo(207, 552);
ctx.lineTo(112, 430);
ctx.lineTo(112, 298);
ctx.lineTo(276, 400);
ctx.lineTo(439, 298);
ctx.lineTo(439, 430);
ctx.lineTo(347, 552);
ctx.closePath();
ctx.fillStyle = COLORS.NECK;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(160, 172);
ctx.bezierCurveTo(160, 172, 18, 350, 219, 365);
ctx.closePath();
ctx.fillStyle = COLORS.BROWNFACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(400, 160);
ctx.bezierCurveTo(400, 160, 527, 350, 333, 365);
ctx.closePath();
ctx.fillStyle = COLORS.BROWNFACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(169, 334);
ctx.lineTo(220, 350);
ctx.lineTo(276, 396);
ctx.lineTo(331, 350);
ctx.lineTo(383, 334);
ctx.lineTo(396, 347);
ctx.lineTo(336, 363);
ctx.lineTo(276, 402);
ctx.lineTo(216, 363);
ctx.lineTo(170, 350);
ctx.lineTo(170, 334);
ctx.closePath();
ctx.fillStyle = COLORS.BROWNFACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(333, 232);
ctx.bezierCurveTo(425, 215, 425, 375, 324, 333);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOWFACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(221, 225);
ctx.bezierCurveTo(120, 230, 130, 370, 229, 334);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOWFACE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(382, 333);
ctx.lineTo(170, 333);
ctx.lineTo(220, 351);
ctx.lineTo(276, 396);
ctx.lineTo(333, 351);
ctx.lineTo(382, 333);
ctx.closePath();
ctx.fillStyle = COLORS.GREYFACE;
ctx.fill();

// LEFT EYE
ctx.beginPath();
ctx.moveTo(228, 334);
ctx.lineTo(160, 257);
ctx.lineTo(190, 228);
ctx.lineTo(276, 291);
ctx.lineTo(228, 334);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOWEYE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(213, 281);
ctx.arc(213, 281, 27, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.WHITEEYE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(213, 281);
ctx.arc(213, 281, 22, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGEEYE;
ctx.fill();

// LEFT EAR
ctx.beginPath();
ctx.moveTo(276, 292);
ctx.lineTo(275, 186);
ctx.lineTo(203, 165);
ctx.closePath();
ctx.fillStyle = COLORS.LEFTEARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(96, 196);
ctx.lineTo(74, 146);
ctx.lineTo(185, 132);
ctx.lineTo(276, 292);
ctx.lineTo(96, 196);
ctx.closePath();
ctx.fillStyle = COLORS.BLACKEARS;
ctx.fill();

// RIGHT EYE
ctx.beginPath();
ctx.moveTo(321, 334);
ctx.lineTo(276, 292);
ctx.lineTo(352, 219);
ctx.lineTo(393, 258);
ctx.lineTo(321, 334);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOWEYE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(340, 281);
ctx.arc(340, 281, 27, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.WHITEEYE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(340, 281);
ctx.arc(340, 281, 22, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.ORANGEEYE;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(276, 292);
ctx.lineTo(275, 186);
ctx.lineTo(350, 167);
ctx.closePath();
ctx.fillStyle = COLORS.RIGHTEARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(276, 292);
ctx.lineTo(366, 132);
ctx.lineTo(476, 146);
ctx.lineTo(457, 196);
ctx.lineTo(276, 292);
ctx.closePath();
ctx.fillStyle = COLORS.BLACKEARS;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(275, 388);
ctx.lineTo(228, 332);
ctx.lineTo(275, 290);
ctx.lineTo(323, 331);
ctx.lineTo(275, 388);
ctx.closePath();
ctx.fillStyle = COLORS.GREYNOSE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(276, 386);
ctx.lineTo(261, 333);
ctx.lineTo(266, 301);
ctx.lineTo(276, 290);
ctx.lineTo(287, 301);
ctx.lineTo(289, 333);
ctx.lineTo(276, 386);
ctx.closePath();
ctx.fillStyle = COLORS.BROWNNOSE;
ctx.fill();
