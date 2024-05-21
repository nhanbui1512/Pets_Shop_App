import SortToolBoxComponent from "./index";
import { fn } from "@storybook/test";

const SortToolBox = () => {
  return <SortToolBoxComponent />;
};

export default {
  title: "Example/SortToolBox",
  component: SortToolBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
};

export const Normal = {
  component: SortToolBox,
  args: {
    className: {},
  },
};
