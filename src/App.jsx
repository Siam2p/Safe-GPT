import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingUp from "./pages/Singup";
import ParentSingup from "./pages/Account/Parentaccount/ParentSingup";
import ChildSingup from "./pages/Account/Chin/ChildSingup";
import ParentLogin from "./pages/Account/Parentaccount/ParentLogin";
import ParentResetPassword from "./pages/Account/Parentaccount/ParentResetPassword";
import ChildLogin from "./pages/Account/Chin/ChildLogin";
import ChildResetPassword from "./pages/Account/Chin/ChildResetPassword";

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
          <Route path="/child" element={<ChildSingup/>} />
          <Route path="/parent" element={<ParentSingup/>} />
          <Route path="/child/login" element={<ChildLogin/>} />
          <Route path="/parent/login" element={<ParentLogin/>} />
          <Route path="/child/resetpassword" element={<ChildResetPassword/>} />
          <Route path="/parent/resetpassword" element={<ParentResetPassword/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
