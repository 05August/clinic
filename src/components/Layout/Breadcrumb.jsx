import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import Animation from "components/Shared/Animation";

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
      <Animation
        data={{
          url: "https://i.postimg.cc/cHv1kXX4/updown.png",
          className: "updown",
          style: { top: 220, left: 30 },
        }}
      />

      <Animation
        data={{
          url: "https://i.postimg.cc/jjFtfytV/wave.png",
          className: "wave",
          style: { bottom: 50, left: "20%", zIndex: 1 },
        }}
      />

      <Animation
        data={{
          url: "https://i.postimg.cc/BnCvj8js/rotate.png",
          className: "rotate",
          style: { bottom: "30%", right: "8%" },
        }}
      />
    </section>
  );
};

export default BreadcrumbPage;
