import React, { useEffect, useState, useCallback } from "react";

const JupiterWidget = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadScript = useCallback(() => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://terminal.jup.ag/main-v3.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Jupiter script"));
      document.body.appendChild(script);
    });
  }, []);

  const initializeJupiter = useCallback(() => {
    if (window.Jupiter) {
      window.Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint:
          "https://cosmopolitan-thrumming-dawn.solana-mainnet.quiknode.pro/1cbcf6878394dbd7fab3a3c65d77f24a6c5bf0c8/",
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
    }
  }, []);

  useEffect(() => {
    const setupWidget = async () => {
      if (!isScriptLoaded && isWidgetOpen) {
        setIsLoading(true);
        setError(null);
        try {
          await loadScript();
          setIsScriptLoaded(true);
          initializeJupiter();
        } catch (err) {
          console.error("Failed to load Jupiter widget:", err);
          setError("Failed to load the widget. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      } else if (isScriptLoaded && isWidgetOpen) {
        initializeJupiter();
      }
    };

    setupWidget();
  }, [isWidgetOpen, isScriptLoaded, loadScript, initializeJupiter]);

  useEffect(() => {
    const handleBackButton = (event) => {
      if (isWidgetOpen) {
        event.preventDefault();
        setIsWidgetOpen(false);
      }
    };

    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, [isWidgetOpen]);

  const toggleWidget = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <>
      <button className="jupiter-widget-button" onClick={toggleWidget}>
        <img
          src="/images/jupiter/jupiter-logo.svg"
          alt="Jupiter"
          width="46"
          height="46"
        />
      </button>

      {isWidgetOpen && (
        <div className="widget-overlay">
          <div className="widget-container">
            <button
              className="close-button"
              onClick={() => setIsWidgetOpen(false)}
            >
              &times;
            </button>
            {isLoading && <div className="loading">Loading widget...</div>}
            {error && <div className="error">{error}</div>}
            {!isLoading && !error && (
              <div
                id="integrated-terminal"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "440px",
                  minWidth: "100px",
                  alignContent: "center",
                }}
              ></div>
            )}
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
          background: linear-gradient(45deg, #3f7489, #071020);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          width: 90%;
          max-width: 750px;
          height: 90%;
          max-height: 700px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          z-index: 10002;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .widget-overlay {
          animation: fadeIn 0.3s ease;
        }

        /* Increase font size for span elements inside the widget */
        .widget-container :global(span) {
          font-size: 12px !important;
        }

        @media (max-width: 768px) {
          .widget-container {
            width: 95%;
            height: 95%;
            padding: 10px;
          }

          .widget-container :global(span) {
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .widget-container {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }

          .jupiter-widget-button {
            right: 15px;
            bottom: 15px;
            width: 40px;
            height: 40px;
          }

          .widget-container :global(span) {
            font-size: 12px !important;
          }
        }
        .loading,
        .error {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: white;
          font-size: 18px;
        }

        .error {
          color: #ff6b6b;
        }
      `}</style>
    </>
  );
};

export default JupiterWidget;
