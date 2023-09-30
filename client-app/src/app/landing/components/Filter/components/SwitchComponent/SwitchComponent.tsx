import { Switch } from "@mui/material";
import React from "react";

const SwitchComponent = () => {
  return (
    <>
      Best Sellers
      <Switch
        // checked={isChecked}
        // onChange={() => setIsChecked((prev) => !prev)}
        name="toggleSwitch"
        inputProps={{ "aria-label": "toggle switch" }}
      />
      Newest
    </>
  );
};

export default SwitchComponent;
