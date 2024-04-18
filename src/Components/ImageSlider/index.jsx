import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import classNames from "classnames/bind";
import styles from "./ImageSlider.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles);

function ImageSlider({ images = [] }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const percentSlide = (1 / maxSteps) * activeStep * 100;

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            "--percent": `-${percentSlide}%`,
          }}
          className={cx("list-image")}
        >
          {images.map((step, index) => (
            <div className={cx("image-container")} key={step.label}>
              <Image
                src={
                  step ||
                  "https://bizweb.dktcdn.net/100/229/172/products/bow-wow-pho-mai-cuon-ga-1709195207055.jpg?v=1709440731433"
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ImageSlider;
