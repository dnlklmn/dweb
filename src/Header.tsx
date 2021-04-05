import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { Slider } from "./Slider";
import { Toggle } from "./Toggle";

interface HeaderProps {
  menu: [string];
  unit: number;
  onChange: any;
  sub: boolean;
  checked: boolean;
  onChangeToggle: any;
}

const useStyles = makeStyles({
  headerBg: {
    position: "sticky",
    top: 0,
    boxSizing: "border-box",
    padding: 24,
    zIndex: 101,
    "@media (max-width: 600px)": {
      padding: 12,
    },
  },
});

export const Header = ({
  menu,
  unit,
  onChange,
  sub,
  checked,
  onChangeToggle,
}: HeaderProps) => {
  const classes = useStyles();

  const [home, setHome] = React.useState(true);
  const [currentNav, setCurrentNav] = React.useState("Home");

  const slider = <Slider unit={unit} onChange={onChange} />;
  const menuComponent = (
    <Menu
      setNav={(item: string) => setCurrentNav(item)}
      currentNav={currentNav}
      menu={menu}
      home={home}
      onClick={() => {
        setHome(false);
      }}
    />
  );

  const homeBtn = (
    <Grid
      item
      xs={6}
      style={{
        maxWidth: 180,
        minWidth: 180,
      }}
    >
      <Button
        selected={home}
        label="Daniel Kalman"
        linkTo="/"
        onClick={() => {
          setHome(true);
        }}
      />
    </Grid>
  );

  const toggle = (
    <Toggle checked={checked} onChange={onChangeToggle} dark={checked} />
  );

  const backBtn = <Button textOnly iconBefore label="Back" linkTo="/" />;

  return (
    <Grid
      xs={12}
      className={classes.headerBg}
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid container justify="flex-start" item xs={8} alignItems="center">
        {sub ? backBtn : homeBtn}
        <Grid
          container
          item
          xs={6}
          sm={5}
          justify="space-between"
          style={{ maxWidth: 300 }}
        >
          <Hidden xsDown>
            <Grid item xs={8}>
              {sub ? null : slider}
            </Grid>
            <Grid item xs={2}>
              {sub ? null : toggle}
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid item xs={3} sm={4} justify="flex-end">
        {sub ? null : menuComponent}
      </Grid>
    </Grid>
  );
};
