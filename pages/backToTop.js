import React, { useEffect, useRef, useState } from "react";

const JupiterWidget = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const widgetRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsWidgetOpen(false);
      }
    };

    if (isWidgetOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isWidgetOpen]);

  const toggleWidget = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <>
      <button 
        ref={buttonRef}
        className="jupiter-widget-button" 
        onClick={toggleWidget}
      >
        <img src="/images/jupiter/jupiter-logo.svg" alt="Jupiter" width="46" height="46" />
      </button>

      {isWidgetOpen && (
        <div className="widget-overlay">
          <div className="widget-container" ref={widgetRef}>
            <button className="widget-close-button" onClick={() => setIsWidgetOpen(false)}>
              X
            </button>

            <div className="widget-content">
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.Jupiter.init({
                      endpoint: "https://api.mainnet-beta.solana.com",
                      strictTokenList: false,
                      defaultExplorer: "Solscan",
                      formProps: {
                        fixedOutputMint: true,
                        swapMode: "ExactIn",
                        initialAmount: "1000",
                        initialOutputMint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                        initialSlippageBps: 5,
                      },
                    });
                  `,
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .jupiter-widget-button {
          position: fixed;
          right: 30px;
          bottom: 30px;
          width: 46px;
          height: 46px;
          border: none;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          z-index: 1000;
          transition: transform 0.3s ease;
        }

        .jupiter-widget-button:hover {
          transform: scale(1.1);
        }

        .widget-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10001;
        }

        .widget-container {
          position: relative;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          width: 400px;
          max-width: 90%;
        }

        .widget-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }

        .widget-content {
          margin-top: 40px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .widget-overlay {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default JupiterWidget;