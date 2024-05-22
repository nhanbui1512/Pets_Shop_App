import { Box, Skeleton as SkeletonComponent } from "@mui/material";

const Skeleton = ({ variant, animation, width, height }) => {
  return (
    <div style={{ width: width, height: height }}>
      <Box sx={{ pt: 0.5 }}>
        <SkeletonComponent
          variant={variant}
          animation={animation}
          width={"100%"}
          height={118}
        />
      </Box>
    </div>
  );
};

export default {
  title: "Example/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "retangular",
    animation: "wave",
    width: 200,
    height: 200,
  },
};

export const Normal = {
  args: {
    variant: "retangular",
  },
};
