export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #444' }}>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3" style={{ color: '#ffffff', fontSize: '1.5rem' }}>
              Naveen Shaji
            </h5>
            <p style={{ color: '#cccccc', fontSize: '1rem' }}>
              Full-Stack Web Developer passionate about creating innovative solutions 
              that solve real-world problems. Let’s build something amazing together.
            </p>
          </div>
          
          <div className="col-lg-4">
            <h6 className="fw-semibold mb-3" style={{ color: '#ffffff', fontSize: '1.25rem' }}>
              Quick Links
            </h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#home" className="text-decoration-none" style={{ color: '#cccccc', fontSize: '1rem' }}>
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a href="#projects" className="text-decoration-none" style={{ color: '#cccccc', fontSize: '1rem' }}>
                  Projects
                </a>
              </li>
              <li className="mb-3">
                <a href="#skills" className="text-decoration-none" style={{ color: '#cccccc', fontSize: '1rem' }}>
                  Skills
                </a>
              </li>
              <li className="mb-3">
                <a href="#contact" className="text-decoration-none" style={{ color: '#cccccc', fontSize: '1rem' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h6 className="fw-semibold mb-3" style={{ color: '#ffffff', fontSize: '1.25rem' }}>
              Connect
            </h6>
            <div className="mb-3">
              <span className="fw-medium" style={{ color: '#ffffff', fontSize: '1rem' }}>
                Email:{' '}
              </span>
              <a 
                href="mailto:naveenshaji456@gmail.com"
                className="text-decoration-none"
                style={{ color: '#0d6efd', fontSize: '1rem' }}
              >
                naveenshaji456@gmail.com
              </a>
            </div>
            <div>
              <span className="fw-medium" style={{ color: '#ffffff', fontSize: '1rem' }}>
                WhatsApp:{' '}
              </span>
              <a 
                href="https://wa.me/+919061949268"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ color: '#0d6efd', fontSize: '1rem' }}
              >
                +91-9061949268
              </a>
            </div>
          </div>
        </div>
        
        <hr style={{ borderColor: '#444', margin: '2rem 0' }} />
        
        <div className="text-center">
          <p style={{ color: '#cccccc', fontSize: '0.95rem', marginBottom: 0 }}>
            © {new Date().getFullYear()} Naveen Shaji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
