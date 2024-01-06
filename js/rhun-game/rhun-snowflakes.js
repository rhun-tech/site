// snowflake.js

// Snowflake properties
const snowflakes = [];
const numSnowflakes = 100; // Adjust the number of snowflakes as needed

// Snowfall properties
const snowfall = {
    flakesPerIncrement: 100, // Number of snowflakes released per increment
    incrementInterval: 100, // Time interval between increments in milliseconds (e.g., 10000 ms = 10 seconds)
    lastIncrementTime: 0, // Timestamp of the last increment
};

let snowflakeCounter = 0;

// Function to generate a random number within a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a snowflake object
function createSnowflake() {
    const radius = getRandom(1, 4);
    const speed = radius > 3 ? 1 : getRandom(1, 3);

    return {
        x: getRandom(0, canvas.width),
        y: getRandom(0, canvas.height),
        radius: radius,
        speed: speed,
        startTime: Date.now(), // Record the creation time
    };
}


function updateSnowflakes() {
    const currentTime = Date.now();

    for (let i = snowflakes.length - 1; i >= 0; i--) {
        const snowflake = snowflakes[i];
        snowflake.y += snowflake.speed;

        // If the snowflake collides with the floor, reposition it just above the floor
        if (snowflake.y + snowflake.radius > floor.y && snowflake.y < canvas.height) {
            snowflake.y = floor.y - snowflake.radius;
        }

        // If the snowflake collides with the player, reposition it just above the player
        if (isCollidingSnowflakeWithPlayer(snowflake)) {
            snowflake.y = player.y - snowflake.radius;

            // Increment the snowflake counter
            snowflakeCounter++;

            // Remove the snowflake from the array
            snowflakes.splice(i, 1);
        }

        // If the snowflake collides with the platform, reposition it just above the platform
        for (const plat of platforms) {
            if (isCollidingSnowflakeWithPlatform(snowflake, plat)) {
                snowflake.y = plat.y - snowflake.radius;
            }
        }

        // Remove snowflake if it exceeds the lifespan (10 seconds)
        if (currentTime - snowflake.startTime > 10000) {
            snowflakes.splice(i, 1);
        }
    }

    // Check if it's time to release more snowflakes
    if (currentTime - snowfall.lastIncrementTime > snowfall.incrementInterval) {
        // Release a specified number of snowflakes
        for (let i = 0; i < snowfall.flakesPerIncrement; i++) {
            const newSnowflake = createSnowflake();
            newSnowflake.startTime = currentTime; // Record the creation time
            snowflakes.push(newSnowflake);
        }

        // Update the last increment time
        snowfall.lastIncrementTime = currentTime;
    }
}


// Function to draw snowflakes
function drawSnowflakes() {
    ctx.fillStyle = "#B0C4DE"; // Default white color for snowflakes

    for (const snowflake of snowflakes) {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI);

        if (snowflake.radius >= 1 && snowflake.radius < 2) {
            ctx.fillStyle = "#B0C4DE"; // Opacity for radius 1-2
        } else if (snowflake.radius >= 2 && snowflake.radius < 3) {
            ctx.fillStyle = "#B0C4DE40"; // Opacity for radius 2-3
        } else if (snowflake.radius >= 3 && snowflake.radius <= 4) {
            ctx.fillStyle = "#B0C4DE80"; // Opacity for radius 3-4
        }

        ctx.fill();
    }
}

// Helper function to draw a rounded rectangle
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
}

function drawSnowflakeCounter() {
    const backgroundY = 5;
    const borderRadius = 10;

    // Calculate the width based on the text content
    const text = "Snowflakes: " + snowflakeCounter;
    const textWidth = ctx.measureText(text).width;
    const backgroundWidth = textWidth + 20; // Add some padding around the text

    // Draw a slightly transparent dark background with rounded corners
    ctx.fillStyle = "#4D8EAABF";
    roundRect(ctx, 5, backgroundY, backgroundWidth, 30, borderRadius);
    ctx.fill();

    // Draw the counter text on top of the background
    ctx.fillStyle = "#B0C4DE";
    ctx.font = "20px Arial";
    ctx.fillText(text, 10, backgroundY + 25); // Adjust the position as needed
}

// Function to initialize snowflakes
function initializeSnowflakes() {
    for (let i = 0; i < numSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }
}

// Initialize snowflakes
initializeSnowflakes();
