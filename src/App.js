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
import { Box } from "./Box";
import ThemeContext from "./ThemeContext";

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
  main: {
    width: "100%",
    margin: "0 auto",
    "@media (max-width: 960px)": {
      width: "80%",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
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
    transitionDelay: "0.23s",
    transition: "all 0.23s ease",
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

  return (
    <ThemeContext.Provider value={unit}>
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
                  dark={dark}
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
                  I design experiences and create design systems that support
                  them.
                </Typography>
              </div>
              <Gallery unit={unit} projects={projects} />
            </Route>

            <Switch>
              <Route exact path="/about">
                <Box
                  width="66%"
                  align="center"
                  unit={unit}
                  gap={48}
                  justify="center"
                >
                  <div className={classes.pictureFlex}>
                    <Picture borderAlwaysOn bgImg="dk.jpg" unit={unit} />
                  </div>
                  <Box vertical unit={unit}>
                    <Typography variant="body1" style={{ maxWidth: 420 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh velit, auctor sed interdum non, sollicitudin
                      non mi.
                    </Typography>
                    <Button
                      dark={dark}
                      label="GET IN TOUCH >"
                      textOnly
                      linkTo="/contact"
                    />
                  </Box>
                </Box>
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
                    <Header
                      sub
                      dark={dark}
                      unit={unit}
                      onChange={handleChange}
                      checked={dark}
                      onChangeToggle={() => {
                        setDark(!dark);
                      }}
                    />
                  </div>
                  <SubPage title={item.title} unit={unit} />;
                </Route>
              );
            })}
          </div>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
