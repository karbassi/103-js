// SET UP
const canvas = document.getElementById('porcupine');
const ctx = canvas.getContext('2d');

const COLORS = {
  OUTERSPIKE: 'rgb(254, 193, 77)',
  INNERSPIKE: 'rgb(248, 155, 28)',
  FACE: 'rgb(190, 119, 50)',
  EYE: 'rgb(111, 54, 25)',
  NOSE: 'rgb(58, 31, 9)',
  FOOT: 'rgb(108, 77, 54)'
};

// OUTER SPIKES
ctx.beginPath();
ctx.moveTo(506, 382);
ctx.lineTo(105, 389);
ctx.lineTo(45, 383);
ctx.lineTo(98, 354);
ctx.lineTo(100, 320);
ctx.lineTo(45, 291);
ctx.lineTo(106, 285);
ctx.lineTo(122, 255);
ctx.lineTo(80, 206);
ctx.lineTo(137, 224);
ctx.lineTo(164, 201);
ctx.lineTo(146, 141);
ctx.lineTo(192, 181);
ctx.lineTo(225, 168);
ctx.lineTo(229, 106);
ctx.lineTo(259, 161);
ctx.lineTo(293, 160);
ctx.lineTo(322, 106);
ctx.lineTo(328, 160);
ctx.lineTo(359, 181);
ctx.lineTo(407, 141);
ctx.lineTo(388, 201);
ctx.lineTo(414, 224);
ctx.lineTo(471, 206);
ctx.lineTo(430, 256);
ctx.lineTo(447, 285);
ctx.lineTo(506, 291);
ctx.lineTo(451, 320);
ctx.lineTo(451, 355);
ctx.lineTo(505, 382);
ctx.closePath();
ctx.fillStyle = COLORS.OUTERSPIKE;
ctx.fill();

// INNER SPIKES
ctx.beginPath();
ctx.moveTo(492, 430);
ctx.lineTo(60, 430);
ctx.lineTo(130, 366);
ctx.lineTo(41, 337);
ctx.lineTo(128, 306);
ctx.lineTo(59, 248);
ctx.lineTo(152, 255);
ctx.lineTo(110, 171);
ctx.lineTo(193, 213);
ctx.lineTo(186, 119);
ctx.lineTo(247, 192);
ctx.lineTo(276, 109);
ctx.lineTo(305, 191);
ctx.lineTo(367, 119);
ctx.lineTo(359, 214);
ctx.lineTo(443, 170);
ctx.lineTo(400, 255);
ctx.lineTo(495, 247);
ctx.lineTo(422, 308);
ctx.lineTo(514, 340);
ctx.lineTo(500, 337);
ctx.lineTo(423, 366);
ctx.lineTo(492, 430);
ctx.closePath();
ctx.fillStyle = COLORS.INNERSPIKE;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(329, 429);
ctx.lineTo(276, 445);
ctx.lineTo(223, 428);
ctx.lineTo(212, 359);
ctx.lineTo(237, 328);
ctx.lineTo(278, 336);
ctx.lineTo(314, 327);
ctx.lineTo(340, 361);
ctx.lineTo(329, 429);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// LEFT EYE
ctx.beginPath();
ctx.moveTo(246, 382);
ctx.lineTo(253, 402);
ctx.lineTo(234, 398);
ctx.lineTo(246, 382);
ctx.closePath();
ctx.fillStyle = COLORS.EYE;
ctx.fill();

// RIGHT EYE
ctx.beginPath();
ctx.moveTo(307, 381);
ctx.lineTo(319, 397);
ctx.lineTo(299, 401);
ctx.lineTo(307, 381);
ctx.closePath();
ctx.fillStyle = COLORS.EYE;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(277, 401);
ctx.lineTo(287, 405);
ctx.lineTo(287, 416);
ctx.lineTo(277, 422);
ctx.lineTo(265, 416);
ctx.lineTo(265, 405);
ctx.lineTo(277, 401);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

// LEFT FOOT
ctx.beginPath();
ctx.moveTo(226, 445);
ctx.lineTo(184, 445);
ctx.lineTo(186, 428);
ctx.lineTo(223, 428);
ctx.closePath();
ctx.fillStyle = COLORS.FOOT;
ctx.fill();

// RIGHT FOOT
ctx.beginPath();
ctx.moveTo(369, 445);
ctx.lineTo(326, 445);
ctx.lineTo(329, 429);
ctx.lineTo(368, 429);
ctx.closePath();
ctx.fillStyle = COLORS.FOOT;
ctx.fill();
