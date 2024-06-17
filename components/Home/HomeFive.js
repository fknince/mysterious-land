import "venobox/dist/venobox.min.css";
import bannerImg from "../../public/images/banner/banner-image-04.png";
import Timeline from "@/components/Timeline/Timeline";
import { useState } from "react";

const HomeFive = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("BkWyc14g3NzUeqTupj4WnT3GJQELsP5vykkQ4JEL3ceu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

        .gradient-div {
          background: linear-gradient(45deg, #3f7489, #071020);
          padding: 20px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .copy-button {
          background: transparent;
          border: 1px solid #fff;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          color: #fff;
        }

        .copied-message {
          color: green;
          font-size: 12px;
          margin-left: 10px;
        }
      `}</style>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1" style={{ marginBottom: "30px" }}
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
            <div className="col-lg-12 col-xl-12 order-1 order-lg-2" style={{ marginTop: "10px" }}>
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center" style={{ position: "relative", padding: 10, borderRadius: 10, overflow: "hidden" }}>
                <div className="gradient-div">
                  <h3 style={{textAlign:"center"}}>BkWyc14g3NzUeqTupj4WnT3GJQELsP5vykkQ4JEL3ceu</h3>
                  <button className="copy-button" onClick={handleCopy}>
                    {copied ? "Copied!" : "Copy"}
                  </button>
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
