import { companyInfo } from "../data/companyInfo";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container py-5">

        <div className="row">

          {/* Company Identity */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h5 className="fw-bold text-white">
              {companyInfo.name}
            </h5>
            <p className="text-muted mb-2">
              {companyInfo.tagline}
            </p>
            <p className="footer-closing">
              We believe great partnerships start with a conversation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-lg-6">
            <h6 className="fw-semibold text-white mb-3">
              Quick Links
            </h6>
            <ul className="footer-links list-unstyled">
              <li onClick={() => scrollToSection("about")}>
                About
              </li>
              <li onClick={() => scrollToSection("services")}>
                Services
              </li>
              <li onClick={() => scrollToSection("contact")}>
                Contact
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center mt-4 pt-3">
          © 2026 Capstone Innovations. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
