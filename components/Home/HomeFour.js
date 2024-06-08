import { useEffect } from "react";
import "venobox/dist/venobox.min.css";
import bannerImg from "../../public/images/banner/banner-image-04.png";
import Timeline from "@/components/Timeline/Timeline";

const HomeFour = () => {


  useEffect(() => {
    const handleResize = () => {
      const divImage = document.getElementById("image-div4");
      if (window.innerWidth <= 768) {
        divImage.style.height = "auto";
      } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        divImage.style.height = "auto";
      } else {
        divImage.style.height = "600px";
      }
    };

    handleResize(); // Call the function to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
      `}</style>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h4 className="subtitle">
                  <span className="theme-gradient">PROJECT ROADMAP</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-xl-12 order-1 order-lg-2"
              style={{ marginTop: "10px" }}
            >
              <div
                className="frame-image frame-image-bottom bg-flashlight video-popup icon-center"
                style={{
                  position: "relative",
                  padding: 10,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    width: "calc(100% - 10px)",
                    height: "calc(100% - 10px)",
                    backgroundImage: `url(${bannerImg.src})`,
                    backgroundPosition: "center",
                    opacity: 0.9,
                    zIndex: 1,
                    borderRadius: 10,
                    backgroundSize: "cover"

                  }}
                ></div>
                <div
                  id="image-div4"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "#fff",
                    padding: "20px",
                    textAlign: "center",
                    width: "calc(100% - 10px)",
                    height: "600px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Timeline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFour;
