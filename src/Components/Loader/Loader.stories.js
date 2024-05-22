import LoaderComponent from "./index";
import { fn } from "@storybook/test";
import { useState } from "react";

const Loader = () => {
  return <LoaderComponent />;
};

export default {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
};

export const Normal = {
  args: {},
};
