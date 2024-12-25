//#region Variables
// Get the canvas element and its drawing context
const canvas = document.getElementById("pfp");
const canvasContext = canvas.getContext("2d");

// Create a new image object and set its source
const img = new Image();
img.src = "../images/placeholder.webp";

const isMobileMQ = matchMedia("(max-width: 600px)");
const isTabletMQ = matchMedia("(max-width: 900px)");
const isDesktopMQ = matchMedia("(max-width: 1200px)");

let canvasSize = null; 
//#endregion

//#region Functions
/**
 * Handles screen size changes and adjusts the canvas size accordingly
 */
const setCanvasSize = () => {
  if (isMobileMQ.matches) {
    canvasSize = 200;
    drawCanvas();
  } else if (isTabletMQ.matches) {
    canvasSize = 250;
    drawCanvas();
  } else {
    canvasSize = 300;
    drawCanvas();
  }
};


/**
 * Detect if the left mouse button is pressed during the event
 * @param {MouseEvent} event - The mouse event to check
 * @returns {boolean} True if the left button is pressed, false otherwise
 */
const detectLeftButton = (event) => {
  if ("buttons" in event) return event.buttons === 1; // Check if LMB is pressed
  return event.button === 0;
};

/**
 * Calculate the brush position relative to the canvas
 * @param {number} xRef - The X coordinate of the event
 * @param {number} yRef - The Y coordinate of the event
 * @returns {object} The calculated brush position
 */
const getBrushPos = (xRef, yRef) => {
  const canvasRect = canvas.getBoundingClientRect();
  return {
    x: Math.floor(
      ((xRef - canvasRect.left) / (canvasRect.right - canvasRect.left)) *
        canvas.width
    ),
    y: Math.floor(
      ((yRef - canvasRect.top) / (canvasRect.bottom - canvasRect.top)) *
        canvas.height
    ),
  };
};

/**
 * Draws the image on the canvas with the specified size
 * @param {HTMLCanvasElement} canvas - The canvas element to draw on
 * @param {CanvasRenderingContext2D} canvasContext - The 2D rendering context of the canvas
 * @param {HTMLImageElement} img - The image to draw on the canvas
 * @param {number} canvasSize - The size to which the canvas should be set
 */
const drawCanvas = () => {
  canvas.width = canvas.height = canvasSize;
  canvasContext.drawImage(img, 0, 0, canvas.width, canvas.height);
};

/**
 * Draw a circular dot on the canvas at the specified position
 * @param {number} mouseX - The X coordinate of the dot
 * @param {number} mouseY - The Y coordinate of the dot
 */
const drawDot = (mouseX, mouseY) => {
  canvasContext.beginPath();
  const brushRadius = canvasSize / 10;
  canvasContext.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
  canvasContext.fillStyle = "#000"; // Set the fill color to black
  canvasContext.globalCompositeOperation = "destination-out"; // Set blend mode to erase
  canvasContext.fill();
};

//#endregion


//#region Main

// Wait for the pic to be ready and set the initial canvas size based on the screen size
img.onload = () => {
  setCanvasSize();
}


// Add an event listener for mouse movements
canvas.addEventListener("mousemove", (e) => {
  const brushPos = getBrushPos(e.clientX, e.clientY); // Get brush position from mouse coordinates
  if (detectLeftButton(e)) {
    drawDot(brushPos.x, brushPos.y); // Draw only if the left button is pressed
  }
});

// Add an event listener for touch movements
canvas.addEventListener("touchmove", (e) => {
  e.preventDefault(); // Prevent scrolling while drawing
  const touch = e.targetTouches[0];
  if (touch) {
    const brushPos = getBrushPos(touch.pageX, touch.pageY); // Get brush position from touch coordinates
    drawDot(brushPos.x, brushPos.y); // Draw at the touch position
  }
});
//#endregion

