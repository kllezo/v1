const fs = require('fs');
const file = 'c:\\Users\\prane\\Pictures\\kllezo\\kllezo-antigravity\\pages\\home.js';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// Target replacement from line 88 to 150 (indices 87 to 149 inclusive -> length 63)
const startIndex = 87;
const lengthToReplace = 63;

const newLines = `    // Define 3 distinct, highly hand-drawn specific characters matching the exact shapes from the reference
    const charType = (bottomPos > -10 && leftPos > 20 && leftPos < 80) ? 0 : (Math.random() > 0.5 ? 1 : 2);
    
    let innerSvg = '';
    
    // Eyeballs logic - intentionally slightly different sizes for the "zombie" derp look
    const eyeSize1 = 2 + Math.random() * 2; // 2 to 4
    const eyeSize2 = 1.5 + Math.random() * 1.5; // 1.5 to 3

    if (charType === 0) {
        // Bottom reacher (Hunched up, arm straight up)
        const eyeOffset = isLeft ? 10 : -10;
        innerSvg = \`
          <!-- Hunched Body -->
          <path d="M 10 170 Q 15 80 50 50 Q 85 80 90 170 Z" fill="#000000"/>
          <!-- Head looking up/inward -->
          <circle cx="50" cy="40" r="22" fill="#000000"/>
          
          <!-- Arm -->
          <path d="M 50 60 Q \${isLeft ? 110 : -10} 20 \${isLeft ? 90 : 10} -40" fill="none" stroke="#000000" stroke-width="18" stroke-linecap="round"/>
          
          <!-- Phone at end of arm -->
          <g transform="translate(\${isLeft ? 80 : -5}, -65) rotate(\${isLeft ? 15 : -15})">
            <!-- phone -->
            <rect x="0" y="0" width="20" height="35" rx="2" fill="#222" stroke="#000000" stroke-width="3"/>
            <rect x="2" y="2" width="16" height="31" rx="1" fill="#ffffff" opacity="0.8"/>
            <rect x="2" y="2" width="16" height="31" rx="1" fill="#ffffff" class="phone-pulse" style="--pulse-wait: \${blinkWait}s"/>
            <!-- Nubby fingers wrapping bottom -->
            <ellipse cx="10" cy="35" rx="12" ry="6" fill="#000000"/>
          </g>
          
          <!-- Eyes -->
          <g class="sil-eyes \${trackingClass} async-blink" style="--blink-del: \${blinkWait}s" opacity="0" transform-origin="50 40">
            <circle cx="\${45 + eyeOffset}" cy="35" r="\${eyeSize1}" fill="#ffffff"/>
            <circle cx="\${55 + eyeOffset}" cy="38" r="\${eyeSize2}" fill="#ffffff"/>
          </g>
        \`;
    } else if (charType === 1) {
        // Side Snout (Peanut head, arm reaching sideways)
        const dBody = isLeft ? "M -30 150 Q -10 90 20 70 Q 50 90 50 150 Z" : "M 130 150 Q 110 90 80 70 Q 50 90 50 150 Z";
        const dHead = isLeft ? "M 10 90 Q 5 60 25 50 Q 50 40 65 60 Q 80 75 55 85 Q 35 95 10 90 Z" : "M 90 90 Q 95 60 75 50 Q 50 40 35 60 Q 20 75 45 85 Q 65 95 90 90 Z";
        const dArm = isLeft ? "M 20 90 Q 60 80 100 40" : "M 80 90 Q 40 80 0 40";
        
        innerSvg = \`
          <!-- Body -->
          <path d="\${dBody}" fill="#000000"/>
          <!-- Snout Head -->
          <path d="\${dHead}" fill="#000000"/>
          
          <!-- Arm -->
          <path d="\${dArm}" fill="none" stroke="#000000" stroke-width="16" stroke-linecap="round"/>
          
          <!-- Phone at end of arm -->
          <g transform="translate(\${isLeft ? 90 : -10}, 15) rotate(\${isLeft ? 25 : -25})">
            <!-- phone -->
            <rect x="0" y="0" width="20" height="35" rx="2" fill="#222" stroke="#000000" stroke-width="3"/>
            <rect x="2" y="2" width="16" height="31" rx="1" fill="#ffffff" opacity="0.8"/>
            <rect x="2" y="2" width="16" height="31" rx="1" fill="#ffffff" class="phone-pulse" style="--pulse-wait: \${blinkWait}s"/>
            <!-- Nubby fingers wrapping bottom -->
            <ellipse cx="10" cy="35" rx="12" ry="6" fill="#000000"/>
          </g>
          
          <!-- Eyes -->
          <g class="sil-eyes \${trackingClass} async-blink" style="--blink-del: \${blinkWait}s" opacity="0" transform-origin="50 40">
            <circle cx="\${isLeft ? 45 : 55}" cy="60" r="\${eyeSize1}" fill="#ffffff"/>
            <circle cx="\${isLeft ? 55 : 45}" cy="65" r="\${eyeSize2}" fill="#ffffff"/>
          </g>
        \`;
    } else {
        // Side Gobbler (Big head, mouth gap, close phone)
        const dBody = isLeft ? "M -30 150 Q 0 80 40 70 Q 70 90 70 150 Z" : "M 130 150 Q 100 80 60 70 Q 30 90 30 150 Z";
        // Gobbler head has a snout that splits into a mouth
        const dHead = isLeft ? "M 20 80 Q 20 30 60 30 Q 95 30 100 50 Q 105 60 85 65 Q 105 75 95 85 Q 70 100 40 90 Z" : "M 80 80 Q 80 30 40 30 Q 5 30 0 50 Q -5 60 15 65 Q -5 75 5 85 Q 30 100 60 90 Z";
        
        innerSvg = \`
          <!-- Body -->
          <path d="\${dBody}" fill="#000000"/>
          <!-- Gobbler Head -->
          <path d="\${dHead}" fill="#000000"/>
          
          <!-- Phone held close to face -->
          <g transform="translate(\${isLeft ? 90 : -10}, 45) rotate(\${isLeft ? -10 : 10})">
            <!-- Arm reaching from body -->
            <path d="M \${isLeft ? -40 : 40} 40 Q \${isLeft ? -10 : 10} 50 10 35" fill="none" stroke="#000000" stroke-width="16" stroke-linecap="round"/>
            
            <!-- phone -->
            <rect x="0" y="0" width="20" height="35" rx="2" fill="#222" stroke="#000000" stroke-width="3"/>
            <rect x="2" y="2" width="16" height="31" rx="1" fill="#ffffff" opacity="0.8"/>
            <rect x="2" y="2" width="16" height="31" rx="1" fill="#ffffff" class="phone-pulse" style="--pulse-wait: \${blinkWait}s"/>
            <!-- Nubby fingers wrapping bottom right over the mouth gap -->
            <ellipse cx="10" cy="35" rx="12" ry="8" fill="#000000"/>
          </g>
          
          <!-- Eyes -->
          <g class="sil-eyes \${trackingClass} async-blink" style="--blink-del: \${blinkWait}s" opacity="0" transform-origin="50 40">
            <circle cx="\${isLeft ? 60 : 40}" cy="50" r="\${eyeSize1}" fill="#ffffff"/>
            <circle cx="\${isLeft ? 75 : 25}" cy="55" r="\${eyeSize2}" fill="#ffffff"/>
          </g>
        \`;
    }

    return \`
      <div class="silhouette-wrap \${depthClass} idle-float" id="sil-\${i}" style="left: calc(\${leftPos}% - \${size / 2}px); bottom: \${bottomPos}%; width: \${size}px; z-index: \${Math.floor(size)}; --idle-del: \${idleDelay}s;">
        <div class="sil-inner" style="transform: rotate(\${baseRotation}deg); width: 100%; height: 100%;">
          <svg viewBox="-30 -30 160 190" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" style="overflow: visible;">
            \${innerSvg}
          </svg>
        </div>
      </div>
    \`;`;

lines.splice(startIndex, lengthToReplace, newLines);
fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('Successfully updated home.js');
