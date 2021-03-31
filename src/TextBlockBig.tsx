import { makeStyles } from "@material-ui/core";

interface TextBlockBigProps {
  text?: string;
}

const useStyles = makeStyles({
  heroText: {
    overflow: "hidden",
    maxWidth: 480,
    color: "#000",
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.2,
    fontWeight: 700,
    fontStyle: "normal",
    fontFamily: `"Overpass Mono", monospace`,
    "@media (max-width:1100px)": {
      width: "100%",
    },
  },
  buttonText: {
    overflow: "visible",
    color: "#000000",
    lineHeight: 1.2,
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 700,
    height: 24,
    marginTop: 16,
    fontStyle: "normal",
    fontFamily: `"Overpass Mono", monospace`,
  },
});

export const TextBlockBig = ({ text }: TextBlockBigProps) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heroText}>{text}</div>
      <div className={classes.buttonText}>Get in touch {">"}</div>
    </div>
  );
};
