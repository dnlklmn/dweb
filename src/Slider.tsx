import { Slider as MUISlider, makeStyles } from "@material-ui/core";
import { themeOne as theme } from "./theme";

interface SliderProps {
  unit: number;
  onChange: any;
}

const useStyles = makeStyles({
  slider: {
    margin: "0 24px",
    maxWidth: 320,
    "& .MuiSlider-rail": {
      height: 10,
      background: theme.palette.grey3.main,
    },
    "& .MuiSlider-track": {
      height: 10,
      paddingRight: 5,
    },
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      marginLeft: -10,
      marginTop: -5,
      borderRadius: 0,
      background: "#fff",
      boxShadow: `inset 0 0 0 3px ${theme.palette.primary.main}`,
      " &:hover, &:active": {
        height: 20,
        width: 20,
        marginLeft: -10,
        marginTop: -5,
        boxShadow: `inset 0 0 0 3px ${theme.palette.primary.main}`,
        background: theme.palette.primary.main,
      },
    },
    "& .MuiSlider-mark": {
      height: 10,
      width: 2,
      marginTop: -3,
      background: "#ffffff50",
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
      marks
      min={0}
      max={10}
    />
  );
};
