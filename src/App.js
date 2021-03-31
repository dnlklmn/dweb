import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import Grid from "@material-ui/core/Grid";
import { Picture } from "./Picture";
import React from "react";
import { Gallery } from "./Gallery";
import { makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import { themeOne as theme } from "./theme";

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
            <Grid item xs={12}>
              <Header menu={menu} unit={unit} onChange={handleChange} />
            </Grid>
            <Route exact path="/">
              <Grid item xs={12} sm={10} container justify="center" spacing={6}>
                <Grid item xs={12} className={classes.items}>
                  <Picture borderAlwaysOn bgImg="dk.jpg" />
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
                    <Typography variant="button">GET IN TOUCH {">"}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Route>
          </Grid>

          <Switch>
            <Route path="/works">
              <Gallery unit={unit} />
            </Route>
            <Route path="/blog">
              <span>Blog</span>
            </Route>
            <Route path="/contact">
              <span>Contact</span>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
