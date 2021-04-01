import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import Grid from "@material-ui/core/Grid";
import { Picture } from "./Picture";
import React from "react";
import { Gallery } from "./Gallery";
import { Button } from "./Button";
import { makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { themeOne as theme } from "./theme";
import { SubPage } from "./SubPage";

const projects = [
  {
    title: "Satoshipay Micropayments",
    url: "satoshipay-micro",
    cover: "cactus.png",
  },
  { title: "Solar Wallet", url: "solar-wallet", cover: "laspalmas.png" },
  { title: "Quarters Design System", url: "quarters", cover: "tenerife.png" },
  { title: "Fourth Project", url: "four", cover: "beach.png" },
];

const useStyles = makeStyles({
  mainGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  items: {
    "@media (min-width: 600px)": {
      minWidth: 420,
      maxWidth: 420,
      margin: 0,
    },
  },
  slider: {
    width: 300,
  },
});

function App() {
  const menu = ["Works", "Blog", "Contact"];
  const classes = useStyles();

  const [unit, setUnit] = React.useState(4);

  const handleChange = (event, newValue) => {
    setUnit(newValue);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;700&display=swap');
        </style>
        <Router>
          <Grid container spacing={2} justify="center" alignContent="center">
            <Route exact path={["/", "/works", "/contact", "/blog"]}>
              <Grid item xs={12}>
                <Header menu={menu} unit={unit} onChange={handleChange} />
              </Grid>
            </Route>
            <Route exact path="/">
              <Grid item xs={12} sm={10} container justify="center" spacing={6}>
                <Grid item xs={12} className={classes.items}>
                  <Picture borderAlwaysOn bgImg="dk.jpg" unit={unit} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  alignContent="center"
                  container
                  spacing={2}
                  className={classes.items}
                >
                  <Grid item>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas nibh velit, auctor sed interdum non, sollicitudin
                      non mi. Pellentesque id pharetra metus. Praesent posuere
                      augue tempus quam elementum, sit amet placerat neque
                      cursus.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button label="GET IN TOUCH >" textOnly linkTo="/contact" />
                  </Grid>
                </Grid>
              </Grid>
            </Route>
            <Switch>
              <Route exact path="/works">
                <Gallery unit={unit} projects={projects} />
              </Route>
              <Route path="/blog">
                <span>Blog</span>
              </Route>
              <Route path="/contact">
                <span>Contact</span>
              </Route>
            </Switch>
            {projects.map((item) => {
              return (
                <Route exact path={`/works/${item.url}`}>
                  <Grid item xs={12}>
                    <Header sub />
                  </Grid>
                  <SubPage title={item.title} />;
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
