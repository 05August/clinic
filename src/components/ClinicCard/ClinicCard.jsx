import React from "react";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import "./clinicCard.scss";
import { ROUTE } from "../../constants/constants";

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

  function stringToSlug(str) {
    var from =
        "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
      to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(RegExp(from[i], "gi"), to[i]);
    }

    str = str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\-]/g, "-")
      .replace(/-+/g, "-");

    return str;
  }

  return (
    <div className="card-clinic">
      <Link to={`${ROUTE.CLINIC}/${stringToSlug(data.name)}`}>
        <img src={data.img} alt="Profile img" className="profile-pic" />
        <h2 className="card-title bg-title">{data.name}</h2>
      </Link>
      <div className="content-card">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      <button className="btn btn-primary shadow">
        <Link to={`${ROUTE.CLINIC}/${stringToSlug(data.name)}`}>View More</Link>
      </button>
    </div>
  );
}

export default ClinicCard;
