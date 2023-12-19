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
    color: "#4D8EAA"
};

const platform3 = {
    x: 300,
    y: canvas.height - 75,
    width: 150,
    height: 20,
    color: "#4D8EAA40"
};

// Array to hold the platforms
const platforms = [platform, platform2, platform3];

// Function to draw platforms
function drawPlatforms() {
    for (const plat of platforms) {
        ctx.fillStyle = plat.color;
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
    }
}