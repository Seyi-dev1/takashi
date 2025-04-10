import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginForm from "./pages/home/pages/LoginForm/LoginForm";
import SignUp from "./pages/home/pages/sign-up-form/SignUpForm";
import Admin from "./pages/admin/Admin.jsx";
import UserDetails from "./pages/admin/userDetails/UserDetails.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="/admin/user/:userId" element={<UserDetails />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
