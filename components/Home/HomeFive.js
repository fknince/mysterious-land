import "venobox/dist/venobox.min.css";
import bannerImg from "../../public/images/banner/banner-image-04.png";
import Timeline from "@/components/Timeline/Timeline";

const HomeFive = () => {


  

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
      `}</style>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1"  style={{ marginBottom: "30px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h4 className="subtitle">
                  <span className="theme-gradient">CA CONTRACT</span>
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
                    backgroundColor: "#3f7489",
                    backgroundPosition: "center",
                    opacity: 0.9,
                    zIndex: 1,
                    borderRadius: 10,
                    backgroundSize: "cover"

                  }}
                ></div>
                <div
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
                    height: "auto"
                  }}
                >
                  <h1>BkWyc14g3NzUeqTupj4WnT3GJQELsP5vykkQ4JEL3ceu</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFive;
