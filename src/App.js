import { Button, Empty, Result } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { ROUTE } from "constants/constantsGlobal";

import ScrollToTop from "components/Shared/ScrollToTop";
import DefaultLayout from "layouts/DefaultLayout";
import Home from "pages/user/Home";
import DetailClinic from "pages/user/DetailClinic";
import Login from "pages/user/Login";

import "styles/style.scss";
import Clinic from "pages/user/Clinic";
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
          <Route path={ROUTE.ABOUT_US} element={<>About us</>} />
          <Route path={ROUTE.CLINIC} element={<Clinic />} />
          <Route path={ROUTE.CLINIC_DETAIL} element={<DetailClinic />} />
        </Route>
        <Route path={ROUTE.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
