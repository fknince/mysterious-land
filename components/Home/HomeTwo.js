import { useEffect } from "react";
import Link from "next/link";
import "venobox/dist/venobox.min.css";
import bannerImg from "../../public/images/banner/banner-image-04.png";
import Separator from "@/pages/separator";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Registering the components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const HomeTwo = () => {
  useEffect(() => {
    const handleResize = () => {
      const pElement = document.getElementById("image-text2");
      const pElement2 = document.getElementById("image-text2_2");
      const pElement3 = document.getElementById("image-text2_3");
      const pElement4 = document.getElementById("image-text2_4");
      const divImage = document.getElementById("image-div2");
      const chartContainer = document.getElementById("chart-container");
      const textContainer = document.getElementById("text-container");
      if (window.innerWidth <= 768) {
        pElement.style.fontSize = "20px";
        pElement2.style.fontSize = "20px";
        pElement3.style.fontSize = "20px";
        pElement4.style.fontSize = "20px";
        divImage.style.height = "400px";
        chartContainer.style.height = "70%";
        textContainer.style.height = "30%";
      } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        pElement.style.fontSize = "20px";
        pElement2.style.fontSize = "20px";
        pElement3.style.fontSize = "20px";
        pElement4.style.fontSize = "20px";
        divImage.style.height = "400px";
        chartContainer.style.height = "100%";
        textContainer.style.height = "100%";
      } else {
        pElement.style.fontSize = "35px";
        pElement2.style.fontSize = "35px";
        pElement3.style.fontSize = "35px";
        pElement4.style.fontSize = "35px";
        divImage.style.height = "600px";
        chartContainer.style.height = "100%";
        textContainer.style.height = "100%";
      }
    };

    handleResize(); // Call the function to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: ["TEAM", "LISTING", "GIVEAWAYS", "BURN", "LIQUIDITY"],
    datasets: [
      {
        data: [5, 5, 5, 10, 75],
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
        labels: {
          color: "white",
        },
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

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

        .content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        @media (min-width: 769px) {
          .content-container {
            flex-direction: row;
          }
        }

        @keyframes fireEffect {
          0%, 100% { color: #ff6a00; text-shadow: 0 0 10px #ff6a00, 0 0 20px #ff6a00, 0 0 30px #ff4500, 0 0 40px #ff4500, 0 0 50px #ff4500, 0 0 60px #ff4500, 0 0 70px #ff4500; }
          50% { color: #ffa500; text-shadow: 0 0 20px #ffa500, 0 0 30px #ffa500, 0 0 40px #ff8c00, 0 0 50px #ff8c00, 0 0 60px #ff8c00, 0 0 70px #ff8c00, 0 0 80px #ff8c00; }
        }

        @keyframes fireworksEffect {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }

         .fire-animation {
          animation: fireEffect 2s ease-in-out infinite;
        }

        .fireworks {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background-color: #ff0;
          border-radius: 50%;
          animation: fireworksEffect 1s ease-out infinite;
        }

        .fireworks:nth-child(2) {
          animation-delay: 0.5s;
        }

        .fireworks:nth-child(3) {
          animation-delay: 1s;
        }
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
                  <span className="theme-gradient">TOKENECOMIC</span>
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
                  className="content-container"
                  id="image-div2"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    color: "#fff",
                    padding: "20px",
                    textAlign: "center",
                    height: "600px",
                  }}
                  
                >
                  <div
                    id="text-container"
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "30%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div style={{ padding: 5 }}>
                      <p
                        id="image-text2_3"
                        style={{
                          color: "white",
                          fontSize: "35px",
                          fontFamily: "Indie Flower",
                          lineHeight: 1.2,
                          margin: 0,
                        }}
                      >
                        <u>600.000.000</u>Total Supply
                      </p>
                      <p
                        id="image-text2"
                        style={{
                          color: "white",
                          fontSize: "35px",
                          fontFamily: "Indie Flower",
                          lineHeight: 1.2,
                          margin: 0,
                        }}
                        className="fire-animation"
                      >
                        No private sale
                      </p>
                      <p
                        id="image-text2_2"
                        style={{
                          color: "white",
                          fontSize: "45px",
                          fontFamily: "Indie Flower",
                          lineHeight: 1.2,
                          margin: 0,
                        }}
                   
                      >
                        %0 Tax
                      </p>
                      <p
                        id="image-text2_4"
                        style={{
                          color: "white",
                          fontSize: "45px",
                          fontFamily: "Indie Flower",
                          lineHeight: 1.2,
                          margin: 0,
                        }}
                  
                      >
                        %100 Burned LP
                      </p>
                    </div>
                  </div>
                  <div
                    id="chart-container"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "70%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    </>
  );
};

export default HomeTwo;
