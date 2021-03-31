import { ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import { themeOne as theme } from "./theme";

interface PictureProps {
  bgImg?: string;
  borderAlwaysOn?: boolean;
  overlayOn?: boolean;
  title?: string;
  subtitle?: string;
  unit: number;
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
    <ThemeProvider theme={theme}>
      <div
        style={{ position: "relative", width: "100%", height: "100%" }}
        onMouseOver={() => {
          setShowBorder("block");
        }}
        onMouseOut={() => {
          setShowBorder("none");
        }}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
            minHeight: 300,
            backgroundImage: `url(./Assets/${bgImg})`,
            backgroundSize: "cover",
            display: "block",
            float: "right",
          }}
        >
          <div
            style={{
              display: borderAlwaysOn ? "none" : showBorder,
              backgroundColor: "#FF13EA",
              maxWidth: "85%",
              top: 24 + unit * 2,
              left: 32 + unit * -7,
              padding: 8 + unit * 2,
              position: "relative",
              height: "100%",
              color: "#fff",
              verticalAlign: "top",
              float: "left",
            }}
          >
            <Typography variant="subtitle2">
              {title}
              <br />
              {subtitle}
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: borderAlwaysOn ? "block" : showBorder,
            height: "100%",
            width: "100%",
            boxShadow: "inset 0 0 0 3px #FF13EA",
            position: "relative",
            top: 8 + unit * 2,
            left: 8 + unit * 2,
          }}
        ></div>
      </div>
    </ThemeProvider>
  );
};
