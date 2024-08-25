import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account.jsx/Account";
import DashboarsNav from "../../components/dashboard-nav/DashboarsNav";
/*
! THIS IS THE ROUTE FILE FOR ALL THE PAGES IN THE DASHBOARD
 */
const Dashboard = () => {
  return (
    <div>
      <DashboarsNav />
      <Routes>
        <Route path="/" element={<Account />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
