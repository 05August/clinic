export const convertDate = (dateString) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateArray = dateString.split("/");

  const day = dateArray[0];
  const monthIndex = parseInt(dateArray[1]) - 1;
  const monthName = monthNames[monthIndex];
  const year = dateArray[2];

  return `${day} ${monthName} ${year}`;
};
