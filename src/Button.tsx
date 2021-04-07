import { Link } from "react-router-dom";
import { darkTheme } from "./theme";
import { makeStyles, Typography } from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

interface ButtonProps {
  home?: boolean;
  onClick?: any;
  label: string;
  linkTo?: string;
  selected?: boolean;
  textOnly?: boolean;
  iconBefore?: boolean;
  iconAfter?: boolean;
  dark?: boolean;
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
    alignItems: "center",
    alignContent: "center",
    padding: 16,
    gap: "1rem",
    outline: 0,
    border: 0,
    textDecoration: "none",
    justifyContent: "flex-start",

    margin: "0 4px",
    color: darkTheme.palette.secondary.main,

    "&.selected": {
      boxShadow: `inset 0 0 0 3px ${darkTheme.palette.primary.main}`,
    },
    "&.textOnly": {
      padding: "2px 0",
      margin: "14px 0",
      boxShadow: `inset 0 0 0 0px ${darkTheme.palette.primary.main}`,
    },

    "&.textOnly :hover": {
      boxShadow: `inset 0 0 0 0px ${darkTheme.palette.primary.main}`,
      background: "none",
      color: ({ dark }: { dark: boolean | undefined }) =>
        dark ? "#000" : "#fff",
    },

    "&:hover": {
      background: darkTheme.palette.primary.main,
      color: ({ dark }: { dark: boolean | undefined }) =>
        dark ? "#000" : "#fff",
    },
  },
});
export const Button = ({
  onClick,
  label,
  linkTo,
  selected,
  textOnly,
  iconBefore,
  iconAfter,
  dark,
}: ButtonProps) => {
  const classes = useStyles({ dark });

  const backIcon = (
    <div style={{ flexShrink: 0 }}>
      <FeatherIcon size={18} icon="arrow-left" style={{ marginTop: 3 }} />
    </div>
  );

  const menuIcon = (
    <div style={{ flexShrink: 0 }}>
      <FeatherIcon size={18} icon="menu" style={{ marginTop: 2 }} />
    </div>
  );

  const btnLabel = (
    <Typography variant="button" style={{ flexShrink: 0 }}>
      {label ? label : "MENU"}
    </Typography>
  );

  return (
    <div onClick={onClick}>
      <Link
        to={linkTo}
        className={`${classes.button} ${selected ? "selected" : ""} ${
          textOnly ? "textOnly" : ""
        } ${dark ? "dark" : ""} `}
      >
        {iconBefore ? backIcon : null}
        {label.length > 1 ? btnLabel : null}
        {iconAfter ? menuIcon : null}
      </Link>
    </div>
  );
};

// () => {
//     setHome(true);
//   }
