import React, { useState } from "react";

function TimeSlotRadioGroup({ options, handeleGetTimeValue }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleRadioChange = (e) => {
    if (selectedSlot === e.target.value) {
      setSelectedSlot(null);
      handeleGetTimeValue(null);
    } else {
      setSelectedSlot(e.target.value);
      handeleGetTimeValue(e.target.value);
    }
  };

  return (
    <div>
      {options.map((value, index) => (
        <div key={value} className="time-slot-item">
          <input
            type="checkbox"
            name="timeSlot"
            id={`option-${index}`}
            value={value}
            checked={selectedSlot === value}
            onChange={handleRadioChange}
            className="slot-time"
          />
          <label htmlFor={`option-${index}`}>{value}</label>
        </div>
      ))}
    </div>
  );
}

export default TimeSlotRadioGroup;
