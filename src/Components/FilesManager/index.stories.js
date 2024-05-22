import { useState } from "react";
import Index from "./index";

const FilesManager = () => {
  const [files, setImageFiles] = useState([]);
  return (
    <div>
      <Index files={files} setImageFiles={setImageFiles} />
    </div>
  );
};
const meta = {
  component: FilesManager,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  parameters: {
    layout: "centered",
  },
};
