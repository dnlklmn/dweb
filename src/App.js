import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { createMuiTheme } from "@material-ui/core/styles";
import { Picture } from "./Picture";
import React from "react";
import { Gallery } from "./Gallery";
import { Button } from "./Button";
import {
  makeStyles,
  ThemeProvider,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { lightTheme, darkTheme } from "./theme";
import { SubPage } from "./SubPage";

const projects = [
  { title: "Quarters Design System", url: "quarters", cover: "tenerife.png" },
  {
    title: "Satoshipay Micropayments",
    url: "satoshipay-micro",
    cover: "cactus.png",
  },
  { title: "Solar Wallet", url: "solar-wallet", cover: "laspalmas.png" },
  { title: "Fourth Project", url: "four", cover: "beach.png" },
];

const useStyles = makeStyles({
  header: {
    flexShrink: 1,
    padding: `${(unit) => unit + 32}px 0`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 101,
    width: "100%",
  },
  flexBoxHorizontalCenter: {
    flexShrink: 1,
    width: "66%",
    padding: `${(unit) => unit + 32}px 0`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: (unit) => 48 + unit * 3,
    "@media (max-width: 960px)": {
      flexDirection: "column",
      width: "66%",
      alignItems: "flex-start",
    },
    "@media (max-width: 600px)": {
      padding: (unit) => unit + 8,
      width: "100%",
    },
  },
  flexBoxVerticalLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: (unit) => unit,
    "@media (max-width: 960px)": {
      width: "66%",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  pictureFlex: {
    height: 220,
    width: "33%",
    "@media (max-width: 960px)": {
      width: "66%",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
});

function App() {
  const menu = ["About", "Blog", "Contact"];

  const [unit, setUnit] = React.useState(4);
  const classes = useStyles(unit);

  const [dark, setDark] = React.useState(false);
  const appliedTheme = createMuiTheme(dark ? darkTheme : lightTheme);

  const handleChange = (event, newValue) => {
    setUnit(newValue);
  };

  console.log(dark);

  return (
    <div style={{ position: "relative" }}>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;700&display=swap');
        </style>

        <Router>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 16 + unit,
            }}
          >
            <Route exact path={["/", "/about", "/contact", "/blog"]}>
              <div className={classes.header}>
                <Header
                  menu={menu}
                  unit={unit}
                  onChange={handleChange}
                  checked={dark}
                  onChangeToggle={() => {
                    setDark(!dark);
                  }}
                />
              </div>
            </Route>

            <Route exact path="/">
              <div
                style={{
                  padding: unit * 1.5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 180 + unit * 10,
                  transition: "all 0.23s ease-in-out",
                }}
              >
                <Typography
                  variant="h3"
                  style={{ lineHeight: 1.4 + unit * 0.03, width: "66%" }}
                >
                  I design experiences and design systems to support them.
                </Typography>
              </div>
              <Gallery unit={unit} projects={projects} />
            </Route>
            <Switch>
              <Route exact path="/about">
                <div className={classes.flexBoxHorizontalCenter}>
                  <div className={classes.pictureFlex}>
                    <Picture borderAlwaysOn bgImg="dk.jpg" unit={unit} />
                  </div>
                  <div className={classes.flexBoxVerticalLeft}>
                    <Typography variant="body1" style={{ maxWidth: 420 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh velit, auctor sed interdum non, sollicitudin
                      non mi.
                    </Typography>
                    <Button label="GET IN TOUCH >" textOnly linkTo="/contact" />
                  </div>
                </div>
              </Route>
              <Route path="/blog">
                <span>Blog</span>
              </Route>
              <Route path="/contact">
                <span>Contact</span>
              </Route>
            </Switch>
            {projects.map((item, index) => {
              return (
                <Route exact path={`/works/${item.url}`} key={index * 0.8}>
                  <div className={classes.header}>
                    <Header sub />
                  </div>
                  <SubPage title={item.title} unit={unit} />;
                </Route>
              );
            })}
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
