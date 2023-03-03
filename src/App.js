import { Empty } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { ROUTE } from "constants/constantsGlobal";

import ScrollToTop from "components/Shared/ScrollToTop";
import DefaultLayout from "layouts/DefaultLayout";
import Home from "pages/user/Home";
import DetailClinic from "pages/user/DetailClinic";
import Login from "pages/user/Login";

import "styles/style.scss";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route
          path={ROUTE.NOT_FOUND}
          element={
            <Link
              to={ROUTE.HOME}
              style={{
                display: "block",
                margin: "20% auto",
                fontWeight: "bold",
                fontSize: 40,
                width: 475,
              }}
            >
              <Empty />
            </Link>
          }
        />
        <Route path={ROUTE.HOME} element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE.ABOUT_US} element={<>About us</>} />
          <Route
            path={ROUTE.CLINIC}
            element={
              <div
                style={{ textAlign: "center", padding: "100px 0px", fontSize: "50px" }}
              >
                <h1>Clinic Coming Soon...</h1>
              </div>
            }
          />
          <Route path={ROUTE.CLINIC_DETAIL} element={<DetailClinic />} />
        </Route>
        <Route path={ROUTE.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
