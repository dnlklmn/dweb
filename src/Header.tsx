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
    padding: ({ unit }: { unit: number }) => 24 + unit,
    zIndex: 101,
    "@media (max-width: 600px)": {
      padding: ({ unit }: { unit: number }) => 16 + unit,
    },
  },
  flexBoxLeft: {
    flexShrink: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
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
}: HeaderProps) => {
  const classes = useStyles({ unit });

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
    <div
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
    </div>
  );

  const backBtn = <Button textOnly iconBefore label="Back" linkTo="/" />;

  return (
    <div className={classes.headerBg}>
      <div className={classes.flexBoxLeft}>
        {sub ? backBtn : homeBtn}
        <Hidden xsDown>
          <div>{sub ? null : slider}</div>
          <Button
            label={checked ? "make light" : "make dark"}
            onClick={onChangeToggle}
            textOnly
          />
        </Hidden>
      </div>
      {/* remove grid from here */}
      <Grid item xs={3} sm={4} justify="flex-end">
        {sub ? null : menuComponent}
      </Grid>
    </div>
  );
};
