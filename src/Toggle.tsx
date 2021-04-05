import { Switch, makeStyles, withStyles } from "@material-ui/core";
import { darkTheme } from "./theme";

interface ToggleProps {
  checked: boolean;
  onChange: any;
  dark: boolean;
}

const MySwitch = withStyles({
  switchBase: {
    "&$checked + $track": {
      opacity: 1,
      backgroundColor: darkTheme.palette.primary.main,
    },
  },
  checked: {},
  track: { backgroundColor: darkTheme.palette.primary.main },
})(Switch);

const useStyles = makeStyles({
  toggle: {
    maxWidth: 180,
    "& .MuiSwitch-track": {
      height: 10,
      opacity: 1,
      marginTop: 0,
      background: darkTheme.palette.grey3.main,
      transition: "all 0.1s ease",
      borderRadius: 0,
    },
    "& .MuiSwitch-thumb": {
      height: 20,
      width: 20,
      marginTop: -2,
      borderRadius: 0,
      background: "#fff",
      boxShadow: `inset 0 0 0 3px ${darkTheme.palette.primary.main}`,
      "&:hover, &:active": {
        height: 20,
        width: 20,
        boxShadow: `inset 0 0 0 3px ${darkTheme.palette.primary.main}`,
        background: darkTheme.palette.primary.main,
      },
    },
  },
});

export const Toggle = ({ checked, onChange, dark }: ToggleProps) => {
  const classes = useStyles();

  return (
    <MySwitch
      checked={checked}
      onChange={onChange}
      className={classes.toggle}
    />
  );
};
