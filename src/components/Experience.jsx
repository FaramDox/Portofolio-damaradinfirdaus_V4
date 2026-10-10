function Experience() {
  const timeline = [
    {
      period: '2025 — Sekarang',
      title: 'Game Design',
      company: 'Hita Studio',
      description: 'Merancang konsep, aturan, dan mekanisme sebuah permainan sehingga menjadi pengalaman yang menyenangkan untuk dimainkan.'
    },
    {
      period: '2025 — 2026',
      title: 'Full Stack Developer',
      company: 'Anonim',
      description: 'Mengembangkan fitur-fitur core pada aplikasi marketplace. Implementasi REST API, optimasi database query, dan integrasi payment gateway.'
    },
    {
      period: '2025 — 2026',
      title: 'Junior Web Developer',
      company: 'Anonim',
      description: 'Membangun landing page dan website korporat untuk klien-klien besar. Fokus pada performa, aksesibilitas, dan responsivitas desain.'
    }
  ];

  const certificates = [
    {
      name: 'Front-End Web Development',
      issuer: 'Coding Studio',
      year: '2025',
      image: '/image/sertifikat4.jpeg'
    },
    {
      name: 'Algoritma Pemrograman',
      issuer: 'Coding Studio',
      year: '2025',
      image: '/image/sertifikat2.jpeg'
    },
    {
      name: 'Intro To Cyber Security',
      issuer: 'Coding Studio',
      year: '2025',
      image: '/image/sertifikat3.jpeg'
    },
    {
      name: 'Database MySQL',
      issuer: 'Coding Studio',
      year: '2026',
      image: '/image/sertifikat1.png'
    },
    {
      name: 'Sertifikat 5',
      issuer: 'Institusi',
      year: '2026',
      image: '/image/sertif5.png'
    },
    {
      name: 'Sertifikat 6',
      issuer: 'Institusi',
      year: '2026',
      image: '/image/sertif6.png'
    }
  ];

  const handleCertClick = (image) => {
    const modal = document.getElementById('certModal');
    const certImage = document.getElementById('certImage');
    if (modal && certImage) {
      certImage.src = image;
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10);
    }
  };

  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-tag">04 — Pengalaman</div>
        <h2 className="section-title">Pengalaman & <span className="accent">Sertifikat</span></h2>
        <div className="divider"></div>

        <div className="exp-layout">
          <div>
            <h3 style={{fontFamily:'var(--font-display)', fontSize:'0.9rem', color:'var(--text-sec)', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'2rem'}}>Riwayat</h3>
            <div className="timeline reveal">
              {timeline.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-company">{item.company}</div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{fontFamily:'var(--font-display)', fontSize:'0.9rem', color:'var(--text-sec)', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'2rem'}}>Sertifikat</h3>
            <div className="certs-grid" style={{gridTemplateColumns:'1fr'}}>
              {certificates.map((cert, index) => (
                <div 
                  className="cert-card reveal" 
                  data-cert={cert.image}
                  key={index}
                  onClick={() => handleCertClick(cert.image)}
                  style={{cursor: 'pointer'}}
                >
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-year">{cert.year}</div>
                    <div className="view-cert-btn">Lihat Sertifikat ↗</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
