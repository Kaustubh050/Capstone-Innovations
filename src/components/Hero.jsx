import heroImage from "../assets/images/CNC.jpg";

function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Image Section */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
  <img
    src={heroImage}
    alt="Manufacturing illustration"
    className="hero-image img-fluid"
  />
</div>



          {/* Text Section */}
          <div className="col-12 col-lg-6 text-center text-lg-start">

            {/* Tagline in card */}
            <div className="hero-card mb-4">
              <h1 className="display-6 fw-bold m-0">
                Precision. Performance. Partnership.
              </h1>
              <p className="lead mt-3">
                High-precision fabrication, machining, and press component solutions for industrial and automotive sectors.
              </p>
            </div>

            {/* Heading with left-right animation */}
            <h2 className="split-heading mt-3">
              <span className="split-left">
                Precision Manufacturing&nbsp;
              </span>
              <span className="split-right">
                & Fabrication Solutions
              </span>
            </h2>

            {/* Intro paragraph with left-right animation */}
            <p className="lead mt-4">
  We specialize in manufacturing precision-engineered components for the automotive and industrial sectors,
  using aluminium, steel, and galvanized iron to deliver high-quality, reliable, and scalable fabrication,
  machining, and press solutions that meet strict performance and dimensional standards.
</p>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
