import { Grid, Typography } from "@material-ui/core";
import sp1 from "./sp1.png";
import paymentLines from "./sp-images/payment-lines.png";
import horizontalFlow from "./sp-images/horizontal-flow-chart.png";

interface SubPageProps {
  title: string;
  unit: number;
}

export const SubPage = ({ title, unit }: SubPageProps) => {
  const spMicro = (
    <div>
      <Grid container item xs={12} justify="center">
        {/* intro + flowchart */}
        <Grid
          container
          item
          xs={12}
          sm={10}
          alignItems="center"
          style={{ marginTop: 8 + unit * 3 }}
        >
          <Grid container item spacing={2} xs={12} lg={6}>
            <Grid item>
              <Typography variant="subtitle2">
                SatoshiPay is a payment provider operating on the blockchain.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Our goal was to verify that people are ready to purchase online
                content directly from the content provider, instead of
                supporting them by watching ads.
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
        {/* problem + lines */}

        <Grid container item xs={12} alignItems="center">
          <Grid item xs={12} style={{ marginTop: 48 + unit * 3 }}>
            <Typography variant="h4">The Problem</Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <img
              style={{
                width: "100%",
                maxWidth: 480,
                height: "100%",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
              src={paymentLines}
              alt=""
            />
          </Grid>
          <div style={{ width: unit }} />
          <Grid
            container
            item
            spacing={2}
            xs={12}
            lg={6}
            style={{ maxWidth: 620 }}
          >
            <Grid item>
              <Typography variant="body1">
                The micropayment service worked, but it lacked a clean and user
                friendly interface. Our first clients deserve a smoother
                experience. <br />
                <br />
                Would you pay 1?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={10}
          justify="flex-start"
          spacing={6}
          alignItems="center"
          style={{ marginTop: 24 + unit * 3 }}
        >
          <Grid
            container
            item
            spacing={2}
            xs={12}
            lg={6}
            alignContent="flex-start"
          >
            <Grid item>
              <Typography variant="subtitle2">Goals</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" style={{ lineHeight: 2 }}>
                1. Make purchasing a product easy <br /> 2. Build trust {"&"}{" "}
                secure funds <br />
                3. Make device independent
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            spacing={2}
            xs={12}
            lg={6}
            alignContent="flex-start"
          >
            <Grid item>
              <Typography variant="subtitle2">Challenges</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" style={{ lineHeight: 2 }}>
                1. Our widgets live on others' websites
                <br /> 2. A new and unfamiliar way of spending money <br /> 3.
                Cumbersome security process
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={horizontalFlow}
          alt=""
        />
      </Grid>
    </div>
  );

  return (
    <Grid container xs={12} style={{ padding: 0, margin: 0 }}>
      <Grid item xs={12} md={10}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      {spMicro}
    </Grid>
  );
};
