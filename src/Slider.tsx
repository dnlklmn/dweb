import { Slider as MUISlider, makeStyles } from "@material-ui/core";
import { darkTheme } from "./theme";

interface SliderProps {
  unit: number;
  onChange: any;
}

const useStyles = makeStyles({
  slider: {
    margin: "0 0px 6px 0px",
    width: 180,
    "& .MuiSlider-rail": {
      height: 10,
      background: darkTheme.palette.grey3.main,
    },
    "& .MuiSlider-track": {
      height: 10,

      paddingRight: 5,
      transition: "all 0.1s ease",
    },
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      marginLeft: -10,
      borderRadius: 0,
      background: "#fff",
      boxShadow: `inset 0 0 0 3px ${darkTheme.palette.primary.main}`,
      " &:hover, &:active": {
        height: 20,
        width: 20,
        marginLeft: -10,
        boxShadow: `inset 0 0 0 3px ${darkTheme.palette.primary.main}`,
        background: darkTheme.palette.primary.main,
      },
    },
  },
});

export const Slider = ({ unit, onChange }: SliderProps) => {
  const classes = useStyles();

  return (
    <MUISlider
      value={unit}
      onChange={onChange}
      className={classes.slider}
      step={2}
      min={0}
      max={10}
    />
  );
};
