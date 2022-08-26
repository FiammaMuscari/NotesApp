import { Grid, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({children, title=''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        className="box-shadow"
        sx={{ backgroundColor: "#fff", padding: 3, borderRadius: 3 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
