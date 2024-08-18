import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "../../components/navbar/Navbar";

/*
! THIS IS THE ROUTES FOR ALL THE PAGES APART FROM THE DASHBOARD PAGES.
*/
const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default Home;
