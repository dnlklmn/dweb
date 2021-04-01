import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Button } from "./Button";
import { Grid } from "@material-ui/core";

interface DrawerProps {
  label?: string;
  iconBefore?: boolean;
  iconAfter?: boolean;
  menu: [string];
  currentNav: string;
  home: boolean;
  setNav: any;
  onClickButton: any;
}

export const Drawer = ({
  label,
  iconBefore,
  iconAfter,
  menu,
  currentNav,
  home,
  setNav,
  onClickButton,
}: DrawerProps) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const list = (
    <div style={{ width: 280, padding: 24 }}>
      {menu.map((item) => (
        <Grid item xs={12} onClick={onClickButton}>
          <Button
            label={item}
            linkTo={`/${item.toLowerCase()}`}
            selected={currentNav === item && !home ? true : false}
            onClick={() => {
              setNav(item);
              setDrawerOpen(false);
            }}
          />
        </Grid>
      ))}
    </div>
  );

  return (
    <div>
      <Button
        onClick={() => setDrawerOpen(true)}
        label={label ? label : "HAMM HAMM"}
        iconAfter={iconAfter}
        iconBefore={iconBefore}
      />
      <SwipeableDrawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
};
