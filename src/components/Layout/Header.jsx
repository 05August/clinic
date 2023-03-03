import React, { useState, useEffect } from "react";

import { useSearchParams, Link, useNavigate } from "react-router-dom";
import logo from "assets/img/logo.png";
import { ROUTE } from "constants/constantsGlobal";
import { NAV_DATA } from "constants/constantsHeader";
import { HiPlusSm, HiOutlineSearch } from "react-icons/hi";
const Header = () => {
  const [offset, setOffset] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate();

  const handleSubmitSearchForm = (e) => {
    e.preventDefault();
    searchParams.set("keyword", searchValue.trim().toLowerCase());
    setSearchParams(searchParams);
    console.log(searchParams.get("keyword" || ""));
    navigate(ROUTE.CLINIC);
  };

  return (
    <header className={offset > 50 ? "is-fixed header" : "header"}>
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
                    to={item.path}
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
      </div>
      <div className="header-right">
        <div className="header-login">
          <Link to={ROUTE.LOGIN} className="btn btn-primary shadow">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
