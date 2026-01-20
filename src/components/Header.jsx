import logo from "../assets/images/Logo_Color@2x.png";
import "../assets/styles/index.css";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg header-bg sticky-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Capstone Innovations"
            width="180"
            height="50"
            className="d-inline-block align-text-top"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </span>
            </li>

            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => scrollToSection("services")}
              >
                Services
              </span>
            </li>

            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </span>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;
