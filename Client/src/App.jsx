import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Home from "./pages/Home"

// import StaffDashboard from "./pages/Staff/Dashboard";

// import ClientDashboard from "./pages/client/Dashboard";

import ServicesPage from "./pages/ServicesPage";

// import ProtectedRoute from "./components/ProtectedRoute";

import Documents from "./pages/Staff/Documents";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route

path="/staff"

element={

<ProtectedRoute role="admin">

<StaffDashboard/>

</ProtectedRoute>

} */}

        {/* /> */}

        {/* <Route

path="/client"

element={

<ProtectedRoute role="client">

<ClientDashboard/>

</ProtectedRoute>

}

/> */}

        {/* <Route
          path="/staff/documents"
          element={
            <ProtectedRoute role="admin">
              <Documents />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
  );
}

export default App;
