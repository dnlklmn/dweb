import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => setState(true);

  const list = (anchor: Anchor) => (
    <div style={{ width: 100, height: "100%", background: "red" }}>
      <span>items here</span>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={() => setState(true)}>"this button"</Button>
        <SwipeableDrawer
          open={state}
          onClose={() => setState(false)}
          onOpen={() => setState(true)}
        >
          {list}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
