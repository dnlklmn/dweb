import { Grid, Typography } from "@material-ui/core";
import sp1 from "./sp1.png";

interface SubPageProps {
  title: string;
  unit: number;
}

export const SubPage = ({ title, unit }: SubPageProps) => {
  const spMicro = (
    <Grid
      container
      item
      xs={12}
      sm={10}
      justify="center"
      spacing={6}
      alignItems="center"
      style={{ marginTop: 8 + unit * 3 }}
    >
      <Grid container item spacing={2} xs={12} lg={6} alignContent="flex-start">
        <Grid item>
          <Typography variant="subtitle1">
            SatoshiPay is a payment provider operating on the blockchain.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Our goal was to verify that people are ready to purchase online
            content directly from the content provider, instead of supporting
            them by watching ads. Along the way we figured out It is hard to
            convince people to pay for digital content, however little you ask
            for. Let alone having to do the whole thing on the blockchain.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ width: unit }} />
      <Grid item xs={12} lg={6}>
        <img
          style={{
            width: "100%",
            maxWidth: 480,
            height: "100%",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
          src={sp1}
          alt=""
        />
      </Grid>
    </Grid>
  );

  return (
    <Grid
      container
      item
      alignItems="center"
      justify="center"
      spacing={7}
      xs={12}
      style={{ height: 180 }}
    >
      <Grid item xs={12} md={10}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid item xs={12} md={10} lg={10} justify="center">
        {spMicro}
      </Grid>
    </Grid>
  );
};
