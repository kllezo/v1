// ============================================
// KLLEZO — Services Page
// ============================================

const services = [
  {
    icon: '/icon-content.svg.png',
    title: 'Content Creation',
    desc: `Attention isn't given. It's taken. We craft scroll-stopping visuals and strategic storytelling — content engineered to spark conversations and convert silently.`,
    capabilities: [
      'Social media content strategy & creation',
      'Video production & motion graphics',
      'Brand storytelling & copywriting',
      'Campaign-level content systems',
      'Performance-driven creative testing',
    ],
    impact: 'Stories that travel further than ads.',
  },
  {
    icon: '/icon-website.svg.png',
    title: 'Website Experiences',
    desc: `Not just websites. Digital first impressions. Fast, fluid, and conversion-focused — built to turn curiosity into commitment.`,
    capabilities: [
      'Custom website design & development',
      'Landing page & funnel optimization',
      'E-commerce experiences',
      'Performance & speed optimization',
      'SEO-integrated architecture',
    ],
    impact: 'A website that works as hard as your business does.',
  },
  {
    icon: '/icon-ai.svg.png',
    title: 'AI Communication Systems',
    desc: `Conversations that never sleep. Instant replies, intelligent follow-ups, and human-like interactions powered by automation.`,
    capabilities: [
      'AI-powered chatbots & assistants',
      'Automated email & WhatsApp sequences',
      'Lead qualification & routing',
      'CRM integration & sync',
      'Intelligent response workflows',
    ],
    impact: 'Your business responding — even while you sleep.',
  }
];

export function renderServices() {
  const blocksHTML = services
    .map(
      (s, i) => `
    <div class="service-block" data-index="${i}" style="cursor: pointer; margin-bottom: 2rem;">
      <div class="service-block__inner" style="pointer-events: none;">
        <div class="service-block__icon-col">
          <div class="service-block__icon">
            <img src="${s.icon}" alt="${s.title}" />
          </div>
        </div>
        <div class="service-block__text-col">
          <h3 class="service-block__title">${s.title}</h3>
          <p class="service-block__desc body-text">${s.desc}</p>
          <div class="service-block__expandable" style="height: 0; overflow: hidden; opacity: 0;">
            <ul class="service-block__capabilities">
              ${s.capabilities.map((c) => `<li>${c}</li>`).join('')}
            </ul>
            <p class="impact-line">${s.impact}</p>
          </div>
          <button class="expand-btn body-text" style="pointer-events: none; margin-top: 15px; background: none; border: none; color: var(--green); font-weight: bold; display: inline-flex; align-items: center; gap: 8px;">View Details <span class="expand-icon" style="transition: transform 0.3s;">+</span></button>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  return `
    <div class="services-page__hero">
      <h1 class="reveal">What We Build</h1>
      <p class="tagline reveal reveal-delay-1">Systems, stories, and strategies — engineered for growth.</p>
    </div>
    <div class="services-container" style="max-width: var(--max-width); margin: 0 auto; padding: 2rem var(--page-pad); display: flex; flex-direction: column; gap: 1rem;">
      ${blocksHTML}
    </div>
    
    <section class="how-we-work" style="max-width: var(--max-width); margin: 4rem auto 2rem auto; padding: 0 var(--page-pad);">
      <h2 class="reveal" style="text-align: center; margin-bottom: 3rem;">How We Work</h2>
      <div class="work-steps-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        
        <div class="work-step glass-tab reveal" style="padding: 2.5rem; text-align: center;">
          <div class="step-number" style="font-size: 3rem; font-weight: 800; color: var(--green); opacity: 0.2; margin-bottom: 1rem; line-height: 1;">01</div>
          <h3 style="margin-bottom: 1rem; font-size: 1.5rem; color: var(--green);">Growth Strategy & Consultancy</h3>
          <p class="body-text">Clarity over chaos. Direction over noise. Sharp positioning and calculated moves — growth that feels intentional, not accidental.</p>
        </div>
        
        <div class="work-step glass-tab reveal reveal-delay-1" style="padding: 2.5rem; text-align: center;">
          <div class="step-number" style="font-size: 3rem; font-weight: 800; color: var(--green); opacity: 0.2; margin-bottom: 1rem; line-height: 1;">02</div>
          <h3 style="margin-bottom: 1rem; font-size: 1.5rem; color: var(--green);">Workflow Automation</h3>
          <p class="body-text">Manual is outdated. Systems that connect, trigger, and execute — silent engines running your backend at full throttle.</p>
        </div>

      </div>
    </section>

    <section class="cta-section">
      <h2 class="reveal">Let's build your growth engine.</h2>
      <a href="#/contact" class="btn btn--primary reveal reveal-delay-1">Connect Now</a>
    </section>
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

export function initServices() {
  const blocks = document.querySelectorAll('.service-block');

  blocks.forEach((block, index) => {
    // Reveal animation like original
    const iconCol = block.querySelector('.service-block__icon-col');
    const icon = block.querySelector('.service-block__icon img');
    const textElements = block.querySelectorAll('.service-block__title, .service-block__desc');
    const isEven = index % 2 !== 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 85%',
        once: true,
      }
    });

    const iconX = isEven ? 60 : -60;
    const textX = isEven ? -60 : 60;

    tl.fromTo(block, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    tl.fromTo(iconCol, { x: iconX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, "<");
    tl.fromTo(icon, { scale: 0.9, rotation: isEven ? -5 : 5 }, { scale: 1, rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' }, '-=0.7');
    tl.fromTo(textElements, { opacity: 0, y: 15, x: textX }, { opacity: 1, y: 0, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, '-=1.0');

    // Click interactions
    const content = block.querySelector('.service-block__expandable');
    const expandIcon = block.querySelector('.expand-icon');
    let isExpanded = false;

    gsap.set(content, { height: 0 });

    block.addEventListener('click', () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        block.classList.add('is-active');
        gsap.to(content, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        gsap.to(expandIcon, { rotation: 45, duration: 0.3 });
      } else {
        block.classList.remove('is-active');
        gsap.to(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
        gsap.to(expandIcon, { rotation: 0, duration: 0.3 });
      }
    });
  });

  // Reveal 'How We Work'
  const hwBlocks = document.querySelectorAll('.how-we-work .reveal');
  hwBlocks.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        }
      }
    );
  });
}
