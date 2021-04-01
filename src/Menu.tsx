import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import { Button } from "./Button";
import { Drawer } from "./Drawer";

interface MenuProps {
  menu: [string];
  home: boolean;
  onClick: any;
  currentNav: string;
  setNav: any;
}

export const Menu = ({
  menu,
  home,
  onClick,
  currentNav,
  setNav,
}: MenuProps) => {
  return (
    <Grid container justify="flex-end" xs={12}>
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
                setNav(item);
              }}
            />
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          onClickButton={onClick}
          setNav={(item: string) => setNav(item)}
          home={home}
          currentNav={currentNav}
          menu={menu}
          label={
            currentNav !== "Home" && !home ? currentNav.toUpperCase() : "\u00a0"
          }
          iconAfter
        />
      </Hidden>
    </Grid>
  );
};
