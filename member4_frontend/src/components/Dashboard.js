import React from "react";

function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gray-800/80 p-6 rounded-2xl shadow-2xl border border-red-500 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-red-400 mb-2">📦 Detected Threats</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Encrypted threat at edge node 12.45.23.1</li>
          <li>GNN anomaly: Packet size deviation detected</li>
        </ul>
      </div>

      <div className="bg-gray-800/80 p-6 rounded-2xl shadow-2xl border border-green-500 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-green-400 mb-2">🔄 Self-Healing Status</h2>
        <p className="text-green-300">Flow 2095 rerouted and isolated successfully. No action needed.</p>
      </div>

      <div className="bg-gray-800/80 p-6 rounded-2xl shadow-2xl border border-blue-500 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">📈 System Logs</h2>
        <p className="text-gray-200 text-sm">[03:45 AM] Reinforcement agent blocked novel AI threat</p>
        <p className="text-gray-200 text-sm">[03:48 AM] Dashboard updated with latest healing actions</p>
      </div>
    </div>
  );
}

export default Dashboard;
