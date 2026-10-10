import { useEffect, useRef } from 'react';

function Skills() {
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width');
          bar.style.width = (parseFloat(width) * 100) + '%';
        }
      });
    });

    skillBarsRef.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    { name: 'React.js', icon: '⚛️', percent: 92 },
    { name: 'HTML / CSS', icon: '🌐', percent: 95 },
    { name: 'JavaScript', icon: '💛', percent: 88 },
    { name: 'Tailwind CSS', icon: '🎨', percent: 90 },
    { name: 'Next.js', icon: '▲', percent: 82 }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: '🟢', percent: 85 },
    { name: 'Python', icon: '🐍', percent: 78 },
    { name: 'Java', icon: '☕', percent: 72 },
    { name: 'PostgreSQL', icon: '🐘', percent: 80 },
    { name: 'Docker', icon: '🐳', percent: 70 }
  ];

  const techStack = [
    { icon: '⚛️', name: 'React' },
    { icon: '▲', name: 'Next.js' },
    { icon: '💛', name: 'JavaScript' },
    { icon: '🔷', name: 'TypeScript' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐍', name: 'Python' },
    { icon: '☕', name: 'Java' },
    { icon: '🐘', name: 'PostgreSQL' }
  ];

  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-tag">02 — Keahlian</div>
        <h2 className="section-title">Tech <span className="accent">Stack</span></h2>
        <div className="divider"></div>

        <div className="skills-container reveal">
          <div className="skill-category">
            <h3>Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span className="skill-name"><span className="icon">{skill.icon}</span> {skill.name}</span>
                  <span className="skill-pct">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-fill" 
                    data-width={skill.percent / 100}
                    ref={el => skillBarsRef.current[index] = el}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skill-category">
            <h3>Backend & Tools</h3>
            {backendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span className="skill-name"><span className="icon">{skill.icon}</span> {skill.name}</span>
                  <span className="skill-pct">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-fill" 
                    data-width={skill.percent / 100}
                    ref={el => skillBarsRef.current[frontendSkills.length + index] = el}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-grid reveal">
          {techStack.map((tech, index) => (
            <div className="tech-card" key={index}>
              <span className="tech-icon">{tech.icon}</span>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
