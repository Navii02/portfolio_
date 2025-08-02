export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 gradient-text" style={{ color: '#ffffff' }}>
            Client Testimonials
          </h2>
          <p className="lead col-lg-8 mx-auto" style={{ color: '#cccccc', fontSize: '1.25rem' }}>
            What people say about working with me
          </p>
        </div>
        
        <div className="row g-4">
          <div className="col-12">
            <div className="card h-100 animate-slide-up" style={{ backgroundColor: '#2a2a2a', border: '1px solid #444' }}>
              <div className="card-body text-center" style={{ color: '#cccccc' }}>
                <p className="card-text fs-4 mb-0" style={{ color: '#cccccc' }}>
                  Testimonials coming soon!
                </p>
                <p className="card-text mt-2" style={{ color: '#cccccc', fontSize: '1rem' }}>
                  I’m excited to work with clients and share their feedback here in the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commented-out template for future testimonials */}
        {/*
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="col-lg-4">
              <div className="card h-100 animate-slide-up" style={{ backgroundColor: '#2a2a2a', border: '1px solid #444' }}>
                <div className="card-body">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill" style={{ color: '#ffc107' }}></i>
                    ))}
                  </div>
                  
                  <p className="card-text mb-4 fst-italic" style={{ color: '#cccccc' }}>
                    "{testimonial.content}"
                  </p>
                  
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-0" style={{ color: '#ffffff' }}>
                        {testimonial.name}
                      </h6>
                      <small style={{ color: '#cccccc' }}>
                        {testimonial.role}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}