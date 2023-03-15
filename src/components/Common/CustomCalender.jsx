import React, { useEffect, useState } from "react";
import { Button, Calendar, Col, Row, Select, Typography } from "antd";
import dayjs from "dayjs";

const CustomCalendar = ({ setSelectedDate, disabledDoctorDate }) => {
  const disabledDate = (current) => {
    if (current && current.endOf("d").valueOf() < dayjs().endOf("day")) {
      return true;
    }
    if (
      current &&
      disabledDoctorDate &&
      disabledDoctorDate.includes(current.format("DD/MM/YYYY"))
    ) {
      return true;
    }

    return false;
  };

  const headerRender = ({ value, onChange }) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];
    let current = value.clone();
    const localeData = value.localeData();
    const months = [];
    const year = value.year();
    const month = value.month();
    for (let i = 0; i < 12; i++) {
      current = current.month(i);
      months.push(localeData.monthsShort(current));
    }
    for (let i = start; i < end; i++) {
      monthOptions.push(
        <Select.Option
          disabled={i < dayjs().month() && year <= dayjs().year()}
          key={i}
          value={i}
          className="month-item"
        >
          {months[i]}
        </Select.Option>
      );
    }
    const options = [];
    for (let i = dayjs().year() - 2; i < year + 7; i += 1) {
      options.push(
        <Select.Option
          disabled={i < dayjs().year()}
          key={i}
          value={i}
          className="year-item"
        >
          {i}
        </Select.Option>
      );
    }
    return (
      <div
        style={{
          padding: 8,
        }}
      >
        <Row gutter={8}>
          <Col>
            <Select
              size="small"
              dropdownMatchSelectWidth={false}
              className="my-year-select"
              value={year}
              onChange={(newYear) => {
                const now = value.clone().year(newYear);
                onChange(now);
              }}
            >
              {options}
            </Select>
          </Col>
          <Col>
            <Select
              size="small"
              dropdownMatchSelectWidth={false}
              value={month}
              onChange={(newMonth) => {
                const now = value.clone().month(newMonth);
                onChange(now);
              }}
            >
              {monthOptions}
            </Select>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Calendar
      disabledDate={disabledDate}
      fullscreen={false}
      onSelect={(value) => {
        disabledDate(value)
          ? setSelectedDate(dayjs().format("DD/MM/YYYY"))
          : setSelectedDate(value.format("DD/MM/YYYY"));
      }}
      headerRender={headerRender}
    />
  );
};

export default CustomCalendar;
