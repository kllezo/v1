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
];

export function renderHome() {
  const isMobile = window.innerWidth <= 768;
  const config = isMobile ? [
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
    let bodyPath = '', headPath = '', armPath = '', phoneTransform = '', eyeMarkup = '';
    const blinkWait = (3 + Math.random() * 5).toFixed(2);
    const trackingClass = Math.random() > 0.2 ? 'tracking-eyes' : 'static-eyes';
    const idleDelay = -(Math.random() * 4).toFixed(2);
    const depthClass = i % 2 === 0 ? 'depth-mid' : 'depth-front';

    // Abstracted reusable SVG generators for common details
    const renderPhone = (tx, ty, rot) => `
      <g transform="translate(${tx}, ${ty}) rotate(${rot})">
        <rect x="0" y="0" width="22" height="40" rx="3" fill="#222" stroke="#000000" stroke-width="4"/>
        <rect x="3" y="3" width="16" height="34" rx="2" fill="#ffffff" opacity="0.9"/>
        <rect x="3" y="3" width="16" height="34" rx="2" fill="#ffffff" class="phone-pulse" style="--pulse-wait: ${blinkWait}s"/>
        <ellipse cx="11" cy="40" rx="14" ry="10" fill="#000000"/>
      </g>
    `;

    const renderEyes = (lx, ly, lr, rx, ry, rr) => `
      <g class="sil-eyes ${trackingClass} async-blink" style="--blink-del: ${blinkWait}s" opacity="0" transform-origin="${lx + (rx - lx) / 2} ${ly}">
        <circle cx="${lx}" cy="${ly}" r="${lr}" fill="#ffffff"/>
        <circle cx="${rx}" cy="${ry}" r="${rr}" fill="#ffffff"/>
      </g>
    `;

    // Extremely specific, hand-tuned SVG geometric mapping per character ID
    if (c.id === 'tl') {
      bodyPath = `M 0 50 Q 80 50 80 100 Q 80 150 0 150 Z`;
      headPath = `M 60 70 C 120 70, 130 110, 70 110 Z`;
      armPath = `M 70 120 Q 140 130 160 100`;
      phoneTransform = renderPhone(150, 80, 20);
      eyeMarkup = renderEyes(82, 85, 2, 95, 90, 4);
    } else if (c.id === 'ml') {
      bodyPath = `M 0 100 Q 60 100 80 150 Q 60 200 0 200 Z`;
      headPath = `M 60 120 C 130 110, 130 150, 70 160 Z`;
      armPath = `M 80 150 Q 140 130 120 40`;
      phoneTransform = renderPhone(100, 10, 10);
      eyeMarkup = renderEyes(87, 132, 2, 100, 135, 4);
    } else if (c.id === 'bl') {
      bodyPath = `M 0 200 L 0 130 Q 50 80 100 120 Q 110 200 110 200 Z`;
      headPath = `M 80 90 A 35 35 0 1 1 80 89.9 Z`;
      armPath = `M 50 120 Q 60 20 120 30`;
      phoneTransform = renderPhone(110, 0, 15);
      eyeMarkup = renderEyes(80, 80, 2, 100, 85, 4);
    } else if (c.id === 'bml') {
      bodyPath = `M 30 200 Q 50 100 90 90 Q 140 100 140 200 Z`;
      headPath = `M 95 65 A 30 30 0 1 1 95 64.9 Z`;
      armPath = `M 60 100 Q 80 10 130 10`;
      phoneTransform = renderPhone(120, -20, 10);
      eyeMarkup = renderEyes(90, 55, 2, 110, 60, 4);
    } else if (c.id === 'bc') {
      bodyPath = `M 50 200 Q 60 100 100 90 Q 140 100 150 200 Z`;
      headPath = `M 100 60 A 30 30 0 1 1 100 59.9 Z`;
      armPath = `M 130 110 Q 160 30 110 -10`;
      phoneTransform = renderPhone(97, -40, 0);
      eyeMarkup = renderEyes(85, 55, 2, 110, 55, 4);
    } else if (c.id === 'bmr') {
      bodyPath = `M 60 200 Q 60 100 110 90 Q 150 100 170 200 Z`;
      headPath = `M 105 65 A 30 30 0 1 1 105 64.9 Z`;
      armPath = `M 130 110 Q 140 10 70 10`;
      phoneTransform = renderPhone(60, -20, -10);
      eyeMarkup = renderEyes(90, 60, 4, 110, 55, 2);
    } else if (c.id === 'br') {
      bodyPath = `M 200 200 L 200 130 Q 150 80 100 120 Q 90 200 90 200 Z`;
      headPath = `M 120 90 A 35 35 0 1 1 120 89.9 Z`;
      armPath = `M 150 120 Q 140 20 80 30`;
      phoneTransform = renderPhone(65, 0, -15);
      eyeMarkup = renderEyes(100, 85, 4, 120, 80, 2);
    } else if (c.id === 'mr') {
      bodyPath = `M 200 100 Q 140 100 120 150 Q 140 200 200 200 Z`;
      headPath = `M 140 120 C 70 110, 70 150, 130 160 Z`;
      armPath = `M 120 150 Q 60 130 80 40`;
      phoneTransform = renderPhone(75, 10, -10);
      eyeMarkup = renderEyes(100, 135, 4, 113, 132, 2);
    } else if (c.id === 'tr') {
      bodyPath = `M 200 50 Q 120 50 120 100 Q 120 150 200 150 Z`;
      headPath = `M 140 70 C 80 70, 70 110, 130 110 Z`;
      armPath = `M 130 120 Q 60 130 40 100`;
      phoneTransform = renderPhone(25, 80, -20);
      eyeMarkup = renderEyes(105, 90, 4, 118, 85, 2);
    }

    return `
      <div class="silhouette-wrap ${depthClass} idle-float" id="sil-${c.id}" style="position: absolute; ${c.pos} width: ${c.size}px; height: ${c.size}px; z-index: ${Math.floor(c.size)}; --idle-del: ${idleDelay}s;">
        <div class="sil-inner" style="width: 100%; height: 100%;">
          <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="overflow: visible;">
            <!-- Arm behind body -->
            <path d="${armPath}" fill="none" stroke="#000000" stroke-width="24" stroke-linecap="round"/>
            ${phoneTransform}
            <!-- Torso & Head -->
            <path d="${bodyPath}" fill="#000000"/>
            <path d="${headPath}" fill="#000000"/>
            <!-- Eyes -->
            ${eyeMarkup}
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
           <div class="ui-bubble" style="top: 10%; left: 10%;">💬</div>
           <div class="ui-bubble" style="top: 10%; right: 10%;">❤️</div>
           <div class="ui-bubble" style="bottom: 10%; left: 12%;">🔔</div>
           <div class="ui-bubble" style="bottom: 10%; right: 12%;">✓</div>
           <div class="ui-popup" style="top: 50%; left: 5%;">New like</div>
           <div class="ui-popup" style="top: 50%; right: 5%;">Trending</div>
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
        
        <div class="global-layer pattern-particles-layer" id="patternParticlesLayer" style="z-index: 50; pointer-events: none;"></div>

        <div class="story-container">
          <!-- SCENE 1: HOOK -->
          <div class="story-scene scene-1">
            <h2 class="story-line" style="transform: translateY(-120px);">The internet<br>is crowded.</h2>
          </div>
          
          <!-- SCENE 2: ATTENTION IS RARE -->
          <div class="story-scene scene-2">
            <h2 class="story-line text-large relative" style="line-height:1.1; margin-top: 80px;">
              Attention<br>is <span class="word-rare relative" id="wordRare" style="display:inline-block; cursor: none;">
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
            </span></h2>
          </div>

          <!-- SCENE 6: IT'S SYSTEMS (own screen) & Service Icons -->
          <div class="story-scene scene-6" style="display: flex; flex-direction: column; height: 100vh; width: 100%;">
            <div class="story-line systems-group" style="flex: 1; display: flex; align-items: center; justify-content: center; width: 100%;">
              <div class="systems-flex" style="position: relative;">
                <span class="word-its">It's</span>
                <span class="word-systems word-lasso">Systems.
                  <svg class="svg-lasso" id="systemsLasso" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100" preserveAspectRatio="none">
                    <path d="M 5 50 A 65 45 0 1 1 135 50 A 65 45 0 1 1 5 50 Z" />
                  </svg>
                </span>
              </div>
            </div>
            
            <div class="activation-nodes" id="activationNodesWrap" style="flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; transform: scale(1.4);">
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
            <div class="scene-3c-content" style="justify-content: space-evenly;">
              <h2 class="story-line" id="weBuildSystems">And <span id="weBuiltWord" style="display:inline-block; font-size: 1.2em; font-weight: 900;">we</span> build those systems.</h2>
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
  const weBuiltWord = document.getElementById('weBuiltWord');

  const patternLayer = document.getElementById('patternParticlesLayer');
  if (patternLayer) {
    let pHTML = '';
    for (let i = 0; i < 50; i++) {
        pHTML += `<div class="effort-particle" style="position: absolute; top: 50%; left: 50%; width: ${Math.random()*15+5}px; height: ${Math.random()*15+5}px; background: rgba(255,255,255,0.9); opacity: 0; pointer-events: none; transform: translate(-50%, -50%); border-radius: 0; clip-path: polygon(${Math.random()*20}% 0%, 100% ${Math.random()*20}%, ${80+Math.random()*20}% 100%, 0% ${80+Math.random()*20}%);"></div>`;
    }
    patternLayer.innerHTML = pHTML;
  }
  const effortParticles = gsap.utils.toArray('.effort-particle');

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
    // Use len + 100 to absolutely prevent stroke-linecap rounding bleed at edges when hidden
    gsap.set(path, { strokeDasharray: len + 100, strokeDashoffset: len + 100 });
    return len + 100;
  };
  setupPath(svgUnderline);
  svgHighlightPaths.forEach(setupPath);
  setupPath(systemsLasso);
  if (trendLine) setupPath(trendLine);
  if (trendGlow) setupPath(trendGlow);
  if (activeLine) setupPath(activeLine);

  // Initial setup: Hide everything
  gsap.set([s1Line, s2Line, s3Lines, s4Conclusion, s5Line, s6Line, activationWrap, weBuildLine, finalTagline], { autoAlpha: 0, y: 30 });
  if (logoWrap) gsap.set(logoWrap, { autoAlpha: 0, y: 100 });
  if (magGlass) gsap.set(magGlass, { autoAlpha: 0, x: -50, scale: 0.8 });
  if (glassCracks) gsap.set(glassCracks, { autoAlpha: 0 });

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

  // Eyes tracking cursor logic (Pupils only)
  const trackingPupils = document.querySelectorAll('.tracking-eyes circle');
  const pupilSetters = Array.from(trackingPupils).map(pupil => ({
    el: pupil,
    xTo: gsap.quickTo(pupil, "x", { duration: 0.1, ease: "none" }),
    yTo: gsap.quickTo(pupil, "y", { duration: 0.1, ease: "none" })
  }));

  window.addEventListener('mousemove', (e) => {
    pupilSetters.forEach(p => {
      const rect = p.el.getBoundingClientRect();
      // Center of pupil
      const cx = rect.left + (rect.width / 2);
      const cy = rect.top + (rect.height / 2);
      
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      
      const dist = Math.hypot(dx, dy);
      const maxR = 5; // max 5px radius 
      
      let moveX = dx;
      let moveY = dy;
      if (dist > maxR) {
        moveX = (dx / dist) * maxR;
        moveY = (dy / dist) * maxR;
      }
      
      p.xTo(moveX);
      p.yTo(moveY);
    });
  });

  // Interactive Magnifying Glass for Scene 2
  const wordRare = document.getElementById('wordRare');
  if (magGlass && wordRare && rareLetters.length > 0) {
    gsap.set(magGlass, { autoAlpha: 0, top: 0, left: 0, xPercent: -50, yPercent: -50, scale: 1 });
    
    const letterCenters = [];
    // We wait briefly for layout to settle or calculate it dynamically without scale
    rareLetters.forEach(l => {
        letterCenters.push({
            el: l,
            left: l.offsetLeft,
            top: l.offsetTop,
            width: l.offsetWidth,
            height: l.offsetHeight
        });
    });

    const glassToX = gsap.quickTo(magGlass, "x", {duration: 0.05, ease: "none"});
    const glassToY = gsap.quickTo(magGlass, "y", {duration: 0.05, ease: "none"});
    const glassAlpha = gsap.quickTo(magGlass, "autoAlpha", {duration: 0.1});

    wordRare.addEventListener('mousemove', (e) => {
      const rect = wordRare.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      glassAlpha(1);
      glassToX(x);
      glassToY(y);
      
      letterCenters.forEach(item => {
        const lx = item.left + (item.width / 2);
        const ly = item.top + (item.height / 2);
        const dist = Math.hypot(x - lx, y - ly);
        
        if (dist < 50) {
          const scaleAmt = 1 + (0.4 * (1 - (dist / 50)));
          gsap.to(item.el, { scale: scaleAmt, color: "var(--green)", duration: 0.05, overwrite: "auto", ease: "none" });
        } else {
          gsap.to(item.el, { scale: 1, color: "inherit", duration: 0.05, overwrite: "auto", ease: "none" });
        }
      });
    });
    
    wordRare.addEventListener('mouseleave', () => {
      glassAlpha(0);
      rareLetters.forEach(letter => {
        gsap.to(letter, { scale: 1, color: "inherit", duration: 0.2, overwrite: "auto" });
      });
    });
  }

  // Orbital setup for Scene 2 Icons
  if (uiBubblesLayer) {
    gsap.set(uiBubblesLayer, { transformOrigin: "center center" });
    gsap.to(uiBubblesLayer, { rotation: 360, duration: 40, repeat: -1, ease: "none" });
    gsap.set(uiBubbles, { transformOrigin: "center center" });
    gsap.to(uiBubbles, { rotation: -360, duration: 40, repeat: -1, ease: "none" });
  }

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
    // Background UI bubbles
    .to(uiBubbles, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.2")
    .to({}, { duration: 2.2 })
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
    // Fragments blast out (Step 1)
    .to('.word-effort', { opacity: 0, duration: 0.1 }, "-=0.1")
    .to(glassCracks, { opacity: 0, duration: 0.1 }, "<")
    .to(effortParticles, {
        autoAlpha: 1,
        x: () => (Math.random() - 0.5) * window.innerWidth * 1.2,
        y: () => (Math.random() - 0.5) * window.innerHeight * 1.2,
        rotation: () => (Math.random() - 0.5) * 720,
        scale: () => Math.random() * 2 + 0.8,
        duration: 0.5,
        ease: "power4.out",
    }, "<")
    // Particles transform and persist (Step 2)
    .to(effortParticles, {
        clipPath: "none",
        borderRadius: "50%",
        background: "var(--green)",
        scale: () => Math.random() * 0.5 + 0.3,
        autoAlpha: () => Math.random() * 0.5 + 0.3,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          effortParticles.forEach(p => {
            gsap.to(p, {
              y: "+=150",
              x: () => "+=" + (Math.random()*60 - 30),
              rotation: "+=45",
              duration: () => 4 + Math.random()*5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            });
          });
        }
    })
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
    .to(weBuiltWord, { scale: 1.2, color: "var(--green)", duration: 0.3, ease: "power2.out" })
    .to(weBuiltWord, { scale: 1.1, color: "var(--green)", duration: 0.4, ease: "power2.inOut" }, "+=0.1")

    // Kllezo Logo Rises smoothly
    .to(logoWrap, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.4")
    .to(finalLogo, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" }, "<")

    // Wings glide inward
    .to([wingLeft, wingRight], { autoAlpha: 1, x: 0, duration: 1.2, ease: "power2.out" }, "-=0.8")
    // Subtle flap (one cycle)
    .to([wingLeft, wingRight], { scaleY: 0.6, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" }, "-=0.2")

    // Tagline fades in
    .to(finalTagline, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }, "+=0.1");

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
