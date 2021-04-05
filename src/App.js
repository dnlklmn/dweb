import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import Grid from "@material-ui/core/Grid";
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
  mainGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  items: {
    "@media (min-width: 600px)": {
      margin: 0,
    },
  },
  slider: {
    width: 300,
  },
});

function App() {
  const menu = ["About", "Blog", "Contact"];
  const classes = useStyles();

  const [unit, setUnit] = React.useState(4);
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
          <Grid container spacing={7} justify="center" alignContent="center">
            <Route exact path={["/", "/about", "/contact", "/blog"]}>
              <Grid
                item
                container
                xs={12}
                style={{
                  position: "sticky",
                  top: 0,
                  padding: "0 24px",
                  zIndex: 101,
                }}
              >
                <Header
                  menu={menu}
                  unit={unit}
                  onChange={handleChange}
                  checked={dark}
                  onChangeToggle={() => {
                    setDark(!dark);
                  }}
                />
              </Grid>
            </Route>

            <Route exact path="/">
              <Grid item container xs={9} justify="flex-start">
                <Grid
                  item
                  container
                  xs={9}
                  style={{
                    minHeight: 160 + unit * 10,
                    marginTop: 32,
                    transition: "all 0.23s ease-in-out",
                  }}
                  alignContent="center"
                >
                  <Typography
                    variant="h3"
                    style={{ lineHeight: 1.4 + unit * 0.03 }}
                  >
                    I design experiences and design systems to support them.
                  </Typography>
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={12}>
                <Gallery unit={unit} projects={projects} />
              </Grid>
            </Route>
            <Switch>
              <Route exact path="/about">
                <Grid
                  item
                  xs={11}
                  sm={10}
                  container
                  justify="center"
                  alignItems="center"
                  spacing={4 + unit / 2}
                >
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    className={classes.items}
                    style={{ height: 220, width: "100%" }}
                  >
                    <Picture borderAlwaysOn bgImg="dk.jpg" unit={unit} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    spacing={2}
                    className={classes.items}
                    style={{ alignSelf: "flex-end" }}
                  >
                    <Typography variant="body1" style={{ maxWidth: 420 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh velit, auctor sed interdum non, sollicitudin
                      non mi.
                    </Typography>
                    <Button label="GET IN TOUCH >" textOnly linkTo="/contact" />
                  </Grid>
                </Grid>
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
                  <Grid item xs={12}>
                    <Header sub />
                  </Grid>
                  <SubPage title={item.title} unit={unit} />;
                </Route>
              );
            })}
          </Grid>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
