import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Menu } from "./Menu";
import { themeOne as theme } from "./theme";
import { Button } from "./Button";
import { Slider } from "./Slider";

interface HeaderProps {
  menu: [string];
  unit: number;
  onChange: any;
}

const useStyles = makeStyles({
  headerBg: {
    boxSizing: "border-box",
    padding: 24,
  },
  button: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    background: "none",
    outline: 0,
    border: 0,
    textDecoration: "none",
    margin: "0 4px",

    "&.selected": {
      boxShadow: `inset 0 0 0 4px ${theme.palette.primary.main}`,
    },
    "&:hover": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
  menuItems: {
    width: "auto",
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "visible",
    gap: 24,
  },
});

export const Header = ({ menu, unit, onChange }: HeaderProps) => {
  const classes = useStyles();

  const [home, setHome] = React.useState(true);

  return (
    <Grid
      xs={12}
      className={classes.headerBg}
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid container item xs={8} alignItems="center">
        <Grid item xs={6} style={{ maxWidth: 180, minWidth: 180 }}>
          <Button
            selected={home}
            label="Daniel Kalman"
            linkTo="/"
            onClick={() => {
              setHome(true);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Hidden xsDown>
            <Slider unit={unit} onChange={onChange} />
          </Hidden>
        </Grid>
      </Grid>
      <Grid item xs={3} sm={4} justify="flex-end">
        <Menu
          menu={menu}
          home={home}
          onClick={() => {
            setHome(false);
          }}
        />
      </Grid>
    </Grid>
  );
};
