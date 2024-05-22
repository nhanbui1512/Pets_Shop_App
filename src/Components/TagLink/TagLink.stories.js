import { TextDecoration } from "@cloudinary/url-gen/qualifiers";
import TagLinkComponent from ".";
import { BrowserRouter } from "react-router-dom";
const TagLink = ({ children, to = "/", style = {} }) => {
  return (
    <BrowserRouter>
      <TagLinkComponent style={style} to={to}>
        {children}
      </TagLinkComponent>
    </BrowserRouter>
  );
};

export default {
  title: "Example/TagLink",
  component: TagLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Helloword",
    to: "/",
    style: {
      textDecoration: "none",
      color: "#000",
    },
  },
};

export const Normal = {
  args: {},
};
