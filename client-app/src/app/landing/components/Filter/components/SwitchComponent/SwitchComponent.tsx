import { Switch } from "@mui/material";
import React from "react";

interface ISwitchComponent {}
const SwitchComponent: React.FC<ISwitchComponent> = () => {
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
