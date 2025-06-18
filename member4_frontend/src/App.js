// App.js
import React from "react";
import Dashboard from "./components/Dashboard";
import ThreatLogs from "./components/ThreatLogs";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10 animate-pulse text-cyan-400">
        🛡️ AI Cybersecurity Defender
      </h1>
      <Dashboard />
      <div className="mt-12">
        <ThreatLogs />
      </div>
    </div>
  );
}

export default App;
