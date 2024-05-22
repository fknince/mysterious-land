import { useEffect } from "react";
import Link from "next/link";
import "venobox/dist/venobox.min.css";
import bannerImg from "../../public/images/banner/banner-image-03.png";
import Separator from "@/pages/separator";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Registering the components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const HomeTwo = () => {
  const data = {
    labels: ["LIQUIDITY", "LISTING", "BURN", "GROWTH & AIRDROP", "TEAM"],
    datasets: [
      {
        data: [19, 6, 6, 6, 4],
        backgroundColor: [
          "#e06a1b",
          "#8e3e05",
          "#17e869",
          "#f7a72e",
          "#33777f",
        ],
        hoverBackgroundColor: [
          "#e06a1b",
          "#8e3e05",
          "#17e869",
          "#f7a72e",
          "#33777f",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        display: true,
        color: "white",
        formatter: (value, context) => {
          return `${value}%`;
        },
      },
    },
  };

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const pElement = document.getElementById("image-text2");
      const pElement2 = document.getElementById("image-text2_2");
      const divImage = document.getElementById("image-div2");
      if (window.innerWidth <= 768) {
        pElement.style.fontSize = "15px";
        pElement2.style.fontSize = "15px";
        divImage.style.height = "400px";
      } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        pElement.style.fontSize = "25px";
        pElement2.style.fontSize = "25px";
        divImage.style.height = "400px";
      } else {
        pElement.style.fontSize = "35px";
        pElement2.style.fontSize = "35px";
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
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">TOKENECOMİC</span>
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
                  padding: 5,
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
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.9,
                    zIndex: 1,
                    borderRadius: 10,
                  }}
                ></div>
                <div
                  id="image-div2"
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
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "10px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <p
                        id="image-text2"
                        style={{
                          color: "white",
                          fontSize: "35px",
                          fontFamily: "Indie Flower",
                          lineHeight: 1.2,
                          margin: 0,
                        }}
                      >
                        No private sale
                      </p>
                      <p
                        id="image-text2_2"
                        style={{
                          color: "white",
                          fontSize: "35px",
                          fontFamily: "Indie Flower",
                          lineHeight: 1.2,
                          margin: 0,
                        }}
                      >
                        %0 Tax
                      </p>
                    </div>
                    <div
                      style={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Doughnut data={data} options={options} />
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

export default HomeTwo;
