import { useEffect, useRef } from "react";
import { companyInfo } from "../data/companyInfo";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".animate")
            .forEach(el => el.classList.add("show"));
        }
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-5 contact-section" ref={contactRef}>
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5 animate slide-up">
          <h2 className="fw-bold">Contact Us</h2>
          <div className="accent-line mx-auto my-3"></div>
          <p className="text-muted">
            Connect with us for precision manufacturing solutions
          </p>
        </div>

        {/* Contact Details */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

            {/* Phone */}
            <div className="contact-row animate slide-left">
              <div className="contact-icon-wrapper">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <span className="contact-value">
                  {companyInfo.phone}
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="contact-row animate slide-right">
              <div className="contact-icon-wrapper">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  {companyInfo.email}
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="contact-row animate slide-up">
              <div className="contact-icon-wrapper">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="contact-text">
                <span className="contact-label">Address</span>
                <span className="contact-value">
                  {companyInfo.address}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
