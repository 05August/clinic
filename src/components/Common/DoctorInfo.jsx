import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
const DoctorInfo = ({ data }) => {
  return (
    <div className="member">
      <div className="member-img">
        <img src={data.img} alt="img Doctor" />
      </div>
      <div className="member-info">
        <div className="content">
          <h4 className="name">{data.name}</h4>
          <span>{data.specialized}</span>
        </div>
        <div className="social">
          <div>
            <Link to={data.twitter}>
              <AiOutlineTwitter />
            </Link>
          </div>
          <div>
            <Link to={data.linkedin}>
              <AiFillLinkedin />
            </Link>
          </div>
          <div>
            <Link to={data.instagram}>
              <AiOutlineInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
