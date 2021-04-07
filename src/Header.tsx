import React from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { Slider } from "./Slider";

interface HeaderProps {
  menu: [string];
  unit: number;
  onChange: any;
  sub: boolean;
  checked: boolean;
  onChangeToggle: any;
  dark?: boolean;
}

const useStyles = makeStyles({
  headerBg: {
    width: "100%",
    boxSizing: "border-box",
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    transition: "all 0.23s ease",
    transitionDelay: ".23s",
    padding: ({ unit }: { unit: number }) => `24px ${24 + unit}px`,
    zIndex: 101,
    "@media (max-width: 600px)": {
      padding: ({ unit }: { unit: number }) => `16px ${16 + unit}px`,
    },
  },
  flexBoxLeft: {
    flexShrink: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    transition: "all 0.23s ease",
    transitionDelay: ".23s",
    gap: ({ unit }: { unit: number }) => 16 + unit * 2,
  },
});

export const Header = ({
  menu,
  unit,
  onChange,
  sub,
  checked,
  onChangeToggle,
  dark,
}: HeaderProps) => {
  const classes = useStyles({ unit });

  const [home, setHome] = React.useState(true);
  const [currentNav, setCurrentNav] = React.useState("Home");

  const slider = <Slider unit={unit} onChange={onChange} />;
  const menuComponent = (
    <Menu
      dark={dark}
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
    <div
      style={{
        maxWidth: 180,
        minWidth: 180,
      }}
    >
      <Button
        dark={dark}
        selected={home}
        label="Daniel Kalman"
        linkTo="/"
        onClick={() => {
          setHome(true);
        }}
      />
    </div>
  );

  const darkSwitch = (
    <Button
      dark={dark}
      label={checked ? "lights on" : "lights out"}
      onClick={onChangeToggle}
      textOnly
    />
  );

  const backBtn = (
    <Button dark={dark} textOnly iconBefore label="Back" linkTo="/" />
  );

  return (
    <div className={classes.headerBg}>
      <div className={classes.flexBoxLeft}>
        {sub ? backBtn : homeBtn}
        <Hidden xsDown>
          {sub ? null : slider}
          {sub ? null : darkSwitch}
        </Hidden>
      </div>
      {/* remove grid from here */}
      <Grid item xs={3} sm={4} justify="flex-end">
        {sub ? null : menuComponent}
      </Grid>
    </div>
  );
};
