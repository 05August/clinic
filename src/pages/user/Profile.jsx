import { Table } from "antd";
import axios from "axios";
import { LIST_KEY } from "constants/constantsProfile";
import { localStorageUlti } from "functions/localStorage";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setSkeleton } from "redux/global.slice";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState("account");
  const [navBookedActive, setNavBookedActive] = useState("All");
  const [dataUser, setDataUser] = useState();
  const [bookedList, setBookedList] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setType(searchParams.get("type") || "account");
  }, [searchParams.get("type")]);

  useEffect(() => {
    async function getPerData() {
      try {
        dispatch(setSkeleton(true));
        const user = localStorageUlti("dataUser").get();
        const getResponseUserData = await axios.get(
          `https://64131b563b710647375fa688.mockapi.io/userList/${user.id}`
        );
        const getReponseBookedList = await axios.get(
          `https://64131b563b710647375fa688.mockapi.io/bookedList?userId=${user.id}`
        );

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
      bookedList &&
      fillterStatus(bookedList[0].booked).map((item, index) => {
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
                <Tab.Pane eventKey="account">account</Tab.Pane>
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
