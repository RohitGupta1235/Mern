import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import AuthForm from "./components/AuthForm";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeListPage from "./components/EmployeeListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/employee-list" element={<EmployeeListPage />} />
        <Route exact path="/" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
