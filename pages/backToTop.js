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

      // Load the Jupiter script dynamically when the widget is open
      const script = document.createElement('script');
      script.src = 'https://terminal.jup.ag/main-v3.js';
      script.async = true;
      script.onload = () => {
        // Initialize the Jupiter widget after the script has loaded
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://misty-flashy-bridge.solana-mainnet.quiknode.pro",
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
      };

      document.body.appendChild(script);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.removeChild(script); // Cleanup the script when the widget is closed
      };
    }
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

            <div id="integrated-terminal" style={{alignItems:"center",justifyContent:"center",display:"flex", width: "100%", height: "100%",minHeight:"440px",minWidth:"590px" }}></div>
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
          padding: 5px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          width: 450px;
          height: 600px;
          max-width: 90%;
          justify-content: center;
          margin: 0;
          
        }

        .widget-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: white;
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
