function Projects() {
  const projects = [
    {
      icon: '🎮',
      gradient: 'linear-gradient(135deg,#0d2137,#0a1628)',
      tags: ['C++', 'Python', 'Godot Engine'],
      title: 'Game Think and Code',
      description: 'Game edukasi interaktif yang dirancang khusus untuk siswa sekolah menengah guna mempelajari dasar-dasar logika algoritma dan pemrograman secara menyenangkan.',
      demo: 'https://hitastudio.github.io/Think-and-Code/',
      github: 'https://github.com/FaramDox/thinkandcode'
    },
    {
      icon: '🤖',
      gradient: 'linear-gradient(135deg,#0f1f0d,#0a2010)',
      tags: ['Python', 'FastAPI', 'OpenAI'],
      title: 'AI Chatbot Assistant',
      description: 'Chatbot AI berbasis GPT dengan memori percakapan, integrasi Slack, dan analitik penggunaan real-time.',
      demo: 'https://hitastudio.github.io/Think-and-Code/',
      github: 'https://github.com/FaramDox/thinkandcode'
    },
    {
      icon: '🌐',
      gradient: 'linear-gradient(135deg,#1a1020,#120a1a)',
      tags: ['HTML', 'CSS', 'JavaScript'],
      title: 'Portofolio Perusahaan',
      description: 'Website profil perusahaan responsif yang menampilkan sejarah, layanan, dan pencapaian bisnis untuk meningkatkan kredibilitas serta kepercayaan klien.',
      demo: 'https://faramdox.github.io/Portofolio-PerusahaanTeknologi-V1/',
      github: 'https://github.com/FaramDox/Portofolio-PerusahaanTeknologi-V1'
    },
    {
      icon: '🌐',
      gradient: 'linear-gradient(135deg,#1a1020,#120a1a)',
      tags: ['TypeScript', 'CSS', 'JavaScript'],
      title: 'Sistem Absensi Digital',
      description: 'Sistem informasi presensi siswa berbasis web yang dirancang untuk membantu sekolah dalam melakukan pencatatan, pemantauan, dan pengelolaan kehadiran siswa secara digital.',
      demo: 'https://1dashboard-absensi-siswa-sman-1-seputih-banyak-8500.ai.studio/',
      github: 'https://github.com/FaramDox/absensidigital-siswa'
    },
    {
      icon: '🌐',
      gradient: 'linear-gradient(135deg,#1a1600,#131000)',
      tags: ['JavaScript', 'CSS', 'HTML'],
      title: 'Website Digital Desa',
      description: 'Website yang dirancang untuk membantu masyarakat mendapatkan informasi desa dengan lebih mudah, mulai dari profil, berita, kegiatan, potensi desa, hingga informasi pelayanan.',
      demo: 'https://hitastudio.github.io/Pasir-Biru/',
      github: 'https://github.com/hitastudio/Pasir-Biru'
    },
    {
      icon: '🌐',
      gradient: 'linear-gradient(135deg,#0d1520,#0a1030)',
      tags: ['Next.js', 'Tailwind', 'Sanity'],
      title: 'Portfolio CMS',
      description: 'Sistem manajemen konten berbasis web dengan editor visual, SEO otomatis, dan deployment CI/CD.',
      demo: 'https://hitastudio.github.io/Think-and-Code/',
      github: 'https://github.com/FaramDox/thinkandcode'
    }
  ];

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-tag">03 — Portfolio</div>
        <h2 className="section-title">Project <span className="accent">Terbaru</span></h2>
        <div className="divider"></div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card reveal" key={index}>
              <div className="project-img">
                <div className="project-img-inner" style={{background: project.gradient}}>
                  <span>{project.icon}</span>
                </div>
                <div className="project-overlay">
                  <a href={project.demo} className="overlay-btn" target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={project.github} className="overlay-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-title">{project.title}</div>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
