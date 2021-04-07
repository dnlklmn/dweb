import { Grid, makeStyles, Typography } from "@material-ui/core";
import sp1 from "./sp1.png";
import paymentLines from "./sp-images/payment-lines.png";
import horizontalFlow from "./sp-images/horizontal-flow-chart.png";
import { Box } from "./Box";

interface SubPageProps {
  title: string;
  unit: number;
}

const useStyles = makeStyles({
  image: {
    width: "80%",
    height: "100%",
    "@media (max-width: 960px)": {
      width: "100%",
    },
  },
});

export const SubPage = ({ title, unit }: SubPageProps) => {
  const SpMicro = (classes: any) => {
    return (
      <div>
        <Box vertical unit={unit} width="80%" justify="flex-start" padding={32}>
          <Typography variant="h3">{title}</Typography>
          <div style={{ height: 24 }} />
          <Box vertical unit={unit} width="100%" align="flex-start" padding={0}>
            <Typography variant="subtitle2">
              SatoshiPay is a payment provider operating on the Stellar
              blockchain.
            </Typography>
            <Typography variant="body1">
              Our goal was to verify that people are ready to purchase online
              content directly from the content provider, instead of supporting
              them by watching ads.
            </Typography>
          </Box>
        </Box>
        <Box vertical width="100%" align="flex-start" unit={unit} padding={32}>
          <Typography variant="h4">The Problem</Typography>
          <Box vertical align="flex-start" unit={unit} padding={0} gap={56}>
            <Box width="100%" align="center" unit={unit} padding={0}>
              <Box
                vertical
                width="75%"
                align="center"
                justify="space-between"
                unit={unit}
                padding={0}
              >
                <Typography variant="body1">
                  The micropayment service worked, but it lacked a clean and
                  user friendly interface. Our first clients deserve a smoother
                  experience. <br />
                  <br />
                  Would you pay 1?
                </Typography>
              </Box>
              <Box
                vertical
                width="65%"
                align="flex-start"
                unit={unit}
                padding={0}
              >
                <img
                  style={{
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                  src={paymentLines}
                  alt=""
                />
              </Box>
            </Box>
            <Box width="100%" align="flex-start" unit={unit} padding={0}>
              <Box
                vertical
                width="45%"
                align="flex-start"
                unit={unit}
                padding={0}
              >
                <Typography variant="subtitle2">Goals</Typography>
                <Typography variant="body1" style={{ lineHeight: 2 }}>
                  1. Make purchasing a product easy <br /> 2. Build trust {"&"}{" "}
                  secure funds <br />
                  3. Make device independent
                </Typography>
              </Box>
              <Box
                vertical
                width="57%"
                align="flex-start"
                unit={unit}
                padding={0}
              >
                <Typography variant="subtitle2">Challenges</Typography>

                <Typography variant="body1" style={{ lineHeight: 2 }}>
                  1. Our widgets live on others' websites
                  <br /> 2. A new and unfamiliar way of spending money <br /> 3.
                  Cumbersome security process
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={horizontalFlow}
          alt=""
        /> */}
      </div>
    );
  };

  const classes = useStyles();

  return (
    <Grid container xs={12} style={{ padding: 0, margin: 0 }}>
      <SpMicro classes={classes} />
    </Grid>
  );
};
