import Image from "next/image";

import splitImg from "../../public/images/split/split-8.svg";
import Link from "next/link";

const Split = () => {
  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">WHAT IS GENOM</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <Image
                      className="radius"
                      src={splitImg}
                      alt="split Images"
                      style={{ transition: "transform 0.3s" }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Streamline Operations with AI
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Genom harnesses generative AI to transform how businesses
                      operate, offering tools that require no coding expertise.
                      Our platform significantly reduces the time and complexity
                      of developing AI solutions. With modules for document
                      processing, prompt management, and robust model testing,
                      Genom ensures efficient, accurate, and scalable AI
                      implementations. Revolutionize your operational efficiency
                      and innovation with Genom where technology meets
                      simplicity.
                    </p>

                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="/contact-us">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Split;
