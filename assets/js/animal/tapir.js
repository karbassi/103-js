const canvas = document.getElementById('tapir');
const ctx = canvas.getContext('2d');

const COLOR = {
  EAR: '#3E1D04',
  EAR_TIP: '#FFB300',
  HEAD: '#736361',
  NECK: '#3E1D04',
  OUTER_NOSE: '#806F6c',
  INNER_NOSE: '#8A7976',
  EYE: '#241F20'
};

// LEFT EAR
ctx.beginPath();
ctx.moveTo(178, 25);
ctx.lineTo(203, 100);
ctx.lineTo(232, 88);
ctx.lineTo(219, 40);
ctx.closePath();
ctx.fillStyle = COLOR.EAR;
ctx.fill();

// LEFT EAR TIP
ctx.beginPath();
ctx.moveTo(178, 25);
ctx.lineTo(219, 40);
ctx.lineTo(214, 25);
ctx.closePath();
ctx.fillStyle = COLOR.EAR_TIP;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(373, 25);
ctx.lineTo(348, 100);
ctx.lineTo(320, 90);
ctx.lineTo(332, 40);
ctx.closePath();
ctx.fillStyle = COLOR.EAR;
ctx.fill();

// RIGHT EAR TIP
ctx.beginPath();
ctx.moveTo(373, 25);
ctx.lineTo(332, 40);
ctx.lineTo(336, 25);
ctx.closePath();
ctx.fillStyle = COLOR.EAR_TIP;
ctx.fill();

// NECK
ctx.beginPath();
ctx.moveTo(167, 290);
ctx.lineTo(116, 460);
ctx.lineTo(435, 460);
ctx.lineTo(382, 290);
ctx.closePath();
ctx.fillStyle = COLOR.NECK;
ctx.fill();

// HEAD
ctx.beginPath();
ctx.moveTo(275, 71);
ctx.lineTo(203, 100);
ctx.lineTo(183, 235);
ctx.lineTo(167, 290);
ctx.lineTo(221, 369);
ctx.lineTo(242, 437);
ctx.lineTo(275, 448);
ctx.lineTo(308, 437);
ctx.lineTo(329, 369);
ctx.lineTo(382, 290);
ctx.lineTo(368, 235);
ctx.lineTo(348, 100);
ctx.lineTo(275, 71);
ctx.closePath();
ctx.fillStyle = COLOR.HEAD;
ctx.fill();

// OUTER NOSE
ctx.beginPath();
ctx.moveTo(221, 200);
ctx.lineTo(250, 443);
ctx.lineTo(300, 443);
ctx.lineTo(330, 200);
ctx.lineTo(275, 235);
ctx.lineTo(221, 200);
ctx.closePath();
ctx.fillStyle = COLOR.OUTER_NOSE;
ctx.fill();

// INNER NOSE
ctx.beginPath();
ctx.moveTo(275, 71);
ctx.lineTo(250, 81);
ctx.lineTo(263, 200);
ctx.lineTo(250, 443);
ctx.lineTo(275, 451);
ctx.lineTo(300, 443);
ctx.lineTo(287, 200);
ctx.lineTo(300, 81);
ctx.lineTo(275, 71);
ctx.closePath();
ctx.fillStyle = COLOR.INNER_NOSE;
ctx.fill();

// LEFT EYE
ctx.beginPath();
ctx.moveTo(195, 202);
ctx.lineTo(195, 232);
ctx.lineTo(222, 236);
ctx.closePath();
ctx.fillStyle = COLOR.EYE;
ctx.fill();

// RIGHT EYE
ctx.beginPath();
ctx.moveTo(357, 202);
ctx.lineTo(357, 232);
ctx.lineTo(330, 236);
ctx.closePath();
ctx.fillStyle = COLOR.EYE;
ctx.fill();
