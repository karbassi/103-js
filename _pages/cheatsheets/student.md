---
layout: "page"
permalink: "/cheatsheet/"
---

# Javascript Cheat Sheet

## Starting up

1. Create a new HTML file called `index.html`. This is where your website HTML will be.

2. Create a new Javascript file called `drawing.js`.

3. In the `index.html` file, add the following to the `<head></head>` tag. This is how the HTML load the Javascript.

    ```html
    <head>
        <canvas id="drawing" width="500" height="500"></canvas>
        <script src="drawing.js"></script>
    </head>
    ```

4. Inside `drawing.js` file, add the following so that the Javascript file detect the specified elements from HTML file.

    ```js
    var canvas = document.getElementById('drawing');
    var ctx = canvas.getContext('2d');
    ```

## Basic Styles

| Description                                    | Code                                        | Example                                  |
|------------------------------------------------|---------------------------------------------|------------------------------------------|
| Start drawing a shape                          | [`beginPath();`][beginPath]                 | `ctx.beginPath();`                       |
| Move to a specific point                       | [`moveTo(x, y);`][moveTo]                   | `ctx.moveTo(463, 551);`                  |
| Draw a path for a line from a point to another | [`lineTo(x, y);`][lineTo]                   | `ctx.lineTo(50, 50);`                    |
| Draw the actual line                           | [`stroke();`][stroke]                       | `ctx.stroke();`                          |
| Specify the line color                         | [`strokestyle = "color";`][strokestyle]     | `ctx.strokestyle = "red";`               |
| Close a path                                   | [`closePath();`][closePath]                 | `ctx.closePath();`                       |
| Draw a circle                                  | [`arc(x, y, radius, sAngle, eAngle);`][arc] | `ctx.arc(325, 175, 25, 0, 2 * Math.PI);` |
| Fill the circle                                | [`fill();`][fill]                           | `ctx.fill();`                            |
| Specify the fill color                         | [`fillstyle = "color";`][fillStyle]         | `ctx.fillstyle = "red";`                 |

## Example Page

- Add in the HTML file

```html
<canvas id="drawing" width="500" height="500"></canvas>
<script src="drawing.js"></script>
```

- Add in the Javascript file

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

// SMILE
ctx.beginPath();
ctx.arc(250, 250, 150, 0, Math.PI);
ctx.lineTo(400, 250);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
```

## Online Resources
- [Codecademy](https://www.codecademy.com/)
- [W3Schools](https://www.w3schools.com/)
- [Coursera](https://www.coursera.org/)
- [edX](https://www.edx.org/)
- [Khanacademy](https://www.khanacademy.org/)
- [Lynda](https://www.lynda.com/)
- [Code.org](https://code.org/)
- [Udacity](https://www.udacity.com/)
- [Thimble by Mozilla](https://thimble.mozilla.org)
- [Developer Mozilla](https://developer.mozilla.org)

##  FAQs

### Can I use my CoderDojoChi USB on my computer at home?
Yes! All USBs we’ve provided should work on any desktop or laptop computer you have at home. Just plug it in, and look for the folder the same way you did in class.

### What program do I use to open my HTML and CSS files on my computer?
We highly suggest installing a free cross-platform editor called [Visual Studio Code](https://code.visualstudio.com). However, you can edit your files using any text editor, except Microsoft Word.

[beginPath]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
[moveTo]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo
[lineTo]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke
[font-size]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke
[stroke]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke
[strokeStyle]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokestyle
[closePath]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath
[arc]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
[fill]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill
[fillStyle]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillstyle
