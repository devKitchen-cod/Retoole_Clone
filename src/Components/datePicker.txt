import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";

const DatePickerM = () => {
  const [value, setValue] = React.useState(new Date(2022, 3, 7));

  return (
    <div>
      {" "}
      <LocalizationProvider>
        <DatePicker
          mask="____/__/__"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerM;
