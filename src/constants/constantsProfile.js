import { FaCalendarPlus, FaExchangeAlt, FaUser } from "react-icons/fa";

export const LIST_KEY = [
  {
    value: "account",
    render: () => {
      return (
        <>
          <FaUser />
          My Profile
        </>
      );
    },
  },
  {
    value: "change_password",
    render: () => {
      return (
        <>
          <FaExchangeAlt />
          Change Password
        </>
      );
    },
  },
  {
    value: "appointment_schedule",
    render: () => {
      return (
        <>
          <FaCalendarPlus />
          My Booked
        </>
      );
    },
  },
];
