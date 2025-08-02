export default function Services() {
  const services = [
    {
      icon: "bi-code-slash",
      title: "Full-Stack Web Development",
      description: "Build complete web applications from frontend to backend using modern technologies like React, Node.js, and MongoDB.",
      features: ["Custom Web Applications", "Database Design", "API Development", "Responsive Design"]
    },
    {
      icon: "bi-palette",
      title: "UI/UX Implementation",
      description: "Convert your Figma designs into pixel-perfect, responsive React applications with smooth animations and interactions.",
      features: ["Figma to React", "Responsive Design", "Animation Implementation", "Cross-browser Compatibility"]
    },
    {
      icon: "bi-speedometer2",
      title: "Performance Optimization",
      description: "Improve your existing applications' speed, performance, and user experience through code optimization and best practices.",
      features: ["Code Optimization", "Bundle Size Reduction", "SEO Improvements", "Load Time Optimization"]
    },
    {
      icon: "bi-bug",
      title: "Bug Fixes & Maintenance",
      description: "Fix bugs, resolve technical issues, and maintain your existing web applications to ensure smooth operation.",
      features: ["Bug Resolution", "Code Refactoring", "Security Updates", "Feature Enhancements"]
    },
    {
      icon: "bi-phone",
      title: "Mobile-First Development",
      description: "Create mobile-responsive applications that work seamlessly across all devices and screen sizes.",
      features: ["Mobile Optimization", "Progressive Web Apps", "Touch-friendly UI", "Cross-platform Compatibility"]
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Project Consultation",
      description: "Get expert advice on technology choices, architecture decisions, and project planning for your web development needs.",
      features: ["Technology Stack Selection", "Architecture Planning", "Project Roadmap", "Best Practices Guidance"]
    }
  ];

  return (
    <section id="services" className="py-5" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 gradient-text" style={{ color: '#ffffff' }}>
            What I Offer
          </h2>
          <p className="lead col-lg-8 mx-auto" style={{ color: '#cccccc', fontSize: '1.25rem' }}>
            Professional web development services to bring your ideas to life
          </p>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.title} className="col-lg-4 col-md-6">
              <div className="card h-100 animate-slide-up" style={{ backgroundColor: '#2a2a2a', border: '1px solid #444' }}>
                <div className="card-body" style={{ color: '#ffffff' }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded p-3 me-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.25)' }}>
                      <i className={`${service.icon} fs-4`} style={{ color: '#0d6efd' }}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-0" style={{ color: '#ffffff' }}>
                      {service.title}
                    </h5>
                  </div>
                  
                  <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '1rem' }}>
                    {service.description}
                  </p>
                  
                  <ul className="list-unstyled">
                    {service.features.map((feature) => (
                      <li key={feature} className="d-flex align-items-center mb-2" style={{ color: '#cccccc', fontSize: '0.95rem' }}>
                        <div className="rounded-circle me-3" style={{ width: '8px', height: '8px', backgroundColor: '#0d6efd' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="#contact" className="btn btn-primary-custom btn-lg" style={{ backgroundColor: '#0d6efd', color: '#ffffff' }}>
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}