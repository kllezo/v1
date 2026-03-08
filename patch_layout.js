const fs = require('fs');
const file = 'c:\\Users\\prane\\Pictures\\kllezo\\kllezo-antigravity\\pages\\home.js';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

const startIndex = 54; // line 55: `const size = ...`
const endIndex = 89; // line 90: `const charType = ...`

// We are replacing 35 lines.
const newLines = `
    let size = sizeBase + Math.random() * sizeVar;
    let leftPos, bottomPos, isLeft, baseRotation = 0, charType = 0;

    // Hardcode desktop layout to match exact composition
    if (window.innerWidth > 768) {
      if (i === 0) { leftPos = -2; bottomPos = 55; isLeft = true; baseRotation = 10; size = 280; charType = 2; }
      else if (i === 1) { leftPos = -5; bottomPos = 20; isLeft = true; baseRotation = 5; size = 240; charType = 2; }
      else if (i === 2) { leftPos = 8; bottomPos = 5; isLeft = true; baseRotation = 0; size = 200; charType = 1; }
      else if (i === 3) { leftPos = -3; bottomPos = -15; isLeft = true; baseRotation = -5; size = 280; charType = 0; }
      else if (i === 4) { leftPos = 12; bottomPos = -20; isLeft = true; baseRotation = 8; size = 220; charType = 0; }
      else if (i === 5) { leftPos = 95; bottomPos = 60; isLeft = false; baseRotation = -10; size = 240; charType = 1; }
      else if (i === 6) { leftPos = 98; bottomPos = 25; isLeft = false; baseRotation = -5; size = 270; charType = 1; }
      else if (i === 7) { leftPos = 85; bottomPos = -5; isLeft = false; baseRotation = -15; size = 260; charType = 2; }
      else if (i === 8) { leftPos = 82; bottomPos = -20; isLeft = false; baseRotation = -5; size = 300; charType = 0; }
      else if (i === 9) { leftPos = 95; bottomPos = -25; isLeft = false; baseRotation = -10; size = 230; charType = 0; }
      else if (i === 10) { leftPos = 35; bottomPos = -25; isLeft = true; baseRotation = -15; size = 260; charType = 0; }
      else if (i === 11) { leftPos = 48; bottomPos = -20; isLeft = true; baseRotation = 8; size = 210; charType = 0; }
      else if (i === 12) { leftPos = 65; bottomPos = -22; isLeft = false; baseRotation = -28; size = 250; charType = 0; }
      else { leftPos = 70; bottomPos = -35; isLeft = false; baseRotation = 2; size = 190; charType = 0; }
    } else {
      // Mobile fallback semi-random
      if (i < 3) { leftPos = 2; bottomPos = Math.random() * 20; isLeft = true; charType = 1; }
      else if (i < 6) { leftPos = 88; bottomPos = Math.random() * 20; isLeft = false; charType = 2; }
      else { leftPos = 20 + Math.random() * 60; bottomPos = -15; isLeft = leftPos < 50; charType = 0; }
    }

    const trackingClass = Math.random() > 0.3 ? 'tracking-eyes' : 'static-eyes';
    const idleDelay = -(Math.random() * 4).toFixed(2);
    const blinkWait = (3 + Math.random() * 5).toFixed(2);
`;

lines.splice(startIndex, endIndex - startIndex, newLines);
fs.writeFileSync(file, lines.join('\\n'), 'utf8');
console.log('Successfully updated layout mapping via Node.js');
