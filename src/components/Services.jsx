import { useEffect, useRef } from "react";

function Services() {
  const servicesRef = useRef(null);

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

    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <section id="services" className="py-5" ref={servicesRef}>

      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5 animate slide-up">
          <h2 className="fw-bold">Our Services</h2>
          <div className="accent-line mx-auto my-3"></div>
          <p className="text-muted">
            Comprehensive manufacturing capabilities delivered with precision
          </p>
        </div>

        {/* Services Cards */}
        <div className="row">

          {/* 1. Fabrication & Large Assemblies */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 animate slide-up delay-1">
            <div className="service-card h-100">
              <i className="bi bi-building service-icon"></i>
              <h6 className="fw-bold mt-3">
                Fabrication & Large Assemblies
              </h6>
              <p className="small mt-2">
                Heavy fabrication and large-scale structural assemblies executed
                with high precision, consistency, and strict safety standards.
              </p>
            </div>
          </div>

          {/* 2. CNC Machining & Precision Items */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 animate slide-up delay-2">
            <div className="service-card h-100">
              <i className="bi bi-cpu service-icon"></i>
              <h6 className="fw-bold mt-3">
                CNC Machining & Precision Items
              </h6>
              <p className="small mt-2">
                High-accuracy CNC turning and machining of critical components,
                including specialized and precision-engineered parts.
              </p>
            </div>
          </div>

          {/* 3. Press Shop Components */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 animate slide-up delay-3">
            <div className="service-card h-100">
              <i className="bi bi-hammer service-icon"></i>
              <h6 className="fw-bold mt-3">
                Press Shop Components
              </h6>
              <p className="small mt-2">
                Press part manufacturing with 50–200 ton capacity, delivering
                consistent, durable, and repeatable components.
              </p>
            </div>
          </div>

          {/* 4. Sheet Metal Parts & Assembly */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 animate slide-up delay-1">
            <div className="service-card h-100">
              <i className="bi bi-layers service-icon"></i>
              <h6 className="fw-bold mt-3">
                Sheet Metal Parts & Assembly
              </h6>
              <p className="small mt-2">
                Precision sheet metal press parts and assemblies for a wide range
                of industrial applications.
              </p>
            </div>
          </div>

          {/* 5. Tower & Structural Fabrication */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 animate slide-up delay-2">
            <div className="service-card h-100">
              <i className="bi bi-diagram-3 service-icon"></i>
              <h6 className="fw-bold mt-3">
                Tower & Structural Fabrication
              </h6>
              <p className="small mt-2">
                On-site and off-site fabrication and assembly of towers and
                complex structural projects at scale.
              </p>
            </div>
          </div>

          {/* 6. Custom Machining Solutions */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 animate slide-up delay-3">
            <div className="service-card h-100">
              <i className="bi bi-tools service-icon"></i>
              <h6 className="fw-bold mt-3">
                Custom Machining Solutions
              </h6>
              <p className="small mt-2">
                Precision-turned jobs and customized machining solutions tailored
                to specific project requirements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
