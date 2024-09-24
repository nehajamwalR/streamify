import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/pages/Dashboard";
import SidebarComponent from "./Components/shared/SidebarComponent";
import KeyMetricesPage from "./Components/pages/KeyMetricesPage";
import DataVisualizationPage from "./Components/pages/DataVisualizationPage";
import RecentStreams from "./Components/pages/RecentStreams";

function App() {
  return (
    <Router>
      <div className="App flex h-screen bg-white box-border">
        <SidebarComponent />
        <div className="ml-0 md:ml-80 w-full px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/key_metrices" element={<KeyMetricesPage />} />
            <Route
              path="/data_visualization"
              element={<DataVisualizationPage />}
            />
            <Route path="/recent_streams" element={<RecentStreams />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
