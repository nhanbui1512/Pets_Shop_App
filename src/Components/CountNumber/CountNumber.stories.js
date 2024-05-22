import CountNumberComponent from "./index";
import { fn } from "@storybook/test";
import { useState } from "react";

const CountNumber = () => {
  const [value, setValue] = useState(1);
  const handleOnChange = (number) => {
    setValue(number);
  };

  return (
    <CountNumberComponent
      value={value}
      className={{}}
      onChange={handleOnChange}
    />
  );
};

export default {
  title: "Components/Counter",
  component: CountNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
};

export const Normal = {
  args: {
    value: 1,
    className: {},
  },
};
