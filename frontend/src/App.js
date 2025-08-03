import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayPalAbout from "./components/PayPalAbout";

function App() {
  // Add Chaport live chat
  useEffect(() => {
    // Begin of Chaport Live Chat code
    window.chaportConfig = {
      appId: '685163ed43fb75c01157101d'
    };

    if (window.chaport) return;
    
    const chaport = {
      _q: [],
      _l: {},
      q: function() {
        chaport._q.push(arguments);
      },
      on: function(e, fn) {
        if (!chaport._l[e]) chaport._l[e] = [];
        chaport._l[e].push(fn);
      }
    };
    
    window.chaport = chaport;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://app.chaport.com/javascripts/insert.js';
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
    // End of Chaport Live Chat code
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PayPalAbout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;