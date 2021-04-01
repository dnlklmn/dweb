import { Link } from "react-router-dom";
import { themeOne as theme } from "./theme";
import { makeStyles, Typography } from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

interface ButtonProps {
  home?: boolean;
  onClick?: any;
  label?: string;
  linkTo?: string;
  selected?: boolean;
  textOnly?: boolean;
  withIcon?: boolean;
}

const useStyles = makeStyles({
  headerBg: {
    boxSizing: "border-box",
    padding: 24,
  },
  button: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: "1rem",
    outline: 0,
    border: 0,
    textDecoration: "none",
    margin: "0 4px",
    color: theme.palette.secondary.main,

    "&.selected": {
      boxShadow: `inset 0 0 0 3px ${theme.palette.primary.main}`,
    },
    "&.textOnly": {
      padding: "16px 0",
      margin: 0,
      boxShadow: `inset 0 0 0 0px ${theme.palette.primary.main}`,
    },
    //next up
    "&.textOnly :hover": {
      boxShadow: `inset 0 0 0 0px ${theme.palette.primary.main}`,
      background: "none",
      color: "#fff",
    },
    "&:hover": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
});
export const Button = ({
  home,
  onClick,
  label,
  linkTo,
  selected,
  textOnly,
  withIcon,
}: ButtonProps) => {
  const classes = useStyles();

  const backIcon = (
    <div style={{ flexShrink: 0 }}>
      <FeatherIcon size={18} icon="arrow-left" />
    </div>
  );

  return (
    <Link
      to={linkTo}
      className={`${classes.button} ${selected ? "selected" : ""} ${
        textOnly ? "textOnly" : ""
      } `}
      onClick={onClick}
    >
      {withIcon ? backIcon : null}
      <Typography variant="button">{label}</Typography>
    </Link>
  );
};

// () => {
//     setHome(true);
//   }
