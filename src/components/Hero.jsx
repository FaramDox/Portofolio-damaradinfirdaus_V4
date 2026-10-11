import { useEffect, useRef } from 'react';

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const roles = [
      'Frontend Web Developer',
      'Game Designer',
      'UI/UX Enthusiast',
      'Database & Backend Web Developer',
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const current = roles[roleIndex];
      if (isDeleting) {
        typedRef.current.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 500);
          return;
        }
      } else {
        typedRef.current.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
      }
      setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
  }, []);

  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">⚡ Open to Work — 2026</div>
          <h1 className="hero-name">
            <div className="first">Damar</div>
            <div className="last">Adin Firdaus</div>
          </h1>
          <p className="hero-role">
            &lt; <span className="typed" ref={typedRef}></span><span style={{color:'var(--cyan)', animation:'blink 0.8s infinite'}}>_</span> /&gt;
          </p>
          <p className="hero-desc">
            Membangun <strong>produk digital</strong> yang cepat, indah, dan berdampak. Spesialis dalam membangun pengalaman web modern dengan sentuhan <strong>teknologi terkini</strong>.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">▶ Lihat Project</a>
            <a href="#contact" className="btn-outline">◎ Hubungi Saya</a>
            <a href="/CV Damar Adin Firdaus_New.pdf" download className="btn-outline">⬇ Download CV</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-avatar-wrap">
            <div className="avatar-ring-outer"></div>
            <div className="avatar-ring-mid"></div>
            <div className="avatar-hex">
              <svg className="avatar-svg" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#00f5ff', stopOpacity:0.9}}/>
                    <stop offset="100%" style={{stopColor:'#0080ff', stopOpacity:0.7}}/>
                  </linearGradient>
                  <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#1a2233', stopOpacity:1}}/>
                    <stop offset="100%" style={{stopColor:'#0d1117', stopOpacity:1}}/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                  </filter>
                </defs>
                <rect x="40" y="60" width="180" height="120" rx="10" fill="url(#g2)" stroke="url(#g1)" strokeWidth="1.5"/>
                <rect x="50" y="70" width="160" height="100" rx="6" fill="#060a0f"/>
                <rect x="62" y="85" width="70" height="3" rx="1.5" fill="#00f5ff" opacity="0.8"/>
                <rect x="62" y="95" width="50" height="3" rx="1.5" fill="#0080ff" opacity="0.6"/>
                <rect x="74" y="105" width="80" height="3" rx="1.5" fill="#00bfff" opacity="0.7"/>
                <rect x="74" y="115" width="60" height="3" rx="1.5" fill="#00f5ff" opacity="0.5"/>
                <rect x="62" y="125" width="90" height="3" rx="1.5" fill="#0080ff" opacity="0.6"/>
                <rect x="74" y="135" width="40" height="3" rx="1.5" fill="#00f5ff" opacity="0.8"/>
                <rect x="62" y="145" width="75" height="3" rx="1.5" fill="#00bfff" opacity="0.5"/>
                <rect x="140" y="145" width="8" height="3" rx="1" fill="#00f5ff">
                  <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                </rect>
                <rect x="110" y="180" width="40" height="10" rx="3" fill="url(#g2)" stroke="url(#g1)" strokeWidth="1"/>
                <rect x="95" y="188" width="70" height="6" rx="3" fill="url(#g2)" stroke="url(#g1)" strokeWidth="1"/>
                <circle cx="210" cy="85" r="14" fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" values="0 210 85;360 210 85" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="210" cy="85" r="4" fill="#00f5ff" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="50" cy="95" r="10" fill="none" stroke="#0080ff" strokeWidth="1" opacity="0.4">
                  <animateTransform attributeName="transform" type="rotate" values="360 50 95;0 50 95" dur="6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="50" cy="95" r="3" fill="#0080ff" opacity="0.6"/>
                <circle cx="200" cy="145" r="2" fill="#22c55e" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <path d="M194 140 Q200 135 206 140" stroke="#22c55e" strokeWidth="1.2" fill="none" opacity="0.7"/>
                <path d="M190 136 Q200 128 210 136" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.4"/>
              </svg>
              <div className="avatar-glow"></div>
            </div>
            <div className="float-badge b1"><span className="dot"></span>⚡ Full Stack</div>
            <div className="float-badge b2"><span className="dot"></span>Game Designer</div>
            <div className="float-badge b3"><span className="dot"></span>3+ Yrs Exp</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
