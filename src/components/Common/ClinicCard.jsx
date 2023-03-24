import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import { ROUTE } from "constants/constantsGlobal";
import { localStorageUlti } from "functions/localStorage";

const convertPunycodeUrl = (str) => encodeURI(str.split(" ").join("-"));

const ClinicCard = ({ data, type }) => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: `Service`,
      children: (
        <ul className="service-list">
          {data.services.map((item, index) => {
            return <li key={`services-${index}`}>{item}</li>;
          })}
        </ul>
      ),
    },
    {
      key: "2",
      label: `Contact`,
      children: (
        <ul className="contact-info">
          {data.contact.map((item, index) => {
            return <li key={`contact-${index}`}>{`${item.title} : ${item.content}`}</li>;
          })}
        </ul>
      ),
    },
  ];

  const [imgSrc, setImgSrc] = React.useState(data.img);
  const onError = () => {
    setImgSrc("assets/img/default-clinic.png");
  };

  const handleNavigateDetail = () => {
    localStorageUlti("currentIdClinic").set(data.id);
    navigate(`${ROUTE.CLINIC}/${convertPunycodeUrl(data.name)}`);
  };

  return (
    <div className={`card-clinic  card-clinic-${type}`}>
      <div className="card-img">
        <div className="cs-pointer" onClick={handleNavigateDetail}>
          <img src={imgSrc} alt="Profile img" className="profile-pic" onError={onError} />
        </div>
      </div>
      <div className="cs-pointer" onClick={handleNavigateDetail}>
        <h2 className="card-title bg-title">{data.name}</h2>
      </div>
      <div className="content-card">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      <button className="btn btn-primary shadow">
        <div onClick={handleNavigateDetail}>View More</div>
      </button>
    </div>
  );
};

export default ClinicCard;
