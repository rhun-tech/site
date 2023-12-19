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

// Function to generate a random number within a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a snowflake object
function createSnowflake() {
    return {
        x: getRandom(0, canvas.width),
        y: getRandom(0, canvas.height),
        radius: getRandom(1, 4),
        speed: getRandom(1, 3),
        startTime: Date.now(), // Record the creation time
    };
}

// Function to update snowflake positions
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
    ctx.fillStyle = "#B0C4DE"; // White color for snowflakes

    for (const snowflake of snowflakes) {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Function to initialize snowflakes
function initializeSnowflakes() {
    for (let i = 0; i < numSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }
}

// Initialize snowflakes
initializeSnowflakes();
