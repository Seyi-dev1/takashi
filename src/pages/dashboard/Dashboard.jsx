import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account.jsx/Account";
/*
! THIS IS THE ROUTE FILE FOR ALL THE PAGES IN THE DASHBOARD
 */
const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Account />} />
    </Routes>
  );
};

export default Dashboard;
