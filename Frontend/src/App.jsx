import Login from "./pages/Login";
import Rgister from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardOverview from "./pages/DashboardOverview";
import StudentsPage from "./pages/StudentsPage";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentProfile from "./pages/StudentProfile";
import SeatAllocation from "./pages/SeatAllocation";
import LayoutBuilder from "./pages/LayoutBuilder";
import RevenuePage from "./pages/RevenuePage";

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

        <Route path="/students" element={<DashboardLayout />}>
          <Route index element={<StudentsPage />} />
        </Route>

        <Route path="/add-student" element={<DashboardLayout />}>
          <Route index element={<AddStudent />} />
        </Route>

        <Route path="/edit-student/:id" element={<DashboardLayout />}>
          <Route index element={<EditStudent />} />
        </Route>

        <Route path="/student/:id" element={<DashboardLayout />}>
          <Route index element={<StudentProfile />} />
        </Route>

        <Route path="/seat-allocation" element={<DashboardLayout />}>
          <Route index element={<SeatAllocation />} />
        </Route>
        <Route path="/layout-builder" element={<DashboardLayout />}>
          <Route index element={<LayoutBuilder />} />
        </Route>
        <Route path="/revenue" element={<DashboardLayout />}>
          <Route index element={<RevenuePage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
