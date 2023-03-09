import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { Select } from "antd";
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
  const [clinicData, setClinicData] = useState();
  const [doctorList, setDoctorList] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

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

  return (
    clinicData && (
      <>
        <section className="info-clinic">
          <Container className="info-container">
            <Row>
              <Col lg={6} className="info-content">
                <h2 className="clinic-name">{clinicData.name}</h2>
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
        <section>
          <h1>Select time slots:</h1>
          <TimeSlotRadioGroup
            options={clinicData.timeOptions}
            handeleGetTimeValue={setSelectedTimeSlot}
          />
          <h2>Selected time slots:</h2>

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
                  value: item.name,
                  label: item.name,
                };
              })
            }
          />

          <CustomCalendar setSelectedDate={setSelectedDate} />
        </section>
      </>
    )
  );
};

export default DetailClinic;
