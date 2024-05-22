import { fn } from "@storybook/test";
import Index from "./index";

const PrimaryButton = ({ children, className, primary, rouded, onClick }) => {
  return (
    <Index
      rouded={rouded}
      primary={primary}
      className={className}
      onClick={onClick}
    >
      {children}
    </Index>
  );
};
const meta = {
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    onClick: fn(),
    rouded: false,
  },
};

export default meta;

export const Default = {
  args: {},
};

export const Rouded = {
  args: {
    rouded: true,
    primary: true,
  },
};
