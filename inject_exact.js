const fs = require('fs');
const file = 'c:\\Users\\prane\\Pictures\\kllezo\\kllezo-antigravity\\pages\\home.js';
let content = fs.readFileSync(file, 'utf8');

// The block we want to replace starts after `const numSilhouettes = isMobile ? 6 : 14;`
// and ends with `return \` <section class="story-scroll advanced-story" id="storyScroll">`

const startTag = '  const numSilhouettes = isMobile ? 6 : 14;';
const endTag = '  return `';
const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex);

if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find start or end tags");
    process.exit(1);
}

const replacement = `  const config = isMobile ? [
    { id: 'ml', pos: 'top: 30%; left: -5%;', size: 200 },
    { id: 'bml', pos: 'bottom: -5%; left: 10%;', size: 240 },
    { id: 'bc', pos: 'bottom: -2%; left: 40%;', size: 260 },
    { id: 'bmr', pos: 'bottom: -5%; left: 70%;', size: 240 },
    { id: 'mr', pos: 'top: 30%; right: -5%;', size: 200 }
  ] : [
    { id: 'tl', pos: 'top: 15%; left: -5%;', size: 300 },
    { id: 'ml', pos: 'top: 45%; left: -3%;', size: 280 },
    { id: 'bl', pos: 'bottom: -10%; left: 0%;', size: 350 },
    { id: 'bml', pos: 'bottom: -5%; left: 22%;', size: 300 },
    { id: 'bc', pos: 'bottom: -2%; left: 44%;', size: 280 },
    { id: 'bmr', pos: 'bottom: -5%; left: 60%;', size: 300 },
    { id: 'br', pos: 'bottom: -10%; left: 80%;', size: 350 },
    { id: 'mr', pos: 'top: 45%; right: -3%;', size: 280 },
    { id: 'tr', pos: 'top: 15%; right: -5%;', size: 300 }
  ];

  const silhouettes = config.map((c, i) => {
    let bodyPath, headPath, armPath, phoneTransform, eyeMarkup;
    const blinkWait = (3 + Math.random() * 5).toFixed(2);
    const trackingClass = Math.random() > 0.2 ? 'tracking-eyes' : 'static-eyes';
    const idleDelay = -(Math.random() * 4).toFixed(2);
    const depthClass = i % 2 === 0 ? 'depth-mid' : 'depth-front';
    
    const renderPhone = (tx, ty, rot) => \`
      <g transform="translate(\${tx}, \${ty}) rotate(\${rot})">
        <rect x="0" y="0" width="22" height="40" rx="3" fill="#222" stroke="#000000" stroke-width="4"/>
        <rect x="3" y="3" width="16" height="34" rx="2" fill="#ffffff" opacity="0.9"/>
        <rect x="3" y="3" width="16" height="34" rx="2" fill="#ffffff" class="phone-pulse" style="--pulse-wait: \${blinkWait}s"/>
        <ellipse cx="11" cy="40" rx="14" ry="10" fill="#000000"/>
      </g>
    \`;

    const renderEyes = (lx, ly, lr, rx, ry, rr) => \`
      <g class="sil-eyes \${trackingClass} async-blink" style="--blink-del: \${blinkWait}s" opacity="0" transform-origin="\${lx+(rx-lx)/2} \${ly}">
        <circle cx="\${lx}" cy="\${ly}" r="\${lr}" fill="#ffffff"/>
        <circle cx="\${rx}" cy="\${ry}" r="\${rr}" fill="#ffffff"/>
      </g>
    \`;

    if (c.id === 'tl') {
      bodyPath = \`M 0 50 Q 80 50 80 100 Q 80 150 0 150 Z\`;
      headPath = \`M 60 70 C 120 70, 130 110, 70 110 Z\`;
      armPath = \`M 70 120 Q 140 130 160 100\`;
      phoneTransform = renderPhone(150, 80, 20);
      eyeMarkup = renderEyes(82, 85, 2, 95, 90, 4);
    } else if (c.id === 'ml') {
      bodyPath = \`M 0 100 Q 60 100 80 150 Q 60 200 0 200 Z\`;
      headPath = \`M 60 120 C 130 110, 130 150, 70 160 Z\`;
      armPath = \`M 80 150 Q 140 130 120 40\`;
      phoneTransform = renderPhone(100, 10, 10);
      eyeMarkup = renderEyes(87, 132, 2, 100, 135, 4);
    } else if (c.id === 'bl') {
      bodyPath = \`M 0 200 L 0 130 Q 50 80 100 120 Q 110 200 110 200 Z\`;
      headPath = \`circle cx="80" cy="90" r="35"\`;
      armPath = \`M 50 120 Q 60 20 120 30\`;
      phoneTransform = renderPhone(110, 0, 15);
      eyeMarkup = renderEyes(80, 80, 2, 100, 85, 4);
    } else if (c.id === 'bml') {
      bodyPath = \`M 30 200 Q 50 100 90 90 Q 140 100 140 200 Z\`;
      headPath = \`circle cx="95" cy="65" r="30"\`;
      armPath = \`M 60 100 Q 80 10 130 10\`;
      phoneTransform = renderPhone(120, -20, 10);
      eyeMarkup = renderEyes(90, 55, 2, 110, 60, 4);
    } else if (c.id === 'bc') {
      bodyPath = \`M 50 200 Q 60 100 100 90 Q 140 100 150 200 Z\`;
      headPath = \`circle cx="100" cy="60" r="30"\`;
      armPath = \`M 130 110 Q 160 30 110 -10\`;
      phoneTransform = renderPhone(97, -40, 0);
      eyeMarkup = renderEyes(85, 55, 2, 110, 55, 4);
    } else if (c.id === 'bmr') {
      bodyPath = \`M 60 200 Q 60 100 110 90 Q 150 100 170 200 Z\`;
      headPath = \`circle cx="105" cy="65" r="30"\`;
      armPath = \`M 130 110 Q 140 10 70 10\`;
      phoneTransform = renderPhone(60, -20, -10);
      eyeMarkup = renderEyes(90, 60, 4, 110, 55, 2);
    } else if (c.id === 'br') {
      bodyPath = \`M 200 200 L 200 130 Q 150 80 100 120 Q 90 200 90 200 Z\`;
      headPath = \`circle cx="120" cy="90" r="35"\`;
      armPath = \`M 150 120 Q 140 20 80 30\`;
      phoneTransform = renderPhone(65, 0, -15);
      eyeMarkup = renderEyes(100, 85, 4, 120, 80, 2);
    } else if (c.id === 'mr') {
      bodyPath = \`M 200 100 Q 140 100 120 150 Q 140 200 200 200 Z\`;
      headPath = \`M 140 120 C 70 110, 70 150, 130 160 Z\`;
      armPath = \`M 120 150 Q 60 130 80 40\`;
      phoneTransform = renderPhone(75, 10, -10);
      eyeMarkup = renderEyes(100, 135, 4, 113, 132, 2);
    } else if (c.id === 'tr') {
      bodyPath = \`M 200 50 Q 120 50 120 100 Q 120 150 200 150 Z\`;
      headPath = \`M 140 70 C 80 70, 70 110, 130 110 Z\`;
      armPath = \`M 130 120 Q 60 130 40 100\`;
      phoneTransform = renderPhone(25, 80, -20);
      eyeMarkup = renderEyes(105, 90, 4, 118, 85, 2);
    }

    return \`
      <div class="silhouette-wrap \${depthClass} idle-float" id="sil-\${c.id}" style="\${c.pos} width: \${c.size}px; z-index: \${Math.floor(c.size)}; --idle-del: \${idleDelay}s;">
        <div class="sil-inner" style="width: 100%; height: 100%;">
          <svg viewBox="0 -50 200 250" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow: visible;">
            <!-- Arm behind body -->
            <path d="\${armPath}" fill="none" stroke="#000000" stroke-width="24" stroke-linecap="round"/>
            \${phoneTransform}
            <!-- Torso & Head -->
            <path d="\${bodyPath}" fill="#000000"/>
            \${headPath.includes('circle') ? \`<\${headPath} fill="#000000"/>\` : \`<path d="\${headPath}" fill="#000000"/>\`}
            <!-- Eyes -->
            \${eyeMarkup}
          </svg>
        </div>
      </div>
    \`;
  }).join('');\n\n`;

const finalContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);
fs.writeFileSync(file, finalContent, 'utf8');
console.log('Successfully injected exact 1:1 mapped characters into home.js');
