// canvas 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth * 0.7;
const height = canvas.height = window.innerHeight * 0.7;

// store bubbles 
const bubbles = [];

// Bubble Class 
class Bubble {
    constructor(x, y, radius, dx, dy, color, number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.number = number;
        this.isFrozen = false;
    }

    // draw bubble
    draw() {
        if (!this.isFrozen) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = 'grey';
            ctx.stroke();
            ctx.fillStyle = 'rgba(203, 203, 243, 0.469)';
            ctx.fill();
            ctx.closePath();

            // number in bubble
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = `${this.radius}px Lucida Sans`;
            ctx.fillText(this.number, this.x, this.y);
        }
    }

    //update bubble position
    update() {
        //bubble reaches canvas edges
        if (!this.isFrozen) {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
                this.number = Math.floor(Math.random() * 10) + 1; // Change number when hitting edge
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
                this.number = Math.floor(Math.random() * 10) + 1; // Change number when hitting edge
            }

            // Update position 
            this.x += this.dx;
            this.y += this.dy;

            // Draw 
            this.draw();
        }
    }
}

// Function to animate the bubbles
function animate() {
    requestAnimationFrame(animate); // Request next animation frame
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update and draw each bubble
    bubbles.forEach(bubble => {
        bubble.update();
    });
}

// initialize bubbles
function bubbleFunc() {
    // Create 50 random bubbles
    for (let i = 0; i < 35; i++) {
        // Randomize properties of each bubble
        const radius = 32;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 5;
        const dy = (Math.random() - 0.5) * 5;
        const color = 'rgba(255, 255, 255, 0.5)';

        // Add the bubble to the array
        bubbles.push(new Bubble(x, y, radius, dx, dy, color, Math.floor(Math.random() * 10) + 1));
    }

    // Start animation
    animate();
}

function popFunc(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    bubbles.forEach(bubble => {
        const dist = Math.sqrt((mouseX - bubble.x) ** 2 + (mouseY - bubble.y) ** 2);
        if (dist < bubble.radius) {
            bubble.isFrozen = !bubble.isFrozen; // toggle freeze state
            if (bubble.isFrozen) {
                document.querySelector('h2').innerText = `Volume: ${bubble.number}`;
            } else {
                document.querySelector('h2').innerText = 'Volume: 0';
            }
        }
    });
}

// Add event listener for click events on the canvas
canvas.addEventListener('click', popFunc);


bubbleFunc();