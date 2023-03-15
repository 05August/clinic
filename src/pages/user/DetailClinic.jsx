import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { Select, Tooltip, Typography } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import DoctorInfo from "components/Common/DoctorInfo";
import TimeSlotRadioGroup from "components/Common/TimeSlotRadioGroup";
import CustomCalendar from "components/Common/CustomCalender";

import { setIsPerLoading } from "redux/global.slice";
import clientServer from "server/clientServer";
import { localStorageUlti } from "functions/localStorage";
import { renderAnimationIcon } from "utils/renderAnimationIcon";
import { ICON_ANIMATION_DATA } from "constants/constantsDetailClinic";
import dayjs from "dayjs";

const customArrow = ({ type }) => {
  return (
    <button type="button" className={`button-arrow ${type}`}>
      {type === "next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
    </button>
  );
};

const settingSlide = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear",
  nextArrow: customArrow({ type: "next" }),
  prevArrow: customArrow({ type: "prev" }),
};

const DetailClinic = () => {
  const currentIdClinic = localStorageUlti("currentIdClinic").get();
  const isLogin = localStorageUlti("isLogin", false).get();

  const [clinicData, setClinicData] = useState();
  const [doctorList, setDoctorList] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(0);

  const [selectedDate, setSelectedDate] = useState(dayjs().format("DD/MM/YYYY"));

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setIsPerLoading(true));
        const getResponseClinic = await clientServer.get(
          `clinicList?id=${currentIdClinic}`
        );
        const getResponseDoctor = await clientServer.get(`doctorList?clinicId=1`);

        setClinicData(getResponseClinic.data[0]);
        setDoctorList(getResponseDoctor.data[0].doctors);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setIsPerLoading(false));
      }
    }

    fetchData();
  }, []);

  const fillterOptionTimeSlot = (listOptions, idDoctor, date) => {
    return listOptions.filter((item, index) => {
      // lấy index trong data disabled của ngày được user chọn
      const disabledIndex = doctorList[idDoctor - 1].appointmentSchedule.findIndex(
        (element) => element.date === date
      );

      //lấy ra danh sách timeSlot đã được đặt
      const disabledTime =
        disabledIndex >= 0
          ? doctorList[idDoctor - 1].appointmentSchedule[disabledIndex].time
          : [];

      //Cuối cùng là trả về timeSlot trống
      return disabledTime && !disabledTime.includes(index);
    });
  };

  return (
    clinicData && (
      <>
        <section className="info-clinic">
          <Container className="info-container">
            <Row>
              <Col lg={6} className="info-content">
                <h1 className="clinic-name">{clinicData.name}</h1>
                <p className="clinic-decription">{clinicData.decription}</p>
                <div className="clinic-service">
                  <h3>Services</h3>
                  <ul>
                    {clinicData.services.map((item, index) => (
                      <li key={`services--${index}`}>
                        <BsCheck />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="clinic-contact">
                  <h3>Contact</h3>
                  <ul>
                    {clinicData.contact.map((item, index) => (
                      <li key={`services--${index}`}>
                        <BsCheck />
                        {item.title} : {item.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={6} className="info-img">
                <img src={clinicData.img} alt="Anh phong kham" />
              </Col>
            </Row>
          </Container>
          {renderAnimationIcon(ICON_ANIMATION_DATA.section1)}
        </section>
        <section className="doctor-list">
          <div className="section-title">
            <h6>Our Doctors</h6>
            <h2>Meet Best Doctors</h2>
          </div>
          <div className="doctor-slide">
            <Container>
              <Slider {...settingSlide}>
                {doctorList.length &&
                  doctorList.map((item, index) => {
                    return (
                      <div key={`doctor-${index}`}>
                        <DoctorInfo data={item}></DoctorInfo>
                      </div>
                    );
                  })}
              </Slider>
            </Container>
          </div>
        </section>
        <section className="booking">
          <Container>
            <Row className="booking__title">
              <div>
                <h6>Booking</h6>
                <h2>Book Appointment</h2>
              </div>
            </Row>
            <Row className="booking__container">
              <Col className="booking__container--doctor">
                <Typography.Title className="bg-title" level={4}>
                  Select a doctor:
                </Typography.Title>

                <Select
                  placeholder="Select a doctor"
                  style={{
                    minWidth: 200,
                  }}
                  onChange={setSelectedDoctor}
                  options={
                    doctorList &&
                    doctorList.map((item) => {
                      return {
                        value: item.doctorId,
                        label: item.name,
                      };
                    })
                  }
                />
              </Col>
              <Col className="booking__container--date">
                <Typography.Title className="bg-title" level={4}>
                  Select a date:
                </Typography.Title>

                <CustomCalendar
                  setSelectedDate={setSelectedDate}
                  disabledDoctorDate={
                    selectedDoctor
                      ? doctorList[selectedDoctor - 1].disabledDate
                      : ["29/2/2000"]
                  }
                />
              </Col>
              <Col className="booking__container--time">
                <Typography.Title className="bg-title" level={4}>
                  Select time slot:
                </Typography.Title>

                <TimeSlotRadioGroup
                  options={
                    selectedDate && selectedDoctor
                      ? fillterOptionTimeSlot(
                          clinicData.timeOptions,
                          selectedDoctor,
                          selectedDate
                        )
                      : clinicData.timeOptions
                  }
                  handeleGetTimeValue={setSelectedTimeSlot}
                />
              </Col>
            </Row>
            <Row className="booking__container--button">
              <Tooltip
                title={isLogin ? "" : "You need to login to make an appointment !"}
                color={"#1677ff"}
              >
                <button disabled={!isLogin}>Booking</button>
              </Tooltip>
            </Row>
          </Container>
        </section>
      </>
    )
  );
};

export default DetailClinic;
