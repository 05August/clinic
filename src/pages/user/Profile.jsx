import { Table } from "antd";
import axios from "axios";
import { SETTING_TOAST } from "constants/constantsGlobal";
import { LIST_KEY } from "constants/constantsProfile";
import dayjs from "dayjs";
import { localStorageUlti } from "functions/localStorage";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setPerLoading, setSkeleton } from "redux/global.slice";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState("account");
  const [navBookedActive, setNavBookedActive] = useState("All");
  const [dataUser, setDataUser] = useState(localStorageUlti("dataUser").get());
  const [userProfile, setUserProfile] = useState({
    userName: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    activeAccount: false,
  });
  const [bookedList, setBookedList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setType(searchParams.get("type") || "account");
  }, [searchParams.get("type")]);

  useEffect(() => {
    async function getPerData() {
      try {
        dispatch(setSkeleton(true));
        const getResponseUserData = await axios.get(
          `https://6416a2d36dc4e32a2555aaf0.mockapi.io/clinic/${dataUser.id}`
        );
        const getReponseBookedList = await axios.get(
          `https://64131b563b710647375fa688.mockapi.io/bookedList?userId=${dataUser.id}`
        );
        setUserProfile({
          ...userProfile,
          ...getResponseUserData.data,
        });
        setDataUser(getResponseUserData.data);
        setBookedList(getReponseBookedList.data);
      } finally {
        dispatch(setSkeleton(false));
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
    const NAV_BOOKED = ["All", "Pending", "Completed", "Cancel"];
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
      bookedList.length > 0
        ? fillterStatus(bookedList[0].booked).map((item, index) => {
            return {
              key: `booked-${index}`,
              clinic: item.clinicName,
              doctor: item.doctorName,
              date: item.date,
              time: item.timeSlot,
              status: item.status,
            };
          })
        : [];

    return (
      <div className="booked">
        <div className="booked__nav">
          {NAV_BOOKED.map((item) => {
            return (
              <div
                className={`booked__nav--item ${navBookedActive === item && "active"}`}
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
          {data && <Table columns={columns} dataSource={data} size="small" />}
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
      toast.info("chờ đợi là vàng.", SETTING_TOAST);
      dispatch(setPerLoading(true));
      try {
        const res = await axios.put(
          `https://6416a2d36dc4e32a2555aaf0.mockapi.io/clinic/${userProfile.id}`,
          { ...userProfile, activeAccount: true }
        );
      } catch (error) {
        toast.error(error, SETTING_TOAST);
      } finally {
        dispatch(setPerLoading(false));
        localStorageUlti("dataUser").set({
          ...localStorageUlti("dataUser").get(),
          name: userProfile.userName,
        });
        window.location.reload();
        toast.success("🦄 Lưu Thông Tin Thành Công rồi waooooooooo", SETTING_TOAST);
      }
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
              value={userProfile.userName}
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
              value={userProfile.fullName}
            />
          </div>
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              // value={localStorageUlti("emailSocial").get()}
              disabled
              onChange={handleChangeProfile}
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={userProfile.email}
            />
          </div>
          <label className="col-sm-2 col-form-label">Phone Number</label>
          <div className="col-sm-10">
            <input
              onChange={handleChangeProfile}
              name="phoneNumber"
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
              value={userProfile.phoneNumber}
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
              value={userProfile.dateOfBirth}
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
                checked={userProfile.gender === "male"}
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
                checked={userProfile.gender === "female"}
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
                checked={userProfile.gender === "other"}
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
                <Tab.Pane eventKey="appointment_schedule">{renderBooked()}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Profile;
