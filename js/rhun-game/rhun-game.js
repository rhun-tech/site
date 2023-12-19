// Get the canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define floor properties
const floor = {
    x: 0,
    y: canvas.height - 20,
    width: canvas.width,
    height: 20,
    color: "#4D8EAA40" // Blue color for the floor
};

// Define player properties
const player = {
    x: 50,
    y: canvas.height - 30,
    width: 20,
    height: 20,
    speed: 5,
    jumpStrength: 10, // Adjust the jump strength as needed
    isJumping: false,
    color: "#C33C54"
};

// Define platform properties
const platform = {
    x: 100,
    y: canvas.height - 75,
    width: 150,
    height: 20,
    color: "#4D8EAA40"
};

const platform2 = {
    x: 200,
    y: canvas.height - 130,
    width: 150,
    height: 20,
    color: "#4D8EAA40"
};

const platform3 = {
    x: 300,
    y: canvas.height - 75,
    width: 150,
    height: 20,
    color: "#4D8EAA40"
};

const platform4 = {
    x: 400,
    y: canvas.height - 130,
    width: 150,
    height: 20,
    color: "#4D8EAA40"
};

const platform5 = {
    x: 500,
    y: canvas.height - 75,
    width: 150,
    height: 20,
    color: "#4D8EAA40"
};

const platform6 = {
    x: 150,
    y: canvas.height - 185,
    width: 150,
    height: 20,
    color: "#4D8EAA40"
};

// Array to hold the platforms
const platforms = [platform, platform2, platform3, platform4, platform5, platform6];

// Function to draw platforms
function drawPlatforms() {
    for (const plat of platforms) {
        ctx.fillStyle = plat.color;

        // Draw rounded corners for the top-left and top-right
        const cornerRadius = 10; // Adjust the radius as needed

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
        snowflake.x + snowflake.radius > platform.x &&
        snowflake.x - snowflake.radius < platform.x + platform.width &&
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
            player.jumpStrength -= 1; // Decrease jumpStrength to simulate gravity
        } else {
            // Reset the jump state when the player reaches the ground
            player.isJumping = false;
            player.jumpStrength = 10; // Reset jumpStrength for future jumps
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
    if (!player.isJumping && player.y < canvas.height - player.height && !onPlatform) {
        player.y += player.jumpStrength / 2; // Adjust the gravity as needed
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
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y - player.height, player.width, player.height);
}

// Game loop
function gameLoop() {
    update(); // Update the game state first
    draw();   // Then, draw the updated state
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();