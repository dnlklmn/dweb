import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { MenuIcon } from "./MenuIcon";
import Grid from "@material-ui/core/Grid";
import { themeOne as theme } from "./theme";
import { Button } from "./Button";

interface MenuProps {
  menu: [string];
  home: boolean;
  onClick: any;
}

const useStyles = makeStyles({
  headerBg: {
    boxSizing: "border-box",
    padding: 24,
    color: "#000",
  },
  button: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    background: "none",
    outline: 0,
    border: 0,
    textDecoration: "none",
    textAlign: "right",

    "&.selected": {
      boxShadow: `inset 0 0 0 4px ${theme.palette.primary.main}`,
    },
  },
  selectTitle: {
    "@media (max-width: 400px)": {
      display: "none",
    },
  },
});

export const Menu = ({ menu, home, onClick }: MenuProps) => {
  const classes = useStyles();

  const [currentNav, setCurrentNav] = React.useState("Home");

  return (
    <Grid container justify="flex-end" xs={6} sm={12}>
      <Hidden smDown>
        <Grid
          item
          container
          xs={12}
          onClick={onClick}
          spacing={1}
          justify="flex-end"
        >
          {menu.map((item) => (
            <Button
              label={item}
              linkTo={`/${item.toLowerCase()}`}
              selected={currentNav === item && !home ? true : false}
              onClick={() => {
                setCurrentNav(item);
              }}
            />
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container item alignItems="center" xs={12} justify="flex-end">
          <Grid item xs={2}>
            <Typography variant="button" className={classes.selectTitle}>
              {currentNav !== "Home" && !home
                ? currentNav.toUpperCase()
                : "\u00a0"}
            </Typography>
          </Grid>
          <Grid item alignItems="center" xs={1} style={{ margin: "0 8px" }}>
            <MenuIcon />
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};
