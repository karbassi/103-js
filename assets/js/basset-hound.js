var canvas = document.getElementById('basset-hound');
var ctx = canvas.getContext('2d');

const COLOR = {
  BODY: '#AC7A34',
  EYE: '#BAC1CC',
  PUPIL: '#221F20',
  NOSE: '#221F20',
  MUSSEL: '#F5F0CE',
  EAR: '#62391A'
};

// HEAD
ctx.beginPath();
ctx.moveTo(177, 75);
ctx.bezierCurveTo(227, 15, 324, 15, 374, 75);
ctx.lineTo(351, 195);
ctx.lineTo(341, 315);
ctx.lineTo(210, 315);
ctx.closePath();
ctx.fillStyle = COLOR.BODY;
ctx.fill();

// OUTER LEFT EYE
ctx.beginPath();
ctx.moveTo(204, 150);
ctx.lineTo(256, 125);
ctx.lineTo(213, 195);
ctx.closePath();
ctx.fillStyle = COLOR.EYE;
ctx.fill();

// LEFT EYE
ctx.beginPath();
ctx.moveTo(216, 144);
ctx.bezierCurveTo(219, 154, 245, 153, 241, 132);
ctx.closePath();
ctx.fillStyle = COLOR.PUPIL;
ctx.fill();

// OUTER RIGHT EYE
ctx.beginPath();
ctx.moveTo(346, 150);
ctx.lineTo(295, 125);
ctx.lineTo(337, 195);
ctx.closePath();
ctx.fillStyle = COLOR.EYE;
ctx.fill();

// RIGHT EYE
ctx.beginPath();
ctx.moveTo(309, 132);
ctx.bezierCurveTo(306, 153, 332, 154, 333, 144);
ctx.closePath();
ctx.fillStyle = COLOR.PUPIL;
ctx.fill();

// OUTER NOSE
ctx.beginPath();
ctx.moveTo(275, 93);
ctx.lineTo(261, 159);
ctx.lineTo(217, 206);
ctx.lineTo(209, 315);
ctx.lineTo(275, 297);
ctx.lineTo(341, 315);
ctx.lineTo(332, 206);
ctx.lineTo(288, 159);
ctx.lineTo(275, 93);
ctx.closePath();
ctx.fillStyle = COLOR.MUSSEL;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(275, 200);
ctx.lineTo(242, 213);
ctx.lineTo(242, 253);
ctx.lineTo(275, 261);
ctx.lineTo(308, 253);
ctx.lineTo(308, 213);
ctx.lineTo(275, 200);
ctx.closePath();
ctx.fillStyle = COLOR.NOSE;
ctx.fill();

// LEFT EAR
ctx.beginPath();
ctx.moveTo(177, 75);
ctx.lineTo(200, 195);
ctx.lineTo(210, 315);
ctx.lineTo(236, 307);
ctx.lineTo(236, 464);
ctx.lineTo(173, 464);
ctx.bezierCurveTo(140, 463, 110, 450, 103, 315);
ctx.lineTo(177, 75);
ctx.closePath();
ctx.fillStyle = COLOR.EAR;
ctx.fill();

// BODY
ctx.beginPath();
ctx.moveTo(448, 315);
ctx.lineTo(548, 464);
ctx.lineTo(378, 464);
ctx.closePath();
ctx.fillStyle = COLOR.BODY;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(374, 75);
ctx.lineTo(351, 195);
ctx.lineTo(341, 315);
ctx.lineTo(315, 307);
ctx.lineTo(315, 464);
ctx.lineTo(378, 464);
ctx.bezierCurveTo(411, 463, 441, 450, 448, 315);
ctx.lineTo(374, 75);
ctx.closePath();
ctx.fillStyle = COLOR.EAR;
ctx.fill();

// NECK
ctx.beginPath();
ctx.moveTo(236, 464);
ctx.lineTo(315, 464);
ctx.lineTo(315, 307);
ctx.lineTo(275, 297);
ctx.lineTo(236, 307);
ctx.closePath();
ctx.fillStyle = COLOR.BODY;
ctx.fill();
