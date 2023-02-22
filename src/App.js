import { Empty } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { ROUTE } from "./constants/constants";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/user/Home/Home";
import Login from "./pages/user/Login/Login";
import "./styles/style.scss";
function App() {
  return (
    <div className="App">
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
          <Route path={ROUTE.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
