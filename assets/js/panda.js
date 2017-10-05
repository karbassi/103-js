const canvas = document.getElementById('panda');
const ctx = canvas.getContext('2d');

// Outer circle of panda face
// keep for reference

// ctx.beginPath();
// ctx.arc(250, 250, 150, 0, 2 * Math.PI);
// ctx.stroke();

// outer left eye

ctx.beginPath();
ctx.moveTo(198, 270);
ctx.lineTo(235, 215);
ctx.lineTo(210, 185);
ctx.lineTo(174, 230);
ctx.lineTo(125, 275);
ctx.lineTo(198, 270);
ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

// Left eye

ctx.beginPath();
ctx.arc(200, 230, 15, 0, 2 * Math.PI);
ctx.strokeStyle = '#47C5BE';
ctx.lineWidth = 2;
ctx.stroke();

// Outer right eye

ctx.beginPath();
ctx.moveTo(295, 270);
ctx.lineTo(272, 215);
ctx.lineTo(296, 185);
ctx.lineTo(326, 230);
ctx.lineTo(375, 275);
ctx.lineTo(295, 270);
ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

// Right eye

ctx.beginPath();
ctx.arc(300, 230, 15, 0, 2 * Math.PI);
ctx.strokeStyle = '#47C5BE';
ctx.lineWidth = 2;
ctx.stroke();

// Mouth

ctx.beginPath();
ctx.moveTo(218, 350);
ctx.lineTo(282, 350);
ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';
ctx.stroke();

// Line connecting mouth to nose

ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(250, 330);
ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';
ctx.stroke();

// Nose

ctx.beginPath();
ctx.moveTo(220, 320);
ctx.lineTo(250, 330);
ctx.lineTo(280, 320);
ctx.lineTo(290, 300);
ctx.lineTo(250, 305);
ctx.lineTo(210, 300);
ctx.lineTo(220, 320);
ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

// Left ear
// moveTo start position
// bezierCurveTo x, y of left angle, x, y of right angle, end position

ctx.beginPath();
ctx.moveTo(122, 165);
ctx.bezierCurveTo(35, 90, 180, -15, 187, 114);
ctx.bezierCurveTo(145, 126, 125, 178, 122, 165);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

// Right ear
// moveTo start position
// bezierCurveTo x, y of left angle, x, y of right angle, end position

ctx.beginPath();
ctx.moveTo(320, 116);
ctx.bezierCurveTo(320, -15, 480, 85, 375, 165);
ctx.bezierCurveTo(344, 128, 320, 115, 320, 116);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

// Left neck

ctx.beginPath();
ctx.moveTo(230, 400);
ctx.lineTo(34, 400);
ctx.lineTo(107, 295);
ctx.bezierCurveTo(120, 330, 151, 387, 230, 400);
ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

// Right neck

ctx.beginPath();
ctx.moveTo(270, 400);
ctx.lineTo(394, 400);
ctx.lineTo(394, 295);
ctx.bezierCurveTo(375, 346, 350, 381, 270, 400);
ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
