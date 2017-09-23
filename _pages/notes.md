---
layout: "page"
permalink: "/notes"
---

# Painting with Code

## Overview
## What is HTML, CSS, and JS?
## Grid Paper
### Explain
- Each square on the grip paper is considered 10px.
- In normal math class, `(0, 0)` is in the center of the page. In Javascript Canvas, `(0, 0)` is the top left of the page.
### Exercise #1

1. Explain that with JS code, you will be telling a **robot** arm what to do.

> For example, if we tell the robot to **move to** the location of `(10, 10)`, where would the robot arm take us?

2. Have the students move their pencils over 1 box right and 1 box down.
  - Explain to the students that we told the robot arm to **just move, not draw anything.**

3. Have the students **move to** the location of `(50, 10)`. The students should move their pencils, but not draw a line.
  - Explain again that they are **moving**, <u>not drawing.</u>

4. Repeat the move to step again to location  `(50, 50)`, `(10, 50)`, and finally back to `(10, 10)`.
  - Explain to the students that they moved the robot arm to four points, but they still haven't drawn anything.
### Exercise #2

1. Have the students draw a **line to** `(50, 10)`. Remind them that their robot arm is currently at `(10, 10)`.
2. Have the students draw a **line to** `(50, 50)`. Their robot arm is should have started from `(50, 10)` and drew a straight line to `(50, 50)`.
3. Have the students draw a **line to** `(50, 10)` and then a **line to** `(10, 10)`.
4. Ask the students what they drew. It should be a square.

### Exercise #3

1. Ask the students to **fill** in the square by shading it in.
   - Explain that they **filled** in the square.

## Coding Time

### Code Area Setup

1. Create a folder called `js-drawing` inside their thumb drive.

2. Open up Visual Studio Code (VS Code). Explain that VS Code is where we'll be coding.

3. Inside VS Code, open the folder we created (`js-drawing`) . You can do this by going to `File > Open` and selecting your folder.

4. Using VS Code's sidebar, create a new file called `index.html`.

### Creating the  `<canvas>` element

1. Inside the `index.html` file, create a new HTML element called `<canvas>`.

2. Type out the bare`<canvas>`.

```html
<canvas></canvas>
```

3. Add `id` to the `<canvas>` element

```html
<canvas id="drawing"></canvas>
```

4. Add a `width` and `height` of `500px`.

```html
<canvas id="drawing" width="500" height="500"></canvas>
```

### Creating out drawing code file

1. Using VS Code, create a new file called `our-drawing.js`.

2. We need to connect this new Javascript code file to out HTML file so that we can have the two files talk to each other.

```html
<script src="our-drawing.js"></script>
```

### JS Code (WIP)

(notes)

1. What is a `var`?

2. `var canvas = document.getElementById('drawing');`

3. `var ctx = canvas.getContext('2d');`, 

4. `ctx.beginPath();`

5. `ctx.moveTo(x, y);` and  `ctx.lineTo(x, y);`

6. `ctx.closePath();`

7. `ctx.strokeStyle = "red";` and `ctx.stroke();`

8. `ctx.fillStyle = "#AFAFAF";` and `ctx.fill();`

9. `ctx.arc(x, y, radius, startAngle, endAngle);` and `Math.PI`

10. Radian

![Circle_radians]({{ site.baseurl }}/assets/images/Circle_radians.gif)
[source](https://upload.wikimedia.org/wikipedia/commons/4/4e/Circle_radians.gif)

![2pi-unrolled]({{ site.baseurl }}/assets/images/2pi-unrolled.gif)
[source](https://upload.wikimedia.org/wikipedia/commons/6/67/2pi-unrolled.gif)

11. smilie.js challenge

```js
var canvas = document.getElementById('drawing');
var ctx = canvas.getContext('2d');

// FACE
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();

// LEFT EYE
ctx.beginPath();
ctx.arc(175, 175, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// RIGHT EYE
ctx.beginPath();
ctx.arc(325, 175, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// SMILE
ctx.beginPath();
ctx.arc(250, 250, 150, 0, Math.PI);
ctx.lineTo(400, 250);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
```

(/notes)

#### Beginning

1. ```js
   var canvas = document.getElementById('drawing');
   ```

2. ```js
   var ctx = canvas.getContext('2d');
   ```

3. ```js
   // Drawing a box
   ctx.beginPath();
   ```

4. ```js
   ctx.moveTo(10, 10);
   ```

5. ```js
   ctx.lineTo(50, 10);
   ```

6. ```js
   ctx.lineTo(50, 50);
   ```

7. ```js
   ctx.lineTo(10, 50);
   ```

8. ```js
   ctx.lineTo(10, 10);
   ```

9. ```js
   ctx.stroke();
   ```


### Challenge #1

Create a square who's top left point is at `(100, 100)`. The square's size (width and height) is `100px` by `100px`.

#### Answer

```js
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);
ctx.lineTo(100, 100);
ctx.stroke();
```

### Challenge #2

Create a triangle who's top point is at `(300, 100)`, left point is at `(250, 187)`, and the right point is at `(350, 187)`. 

#### Answer

```js
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(250, 187);
ctx.lineTo(350, 187);
ctx.lineTo(300, 100);
ctx.stroke();
```

