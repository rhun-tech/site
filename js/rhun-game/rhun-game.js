// rhun-game.js

// Get the canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const cornerRadius = 10;
const randomBlockPattern = ctx.createPattern(createRandomBlockPattern(), 'repeat');

// Define floor properties
const floor = {
    x: 0,
    y: canvas.height - 20,
    width: canvas.width,
    height: 20,
    color: randomBlockPattern
};

// Function to create a random block pattern
function createRandomBlockPattern() {
    const patternCanvas = document.createElement('canvas');
    const patternCtx = patternCanvas.getContext('2d');
    patternCanvas.width = 800; // Adjust the width based on your pattern
    patternCanvas.height = 40; // Adjust the height based on your pattern

    // Draw the random block pattern
    patternCtx.fillStyle = '#4D8EAA40';
    patternCtx.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

    patternCtx.fillStyle = '#B0C4DE';
    const blockSize = 8;

    // Randomly fill squares
    for (let x = 0; x < patternCanvas.width; x += blockSize) {
        for (let y = 0; y < patternCanvas.height; y += blockSize) {
            if (Math.random() > 0.5) {
                patternCtx.fillRect(x, y, blockSize, blockSize);
            }
        }
    }

    return patternCanvas;
}

// Define player properties
const player = {
    x: 50,
    y: canvas.height - 20,
    width: 20,
    height: 40,
    speed: 5,
    jumpStrength: 10,
    isJumping: false,
    colorTop: "#C33C54",
    colorBottom: "#B0C4DE",
    colorFeet: "#212529"
};

// Draw the player with rounded corners
function drawPlayer() {
    // Create a linear gradient for the player
    const gradient = ctx.createLinearGradient(player.x, player.y - player.height, player.x, player.y);

    // Add color stops
    gradient.addColorStop(0, player.colorTop);
    gradient.addColorStop(1, player.colorBottom);

    // Set the gradient as the fill style
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(player.x + cornerRadius, player.y - player.height);
    ctx.arcTo(player.x + player.width, player.y - player.height, player.x + player.width, player.y, cornerRadius);
    ctx.lineTo(player.x + player.width, player.y, player.x, player.y, cornerRadius);
    ctx.lineTo(player.x, player.y, player.x, player.y - player.height, cornerRadius);
    ctx.arcTo(player.x, player.y - player.height, player.x + player.width, player.y - player.height, cornerRadius);
    ctx.closePath();
    ctx.fill();

    // Draw the outline
    const outlineColor = "#212529";
    const outlineWidth = 2;

    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = outlineWidth;
    ctx.stroke();

    // Draw the player head as a circle
    const headRadius = 10;
    const headX = player.x + player.width / 2;
    const headY = player.y - player.height - headRadius + 2;

    ctx.fillStyle = player.colorBottom; // Head color
    ctx.beginPath();
    ctx.arc(headX, headY, headRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw the outline
    const outlineColorHead = "#212529";
    const outlineWidthHead = 2;

    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = outlineWidth;
    ctx.stroke();

    // Draw a small box at the player's feet
    const boxWidth = 20;
    const boxHeight = 5;
    const boxX = player.x + (player.width - boxWidth) / 2;
    const boxY = player.y - 5;

    ctx.fillStyle = player.colorFeet;
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
}

// Define platform properties
const platform = {
    x: 100,
    y: canvas.height - 75,
    width: 150,
    height: 55,
    color: "#4D8EAA"
};

const platform2 = {
    x: 200,
    y: canvas.height - 130,
    width: 150,
    height: 110,
    color: "#4D8EAABF"
};

const platform3 = {
    x: 300,
    y: canvas.height - 75,
    width: 150,
    height: 55,
    color: "#4D8EAA"
};

const platform4 = {
    x: 400,
    y: canvas.height - 130,
    width: 150,
    height: 110,
    color: "#4D8EAABF"
};

const platform5 = {
    x: 500,
    y: canvas.height - 75,
    width: 150,
    height: 55,
    color: "#4D8EAA"
};

const platform6 = {
    x: 150,
    y: canvas.height - 185,
    width: 150,
    height: 165,
    color: "#4D8EAA40"
};

const platform7 = {
    x: 450,
    y: canvas.height - 185,
    width: 150,
    height: 165,
    color: "#4D8EAA40"
};

// Array to hold the platforms
const platforms = [platform, platform2, platform3, platform4, platform5, platform6, platform7];

// Function to draw platforms
function drawPlatforms() {
    for (const plat of platforms) {
        ctx.fillStyle = plat.color;

        ctx.beginPath();
        ctx.moveTo(plat.x + cornerRadius, plat.y);
        ctx.arcTo(plat.x + plat.width, plat.y, plat.x + plat.width, plat.y + plat.height, cornerRadius);
        ctx.lineTo(plat.x + plat.width, plat.y + plat.height, plat.x, plat.y + plat.height, cornerRadius);
        ctx.lineTo(plat.x, plat.y + plat.height, plat.x, plat.y, cornerRadius);
        ctx.arcTo(plat.x, plat.y, plat.x + plat.width, plat.y, cornerRadius);
        ctx.closePath();
        ctx.fill();
    }
}

// Function to check collision between a snowflake and the player
function isCollidingSnowflakeWithPlayer(snowflake) {
    return (
        snowflake.x + snowflake.radius > player.x &&
        snowflake.x - snowflake.radius < player.x + player.width &&
        snowflake.y + snowflake.radius > player.y - player.height &&
        snowflake.y - snowflake.radius < player.y
    );
}

// Function to check collision between a snowflake and a platform
function isCollidingSnowflakeWithPlatform(snowflake, platform) {

    return (
        snowflake.x + snowflake.radius > platform.x + 10 &&
        snowflake.x - snowflake.radius < platform.x + platform.width - 10 &&
        snowflake.y + snowflake.radius > platform.y &&
        snowflake.y - snowflake.radius < platform.y + platform.height
    );
}

// Function to check for collisions between two rectangles
function isColliding(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

// Handle keyboard input
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

let rightPressed = false;
let leftPressed = false;

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    } else if (e.key === " " || e.key === "Spacebar" || e.key === "Space") {
        // Check if the player is not currently jumping
        if (!player.isJumping) {
            player.isJumping = true;

            // Prevent the default browser behavior for the space key
            e.preventDefault();
        }
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

// Update game state
function update() {
    // Move horizontally
    if (rightPressed && player.x < canvas.width - player.width) {
        player.x += player.speed;
    } else if (leftPressed && player.x > 0) {
        player.x -= player.speed;
    }

    // Jumping logic
    if (player.isJumping) {
        if (player.jumpStrength > 0) {
            // Move up during the initial phase of the jump
            player.y -= player.jumpStrength;
            player.jumpStrength -= 1;
        } else {
            // Reset the jump state when the player reaches the ground
            player.isJumping = false;
            player.jumpStrength = 10;
        }
    }

    // Check for collisions with the platform
    let onPlatform = false;
    for (const plat of platforms) {
        if (isColliding(player, plat)) {
            onPlatform = true;
            break;
        }
    }

    // Apply gravity to bring the player back down (if not on a platform)
    if (!player.isJumping && player.y < canvas.height + 20 - player.height && !onPlatform) {
        player.y += player.jumpStrength / 2;
    }

    updateSnowflakes();
}

// Draw the game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snowflakes
    drawSnowflakes();

    // Draw the floor
    ctx.fillStyle = floor.color;
    ctx.fillRect(floor.x, floor.y, floor.width, floor.height);

    // Draw the platform
    drawPlatforms();

    // Draw the player
    drawPlayer();

    // Draw the snowflake counter
    drawSnowflakeCounter();
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();