let currentColor = "black";

function setup() {
    // Creates a canvas for the sketch
    createCanvas(750,400);

    // Makes the background a light color
    background("whitesmoke");
}

function draw() {
    // Applies to all shapes
    noStroke();

    // Display Color Palette
    colorPalette();

    // Handles Mouse Clicking
    mouseDragged();
}

function colorPalette() {
    // Red color
    fill("red");
    rect(1,0,20,20);

    // Orange color
    fill("orange");
    rect(1,21,20,20);

    // Yellow color
    fill("yellow");
    rect(1,42,20,20);

    // Green color
    fill("green");
    rect(1,63,20,20);

    // Cyan color
    fill("cyan");
    rect(1,84,20,20);

    // Blue color
    fill("blue");
    rect(1,105,20,20);

    // Magenta color
    fill("magenta");
    rect(1,126,20,20);

    // Brown color
    fill("saddlebrown");
    rect(1,147,20,20);

    // White color
    fill("white");
    rect(1,168,20,20);

    // Black color
    fill("black");
    rect(1,189,20,20);
}

function currentColorSelector() {
    // Should select the color to be red
    if (mouseY <= 20) {
        currentColor = "red";
    }
    // Should select the color to be orange
    else if (mouseY <= 41) {
        currentColor = "orange";
    }
    // Should select the color to be yellow
    else if (mouseY <= 62) {
        currentColor = "yellow";
    }
    // Should select the color to be green
    else if (mouseY <= 83) {
        currentColor = "green";
    }
    // Should select the color to be cyan
    else if (mouseY <= 104) {
        currentColor = "cyan";
    }
    // Should select the color to be blue
    else if (mouseY <= 125) {
        currentColor = "blue";
    }
    // Should select the color to be magenta
    else if (mouseY <= 146) {
        currentColor = "magenta";
    }
    // Should select the color to be saddlebrown
    else if (mouseY <= 167) {
        currentColor = "saddlebrown";
    }
    // Should select the color to be white
    else if (mouseY <= 188) {
        currentColor = "white";
    }
    // Should select the color to be black
    else {
        currentColor = "black";
    }
    console.log("Color Selected: ", currentColor);
}

function mouseDragged() {
    // If the mouse is clicked
    if (mouseIsPressed) {
        // Selecting a color
        if (mouseX <= 21 && mouseY <= 209) {
            console.log("Color Palette");
            currentColorSelector();
        }
        // Painting
        else {
            console.log("Paint");
            stroke(currentColor);
            strokeWeight(15);
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    }
}