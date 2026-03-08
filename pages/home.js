// ============================================
// KLLEZO — Homepage
// Cinematic intro + scroll-driven services + parallax + CTA
// ============================================

const services = [
  {
    icon: '/icon-content.svg.png',
    title: 'Content Creation',
    desc: `Attention isn't given. It's taken.\nScroll-stopping visuals. Strategic storytelling.\nContent engineered to spark conversations and convert silently.`,
    impact: 'Stories that travel further than ads.',
  },
  {
    icon: '/icon-website.svg.png',
    title: 'Website Experiences',
    desc: `Not just websites. Digital first impressions.\nFast. Fluid. Conversion-focused.\nBuilt to turn curiosity into commitment.`,
    impact: 'A website that works as hard as your business does.',
  },
  {
    icon: '/icon-ai.svg.png',
    title: 'AI Communication Systems',
    desc: `Conversations that never sleep.\nInstant replies. Intelligent follow-ups.\nHuman-like interactions powered by automation.`,
    impact: 'Your business responding — even while you sleep.',
  },
  {
    icon: '/icon-growth.svg.png',
    title: 'Growth Strategy & Consultancy',
    desc: `Clarity over chaos. Direction over noise.\nSharp positioning. Calculated moves.\nGrowth that feels intentional — not accidental.`,
    impact: 'Strategy that makes every move count.',
  },
  {
    icon: '/icon-workflow.svg.png',
    title: 'Workflow Automation',
    desc: `Manual is outdated.\nSystems that connect, trigger, and execute.\nSilent engines running your backend at full throttle.`,
    impact: 'Your operations — finally on autopilot.',
  },
];

export function renderHome() {
  const silhouettes = Array.from({ length: 14 }).map((_, i) => {
    // 3 depth layers
    let depthClass = '';
    let sizeBase, sizeVar;
    if (i % 3 === 0) {
      depthClass = 'depth-back';
      sizeBase = 90; sizeVar = 40;
    } else if (i % 3 === 1) {
      depthClass = 'depth-mid';
      sizeBase = 140; sizeVar = 50;
    } else {
      depthClass = 'depth-front';
      sizeBase = 200; sizeVar = 70;
    }

    const size = sizeBase + Math.random() * sizeVar;

    // Distribute left, right, bottom more deliberately to keep center safe area
    let leftPos, bottomPos, isLeft, baseRotation = 0;
    if (i < 5) {
      // Left side leaning right
      leftPos = Math.random() * 15 - 5; // -5% to 10%
      bottomPos = Math.random() * 30 - 15;
      isLeft = true;
      baseRotation = 5 + Math.random() * 10;
    } else if (i < 10) {
      // Right side leaning left
      leftPos = 85 + Math.random() * 15; // 85% to 100%
      bottomPos = Math.random() * 30 - 15;
      isLeft = false;
      baseRotation = -5 - Math.random() * 10;
    } else {
      // Bottom center-ish leaning slightly
      leftPos = 20 + Math.random() * 60; // 20% to 80%
      bottomPos = -20 - Math.random() * 5; // strictly bottom
      isLeft = leftPos < 50;
      baseRotation = (Math.random() - 0.5) * 10;
    }

    const isReaching = Math.random() > 0.3; // 70% hold arms up

    // ~70% tracking, 30% static eyes
    const trackingClass = Math.random() > 0.3 ? 'tracking-eyes' : 'static-eyes';

    // Asynchronous animation variables
    const idleDelay = -(Math.random() * 4).toFixed(2); // Negative delay starts animation immediately at random point
    const blinkWait = (3 + Math.random() * 5).toFixed(2); // 3-8s interval

    // Zombie / Phone style
    // Head looks slightly forward/down
    const headMarkup = `<path d="M 60 40 Q 75 35 70 20 Q 55 5 40 10 Q 30 20 40 35 Q 50 45 60 40" fill="#000000"/>`;

    // Hunched shoulders pointing inward 
    let bodyMarkup = '';
    let armMarkup = '';

    if (isLeft) {
      // Reaching right (on the left side of screen)
      bodyMarkup = `<path d="M -10 150 Q 10 70 45 50 Q 70 75 75 150 Z" fill="#000000"/>`;
      armMarkup = `
        <path d="M 40 60 Q 60 -10 110 30" fill="none" stroke="#000000" stroke-width="22" stroke-linecap="round"/>
        <!-- Phone screen -->
        <g transform="translate(90, 10) rotate(-15)">
            <!-- Phone casing -->
            <rect x="0" y="0" width="22" height="38" rx="2" fill="#222" stroke="#000000" stroke-width="4"/>
            <!-- Static white screen -->
            <rect x="3" y="3" width="16" height="32" rx="1" fill="#ffffff" opacity="0.8"/>
            <!-- Glowing pulse layer -->
            <rect x="3" y="3" width="16" height="32" rx="1" fill="#ffffff" class="phone-pulse" style="--pulse-wait: ${blinkWait}s"/>
        </g>
      `;
    } else {
      // Reaching left (on the right side of screen)
      bodyMarkup = `<path d="M 110 150 Q 90 70 55 50 Q 30 75 25 150 Z" fill="#000000"/>`;
      armMarkup = `
        <path d="M 60 60 Q 40 -10 -10 30" fill="none" stroke="#000000" stroke-width="22" stroke-linecap="round"/>
        <!-- Phone screen -->
        <g transform="translate(-15, 15) rotate(15)">
            <!-- Phone casing -->
            <rect x="0" y="0" width="22" height="38" rx="2" fill="#222" stroke="#000000" stroke-width="4"/>
            <!-- Static white screen -->
            <rect x="3" y="3" width="16" height="32" rx="1" fill="#ffffff" opacity="0.8"/>
            <!-- Glowing pulse layer -->
            <rect x="3" y="3" width="16" height="32" rx="1" fill="#ffffff" class="phone-pulse" style="--pulse-wait: ${blinkWait}s"/>
        </g>
      `;
    }

    // Eye positions matching hunched head
    const eyeOffsetX = isLeft ? 12 : -8;
    const eyeOffsetY = -5;

    return `
      <div class="silhouette-wrap ${depthClass} idle-float" id="sil-${i}" style="left: calc(${leftPos}% - ${size / 2}px); bottom: ${bottomPos}%; width: ${size}px; z-index: ${Math.floor(size)}; --idle-del: ${idleDelay}s;">
        <div class="sil-inner" style="transform: rotate(${baseRotation}deg); width: 100%; height: 100%;">
          <svg viewBox="-30 -20 160 170" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" style="overflow: visible;">
            <!-- Arm behind body -->
            ${armMarkup}
            <!-- Torso & Head -->
            ${bodyMarkup}
            ${headMarkup}
            
            <!-- Eyes -->
            <g class="sil-eyes ${trackingClass} async-blink" style="--blink-del: ${blinkWait}s" opacity="0" transform-origin="50 30">
              <circle cx="${45 + eyeOffsetX}" cy="${28 + eyeOffsetY}" r="3" fill="#ffffff"/>
              <circle cx="${55 + eyeOffsetX}" cy="${28 + eyeOffsetY}" r="3" fill="#ffffff"/>
            </g>
          </svg>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="story-scroll advanced-story" id="storyScroll">
      <div id="sceneDarkener" class="scene-darkener"></div>
      <canvas id="systemNetworkBg" class="system-network-bg"></canvas>
      <div class="story-scroll__pinned" id="storyPinned">
        
        <div class="scroll-guide" id="scrollGuide">
          <span>SCROLL</span>
          <div class="scroll-guide__line-wrap">
            <div class="scroll-guide__line"></div>
            <div class="scroll-guide__arrow-left"></div>
            <div class="scroll-guide__arrow-right"></div>
          </div>
        </div>

        <!-- GLOBAL VISUAL LAYERS -->
        <div class="global-layer sil-layer" id="silLayer">
           ${silhouettes}
        </div>
        
        <div class="global-layer ui-bubbles-layer" id="uiBubblesLayer">
           <div class="ui-bubble" style="top: 30%; left: 25%;">💬</div>
           <div class="ui-bubble" style="top: 45%; right: 28%;">❤️</div>
           <div class="ui-bubble" style="top: 60%; left: 15%;">🔔</div>
           <div class="ui-bubble" style="top: 35%; right: 15%;">✓</div>
           <div class="ui-popup" style="top: 50%; left: 30%;">New like</div>
           <div class="ui-popup" style="top: 25%; right: 35%;">Trending</div>
        </div>
        
        <div class="global-layer tools-layer" id="toolsLayer">
           <!-- Top Left -->
           <svg class="scene3-icon" style="top: 15%; left: 18%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M4 6h3l2-2h6l2 2h3c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm8 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/></svg>
           <svg class="scene3-icon" style="top: 25%; left: 30%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
           <!-- Mid Left -->
           <svg class="scene3-icon" style="top: 45%; left: 12%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M13 5.83l1.88 1.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.59-3.59c-.39-.39-1.02-.39-1.41 0L7.71 6.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 5.83V20c0 .55.45 1 1 1s1-.45 1-1V5.83z"/></svg>
           <svg class="scene3-icon" style="top: 60%; left: 24%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
           <!-- Bottom Left -->
           <svg class="scene3-icon" style="top: 78%; left: 16%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
           <div class="scene3-icon text-icon" style="top: 85%; left: 32%; display: grid; place-items: center; font-size: 1.5rem; font-weight: bold; color: var(--green);">#</div>

           <!-- Top Right -->
           <svg class="scene3-icon" style="top: 18%; right: 20%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>
           <svg class="scene3-icon" style="top: 30%; right: 35%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
           <!-- Mid Right -->
           <svg class="scene3-icon" style="top: 48%; right: 15%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
           <svg class="scene3-icon" style="top: 58%; right: 28%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.1L7.1 4.3 9.7 7l-1.4 1.4-2.7-2.7L3.1 8c-1.3 2.4-.9 5.4 1.1 7.4 1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l1.1-1.1c.4-.4.4-1.1 0-1.5zM10 12.5c-1.4 1.4-3.6 1.4-5 0s-1.4-3.6 0-5 3.6-1.4 5 0 1.4 3.6 0 5z"/></svg>
           <!-- Bottom Right -->
           <svg class="scene3-icon" style="top: 75%; right: 18%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
           <svg class="scene3-icon" style="top: 85%; right: 35%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </div>

        <div class="global-layer graph-layer" id="graphLayer">
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" style="width: 100%; height: 300px; max-width: 1200px; margin: 0 auto; overflow: visible;">
             <path class="trend-line" id="trendLine" d="M -50 20 L 150 120 L 300 80 L 500 200 L 700 160 L 950 320" stroke="#d32f2f" stroke-width="12" stroke-linejoin="round" fill="none" stroke-linecap="round"/>
             <path id="trendArrow" d="M 890 280 L 950 320 L 910 340" stroke="#d32f2f" stroke-width="12" stroke-linejoin="round" stroke-linecap="round" fill="none" opacity="0"/>
          </svg>
        </div>

        <div class="story-container">
          <!-- SCENE 1: HOOK -->
          <div class="story-scene scene-1">
            <h2 class="story-line">The internet<br>is crowded.</h2>
          </div>
          
          <!-- SCENE 2: ATTENTION IS RARE -->
          <div class="story-scene scene-2">
            <h2 class="story-line text-large relative" style="line-height:1.1;">
              Attention<br>is <span class="word-rare relative" id="wordRare" style="display:inline-block;">
                <span class="rare-letter inline-block">R</span><span class="rare-letter inline-block">A</span><span class="rare-letter inline-block">R</span><span class="rare-letter inline-block">E</span><span class="rare-letter inline-block">.</span>
                <svg class="svg-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 5 15 Q 50 20, 95 12" />
                </svg>
                <div class="mag-glass" id="magGlass"></div>
              </span>
            </h2>
          </div>

          <!-- SCENE 3: MORE CONTENT. MORE TOOLS. MORE EFFORT. -->
          <div class="story-scene scene-3">
            <div class="staggered-stack" id="scene2Stack">
              <h2 class="stagger-line">More content.</h2>
              <h2 class="stagger-line">More tools.</h2>
              <h2 class="stagger-line">More effort.</h2>
            </div>
          </div>

          <!-- SCENE 4: NO MOMENTUM -->
          <div class="story-scene scene-4">
            <div class="momentum-wrap" id="scene2Conclusion">
              <span class="word-still">Still</span><br>
              <div class="momentum-group">
                <svg class="svg-highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path class="stroke-path" id="highlightPath1" d="M 0 22 Q 25 10, 50 18 T 100 16" stroke="#d32f2f" stroke-width="18" stroke-linecap="round" fill="none" />
                    <path class="stroke-path" id="highlightPath2" d="M 2 26 Q 30 18, 60 22 T 96 22" stroke="#d32f2f" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.8"/>
                </svg>
                <span class="conclusion-text word-highlight">no momentum.</span>
              </div>
            </div>
          </div>

          <!-- SCENE 5: REALIZATION -->
          <div class="story-scene scene-5">
            <h2 class="story-line">Because growth today<br>isn't <span class="word-effort relative inline-block">
              effort.
              <svg class="glass-cracks absolute" id="glassCracks" viewBox="0 0 200 60" style="top:0; left:0; width:100%; height:100%; pointer-events:none;">
                <path d="M 10 30 Q 30 10 50 25 T 90 20 T 130 35 T 190 20 M 40 20 Q 60 50 80 40 M 120 30 Q 140 5 160 20 M 80 20 L 90 45" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" fill="none" opacity="0"/>
              </svg>
              <div class="fragment-shard" ></div>
              <div class="fragment-shard" style="top: 20%; left: 30%;"></div>
              <div class="fragment-shard" style="top: 60%; left: 70%;"></div>
              <div class="fragment-shard" style="top: 40%; left: 80%;"></div>
            </span></h2>
          </div>

          <!-- SCENE 6: IT'S SYSTEMS (own screen) & Service Icons -->
          <div class="story-scene scene-6" style="flex-direction: column;">
            <div class="story-line systems-group" style="position: absolute; top: 15%;">
              <div class="systems-flex">
                <span class="word-its">It's</span>
                <span class="word-systems word-lasso">Systems.
                  <svg class="svg-lasso" id="systemsLasso" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100" preserveAspectRatio="none">
                    <path d="M 5 50 A 65 45 0 1 1 135 50 A 65 45 0 1 1 5 50 Z" />
                  </svg>
                </span>
              </div>
            </div>
            
            <div class="activation-nodes" id="activationNodesWrap" style="margin-top: 15vh; transform: scale(0.9);">
              ${services.map((s, i) => `
                <div class="activation-node sequential-node" data-index="${i}">
                  <div class="spark-effect"></div>
                  <div class="activation-node__glow-bg"></div>
                  <div class="activation-node__icon">
                    <img src="${s.icon}" alt="${s.title}" />
                  </div>
                  <p class="activation-node__label" style="font-size: 0.8em; margin-top: 10px;">${s.title}</p>
                </div>
              `).join('')}
              <svg class="system-activation__line floating-line" id="systemLine" xmlns="http://www.w3.org/2000/svg" style="z-index:-1;">
                <line x1="0%" y1="40%" x2="100%" y2="40%" class="base-line" />
                <line x1="0%" y1="40%" x2="100%" y2="40%" class="active-line" id="systemActiveLine" />
              </svg>
            </div>
          </div>

          <!-- SCENE 7: "And we build those systems." + Logo Reveal -->
          <div class="story-scene scene-7">
            <div class="scene-3c-content">
              <h2 class="story-line" id="weBuildSystems">And <span id="weBuiltWord" style="display:inline-block;">we</span> build those systems.</h2>
              <div class="hero-reveal-logo-container" id="logoRevealWrap" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div class="hero-reveal-logo-row" style="display: flex; align-items: center; justify-content: center; gap: clamp(10px, 3vw, 30px); width: 100%;">
                  <div class="reveal-wing reveal-wing--left" id="revealWingLeft"></div>
                  <h1 class="kllezo-logo-title" id="finalKllezoLogo" style="font-size: clamp(4.5rem, 14vw, 12rem); font-weight: 800; margin: 0; line-height: 1; color: var(--green); letter-spacing: -0.02em; text-transform: uppercase;">KLLEZO</h1>
                  <div class="reveal-wing reveal-wing--right" id="revealWingRight"></div>
                </div>
                <p class="kllezo-logo-tagline" id="finalKllezoTagline" style="color: var(--green); font-weight: 600; letter-spacing: 0.15em; font-size: clamp(0.85rem, 2vw, 1.2rem); margin: 1rem 0 0 0; text-align: center;">CREATIVE BRAINS, AUTOMATED GAINS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Cinematic Conclusion & CTA -->
    <section class="story-conclusion cta-wavy" id="storyConclusion">
      <div class="wavy-arrows-container">
        <!-- Centralized SVG for all arrows converging to the area above the button -->
        <svg class="cta-arrows-svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" style="position: absolute; top: -50px; left: 0; width: 100%; height: 100%;">
          <!-- Step 1: Main Guide Arrow from Icons -->
          <g class="arrow-group guide-arrow">
            <path class="arrow-path" d="M 500,-50 C 480,20 520,80 500,150" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round"/>
            <path class="arrow-head" d="M 490,140 L 500,150 L 510,140" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round"/>
          </g>
          
          <!-- Auxiliary Arrow: Left Edge -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M -50,100 C 100,120 250,160 380,170" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 370,160 L 380,170 L 370,180" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Auxiliary Arrow: Right Edge -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M 1050,100 C 900,120 750,160 620,170" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 630,160 L 620,170 L 630,180" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Auxiliary Arrow: Bottom Left -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M 100,550 C 150,420 200,320 380,220" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 365,225 L 380,220 L 375,235" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>

          <!-- Auxiliary Arrow: Bottom Right -->
          <g class="arrow-group aux-arrow">
            <path class="arrow-path" d="M 900,550 C 850,420 800,320 620,220" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
            <path class="arrow-head" d="M 635,225 L 620,220 L 625,235" fill="none" stroke="var(--green)" stroke-width="1.5" stroke-linecap="round"/>
          </g>
        </svg>
      </div>

      <div class="final-cta relative-z">
        <a href="#/contact" class="btn btn--primary btn-magnetic btn--massive" id="ctaBtn">Let's Grow</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__main">
          <div class="footer__brand">
            <h2 class="footer__title">Kllezo</h2>
            <p class="footer__desc">Creative Brains. Automated Gains. Elevating brands through intelligent design and systems.</p>
          </div>
          <div class="footer__links">
            <div class="footer__col">
              <h4>Company</h4>
              <a href="#/">Home</a>
              <a href="#/services">Services</a>
              <a href="#/about">About</a>
              <a href="#/contact">Contact</a>
            </div>
            <div class="footer__col">
              <h4>Connect</h4>
              <a href="#" target="_blank">Twitter / X</a>
              <a href="#" target="_blank">LinkedIn</a>
              <a href="#" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© ${new Date().getFullYear()} Kllezo Agency. All rights reserved.</p>
          <div class="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initHome() {
  initNetworkBackground();
  initStoryScroll();
  initStoryConclusion();
}

export function destroyHome() {
  // ScrollTriggers are killed in main.js before navigation
}

// --- Cinematic Advanced Story Sequence ---
function initStoryScroll() {
  const container = document.getElementById('storyScroll');
  const pinned = document.getElementById('storyPinned');

  if (!container) return;

  // Scenes
  const scene1 = document.querySelector('.scene-1');
  const scene2 = document.querySelector('.scene-2');
  const scene3 = document.querySelector('.scene-3');
  const scene4 = document.querySelector('.scene-4');
  const scene5 = document.querySelector('.scene-5');
  const scene6 = document.querySelector('.scene-6');
  const scene7 = document.querySelector('.scene-7');

  // Layers
  const silLayer = document.getElementById('silLayer');
  const uiBubblesLayer = document.getElementById('uiBubblesLayer');
  const toolsLayer = document.getElementById('toolsLayer');
  const graphLayer = document.getElementById('graphLayer');
  const sceneDarkener = document.getElementById('sceneDarkener');

  // Specific elements
  const silhouettes = gsap.utils.toArray('.silhouette-wrap');
  const uiBubbles = gsap.utils.toArray('.ui-bubble, .ui-popup');
  const toolsIcons = gsap.utils.toArray('.scene3-icon');

  // Scene Text lines
  const s1Line = scene1.querySelector('.story-line');
  const s2Line = scene2.querySelector('.story-line');
  const s3Lines = gsap.utils.toArray('.stagger-line');
  const s4Conclusion = document.getElementById('scene2Conclusion');
  const s5Line = scene5.querySelector('.story-line');

  // Scene 6 elements
  const s6Line = scene6.querySelector('.systems-group');
  const activationWrap = document.getElementById('activationNodesWrap');
  const nodes = gsap.utils.toArray('.sequential-node');
  const activeLine = document.getElementById('systemActiveLine');
  const systemsLasso = document.querySelector('#systemsLasso path');

  // Extras
  const magGlass = document.getElementById('magGlass');
  const rareLetters = gsap.utils.toArray('.rare-letter');
  const glassCracks = document.getElementById('glassCracks');
  const fragments = gsap.utils.toArray('.fragment-shard');
  const weBuiltWord = document.getElementById('weBuiltWord');

  // SVGs
  const svgUnderline = document.querySelector('.svg-underline path');
  const svgHighlightPaths = gsap.utils.toArray('.svg-highlight path');
  const trendLine = document.getElementById('trendLine');
  const trendGlow = document.querySelector('.trend-glow');
  const trendArrow = document.getElementById('trendArrow');
  const weBuildLine = document.getElementById('weBuildSystems');
  const logoWrap = document.getElementById('logoRevealWrap');
  const wingLeft = document.getElementById('revealWingLeft');
  const wingRight = document.getElementById('revealWingRight');
  const finalLogo = document.getElementById('finalKllezoLogo');
  const finalTagline = document.getElementById('finalKllezoTagline');

  // Reset logic
  const setupPath = (path) => {
    if (!path) return 0;
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    return len;
  };
  setupPath(svgUnderline);
  svgHighlightPaths.forEach(setupPath);
  setupPath(systemsLasso);
  if (trendLine) setupPath(trendLine);
  if (trendGlow) setupPath(trendGlow);
  if (activeLine) setupPath(activeLine);

  // Initial setup: Hide everything
  gsap.set([s1Line, s2Line, s3Lines, s4Conclusion, s5Line, s6Line, activationWrap, weBuildLine, logoWrap, finalTagline], { autoAlpha: 0, y: 30 });
  if (magGlass) gsap.set(magGlass, { autoAlpha: 0, x: -50, scale: 0.8 });
  if (glassCracks) gsap.set(glassCracks, { autoAlpha: 0 });
  if (fragments.length) gsap.set(fragments, { autoAlpha: 0 });

  // Custom setup for silhouettes (from bottom, left, right)
  // Target the inner div to avoid overriding the CSS idleFloat animation
  const silInners = document.querySelectorAll('.sil-inner');
  silhouettes.forEach((sil, i) => {
    let startX = 0, startY = 0;
    if (i < 5) startX = -window.innerWidth * 0.6; // slide from left
    else if (i < 10) startX = window.innerWidth * 0.6;  // slide from right
    else startY = '20vh'; // slide from bottom
    gsap.set(sil, { autoAlpha: 0 });
    gsap.set(silInners[i], { x: startX, y: startY });
  });

  gsap.set(uiBubbles, { autoAlpha: 0, scale: 0.5 });
  gsap.set(toolsIcons, { autoAlpha: 0, scale: 0.5, y: 20 });
  gsap.set(graphLayer, { autoAlpha: 0 });
  if (trendArrow) gsap.set(trendArrow, { autoAlpha: 0 });
  gsap.set('.scroll-guide', { autoAlpha: 1 });
  if (wingLeft) gsap.set(wingLeft, { autoAlpha: 0, x: -150 });
  if (wingRight) gsap.set(wingRight, { autoAlpha: 0, x: 150 });
  if (finalLogo) gsap.set(finalLogo, { autoAlpha: 0, y: 50 });

  // The asynchronous phone pulse and blinking are driven purely by CSS keyframes.
  // Removing the old constant flash logic.

  // Eyes tracking cursor logic
  const trackingEyes = document.querySelectorAll('.tracking-eyes');
  window.addEventListener('mousemove', (e) => {
    // calculate mouse position relative to center (-0.5 to 0.5)
    const mouseX = (e.clientX / window.innerWidth) - 0.5;
    const mouseY = (e.clientY / window.innerHeight) - 0.5;

    // move eyes by max 10px depending on mouse
    gsap.to(trackingEyes, {
      x: mouseX * 20,
      y: mouseY * 20,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "+=6000",
      pin: pinned,
      scrub: 0.5,
      anticipatePin: 1
    }
  });

  tl.to('.scroll-guide', { autoAlpha: 0, duration: 0.2 }, "+=0.1");

  // ================= SCENE 1 : It's crowded =================
  tl.to(s1Line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(silhouettes, { autoAlpha: 1, duration: 0.8, stagger: 0.05, ease: "power1.inOut" }, "-=0.4")
    .to(silInners, { x: 0, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out" }, "<")
    // Eyes appear
    .to('.sil-eyes', { autoAlpha: 1, duration: 0.3 }, "-=0.2")
    .to({}, { duration: 0.8 })
    .to(s1Line, { autoAlpha: 0, duration: 0.5 });
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 2 : Attention is RARE =================
  const fadingSilhouettes = silhouettes.slice(1, 11); // keep 0 and 11
  const remainingSilhouettes = [silhouettes[0], silhouettes[11]];

  tl.to(s2Line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(fadingSilhouettes, { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, "<")
    .to(svgUnderline, { strokeDashoffset: 0, duration: 0.5, ease: "power3.inOut" }, "-=0.3")
    // Magnifying glass syncs exactly with letters
    .to(magGlass, { autoAlpha: 1, duration: 0.3 }, "-=0.2")
    .to(magGlass, { x: 250, duration: 1.4, ease: "none" }, "-=0.1")
    .to(rareLetters, {
      scale: 1.25,
      color: "var(--green)",
      stagger: {
        each: 0.35, // 1.4s duration / 4 letters = 0.35s delay each
        yoyo: true,
        repeat: 1
      },
      duration: 0.35,
      ease: "power1.inOut"
    }, "<") // Start perfectly identically with the magGlass slide

    .to(magGlass, { autoAlpha: 0, duration: 0.3 })
    // Background UI bubbles
    .to(uiBubbles, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=2.0")
    .to({}, { duration: 0.6 })
    .to(uiBubbles, { autoAlpha: 0, scale: 0.5, duration: 0.5, stagger: 0.05, ease: "power3.in" })
    .to(s2Line, { autoAlpha: 0, duration: 0.5 }, "-=0.3");
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 3 : More content / tools / effort =================
  tl.to(s3Lines, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.3, ease: "power3.out" })
    .to(toolsIcons, { autoAlpha: 1, scale: 1, y: () => Math.random() * 20 - 10, x: () => Math.random() * 20 - 10, rotation: () => Math.random() * 20 - 10, duration: 0.8, stagger: 0.05, ease: "power1.out" }, "-=0.6")
    .to(remainingSilhouettes, { autoAlpha: 0, duration: 0.8, ease: "power2.inOut" }, "-=0.3")
    .to({}, { duration: 0.8 })
    .to(s3Lines, { autoAlpha: 0, duration: 0.5 });
  tl.to({}, { duration: 0.3 });

  // Floating animation for Scene 3 tools
  gsap.to(toolsIcons, {
    y: "+=8",
    x: "+=4",
    rotation: "+=4",
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    stagger: { each: 0.2, from: "random" }
  });

  // ================= SCENE 4 : Still no momentum =================
  tl.to(toolsIcons, { autoAlpha: 0, scale: 0.8, duration: 0.6, ease: "power3.inOut" })
    // Graph draws
    .to(graphLayer, { autoAlpha: 1, duration: 0.3 }, "-=0.2")
    .to([trendLine], { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" })
    .to(trendArrow, { autoAlpha: 1, duration: 0.3 }, "-=0.3")
    // Text reveals
    .to(s4Conclusion, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=1.5")
    .to(svgHighlightPaths, { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut", stagger: 0.2 }, "-=1.0")
    .to({}, { duration: 0.8 })
    .to(s4Conclusion, { autoAlpha: 0, duration: 0.5 })
    .to(graphLayer, { autoAlpha: 0, duration: 0.5 }, "-=0.5");
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 5 : Because growth today isn't effort =================
  tl.to(s5Line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to({}, { duration: 0.5 }) // 0.5s delay
    // Cracks form
    .to(glassCracks, { autoAlpha: 1, duration: 0.3 })
    .to(glassCracks.querySelectorAll('path'), { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" }, "<")
    // Fragments fall
    .to(fragments, { autoAlpha: 1, duration: 0.1 }, "-=0.2")
    .to(fragments, { y: 80, x: () => Math.random() * 40 - 20, rotation: () => Math.random() * 180, autoAlpha: 0, duration: 1.0, ease: "power1.in" }, "-=0.1")
    .to('.word-effort', { opacity: 0.7, duration: 0.5 }, "-=0.8")
    .to({}, { duration: 0.8 })
    .to(s5Line, { autoAlpha: 0, duration: 0.5 });
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 6 : It's systems + Services Lineup =================
  tl.to(s6Line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(systemsLasso, { strokeDashoffset: 0, duration: 0.5, ease: "power3.inOut" }, "-=0.2");

  // State 1 Pause
  tl.to({}, { duration: 1.0 });

  // State 2 Trigger entire anim automatically on scroll continuation
  tl.to(activationWrap, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power3.out" });

  const isMobile = window.innerWidth < 768;
  const targetWidth = isMobile ? "120px" : "clamp(140px, 18vw, 240px)";
  const targetGap = isMobile ? "0.5rem" : "1.5rem";

  gsap.set(nodes, { autoAlpha: 0, y: 20, width: 0, margin: "0px", scale: 0.9 });

  // Line draws
  if (activeLine && !isMobile) {
    tl.to(activeLine, { strokeDashoffset: 0, duration: 1.0, ease: "none" }, "scene6_seq");
  }

  // Icons stagger in
  nodes.forEach((node, i) => {
    const iconContainer = node.querySelector('.activation-node__icon');
    const label = node.querySelector('.activation-node__label');
    const dt = "scene6_seq+=" + (i * 0.2);

    tl.to(node, { width: targetWidth, marginLeft: targetGap, marginRight: targetGap, autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }, dt)
      .to(iconContainer, { filter: "drop-shadow(0 8px 20px rgba(9, 69, 62, 0.4))", duration: 0.4 }, dt + 0.1)
      .to(label, { autoAlpha: 1, y: 0, duration: 0.3 }, dt + 0.2);
  });

  tl.to({}, { duration: 1.5 })
    .to(activationWrap, { autoAlpha: 0, duration: 0.5 })
    .to(s6Line, { autoAlpha: 0, duration: 0.5 }, "-=0.5");
  tl.to({}, { duration: 0.3 });
  // ================= SCENE 7 : And we build those systems (Climax) =================
  tl.to(weBuildLine, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to({}, { duration: 0.6 }) // Wait before "we" highlight
    .to(weBuiltWord, { scale: 1.08, color: "var(--red)", duration: 0.2, ease: "power2.out" })
    .to({}, { duration: 0.4 }) // Hold
    .to(weBuiltWord, { scale: 1, color: "var(--green)", duration: 0.4, ease: "power2.inOut" })
    .to(weBuildLine, { autoAlpha: 0, y: -20, duration: 0.5 }, "+=0.2")

    // Kllezo Logo Rises smoothly
    .to(logoWrap, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.2")
    .to(finalLogo, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, "<")

    // Wings glide inward
    .to([wingLeft, wingRight], { autoAlpha: 1, x: 0, duration: 1.0, ease: "power2.out" }, "-=0.4")
    // Subtle flap (one cycle)
    .to([wingLeft, wingRight], { scaleY: 0.6, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.inOut" }, "-=0.2")

    // Tagline fades in
    .to(finalTagline, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, "+=0.1");

  tl.to({}, { duration: 1.0 });
}

// initSystemActivation logic moved to initStoryScroll Scene 6

// --- Final Cinematic Conclusion & CTA ---
function initStoryConclusion() {
  const section = document.getElementById('storyConclusion');
  const finalCta = document.querySelector('.final-cta');
  const arrowPaths = gsap.utils.toArray('.arrow-path');
  const arrowHeads = gsap.utils.toArray('.arrow-head');

  const guidePath = document.querySelector('.guide-arrow .arrow-path');
  const guideHead = document.querySelector('.guide-arrow .arrow-head');
  const auxPaths = gsap.utils.toArray('.aux-arrow .arrow-path');
  const auxHeads = gsap.utils.toArray('.aux-arrow .arrow-head');

  if (!section || !finalCta) return;

  gsap.set(finalCta, { autoAlpha: 0, scale: 0.95 });

  // Setup SVG Arrows drawing lengths
  const allPaths = [guidePath, ...auxPaths];
  allPaths.forEach(path => {
    if (path) {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    }
  });

  const allHeads = [guideHead, ...auxHeads];
  allHeads.forEach(head => {
    if (head) gsap.set(head, { autoAlpha: 0 });
  });
  gsap.set('.wavy-arrow', { autoAlpha: 1 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // begin animating when section slowly comes into view
      end: "+=600", // Draw arrows smoothly over scroll without pinning
      scrub: 1 // smooth natural drawing linked to scroll
    }
  });

  // Step 1: Draw the main guide line downward
  if (guidePath) {
    tl.to(guidePath, { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut" }, 0);
  }
  if (guideHead) {
    tl.to(guideHead, { autoAlpha: 1, duration: 0.2 }, "-=0.2");
  }

  // Step 2: Draw the auxiliary arrows converging inward from edges
  if (auxPaths.length > 0) {
    tl.to(auxPaths, {
      strokeDashoffset: 0,
      duration: 1.0,
      stagger: 0.05,
      ease: "power2.out"
    }, 0.2); // Overlaps with guide line drawing
  }

  if (auxHeads.length > 0) {
    tl.to(auxHeads, {
      autoAlpha: 1,
      duration: 0.2,
      stagger: 0.05
    }, "-=1.0"); // Shows heads near end of stroke draw
  }

  // Step 3: Button fade/scale
  tl.to(finalCta, {
    autoAlpha: 1,
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.5)"
  }, 0.6); // Comes in quickly as arrows converge

  // Final CTA push
  tl.to(finalCta, {
    autoAlpha: 1,
    scale: 1,
    duration: 1,
    ease: "back.out(1.5)"
  }, "-=0.5");

  // Magnetic CTA Effect
  const ctaBtn = document.getElementById('ctaBtn');
  section.addEventListener('mousemove', (e) => {
    if (!ctaBtn) return;
    const rect = ctaBtn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);

    if (dist < 150) {
      const pullX = (e.clientX - btnX) * 0.15;
      const pullY = (e.clientY - btnY) * 0.15;

      gsap.to(ctaBtn, {
        x: pullX,
        y: pullY,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
      ctaBtn.classList.add('glow-active');

      gsap.to('.wavy-arrows-container', {
        x: pullX * 0.4,
        y: pullY * 0.4,
        duration: 0.3
      });
    } else {
      gsap.to(ctaBtn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
      ctaBtn.classList.remove('glow-active');

      gsap.to('.wavy-arrows-container', {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
    }
  });

  section.addEventListener('mouseleave', () => {
    if (!ctaBtn) return;
    gsap.to([ctaBtn, '.wavy-arrows-container'], {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
    ctaBtn.classList.remove('glow-active');
  });
}

// --- System Network Background ---
function initNetworkBackground() {
  const canvas = document.getElementById('systemNetworkBg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  const numParticles = 40;
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      x: 0, y: 0
    });
  }

  const bgState = { progress: 0 };

  ScrollTrigger.create({
    trigger: '#storyScroll',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      bgState.progress = self.progress;
    }
  });

  gsap.ticker.add(() => {
    ctx.clearRect(0, 0, width, height);

    let maxDist = 0;
    let globalAlpha = 0;

    if (bgState.progress > 0) {
      if (bgState.progress < 0.3) {
        globalAlpha = bgState.progress * 1.5; // up to ~0.45
      } else {
        globalAlpha = 0.45 + (bgState.progress - 0.3) * 0.5;
        maxDist = (bgState.progress - 0.3) * 300; // max ~200 connection dist
      }
    }

    if (globalAlpha < 0.05) return;

    let cx = width / 2;
    let cy = height / 2;
    let pullStrength = bgState.progress > 0.6 ? (bgState.progress - 0.6) * 1.5 : 0;
    pullStrength = Math.min(pullStrength, 0.8);

    particles.forEach(p => {
      p.baseX += p.vx;
      p.baseY += p.vy;

      if (p.baseX < 0 || p.baseX > width) p.vx *= -1;
      if (p.baseY < 0 || p.baseY > height) p.vy *= -1;

      let displayX = p.baseX;
      let displayY = p.baseY;

      if (pullStrength > 0) {
        displayX += (cx - p.baseX) * pullStrength;
        displayY += (cy - p.baseY) * pullStrength;
      }
      p.x = displayX;
      p.y = displayY;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(9, 69, 62, ${globalAlpha * 0.5})`;
      ctx.fill();
    });

    if (maxDist > 0) {
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * globalAlpha * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(9, 69, 62, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }
    }
  });
}
