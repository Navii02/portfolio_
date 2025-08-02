import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link with form data
    const mailtoLink = `mailto:naveenshaji456@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Simulate submission delay and reset form
    setTimeout(() => {
      alert('Your inquiry has been prepared in your email client. Please send the email to submit your message.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#1a1a1a' }}>
      <style>
        {`
          input::placeholder, textarea::placeholder {
            color: #cccccc !important;
            font-size: 0.95rem !important;
            font-style: italic !important;
            opacity: 1 !important;
          }
        `}
      </style>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
            Let’s Collaborate
          </h2>
          <p className="lead col-lg-8 mx-auto" style={{ color: '#cccccc', fontSize: '1.3rem' }}>
            Ready to bring your project to life? Contact me to discuss your vision and requirements.
          </p>
        </div>
        
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-6">
            <div style={{ animation: 'slideIn 0.5s ease-in' }}>
              <h3 className="h2 fw-bold mb-4" style={{ color: '#ffffff' }}>
                Contact Information
              </h3>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded p-3 me-4" style={{ backgroundColor: 'rgba(13, 110, 253, 0.25)' }}>
                    <i className="bi bi-envelope fs-4" style={{ color: '#0d6efd' }}></i>
                  </div>
                  <div>
                    <p className="fw-medium mb-1" style={{ color: '#ffffff', fontSize: '1.1rem' }}>
                      Email
                    </p>
                    <a 
                      href="mailto:naveenshaji456@gmail.com"
                      className="text-decoration-none"
                      style={{ color: '#0d6efd', fontSize: '1rem' }}
                    >
                      naveenshaji456@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="rounded p-3 me-4" style={{ backgroundColor: 'rgba(40, 167, 69, 0.25)' }}>
                    <i className="bi bi-whatsapp fs-4" style={{ color: '#28a745' }}></i>
                  </div>
                  <div>
                    <p className="fw-medium mb-1" style={{ color: '#ffffff', fontSize: '1.1rem' }}>
                      WhatsApp
                    </p>
                    <a 
                      href="https://wa.me/+919876543210"
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
              
              <div className="card h-100" style={{ backgroundColor: '#2a2a2a', border: '1px solid #444' }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4" style={{ color: '#ffffff', fontSize: '1.25rem' }}>
                    Why Work With Me?
                  </h5>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-3" style={{ color: '#cccccc', fontSize: '1rem' }}>
                      <div className="rounded-circle me-3" style={{ width: '8px', height: '8px', backgroundColor: '#0d6efd' }}></div>
                      Rapid project delivery
                    </li>
                    <li className="d-flex align-items-center mb-3" style={{ color: '#cccccc', fontSize: '1rem' }}>
                      <div className="rounded-circle me-3" style={{ width: '8px', height: '8px', backgroundColor: '#0d6efd' }}></div>
                      High-quality, maintainable code
                    </li>
                    <li className="d-flex align-items-center mb-3" style={{ color: '#cccccc', fontSize: '1rem' }}>
                      <div className="rounded-circle me-3" style={{ width: '8px', height: '8px', backgroundColor: '#0d6efd' }}></div>
                      Clear and prompt communication
                    </li>
                    <li className="d-flex align-items-center" style={{ color: '#cccccc', fontSize: '1rem' }}>
                      <div className="rounded-circle me-3" style={{ width: '8px', height: '8px', backgroundColor: '#0d6efd' }}></div>
                      Ongoing support and maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-6">
            <div style={{ animation: 'slideUp 0.5s ease-in' }}>
              <form onSubmit={handleSubmit} className="card h-100" style={{ backgroundColor: '#2a2a2a', border: '1px solid #444' }}>
                <div className="card-body">
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label" style={{ color: '#ffffff', fontSize: '1.1rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      style={{ backgroundColor: '#3a3a3a', color: '#ffffff', border: '1px solid #555', fontSize: '1rem' }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label" style={{ color: '#ffffff', fontSize: '1.1rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      style={{ backgroundColor: '#3a3a3a', color: '#ffffff', border: '1px solid #555', fontSize: '1rem' }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="form-label" style={{ color: '#ffffff', fontSize: '1.1rem' }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Enter the subject"
                      style={{ backgroundColor: '#3a3a3a', color: '#ffffff', border: '1px solid #555', fontSize: '1rem' }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label" style={{ color: '#ffffff', fontSize: '1.1rem' }}>
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your project or inquiry"
                      style={{ backgroundColor: '#3a3a3a', color: '#ffffff', border: '1px solid #555', fontSize: '1rem' }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn w-100"
                    style={{ backgroundColor: '#0d6efd', color: '#ffffff', fontSize: '1.1rem' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}