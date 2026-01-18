import Login from "./pages/Login";
import Rgister from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardOverview from "./pages/DashboardOverview";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Rgister />} />

        {/* Dashboard pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
