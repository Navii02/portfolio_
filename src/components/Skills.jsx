export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Angular", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material-UI", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ],
      color: "primary"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "JWT Authentication", level: 90 },
        { name: "Socket.io", level: 85 }
      ],
      color: "success"
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "DigitalOcean", level: 80 }
      ],
      color: "warning"
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "Electron", level: 85 },
        { name: "Babylon.js", level: 85 }
      ],
      color: "info"
    }
  ];

  return (
    <section id="skills" className="py-5 gradient-bg">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 gradient-text">
            Skills & Expertise
          </h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="row g-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="col-lg-4">
              <div className={`card bg-${category.color} bg-opacity-10 border-${category.color} border-opacity-25 h-100 animate-slide-up`}>
                <div className="card-body">
                  <h5 className={`card-title text-${category.color} fw-bold mb-4`}>
                    {category.title}
                  </h5>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-light fw-medium">
                            {skill.name}
                          </span>
                          <span className="text-muted small">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="progress" style={{ height: '8px' }}>
                          <div
                            className={`progress-bar bg-${category.color}`}
                            role="progressbar"
                            style={{ width: `${skill.level}%` }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}