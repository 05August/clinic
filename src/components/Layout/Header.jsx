import React, { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import logo from "assets/img/logo.png";
import { ROUTE, SETTING_TOAST } from "constants/constantsGlobal";
import { NAV_DATA } from "constants/constantsHeader";
import { HiPlusSm, HiOutlineSearch } from "react-icons/hi";
import { localStorageUlti } from "functions/localStorage";
import { FaCalendarPlus, FaExchangeAlt, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/global.slice";
import { toast } from "react-toastify";
import { Drawer } from "antd";
import { Container } from "react-bootstrap";

const Header = () => {
  const [offset, setOffset] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [openDrawer, setOpenDrawer] = useState(false);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = localStorageUlti("isLogin", false).get();
  const dataUser = localStorageUlti("dataUser", { id: "", name: "user" }).get();

  const handleSubmitSearchForm = (e) => {
    e.preventDefault();
    searchParams.set("keyword", searchValue.trim().toLowerCase() || "");
    setSearchParams(searchParams);
    navigate(`${ROUTE.CLINIC}?keyword=${searchValue.trim().toLowerCase()}`);
  };

  const renderNav = () => {
    return (
      <>
        <div className="header-search">
          <form
            action="/search"
            onSubmit={(e) => {
              handleSubmitSearchForm(e);
            }}
          >
            <input
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Type to search"
              required
            />
            <button type="submit">
              <HiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="header-nav">
          <ul className="nav-list">
            {NAV_DATA.map((item, index) => {
              return (
                <li className="nav-item" key={`${index}-${item.path}`}>
                  <Link
                    onClick={() => {
                      setSearchValue("");
                      item.path === ROUTE.HOME && window.scrollTo(0, 0);
                    }}
                    to={item.dropData ? "" : item.path}
                  >
                    {item.title} {item.dropData ? <HiPlusSm /> : <></>}
                  </Link>
                  {item.dropData ? (
                    <ul className="sub-nav">
                      {item.dropData.map((dropItem, index) => {
                        return (
                          <li key={`${index}-${dropItem.path}`}>
                            <Link to={dropItem.path}>{dropItem.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  };

  return (
    <header className={offset > 50 ? "is-fixed header" : "header"}>
      <Container className="header-container">
        <div className="header-left">
          <div className="logo">
            <Link
              onClick={() => {
                setSearchValue("");
                window.scrollTo(0, 0);
              }}
              to={ROUTE.HOME}
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="header-center">
          <div className="header-center-laptop">{renderNav()}</div>
          <div className="header-center-tablet">
            <div
              className="hamburger-button"
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <GiHamburgerMenu />
            </div>
            <Drawer
              title="Menu"
              placement="left"
              onClose={() => {
                setOpenDrawer(false);
              }}
              open={openDrawer}
            >
              {renderNav()}
            </Drawer>
          </div>
        </div>
        <div className="header-right">
          {isLogin ? (
            <div className="header-account">
              Hello
              <strong>
                <Link to={`${ROUTE.PROFILE}?type=account`}>
                  {dataUser.name || `user${dataUser.id}`}
                </Link>
                !
              </strong>
              <ul className="account-dropdown">
                <li className="account-dropdown-item">
                  <Link to={`${ROUTE.PROFILE}?type=account`}>
                    <FaUser />
                    My Profile
                  </Link>
                </li>
                <li className="account-dropdown-item">
                  <Link to={`${ROUTE.PROFILE}?type=change_password`}>
                    <FaExchangeAlt />
                    Change Password
                  </Link>
                </li>
                <li className="account-dropdown-item">
                  <Link to={`${ROUTE.PROFILE}?type=appointment_schedule`}>
                    <FaCalendarPlus />
                    My Booked
                  </Link>
                </li>
                <li
                  onClick={() => {
                    dispatch(setLoading(true));
                    localStorageUlti("isLogin").remove();
                    localStorageUlti("dataUser").remove();
                    toast.success("🦄 Successful Logout!", SETTING_TOAST);

                    setTimeout(() => {
                      navigate(ROUTE.LOGIN);
                      dispatch(setLoading(false));
                    }, 1000);
                  }}
                  className="account-dropdown-item"
                >
                  <FiLogOut />
                  Log Out
                </li>
              </ul>
            </div>
          ) : (
            <div className="header-login">
              <Link to={ROUTE.LOGIN} className="btn btn-primary shadow">
                Login
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
