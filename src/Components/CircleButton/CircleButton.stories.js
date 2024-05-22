import { any } from "prop-types";
import CircleButtonComponent from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CircleButton = ({ children }) => {
  return <CircleButtonComponent>{children || "icon"}</CircleButtonComponent>;
};

export default {
  title: "Components/CircleButton",
  component: CircleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    tranparent: false,
    className: {},
    children: any,
  },
};

export const Transparent = {
  component: CircleButton,
  args: {
    children: <FontAwesomeIcon icon={faPlus} />,
  },
};
