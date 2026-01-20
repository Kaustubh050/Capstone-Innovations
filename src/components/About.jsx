import { useEffect, useRef } from "react";

function About() {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-5 bg-light" ref={aboutRef}>
      <div className="container">

        {/* Section Heading */}
        <div className="about-hero text-center mb-5 animate slide-up">
  <h2 className="fw-bold display-5 text-white">About Us</h2>
  <div className="accent-line mx-auto my-3"></div>
</div>


        {/* Intro */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <p className="lead text-center animate slide-up">
              We specialize in producing precision-engineered components for automotive and industrial
              sectors, delivering high-quality fabrication, machining, and press solutions that meet
              strict quality, dimensional, and performance standards.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="row mb-5">

  {/* Vision – from LEFT */}
  <div className="col-12 col-lg-6 mb-4 mb-lg-0 animate slide-left">
    <div className="d-flex align-items-start">
      <div className="icon-circle me-3">
        <i className="bi bi-eye"></i>
      </div>
      <div>
        <h4 className="fw-semibold mb-1">Our Vision</h4>
        <p className="mb-0">
          To become a globally trusted leader in industrial fabrication,
          machining, and press components.
        </p>
      </div>
    </div>
  </div>

  {/* Mission – from RIGHT */}
  <div className="col-12 col-lg-6 animate slide-right">
    <div className="d-flex align-items-start">
      <div className="icon-circle me-3">
        <i className="bi bi-bullseye"></i>
      </div>
      <div>
        <h4 className="fw-semibold mb-1">Our Mission</h4>
        <p className="mb-0">
          To deliver reliable, innovative, and cost-efficient manufacturing
          solutions through advanced technology, skilled expertise, and
          continuous improvement.
        </p>
      </div>
    </div>
  </div>

</div>


        {/* Core Values */}
        <div className="row text-center mb-5">

  <div className="col-12 col-lg-3 mb-4 animate slide-up delay-1">
    <div className="value-card h-100">
      <i className="bi bi-award value-icon"></i>
      <h6 className="fw-bold mt-3">Quality First</h6>
      <p className="small mt-2">
        Commitment to precision, consistency, and excellence.
      </p>
    </div>
  </div>

  <div className="col-12 col-lg-3 mb-4 animate slide-up delay-2">
    <div className="value-card h-100">
      <i className="bi bi-shield-check value-icon"></i>
      <h6 className="fw-bold mt-3">Safety & Reliability</h6>
      <p className="small mt-2">
        Safe processes and dependable outcomes across all operations.
      </p>
    </div>
  </div>

  <div className="col-12 col-lg-3 mb-4 animate slide-up delay-3">
    <div className="value-card h-100">
      <i className="bi bi-people value-icon"></i>
      <h6 className="fw-bold mt-3">Customer Focus</h6>
      <p className="small mt-2">
        Solutions tailored to meet customer requirements and expectations.
      </p>
    </div>
  </div>

  <div className="col-12 col-lg-3 mb-4 animate slide-up delay-4">
    <div className="value-card h-100">
      <i className="bi bi-shield-lock value-icon"></i>
      <h6 className="fw-bold mt-3">Integrity & Transparency</h6>
      <p className="small mt-2">
        Honest communication and ethical business practices.
      </p>
    </div>
  </div>

</div>


        {/* Capabilities */}
        <div className="row justify-content-center mt-4">
  <div className="col-12 col-lg-10 text-center animate slide-up">
    <p className="fw-medium fs-5">
      From CNC machining and press components to large-scale fabrication
      and structural assemblies, we support end-to-end manufacturing
      needs with consistency, reliability, and scale.
    </p>
  </div>
</div>


      </div>
    </section>
  );
}

export default About;
