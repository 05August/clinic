import React from "react";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import { ROUTE } from "constants/constantsGlobal";

const convertPunycodeUrl = (str) => encodeURI(str.split(" ").join("-"));

function ClinicCard({ data }) {
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

  return (
    <div className="card-clinic">
      <div className="card-img">
        <Link to={`${ROUTE.CLINIC}/${convertPunycodeUrl(data.name)}`}>
          <img
            src={data.img}
            alt="Profile img"
            className="profile-pic"
            onError={() => {
              this.src = "assets/img/default-clinic.png";
            }}
          />
        </Link>
      </div>
      <Link to={`${ROUTE.CLINIC}/${convertPunycodeUrl(data.name)}`}>
        <h2 className="card-title bg-title">{data.name}</h2>
      </Link>
      <div className="content-card">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      <button className="btn btn-primary shadow">
        <Link to={`${ROUTE.CLINIC}/${convertPunycodeUrl(data.name)}`}>View More</Link>
      </button>
    </div>
  );
}

export default ClinicCard;
