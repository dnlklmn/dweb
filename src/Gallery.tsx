import Grid from "@material-ui/core/Grid";
import { Picture } from "./Picture";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { Unit } from "./StyleVariables";

// const unit = Number(Unit);
interface GalleryProps {
  unit: number;
}

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
  galleryItems: {
    "@media (min-width: 600px)": {
      minWidth: 500,
      maxWidth: 500,
    },
  },
});

export const Gallery = ({ unit }: GalleryProps) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 8 + unit * 2 }}>
      <Grid
        container
        xs={12}
        lg={10}
        spacing={unit < 6 ? 4 : 8}
        justify="center"
        className={classes.mainGrid}
      >
        {projects.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={8}
              lg={5}
              className={classes.galleryItems}
              style={{
                paddingTop: 12 + Math.random() * unit * 5,
                paddingLeft: 12 + Math.random() * unit * 10,
                paddingRight: 12 + Math.random() * unit * 10,
                paddingBottom: 12 + Math.random() * unit * 5,
              }}
            >
              <Link to={`/works/${item.url}`}>
                <Picture
                  overlayOn
                  bgImg={item.cover}
                  title={item.title}
                  unit={unit}
                />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};