import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  return (
    <Grid
      container
      wrap="nowrap"
      sx={{
        display: "grid",
        gap: "12px 12px",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr));",
      }}
    >
      <Box sx={{ marginRight: 0.5, my: 5 }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={118}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="100%" />
        </Box>
      </Box>
      <Box sx={{ marginRight: 0.5, my: 5 }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={118}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="100%" />
        </Box>
      </Box>{" "}
      <Box sx={{ marginRight: 0.5, my: 5 }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={118}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="100%" />
        </Box>
      </Box>
      <Box sx={{ marginRight: 0.5, my: 5 }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={118}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="100%" />
        </Box>
      </Box>
      <Box sx={{ marginRight: 0.5, my: 5 }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={118}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="100%" />
        </Box>
      </Box>
      <Box sx={{ marginRight: 0.5, my: 5 }}>
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={118}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="100%" />
        </Box>
      </Box>
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function ListSkeleton() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
    </Box>
  );
}
