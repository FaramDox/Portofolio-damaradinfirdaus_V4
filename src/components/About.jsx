import { useEffect, useRef } from 'react';

function About() {
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const count = parseInt(target.getAttribute('data-count'));
          let current = 0;
          const increment = count / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= count) {
              target.textContent = count;
              clearInterval(timer);
            } else {
              target.textContent = Math.floor(current);
            }
          }, 30);
        }
      });
    });

    statsRef.current.forEach(stat => {
      if (stat) observer.observe(stat);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-tag">01 — Tentang Saya</div>
        <h2 className="section-title">Siapa <span className="accent">Damar</span>?</h2>
        <div className="divider"></div>

        <div className="about-grid reveal">
          <div className="about-visual">
            <div className="about-card-main">
              <div style={{fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--text-muted)', marginBottom:'1rem'}}>// profil.json</div>
              <div style={{fontFamily:'var(--font-mono)', fontSize:'0.82rem', lineHeight:'1.9', color:'var(--text-sec)'}}>
                {'{'}<br />
                &nbsp;&nbsp;"nama": <span style={{color:'#22c55e'}}>"Damar Adin Firdaus"</span>,<br />
                &nbsp;&nbsp;"role": <span style={{color:'#22c55e'}}>"Frontend Web Developer"</span>,<br />
                &nbsp;&nbsp;"lokasi": <span style={{color:'#22c55e'}}>"Lampung, ID"</span>,<br />
                &nbsp;&nbsp;"pendidikan": <span style={{color:'#22c55e'}}>"D4 Teknologi Rekayasa Perangkat Lunak"</span>,<br />
                &nbsp;&nbsp;"status": <span style={{color:'var(--cyan)'}}>"open_to_work"</span><br />
                {'}'}
              </div>
              <div className="stat-grid">
                <div className="stat-item">
                  <span className="stat-num" data-count="5" ref={el => statsRef.current[0] = el}>0</span>
                  <div className="stat-label">Projects Selesai</div>
                </div>
                <div className="stat-item">
                  <span className="stat-num" data-count="3" ref={el => statsRef.current[1] = el}>0</span>
                  <div className="stat-label">Tahun Pengalaman</div>
                </div>
                <div className="stat-item">
                  <span className="stat-num" data-count="10" ref={el => statsRef.current[2] = el}>0</span>
                  <div className="stat-label">Klien Puas</div>
                </div>
                <div className="stat-item">
                  <span className="stat-num" data-count="6" ref={el => statsRef.current[3] = el}>0</span>
                  <div className="stat-label">Sertifikat</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <p className="justify">Halo! Saya <strong>Damar Adin Firdaus</strong>, seorang <strong>Frontend Web Developer</strong> yang passionate dalam membangun aplikasi web modern yang tidak hanya fungsional, tapi juga memiliki desain yang memukau.
            </p>

            <p className="justify">Saya percaya bahwa <strong>teknologi yang baik</strong> adalah yang mampu menyelesaikan masalah nyata dengan cara yang elegan. Setiap baris kode yang saya tulis adalah upaya untuk menciptakan pengalaman yang lebih baik bagi pengguna.
            </p>

            <p className="justify">Di waktu luang, saya aktif berkontribusi ke open source, mengikuti kompetisi hackathon, dan berbagi pengetahuan melalui blog teknis.
            </p>
            <div className="about-tools">
              <span className="tool-chip">VS Code</span>
              <span className="tool-chip">Git / GitHub</span>
              <span className="tool-chip">Figma</span>
              <span className="tool-chip">Docker</span>
              <span className="tool-chip">Linux</span>
              <span className="tool-chip">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
