import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { renderAnimationIcon } from "utils/renderAnimationIcon";
import { ICON_ANIMATION_DATA } from "constants/constantsBreadcrumb";

const BreadcrumbPage = () => {
  const location = useLocation().pathname;
  const breadcrumbItem = location.split("/");

  const capitalizedStr = (str) => {
    const words = str.split("-");
    return words
      .map((word) => {
        return decodeURI(word.charAt(0).toUpperCase() + word.slice(1));
      })
      .join(" ");
  };
  let hrefBreadcrumb = "";

  return (
    <section
      className="breadcrumb"
      style={{ display: location !== "/" ? "block" : "none" }}
    >
      <Container className="breadcrumb-container">
        {/* <h1>{capitalizedStr(breadcrumbItem[breadcrumbItem.length - 1])}</h1> */}
        <ul>
          {breadcrumbItem.map((item, index) => {
            hrefBreadcrumb += item;
            return index === breadcrumbItem.length - 1 ? (
              <li className="active breadcrumb-item" key={`${item}-${index}`}>
                {capitalizedStr(item)}
              </li>
            ) : (
              <li key={`${item}-${index}`} className="breadcrumb-item">
                <Link to={hrefBreadcrumb}>
                  {item === "" ? (
                    <>
                      <HiOutlineHome /> Home
                    </>
                  ) : (
                    capitalizedStr(item)
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
      {renderAnimationIcon(ICON_ANIMATION_DATA)}
    </section>
  );
};

export default BreadcrumbPage;
