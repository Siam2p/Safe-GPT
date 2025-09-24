import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingUp from "./pages/Singup";
import ParentSingup from "./pages/Account/Parentaccount/ParentSingup";
import ChildSingup from "./pages/Account/Chin/ChildSingup";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>,
  //   },
  //   {
  //     path: "/SignUp",
  //     element: <SignUp/>,
  //   },
  //   {
  //     path: "/parent",
  //     element: <div>Parent Singup</div>,
  //   }
  // ]);

  return (
  <Router>
      <div className="min-h-screen bg-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/SingUp"} element={<ParentSingup/>} />
          <Route path={"/child"} element={<ChildSingup/>} />
          {/* <Route path="/parental-controls" element={<ParentalControls />} />
          <Route path="/monitoring-dashboard" element={<MonitoringDashboard />} />
          <Route path="/safe-chat" element={<SafeChat />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
