import { Hidden, Typography } from "@material-ui/core";
import React from "react";
import { darkTheme } from "./theme";

interface PictureProps {
  bgImg?: string;
  borderAlwaysOn?: boolean;
  overlayOn?: boolean;
  title?: string;
  subtitle?: string;
  unit?: number;
}

export const Picture = ({
  bgImg,
  borderAlwaysOn,
  title,
  subtitle,
  unit,
}: PictureProps) => {
  const [showBorder, setShowBorder] = React.useState("none");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onMouseOver={() => {
        setShowBorder("block");
      }}
      onMouseOut={() => {
        setShowBorder("none");
      }}
    >
      <Hidden smUp>
        <div
          style={{
            width: "100%",
            position: "relative",
            height: "100%",
            backgroundImage: `url(./Assets/${bgImg})`,
            backgroundSize: "cover",
            float: "right",
            transition: "all 0.5s ease",
          }}
        >
          <div
            style={{
              backgroundColor: darkTheme.palette.primary.main,
              maxWidth: "85%",
              top: unit ? 24 + unit * 2 : 24,
              left: unit ? 32 + unit * -7 : 32,
              padding: unit ? 8 + unit * 2 : 8,
              position: "relative",
              color: "#fff",
              verticalAlign: "top",
              float: "left",
              zIndex: 100,
              transition: "all 0.5s ease",
            }}
          >
            <Typography variant="subtitle2">
              {title}
              <br />
              {subtitle}
            </Typography>
          </div>
        </div>
      </Hidden>
      <Hidden xsDown>
        <div
          style={{
            width: "100%",
            position: "relative",
            height: "100%",
            backgroundImage: `url(./Assets/${bgImg})`,
            backgroundSize: "cover",
            float: "right",
            transition: "all 0.5s ease",
          }}
        >
          <div
            style={{
              display: borderAlwaysOn ? "none" : showBorder,
              backgroundColor: darkTheme.palette.primary.main,
              maxWidth: "85%",
              top: unit ? 24 + unit * 2 : 24,
              left: unit ? 32 + unit * -7 : 32,
              padding: unit ? 8 + unit * 2 : 8,
              position: "relative",
              color: "#fff",
              verticalAlign: "top",
              float: "left",
              zIndex: 100,
              transition: "all 0.5s ease",
            }}
          >
            <Typography variant="subtitle2">
              {title}
              <br />
              {subtitle}
            </Typography>
          </div>
        </div>
      </Hidden>

      <Hidden smUp>
        <div
          style={{
            height: "100%",
            width: "100%",
            boxShadow: `inset 0 0 0 3px ${darkTheme.palette.primary.main}`,
            position: "relative",
            top: unit ? 8 + unit * 2 : 8,
            left: unit ? 8 + unit * 2 : 8,
            transition: "all 0.5s ease",
          }}
        ></div>
      </Hidden>
      <Hidden xsDown>
        <div
          style={{
            display: borderAlwaysOn ? "block" : showBorder,
            height: "100%",
            width: "100%",
            boxShadow: `inset 0 0 0 3px ${darkTheme.palette.primary.main}`,
            position: "relative",
            top: unit ? 8 + unit * 2 : 8,
            left: unit ? 8 + unit * 2 : 8,
            transition: "all 0.5s ease",
          }}
        ></div>
      </Hidden>
    </div>
  );
};
