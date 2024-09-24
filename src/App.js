import { lazy, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SidebarComponent from "./Components/shared/SidebarComponent";

const Dashboard = lazy(() => import("./Components/pages/Dashboard"));
const KeyMetricesPage = lazy(() =>
  import("./Components/pages/KeyMetricesPage")
);
const DataVisualizationPage = lazy(() =>
  import("./Components/pages/DataVisualizationPage")
);
const RecentStreams = lazy(() => import("./Components/pages/RecentStreams"));

function App() {
  return (
    <Router>
      <div className="App h-screen bg-white box-border">
        <SidebarComponent />
        <div className="ml-0 md:ml-72">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/key_metrices" element={<KeyMetricesPage />} />
              <Route
                path="/data_visualization"
                element={<DataVisualizationPage />}
              />
              <Route path="/recent_streams" element={<RecentStreams />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
