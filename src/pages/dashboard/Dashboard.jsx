import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account.jsx/Account";
import DashboarsNav from "../../components/dashboard-nav/DashboarsNav";
import Transfers from "./pages/transfers/Transfers";
import PaymentSuccess from "./pages/success/Success";
/*
! THIS IS THE ROUTE FILE FOR ALL THE PAGES IN THE DASHBOARD
 */
const Dashboard = () => {
  return (
    <div>
      <DashboarsNav />
      <Routes>
        <Route path="*" element={<Account />} />
        <Route path="/transfer" element={<Transfers />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
