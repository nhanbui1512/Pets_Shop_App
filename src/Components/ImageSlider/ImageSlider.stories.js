import ImageSliderComponent from ".";

const ImageSlider = ({ images = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #d4d4d4",
      }}
    >
      <ImageSliderComponent images={images} />
    </div>
  );
};

export default {
  title: "Example/ImageSlider",
  component: ImageSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    images: [
      "https://res.cloudinary.com/dw6kncu63/image/upload/v1713235963/product/r8hcxezzbqah2izb3kh9.webp",
      "https://res.cloudinary.com/dw6kncu63/image/upload/v1713235968/product/vqs5xm2g9v3kiqd2awh7.webp",
    ],
  },
};

export const Normal = {
  args: {},
};
