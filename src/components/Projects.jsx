export default function Projects() {
  const projects = [
    {
      name: "College CRM System",
      description: "A comprehensive customer relationship management system for educational institutions with student tracking, admission management, and automated workflows.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/Navii02/capfront.git",
      demo: "https://ecap.cep.ac.in/",
      features: ["Student Management", "Admission Tracking", "Payment Processing", "Report Generation"]
    },
    {
      name: "Canteen Automation System",
      description: "Smart canteen management system with digital menu, order processing, inventory management, and real-time analytics for food service optimization.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/Navii02/canteenautomation_frontend",
      demo: "https://canteenautomation-frontend-bwda.vercel.app/",
      features: ["Digital Menu", "Order Management", "Inventory Tracking", "Payment Integration"]
    },
    {
      name: "Location-Based E-commerce",
      description: "Innovative e-commerce platform that connects local businesses with customers based on geographical proximity, featuring real-time location services and local delivery.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/Navii02/localshoppefrontend",
      demo: "https://localshoppefrontend.vercel.app/",
      features: ["Location Services", "Local Business Discovery", "Real-time Delivery", "Secure Payments"]
    }
  ];

  return (
    <section id="projects" className="py-5 bg-dark-custom" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 gradient-text" style={{ color: '#ffffff' }}>
            Featured Projects
          </h2>
          <p className="lead col-lg-8 mx-auto" style={{ color: '#cccccc' }}>
            Here are some of my recent projects built using the MERN stack, showcasing my skills in full-stack development. 
            For more projects, visit my{' '}
            <a 
              href="https://github.com/Navii02" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary fw-bold" 
              style={{ color: '#0d6efd', textDecoration: 'underline' }}
            >
              GitHub
            </a>.
          </p>
        </div>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.name} className="col-lg-4 col-md-6">
              <div className="card bg-dark border-custom h-100 card-hover animate-slide-up" style={{ backgroundColor: '#2a2a2a', border: '1px solid #444' }}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover', opacity: 0.9 }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-t from-dark" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', zIndex: 1 }}></div>
                </div>
                
                <div className="card-body d-flex flex-column" style={{ color: '#ffffff', zIndex: 2 }}>
                  <h5 className="card-title fw-bold mb-3" style={{ color: '#ffffff' }}>
                    {project.name}
                  </h5>
                  
                  <p className="card-text mb-3 flex-grow-1" style={{ color: '#cccccc' }}>
                    {project.description}
                  </p>
                  
                  <div className="mb-3">
                    <h6 className="mb-2" style={{ color: '#aaaaaa' }}>Key Features:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="badge bg-primary bg-opacity-25 text-primary"
                          style={{ backgroundColor: 'rgba(13, 110, 253, 0.25)', color: '#0d6efd' }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="mb-2" style={{ color: '#aaaaaa' }}>Tech Stack:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="badge bg-secondary bg-opacity-50 text-light"
                          style={{ backgroundColor: 'rgba(108, 117, 125, 0.5)', color: '#ffffff' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="d-flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light flex-fill"
                      style={{ borderColor: '#ffffff', color: '#ffffff' }}
                    >
                      <i className="bi bi-github me-2"></i>
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary-custom flex-fill"
                      style={{ backgroundColor: '#0d6efd', color: '#ffffff' }}
                    >
                      <i className="bi bi-eye me-2"></i>
                      Demo
                    </a>
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