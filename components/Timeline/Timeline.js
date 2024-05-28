import React, { useEffect } from "react";
import sal from "sal.js";

import "venobox/dist/venobox.min.css";

import TimnelineData from "../../data/home.json";
import Link from "next/link";

const Timeline = () => {
  useEffect(() => {
    sal();

    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);
  return (
    <>
      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="timeline-style-two bg-flashlight bg-color-blackest">
                <div className="row row--0">
                  {TimnelineData &&
                    TimnelineData.timeline.map((data, index) => (
                      <div
                        className="col-lg-4 col-md-4 rainbow-timeline-single dark-line"
                        key={index}
                      >
                        <div className="rainbow-timeline">
                          <h6
                            className="title"
                            data-sal="slide-up"
                            data-sal-duration="700"
                            data-sal-delay="200"
                          >
                            {data.title}
                          </h6>
                          <div className="progress-line">
                            <div className="line-inner"></div>
                          </div>
                          <div className="progress-dot">
                            <div className="dot-level">
                              <div className="dot-inner"></div>
                            </div>
                          </div>
                          <p
                            className="description"
                            data-sal="slide-up"
                            data-sal-duration="700"
                            data-sal-delay="300"
                          >
                            {data.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
