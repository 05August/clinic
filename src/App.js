import { Button, Empty, Result } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { ROUTE } from "constants/constantsGlobal";

import ScrollToTop from "components/Shared/ScrollToTop";
import DefaultLayout from "layouts/DefaultLayout";
import Home from "pages/user/Home";
import DetailClinic from "pages/user/DetailClinic";
import Login from "pages/user/Login";
import AboutUs from "pages/user/AboutUs";

import "styles/style.scss";
import Clinic from "pages/user/Clinic";
import Profile from "pages/user/Profile";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route
          path={ROUTE.NOT_FOUND}
          element={
            <Link to={ROUTE.HOME}>
              <Result
                status="404"
                title="404"
                subTitle="Sorry , the page you visited will be completed soon!"
                extra={<Button type="primary">Back Home</Button>}
              />
            </Link>
          }
        />
        <Route path={ROUTE.HOME} element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTE.CLINIC} element={<Clinic />} />
          <Route path={ROUTE.CLINIC_DETAIL} element={<DetailClinic />} />
          <Route path={ROUTE.PROFILE} element={<Profile />} />
        </Route>
        <Route path={ROUTE.LOGIN} element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
