import { Table } from "antd";
import axios from "axios";
import { LIST_KEY } from "constants/constantsProfile";
import { localStorageUlti } from "functions/localStorage";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setIsPerLoading } from "redux/global.slice";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState("account");
  const [navBookedActive, setNavBookedActive] = useState("All");
  const [dataUser, setDataUser] = useState();
  const [userProfile, setUserProfile] = useState({
    userName: "",
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    activeAccount: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setType(searchParams.get("type") || "account");
  }, [searchParams.get("type")]);

  useEffect(() => {
    async function getPerData() {
      try {
        dispatch(setIsPerLoading(true));
        const user = localStorageUlti("dataUser").get();
        const getResponse = await axios.get(
          `https://64131b563b710647375fa688.mockapi.io/userList/${user.id}`
        );
        setDataUser(getResponse.data);
      } finally {
        dispatch(setIsPerLoading(false));
      }
    }
    getPerData();
  }, []);

  const fillterStatus = (booked) => {
    return navBookedActive === "All"
      ? booked
      : booked.filter((item) => item.status.includes(navBookedActive));
  };

  const renderNav = () => {
    return LIST_KEY.map((item, index) => {
      return (
        <Nav.Item key={item.value}>
          <Nav.Link
            eventKey={item.value}
            onClick={() => {
              setSearchParams({ type: item.value });
            }}
          >
            {item.render()}
          </Nav.Link>
        </Nav.Item>
      );
    });
  };

  const renderBooked = () => {
    const NAV_BOOKED = ["All", "Pending", "Completed"];
    const columns = [
      {
        title: "Clinic",
        dataIndex: "clinic",
      },
      {
        title: "Doctor",
        dataIndex: "doctor",
      },
      {
        title: "Date",
        dataIndex: "date",
      },
      {
        title: "Time",
        dataIndex: "time",
      },
      {
        title: "Status",
        dataIndex: "status",
      },
    ];

    const data =
      dataUser &&
      dataUser.booked &&
      fillterStatus(dataUser.booked).map((item, index) => {
        return {
          key: `booked-${index}`,
          clinic: item.clinicName,
          doctor: item.doctorName,
          date: item.date,
          time: item.timeSlot,
          status: item.status,
        };
      });
    return (
      <div className="booked">
        <div className="booked__nav">
          {NAV_BOOKED.map((item) => {
            return (
              <div
                className={`booked__nav--item ${
                  navBookedActive === item && "active"
                }`}
                onClick={() => {
                  setNavBookedActive(item);
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="booked__content">
          <Table columns={columns} dataSource={data} size="small" />
        </div>
      </div>
    );
  };
  const handleChangeProfile = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserProfile((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const renderProfile = () => {
    const handleSubmitProfile = async (e) => {
      e.preventDefault();
      console.log("userProfile:", userProfile);

      try {
        const res = await axios.post(
          "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/users",
          { ...userProfile, activeAccount: true }
        );
        // console.log("res.data:", res.data);
      } catch (error) {}
    };
    return (
      <form onSubmit={handleSubmitProfile}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">User Name</label>
          <div className="col-sm-10">
            <input
              onChange={handleChangeProfile}
              name="userName"
              type="text"
              className="form-control"
              placeholder="User Name"
              required
            />
          </div>
          <label className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input
              onChange={handleChangeProfile}
              name="fullName"
              type="text"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              value={localStorageUlti("emailSocial").get()}
              disabled
              onChange={handleChangeProfile}
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <label className="col-sm-2 col-form-label">Phone Number</label>
          <div className="col-sm-10">
            <input
              onChange={handleChangeProfile}
              name="phone"
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>
          <label className="col-sm-2 col-form-label">Date Of Birth</label>
          <div className="col-sm-10">
            <input
              onChange={handleChangeProfile}
              name="dateOfBirth"
              type="date"
              className="form-control"
              placeholder="Date Of Birth"
              required
            />
          </div>
          <label className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10 flexGender ">
            <div className="gender">
              <label for="male">Male</label>
              <input
                onChange={handleChangeProfile}
                type="radio"
                name="gender"
                id="male"
                value="male"
                required
              />
            </div>
            <div className="gender">
              <label for="female">Female</label>
              <input
                onChange={handleChangeProfile}
                type="radio"
                name="gender"
                id="female"
                value="female"
                required
              />
            </div>
            <div className="gender">
              <label for="other">Other</label>
              <input
                onChange={handleChangeProfile}
                type="radio"
                name="gender"
                id="other"
                value="other"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <section className="profile">
      <Container>
        <Tab.Container id="left-tabs-example" activeKey={type}>
          <Row>
            <Col sm={3} className="profile-sidebar">
              <Nav variant="pills" className="flex-column">
                {renderNav()}
              </Nav>
            </Col>
            <Col sm={9} className="profile-content">
              <Tab.Content>
                <Tab.Pane eventKey="account">{renderProfile()}</Tab.Pane>
                <Tab.Pane eventKey="change_password">changepassword</Tab.Pane>
                <Tab.Pane eventKey="appointment_schedule">
                  {renderBooked()}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Profile;
