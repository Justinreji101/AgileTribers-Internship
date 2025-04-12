//Square
function drawSquare(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

drawSquare(5);
//Triangle
function drawRightAngledTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* '; 
        }
        console.log(row);
    }
}

drawRightAngledTriangle(5);
//Diamonds
function drawDiamond(height) {
    for (let i = 1; i <= height; i++) {
        let row = ' '.repeat(height - i);
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*';
        }
        console.log(row);
    }
    for (let i = height - 1; i >= 1; i--) {
        let row = ' '.repeat(height - i);
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*';
        }
        console.log(row);
    }
}
drawDiamond(5);