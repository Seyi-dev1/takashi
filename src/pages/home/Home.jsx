import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

/*
! THIS IS THE ROUTES FOR ALL THE PAGES APART FROM THE DASHBOARD PAGES.
*/
const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default Home;
