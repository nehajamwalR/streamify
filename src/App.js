import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/pages/Dashboard";
import SidebarComponent from "./Components/shared/SidebarComponent";
import KeyMetrices from "./Components/pages/KeyMetrices";
import DataVisualization from "./Components/pages/DataVisualization";
import RecentStreams from "./Components/pages/RecentStreams";

function App() {
  return (
    <Router>
      <div className="App flex h-screen bg-white">
        <SidebarComponent />
        <Dashboard />
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/key_matrices" element={<KeyMetrices />} />
        <Route path="/data_visualization" element={<DataVisualization />} />
        <Route path="/recent_streams" element={<RecentStreams />} />
      </Routes>
    </Router>
  );
}

export default App;
