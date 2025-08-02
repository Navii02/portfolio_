export default function Hero() {
  return (
    <section id="home" className="hero-section gradient-bg d-flex align-items-center position-relative py-5">
      <div className="hero-decoration position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="animate-fade-in">
              <h1 className="display-3 fw-bold mb-3 text-white">
                Hi, I'm <span className="gradient-text">Naveen Shaji</span>
              </h1>

              <p className="lead fs-3 text-light mb-4 animate-slide-up">
                Full-Stack Web Developer | React, Node.js, MongoDB, Angular, Next.js, PostgreSQL, MySQL
              </p>

              <div className="col-lg-8 mx-auto mb-4 animate-slide-up">
                <p className="fs-5 text-light">
                  I specialize in building scalable web applications using React, Angular, Next.js, and Node.js with databases like MongoDB, PostgreSQL, and MySQL. 
                  I've developed real-world systems like CRMs, e-commerce sites, and automation tools. 
                  Passionate about creating efficient, user-friendly solutions that solve real problems.
                </p>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center animate-slide-up">
                <a href="#projects" className="btn btn-primary-custom btn-lg px-4">
                  <i className="bi bi-arrow-down me-2"></i>
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-1">
        <i className="bi bi-arrow-down fs-4 text-light animate-bounce"></i>
      </div>
    </section>
  );
}