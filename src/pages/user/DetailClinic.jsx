import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { Select, Tooltip, Typography } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import DoctorInfo from "components/Common/DoctorInfo";
import TimeSlotRadioGroup from "components/Common/TimeSlotRadioGroup";
import CustomCalendar from "components/Common/CustomCalender";

import { setPerLoading, setSkeleton } from "redux/global.slice";
import clientServer from "server/clientServer";
import { localStorageUlti } from "functions/localStorage";
import { renderAnimationIcon } from "utils/renderAnimationIcon";
import { ICON_ANIMATION_DATA } from "constants/constantsDetailClinic";
import dayjs from "dayjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ROUTE, SETTING_TOAST } from "constants/constantsGlobal";

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
  const [bookedList, setBookedList] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [selectedDate, setSelectedDate] = useState(dayjs().format("DD/MM/YYYY"));
  const [appointmentSchedule, setAppointmentSchedule] = useState();

  const userId = isLogin && localStorageUlti("dataUser").get().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setSkeleton(true));
        const getResponseClinic = await clientServer.get(
          `clinicList?id=${currentIdClinic}`
        );
        const getResponseDoctor = await clientServer.get(`doctorList?clinicId=1`);

        setClinicData(getResponseClinic.data[0]);
        setDoctorList(getResponseDoctor.data[0].doctors);
        if (isLogin) {
          const getResponseBooked = await axios.get(
            `https://64131b563b710647375fa688.mockapi.io/bookedList/${userId}`
          );

          setBookedList(getResponseBooked.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setSkeleton(false));
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setPerLoading(true));
        const getResponseAppointmentSchedule = await axios.get(
          `https://64131b563b710647375fa688.mockapi.io/appointmentSchedule`
        );
        setAppointmentSchedule(
          getResponseAppointmentSchedule.data.find(
            (e) =>
              e.clinicId === clinicData.id &&
              e.doctorId === doctorList[selectedDoctor].doctorId
          )
        );
      } catch (error) {
      } finally {
        dispatch(setPerLoading(false));
      }
    }

    isLogin && fetchData();
  }, [selectedDoctor]);

  const fillterOptionTimeSlot = (listOptions, indexDoctor, date) => {
    //lấy ra danh sách timeSlot đã được đặt
    const disabledTime = [];
    const dataDisabled =
      appointmentSchedule && appointmentSchedule.info.find((item) => item.date === date);
    dataDisabled &&
      dataDisabled.content.forEach((element) => {
        disabledTime.push(element.time);
      });

    //xử lý timeSlot đã qua trong ngày
    const pastTimeSlotIndex =
      dayjs().hour() > 17
        ? listOptions.length
        : listOptions.findIndex((item) => {
            const [startTimeString, endTimeString] = item.split("-");

            return dayjs(dayjs().format("H:MM"), "HH:mm").isBefore(
              dayjs(startTimeString, "HH:mm")
            );
          });

    if (date === dayjs().format("DD/MM/YYYY")) {
      for (let i = 0; i < pastTimeSlotIndex; i++) {
        disabledTime.push(listOptions[i]);
      }
    }

    //Cuối cùng là trả về timeSlot có thể chọn

    return listOptions.filter((item, index) => {
      return disabledTime && !disabledTime.includes(item);
    });
  };

  const handleBooking = (doctorIndex, date, timeSlot) => {
    if (doctorIndex !== undefined && date && timeSlot) {
      if (
        dayjs(timeSlot, "HH:mm").isBefore(dayjs(dayjs().format("H:MM"), "HH:mm")) &&
        date === dayjs().format("DD/MM/YYYY")
      ) {
        toast.warning("🦄 You must select enough fields!", SETTING_TOAST);
      } else {
        const dataBooked = {
          clinicId: clinicData.id,
          doctorId: doctorList[selectedDoctor].doctorId,
          clinicName: clinicData.name,
          doctorName: doctorList[selectedDoctor].name,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          status: "Pending",
        };

        const newDataBooked =
          bookedList === {}
            ? {
                id: userId,
                userId: userId,
                booked: [dataBooked],
              }
            : {
                ...bookedList,
                booked: [...bookedList.booked, dataBooked],
              };

        async function putData() {
          try {
            toast.info("chờ đợi là vàng.", SETTING_TOAST);
            dispatch(setPerLoading(true));

            const putResponseBooked = await axios.put(
              `https://64131b563b710647375fa688.mockapi.io/bookedList/${userId}`,
              newDataBooked
            );

            if (appointmentSchedule) {
              const indexAppointmentSchedule = appointmentSchedule.info.findIndex(
                (element) => element.date === selectedDate
              );
              const newData = appointmentSchedule;
              indexAppointmentSchedule !== -1 &&
                newData.info[indexAppointmentSchedule].content.push({
                  time: selectedTimeSlot,
                  userId: userId,
                });
              const putNewDataAppointment = await axios.put(
                `https://64131b563b710647375fa688.mockapi.io/appointmentSchedule/${appointmentSchedule.id}`,
                newData
              );
            } else {
              const newData = {
                clinicId: clinicData.id,
                doctorId: doctorList[selectedDoctor].doctorId,
                info: [
                  {
                    date: selectedDate,
                    content: [
                      {
                        time: selectedTimeSlot,
                        userId: userId,
                      },
                    ],
                  },
                ],
              };

              const putNewDataAppointment = await axios.post(
                `https://64131b563b710647375fa688.mockapi.io/appointmentSchedule`,
                newData
              );
            }
          } catch (error) {
            toast.error(`🦄 ${error}`, SETTING_TOAST);
          } finally {
            dispatch(setPerLoading(false));
            toast.success("🦄 Đặt thành công rồi waooooooooo", SETTING_TOAST);
            navigate(`${ROUTE.PROFILE}?type=appointment_schedule`);
          }
        }

        putData();
      }
    } else {
      toast.warning("🦄 You must select enough fields!", SETTING_TOAST);
    }
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
                    doctorList.map((item, index) => {
                      return {
                        value: index,
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
                    selectedDate && selectedDoctor !== undefined
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
                <button
                  disabled={!isLogin}
                  onClick={() => {
                    handleBooking(selectedDoctor, selectedDate, selectedTimeSlot);
                  }}
                >
                  Booking
                </button>
              </Tooltip>
            </Row>
          </Container>
        </section>
      </>
    )
  );
};

export default DetailClinic;
