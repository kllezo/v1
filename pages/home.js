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
  const silhouettes = Array.from({ length: 12 }).map((_, i) => {
    const size = 180 + Math.random() * 150;
    const leftPos = (i / 11) * 100;
    return `
      <div class="silhouette-wrap" style="left: calc(${leftPos}% - ${size / 2}px); width: ${size}px; z-index: ${Math.floor(size)};">
        <svg viewBox="0 0 100 200" preserveAspectRatio="xMidYMax meet">
          <path d="M50 50a20 20 0 1 0 0-40 20 20 0 0 0 0 40z" fill="#000"/>
          <path d="M25 180V100a25 25 0 0 1 50 0v80H25z" fill="#000"/>
          <!-- Arm holding phone -->
          <path d="M25 100 Q10 120 40 140 L60 110" fill="none" stroke="#000" stroke-width="12" stroke-linecap="round"/>
          <rect x="55" y="100" width="10" height="20" rx="2" fill="#222" transform="rotate(20, 60, 110)"/>
          <circle cx="60" cy="105" r="2" fill="#fff" class="phone-flash" opacity="0"/>
        </svg>
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
           <svg class="scene3-icon" style="top: 20%; left: 18%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M4 6h3l2-2h6l2 2h3c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm8 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z"/></svg>
           <svg class="scene3-icon" style="top: 15%; right: 22%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>
           <svg class="scene3-icon" style="top: 35%; left: 35%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M13 5.83l1.88 1.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.59-3.59c-.39-.39-1.02-.39-1.41 0L7.71 6.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 5.83V20c0 .55.45 1 1 1s1-.45 1-1V5.83z"/></svg>
           <svg class="scene3-icon" style="top: 40%; right: 18%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
           <svg class="scene3-icon" style="top: 25%; left: 45%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
           <svg class="scene3-icon" style="top: 50%; right: 40%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.36 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
           <svg class="scene3-icon" style="top: 15%; right: 50%;" viewBox="0 0 24 24"><path fill="var(--green)" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
        </div>

        <div class="global-layer graph-layer" id="graphLayer">
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" style="width: 100%; height: 300px; max-width: 1200px; margin: 0 auto;">
             <path class="trend-line" id="trendLine" d="M -50 150 Q 200 130, 400 180 T 800 220 T 1100 260" stroke="var(--green)" stroke-width="4" fill="none" stroke-linecap="round"/>
             <path class="trend-glow" d="M -50 150 Q 200 130, 400 180 T 800 220 T 1100 260" stroke="var(--green)" stroke-width="20" opacity="0.15" fill="none" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="story-container">
          <!-- SCENE 1: HOOK -->
          <div class="story-scene scene-1">
            <h2 class="story-line">The internet<br>is crowded.</h2>
          </div>
          
          <!-- SCENE 2: ATTENTION IS RARE -->
          <div class="story-scene scene-2">
            <h2 class="story-line text-large relative">
              Attention<br>is <span class="word-rare">RARE.
                <svg class="svg-underline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 5 15 Q 50 20, 95 12" />
                </svg>
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
            <h2 class="story-line">Because growth today<br>isn't effort.</h2>
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
              <h2 class="story-line" id="weBuildSystems">And we build those systems.</h2>
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

  // SVGs
  const svgUnderline = document.querySelector('.svg-underline path');
  const svgHighlightPaths = gsap.utils.toArray('.svg-highlight path');
  const trendLine = document.getElementById('trendLine');
  const trendGlow = document.querySelector('.trend-glow');
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
  gsap.set(silhouettes, { autoAlpha: 0, y: '15vh' });
  gsap.set(uiBubbles, { autoAlpha: 0, scale: 0.5 });
  gsap.set(toolsIcons, { autoAlpha: 0, scale: 0.5, y: 30 });
  gsap.set(graphLayer, { autoAlpha: 0 });
  gsap.set('.scroll-guide', { autoAlpha: 1 });
  if (wingLeft) gsap.set(wingLeft, { autoAlpha: 0, x: -80 });
  if (wingRight) gsap.set(wingRight, { autoAlpha: 0, x: 80 });
  if (finalLogo) gsap.set(finalLogo, { autoAlpha: 0 });

  // Flashing phone animation (runs continuously for silhouettes)
  gsap.to('.phone-flash', {
    opacity: 1,
    duration: 0.1,
    repeat: -1,
    repeatDelay: () => 1 + Math.random() * 4,
    yoyo: true,
    ease: 'none'
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
    .to(silhouettes, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out" }, "-=0.4")
    .to({}, { duration: 0.8 })
    .to(s1Line, { autoAlpha: 0, duration: 0.5 });
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 2 : Attention is RARE =================
  tl.to(s2Line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(svgUnderline, { strokeDashoffset: 0, duration: 0.5, ease: "power3.inOut" }, "-=0.3")
    .to(uiBubbles, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.2")
    .to({}, { duration: 0.6 })
    .to(uiBubbles, { autoAlpha: 0, scale: 0.5, duration: 0.5, stagger: 0.05, ease: "power3.in" })
    .to(s2Line, { autoAlpha: 0, duration: 0.5 }, "-=0.3");
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 3 : More content / tools / effort =================
  tl.to(s3Lines, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.3, ease: "power3.out" })
    .to(toolsIcons, { autoAlpha: 1, scale: 1, y: 0, rotation: () => Math.random() * 20 - 10, duration: 0.5, stagger: 0.08, ease: "back.out(1.2)" }, "-=0.6")
    .to({}, { duration: 0.8 })
    .to(s3Lines, { autoAlpha: 0, duration: 0.5 });
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 4 : Still no momentum =================
  tl.to(silhouettes, { autoAlpha: 0, y: '5vh', duration: 0.6, ease: "power3.inOut" })
    .to(toolsIcons, { autoAlpha: 0, scale: 0.8, duration: 0.6, ease: "power3.inOut" }, "-=0.6")
    .to(sceneDarkener, { autoAlpha: 1, duration: 0.6 }, "-=0.6")
    // Graph draws
    .to(graphLayer, { autoAlpha: 1, duration: 0.3 }, "-=0.2")
    .to([trendLine, trendGlow], { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" })
    // Text reveals
    .to(s4Conclusion, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.8")
    .to(svgHighlightPaths, { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut", stagger: 0.2 }, "-=0.3")
    .to({}, { duration: 0.8 })
    .to(s4Conclusion, { autoAlpha: 0, duration: 0.5 })
    .to(graphLayer, { autoAlpha: 0, duration: 0.5 }, "-=0.5")
    .to(sceneDarkener, { autoAlpha: 0, duration: 0.5 }, "-=0.5");
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 5 : Because growth today isn't effort =================
  tl.to(s5Line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to({}, { duration: 0.8 })
    .to(s5Line, { autoAlpha: 0, duration: 0.5 });
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 6 : It's systems + Services Lineup =================
  tl.to(s6Line, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(systemsLasso, { strokeDashoffset: 0, duration: 0.5, ease: "power3.inOut" }, "-=0.2")
    .to(activationWrap, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.2");

  // Animate the services nodes expanding left to right
  const isMobile = window.innerWidth < 768;
  const targetWidth = isMobile ? "100px" : "clamp(120px, 14vw, 180px)";
  const targetGap = isMobile ? "0.5rem" : "1rem";

  nodes.forEach((node, i) => {
    const spark = node.querySelector('.spark-effect');
    const iconContainer = node.querySelector('.activation-node__icon');
    const icon = iconContainer.querySelector('img');
    const label = node.querySelector('.activation-node__label');

    gsap.set(node, { autoAlpha: 0, y: 40, width: 0, margin: "0px" });

    tl.to(node, { width: targetWidth, marginLeft: targetGap, marginRight: targetGap, autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(spark, { scale: 0, autoAlpha: 0 }, { scale: 1.5, autoAlpha: 0.8, duration: 0.2, ease: "power2.out" }, "-=0.4")
      .to(spark, { autoAlpha: 0, scale: 2, duration: 0.3, ease: "power2.out" })
      .fromTo(icon, { scale: 0.6, rotation: -15 }, { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.5)" }, "-=0.5")
      .to(iconContainer, { filter: "drop-shadow(0 0 15px rgba(9, 69, 62, 0.6))", duration: 0.4 }, "-=0.4")
      .to(label, { autoAlpha: 1, y: 0, duration: 0.3 }, "-=0.3");
  });

  // Draw connecting line
  if (activeLine && !isMobile) {
    tl.to(activeLine, { strokeDashoffset: 0, duration: nodes.length * 0.4, ease: "power1.inOut" }, "-=" + (nodes.length * 0.6));
  }

  tl.to({}, { duration: 1.0 })
    .to(activationWrap, { autoAlpha: 0, duration: 0.5 })
    .to(s6Line, { autoAlpha: 0, duration: 0.5 }, "-=0.5");
  tl.to({}, { duration: 0.3 });

  // ================= SCENE 7 : And we build those systems (Logo Reveal) =================
  if (wingLeft && wingRight && finalLogo) {
    tl.to(logoWrap, { autoAlpha: 1, y: 0, duration: 0.1 })
      .to(weBuildLine, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" })
      .to(finalLogo, { autoAlpha: 1, duration: 0.8 }, "+=0.4")
      .to(wingLeft, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to(wingRight, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.8");

    if (finalTagline) {
      tl.to(finalTagline, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
    }
  } else {
    tl.to(logoWrap, { autoAlpha: 1, y: 0, duration: 0.1 })
      .to(weBuildLine, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" })
      .to(logoWrap, { scale: 1, duration: 1.0, ease: "power3.out" }, "+=0.4");
  }

  // Hold at conclusion
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
