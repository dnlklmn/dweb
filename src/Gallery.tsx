import Grid from "@material-ui/core/Grid";
import { Picture } from "./Picture";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { Unit } from "./StyleVariables";

// const unit = Number(Unit);
interface GalleryProps {
  unit: number;
  projects: [{ title: string; url: string; cover: string }];
}

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

export const Gallery = ({ unit, projects }: GalleryProps) => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        xs={12}
        lg={10}
        spacing={6}
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
                paddingLeft: 12 + Math.random() * unit * 12,
                paddingRight: 12 + Math.random() * unit * 12,
                paddingBottom: 12 + Math.random() * unit * 5,
                transition: "all 0.23s ease-in-out",
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
