import React ,{useState}from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";


const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="faq-item">
    <div className="faq-header" onClick={toggle}>
      <span>{question}</span>
      <span className="icon">{isOpen ? '×' : '+'}</span>
    </div>
    {isOpen && (
      <div className="faq-content">
        {answer}
      </div>
    )}
  </div>
);

function Home() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    appendDots: dots => (
      <div
        style={{
          position: "relative",
          top: "-10px",
         
        }}
      >
       
      </div>
    ),
    
  };

  const images = [
    { src: "/images/img8.jpg", title: "Lorem Ipsum" },
    { src: "/images/img9.jpg", title: "Lorem Ipsum" },
    { src: "/images/img11.jpg", title: "Lorem Ipsum" },
    { src: "/images/last.png", title: "Lorem Ipsum"}
    
  ];

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  //icon
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'Who can invest on leveled?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.',
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.',
    },
    {
      question: 'What kind of returns can I expect from SMB investing?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.',
    },
    {
      question: 'Are there any risks associated with SMB investing?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.',
    },
    {
      question: 'What is the minimum investment amount?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.',
    },
    // Add more FAQs here
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <img
              src="/images/image15.jpg "
              alt=" "
              style={{ width: "150px" }}
            />
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
            <div className="collapse navbar-collapse p-2" id="navbarNav">
              <ul className="navbar-nav ms-auto" style={{ marginLeft: "10px" }}>
                <li className="nav-item mb-2 ">
                  <a
                    className="nav-link text-decoration-none text-dark"
                    href="#"
                  >
                    Investments
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    className="nav-link text-decoration-none text-dark"
                    href="#"
                  >
                    Owners/Brokers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    className="nav-link text-decoration-none text-dark"
                    href="#"
                  >
                    Lorem Ipsum
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    className="btn btn-light custom-btn border-dark me-2"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    className="btn btn-dark custom-btn text-white border-dark"
                    href="#"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="fs-1 text-center mt-5">
                Own a piece of Main Street: Join the <br /> SMB revolution!
              </p>
              <p className="text-center fs-4 text-muted mt-4">
                Cherish your portfolio that attracts Small Medium Businesses{" "}
                <br />
                without any of the operational burden
              </p>
              <button className="btn btn-dark  fs-4 border rounded-4 mt-5">
                Join the Waitlist <span className="fs-4">→</span>
              </button>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-5">
                <div className="col ju">
                  <img
                    className="img-fluid"
                    src="/images/img2.jpg"
                    alt="Description"
                  />
                </div>
                <div className="col d-flex flex-column justify-content-end">
                  <img
                    className="img-fluid"
                    src="/images/img3.jpg"
                    alt="Description"
                  />
                </div>
                <div className="col d-flex flex-column justify-content-end">
                  <img
                    className="img-fluid"
                    src="/images/img4.jpg"
                    alt="Description"
                  />
                </div>
                <div className="col d-flex flex-column justify-content-end">
                  <img
                    className="img-fluid"
                    src="/images/img6.png"
                    alt="Description"
                  />
                </div>
                <div className="col">
                  <img
                    className="img-fluid"
                    src="/images/img5.jpg"
                    alt="Description"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5 color">
        <div class="row">
          <div class="col-md-3">
            <div class="info-card">
              <p>
                <small>FranShares Waitlist counter</small>
              </p>
              <h5>41,974</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-card">
              <p>
                <small>An investor from Connecticut intends to invest</small>
              </p>
              <h5>$2,000</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-card">
              <p>
                <small>An investor from Oregon intends to invest</small>
              </p>
              <h5>$20,000</h5>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-card">
              <p>
                <small>An investor from New Jersey intends to invest</small>
              </p>
              <h5>$20,000</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row bg-light justify-content-center">
            <div className="col text-center">
              <p>
                <img
                  src="/images/a.jpg"
                  className="img-fluid"
                  alt="Description"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container bg-light">
          <div className="row mt-5">
            <div className="col-sm-6">
              <p className="fs-3 m-5 fw-bold">
                Our impact and <br />
                achievements
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mt-5">
                Our mission is to democratize SMB ownership, enabling people to
                <br /> invest fractionally in local businesses. We aim to foster
                sustainable
                <br /> growth, create jobs, and fuel local economies, all while
                providing an
                <br /> opportunity for building passive income and generational
                wealth.
              </p>
              <p className="d-flex mt-4">
                <p className="me-5 text-muted ">
                  <span className="fw-bold text-dark fs-3">120</span> <br />
                  Assets under managennt
                </p>
                <p className="text-muted">
                  <span className="fw-bold text-dark fs-3">500$</span> <br />
                  Of Cash flow distribution
                </p>
              </p>
              <p className="d-flex mt-4">
                <p className="me-5 text-muted">
                  <span className="fw-bold fs-3 text-dark">10-40%</span>
                  <br /> Return on Investments
                </p>
                <p className="text-muted" style={{ marginLeft: "15px" }}>
                  <span className="fw-bold text-dark fs-3">500</span> <br />
                  Existing investor
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <p className="fw-bold text-center" style={{ fontSize: "30px" }}>
            Win-win business model
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center ">
          <p className="text-center w-75">
            Our business model is designed to create a win-win situation for
            both investors and business owners. Investors can earn passive
            income and build generational wealth, while business owners can
            access capital and grow their businesses.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 text-start">
            <div className="text-content border rounded fs-6 ">
              <p className="fs-2 fw-bold text-start">The Problem</p>
              <p className="fs-6 fw-normal text-start">
                Small businesses are the cornerstone of the American economy,
                providing ~50% of all employment. A lot of these businesses are
                owned by boomers, who will be retiring in the next 5 years. 70%
                of these retiring owners do not have a succession plan. This
                will result in $5T assets available for sale. This is going to
                set the stage for the largest wealth transfer of our generation
                from baby boomers to millennials. However, most millennials are
                in corporate jobs and cannot work out the time/money/risk
                tradeoffs to buy and operate these businesses. They will either
                shut down or be taken over by Private Equity / large
                corporations. Main street will never look the same again!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="/images/img1.jpg"
              alt="Description"
              style={{ marginBottom: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5">
            <img className="w-100" src="/images/img7.jpg" alt="Description" />
          </div>
          <div className="col-md-6">
            <div className="border rounded fs-6 p-4">
              <p className="fs-2 fw-bold text-start">Our solution</p>
              <p className="fs-6 fw-normal text-start ">
                Small businesses are the cornerstone of the American economy,
                providing ~50% of all employment. A lot of these businesses are
                owned by boomers, who will be retiring in the next 5 years. 70%
                of these retiring owners do not have a succession plan. This
                will result in $5T assets available for sale. This is going to
                set the stage for the largest wealth transfer of our generation
                from baby boomers to millennials. However, most millennials are
                in corporate jobs and cannot work out the time/money/risk
                tradeoffs to buy and operate these businesses. They will either
                shut down or be taken over by Private Equity / large
                corporations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <div className="d-flex justify-content-between align-items-center p-3">
                <p className="fs-3 mb-0">Industry Verticals</p>
                <button className="btn btn-dark rounded-4">Investments</button>
              </div>

              <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                  {images.map((image, index) => (
                    <div key={index} className="slide">
                      <img
                        src={image.src}
                        alt={image.title}
                        style={image.style || { width: "100%", height: "300px" }}
                      />
                      <p>{image.title}</p>
                    </div>
                  ))}
                </Slider>
                <div className="arrows-container text-center">
                  <button className="prev" onClick={previous}>
                    ←
                  </button>
                  <button className="next" onClick={next}>
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid how-it-works-section">
        <div className="container text-center">
          <h2>How it works</h2>
          <div className="row align-items-center mt-4">
            <div className="col-lg-8 mb-3">
              <img
                className="img-fluid step-image"
                src="/images/img13.jpg"
                alt="Browse"
              />
              <h3 className="mt-3 text-start">1. Browse</h3>
              <p className="text-start">
              Browse Leveled SMBs, each listed after due diligence and operator
              has been put in place.
            </p>
            </div>
            <div className="col-lg-2 mb-5">
              <div className="step-placeholder blue-bg"></div>
              <h3 className="mt-3">2. Invest</h3>
            </div>
            <div className="col-lg-2 mb-5">
              <div className="step-placeholder blue-bg"></div>
              <h3 className="mt-3">3. Earn</h3>
            </div>
          </div>
        </div>
      </div>
        
      <div className="text-center mb-4 mt-5">
        <h2 className="benefits">Benefits</h2>
      </div>

      <div className="container benefits-section my-5">
        <div className="row">
          {/* Image Column */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="/images/img14.jpg" // Replace with your image path
              alt="Person enjoying the benefits"
              className="img-fluid rounded"
            />
          </div>
          {/* Text Column */}
          <div className="col-md-6 benefits-content">
            <div className="mb-4">
              <h3 className="text-black ">01 Passive income</h3>
              <br></br>
              <p>
                Generate cash flow without any of the management and operational
                burden of owning and operating a business.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-black underline">02 Diversify portfolio</h3>
              <br></br>
              <p>
                SMBs have consistently generated healthy profits for decades
                without being vulnerable to volatility from financial and real
                estate markets...
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-black underline">
                03 No operational headache
              </h3>
              <br></br>
              <p>
                Owning an SMB entails time and effort to operate it
                successfully. We take away that pain and allow you to own a
                piece of the SMB hassle-free.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-black underline">04 Value appreciation</h3>
              <br></br>
              <p>
                Enjoy the appreciation of your investment while we implement
                best practices, utilize economies of scale...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-4 mt-7">
        <h2 className="benefits">Frequently asked questions</h2>
      </div>

      <div className="container mt-5">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
      <div className="bg-dark text-light" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="fs-5">Success Stories</p>
              <p className="fs-2">
                "The Platform is very easy to use, and I now have a <br />
                stable passive income. I really like it, highly <br />
                recommended!"
              </p>
            </div>
          </div>
        </div>
        <footer>
          {/* Testimonial and Arrows */}
          <div className="container-fluid bg-dark text-light py-5">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col d-flex align-items-center">
                  <img
                    src="https://picsum.photos/200"
                    className="img-update border rounded-circle me-3"
                    alt="Profile Image"
                    style={{ width: "55px" }}
                  />
                  <div>
                    <p className="mb-0">David Smith</p>
                    <samp className="text-light">SEO Lorem ipsum</samp>
                  </div>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <button className="btn text-light border rounded-circle fs-5 text-center me-2">
                    ←
                  </button>
                  <button className="btn text-light border rounded-circle fs-5 text-center">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="container-fluid  text-white mb-5 ">
            <div className="container bg-info rounded-4  p-5 text-center">
              <p className="fs-4 mb-5">
                Start Investing With Us <br />
                <span className="fs-5">
                  Convert to create an account and invest on the platform to{" "}
                  <br />
                  enjoy monthly cash flow/dividend and appreciation.
                </span>
              </p>
              <button className="btn btn-light text-dark rounded-5 px-4 mb-5">
                Join the Waitlist →
              </button>
            </div>
          </div>
          {/* Links */}
          <div className="container-fluid bg-dark text-light">
            <div className="container">
              <div className="row">
                <div className="col mb-3 mt-5">
                  <ul className="d-flex list-unstyled mb-0">
                    <li className="me-3">
                      <a href="#" className="text-light text-decoration-none">
                        Investments
                      </a>
                    </li>
                    <li className="me-3">
                      <a href="#" className="text-light text-decoration-none">
                        Owners/Brokers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light text-decoration-none">
                        Lorem Ipsum
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col d-flex justify-content-end align-items-center mt-5 mb-3">
                  <p className="mb-0 me-2">✉</p>
                  <a href="mailto:support@getleveled.co" className="text-light">
                    Support@getleveled.co
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="container-fluid bg-dark text-light py-3">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="fs-2 mb-0">LEVELED</p>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <p className="mb-0">© 2024 Leveled. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Information */}
          <div className="container-fluid bg-dark text-light py-5">
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio alias nam eaque est inventore, dolor, maxime laborum
                hic voluptas nihil at sequi soluta obcaecati illo architecto
                officia. Distinctio deleniti nobis, natus perspiciatis doloribus
                doloremque corrupti eligendi temporibus quasi adipisci magnam
                unde commodi ipsum explicabo iste, neque perferendis vero.
                Doloribus odio tenetur accusamus modi necessitatibus laborum
                earum quidem mollitia animi dolores, dignissimos asperiores
                suscipit. Eligendi qui maiores placeat quasi totam voluptatem
                nostrum iste sed ut laborum eius harum facere, ex earum,
                asperiores reprehenderit minima. Commodi qui, error eaque
                suscipit fugit, voluptate quod sed possimus aperiam harum unde
                voluptatum eius vitae! Provident. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam asperiores saepe
                consequatur! Nisi beatae at saepe facere odio labore.
                Dignissimos blanditiis nisi corrupti, saepe autem est quibusdam
                laudantium velit dolorem! Iste laborum provident quidem beatae
                eos. Nisi, amet quis! Beatae dolore quas necessitatibus
                reprehenderit eaque quae non inventore nesciunt quibusdam,
                temporibus, consequuntur nobis unde magni nulla labore eum nisi
                ex asperiores earum deleniti commodi impedit sequi vitae
                dignissimos! Dignissimos deserunt sint vero expedita, laboriosam
                possimus velit reprehenderit, laborum ullam odio sapiente,
                nesciunt perferendis rerum! Totam autem nesciunt quis quaerat ut
                officiis corrupti tempore numquam! Mollitia quod tempore esse
                omnis distinctio?
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
