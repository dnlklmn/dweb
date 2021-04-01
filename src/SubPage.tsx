import { Grid, Typography } from "@material-ui/core";
import React from "react";

interface SubPageProps {
  title: string;
}

export const SubPage = ({ title }: SubPageProps) => {
  return (
    <Grid container item alignItems="center" xs={10} style={{ height: 180 }}>
      <Grid item>
        <Typography variant="h3">{title}</Typography>
      </Grid>
    </Grid>
  );
};
