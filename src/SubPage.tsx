import { Typography } from "@material-ui/core";
import paymentLines from "./sp-images/payment-lines.png";
import { Box } from "./Box";
import HorizontalFlowChart from "./sp-images/horizontal-flow-chart.png";
import Research from "./sp-images/research.png";
import PinkFlow from "./sp-images/pink-flow.png";
import Wireframes from "./sp-images/wireframes.png";
import Framer1 from "./sp-images/framer-1.gif";
import Account from "./sp-images/account.png";
import Containers from "./sp-images/containers.jpeg";
import { darkTheme } from "./theme";

interface SubPageProps {
  title: string;
  unit: number;
}

export const SubPage = ({ title, unit }: SubPageProps) => {
  const SpMicro = () => {
    return (
      <Box
        vertical
        width="100%"
        justify="center"
        align="center"
        unit={unit}
        padding={0}
      >
        <Box vertical width="66%" justify="center" unit={unit} padding={0}>
          <Box
            vertical
            unit={unit}
            width="80%"
            justify="flex-start"
            padding={32}
          >
            <Typography variant="h3">{title}</Typography>
            <div style={{ height: 24 }} />
            <Box
              vertical
              unit={unit}
              width="100%"
              align="flex-start"
              padding={0}
            >
              <Typography variant="subtitle2">
                SatoshiPay is a payment provider operating on the Stellar
                blockchain.
              </Typography>
              <Typography variant="body1">
                Our goal was to verify that people are ready to purchase online
                content directly from the content provider, instead of
                supporting them by watching ads.
              </Typography>
            </Box>
          </Box>
          <Box
            vertical
            width="100%"
            align="flex-start"
            unit={unit}
            padding={32}
          >
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
                    user friendly interface. Our first clients deserve a
                    smoother experience. <br />
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
                      margin: "0 6px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                    src={paymentLines}
                    alt=""
                  />
                </Box>
              </Box>
              <Box
                width="100%"
                align="flex-start"
                justify="space-between"
                unit={unit}
                padding={0}
              >
                <Box
                  vertical
                  width="40%"
                  align="flex-start"
                  unit={unit}
                  padding={0}
                >
                  <Typography variant="subtitle2">Goals</Typography>
                  <div
                    style={{
                      marginTop: -16,
                      width: "100%",
                      height: 2,
                      background: darkTheme.palette.primary.main,
                    }}
                  />
                  <Typography variant="body1" style={{ lineHeight: 2 }}>
                    1. Make purchasing a product easy <br /> 2. Build trust{" "}
                    {"&"} secure funds <br />
                    3. Make device independent
                  </Typography>
                </Box>
                <Box
                  vertical
                  width="55%"
                  align="flex-start"
                  unit={unit}
                  padding={0}
                >
                  <Typography variant="subtitle2">Challenges</Typography>
                  <div
                    style={{
                      marginTop: -16,
                      width: "100%",
                      height: 2,
                      background: darkTheme.palette.primary.main,
                    }}
                  />
                  <Typography variant="body1" style={{ lineHeight: 2 }}>
                    1. Our widgets live on others' websites
                    <br /> 2. A new and unfamiliar way of spending money <br />{" "}
                    3. Cumbersome security process
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width="100%"
          align="center"
          justify="center"
          unit={unit}
          padding={16}
        >
          <img
            style={{
              width: "100%",
              marginTop: -24,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
            src={HorizontalFlowChart}
            alt=""
          />
        </Box>
        <Box vertical width="66%" justify="center" unit={unit} padding={0}>
          <Box
            vertical
            width="100%"
            align="flex-start"
            unit={unit}
            padding={32}
          >
            <Typography variant="h4">Approach</Typography>
            <Box vertical align="flex-start" unit={unit} padding={0} gap={56}>
              <Box width="100%" align="flex-start" unit={unit} padding={0}>
                <Box
                  vertical
                  width="100%"
                  align="flex-start"
                  unit={unit}
                  padding={0}
                >
                  <Typography variant="body1" style={{ lineHeight: 2 }}>
                    1. Conduct user research to identify core needs <br /> 2.
                    Simplify user journey and information architecture <br />
                    3. Propose solutions - low fidelity mockups <br />
                    4. Test solutions - high fidelity prototypes
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            vertical
            width="100%"
            align="flex-start"
            unit={unit}
            padding={32}
          >
            <Box vertical align="flex-start" unit={unit} padding={0} gap={56}>
              <Box width="100%" align="center" unit={unit} padding={0}>
                <Box
                  vertical
                  width="75%"
                  align="flex-start"
                  justify="space-between"
                  unit={unit}
                  padding={0}
                >
                  <Typography variant="h5">User Research</Typography>

                  <Typography variant="body1">
                    I interviewed current users of the micropayment service
                    (mostly publishers) about their digital monetization
                    strategy. <br /> <br /> I wanted to find out how their daily
                    users use their services and pay for content.
                  </Typography>
                  <Typography variant="body1" style={{ lineHeight: 2 }}>
                    • Current online subscriptions
                    <br /> • Most consumed content types
                    <br /> • Payment methods
                    <br /> • First thoughts on blockchain payments
                  </Typography>
                </Box>
                <div style={{ width: 100 }} />
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
                      mixBlendMode: "multiply",
                    }}
                    src={Research}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
            <div style={{ height: 12 }} />
            <Typography variant="h6" style={{ fontWeight: 800 }}>
              Core User Needs
            </Typography>
            <div />
            <Box
              width="100%"
              align="flex-start"
              justify="space-between"
              unit={unit}
              padding={0}
            >
              <Box width="30%" vertical unit={unit}>
                <Typography variant="subtitle2">I want it now</Typography>
                <div
                  style={{
                    marginTop: -16,
                    width: "100%",
                    height: 2,
                    background: darkTheme.palette.primary.main,
                  }}
                />
                <Typography variant="body1">
                  With all the content that is available online, consumers won't
                  spend a minute more then what they really have to access given
                  content.
                </Typography>
              </Box>
              <Box width="30%" vertical unit={unit}>
                <Typography variant="subtitle2">I want control</Typography>
                <div
                  style={{
                    marginTop: -16,
                    width: "100%",
                    height: 2,
                    background: darkTheme.palette.primary.main,
                  }}
                />
                <Typography variant="body1">
                  Even if it is small amounts, consumers want their money safe,
                  and expect the familiar financial services.
                </Typography>
              </Box>
              <Box width="30%" vertical unit={unit}>
                <Typography variant="subtitle2">
                  I want to know what I get
                </Typography>
                <div
                  style={{
                    marginTop: -16,
                    width: "100%",
                    height: 2,
                    background: darkTheme.palette.primary.main,
                  }}
                />
                <Typography variant="body1">
                  Consumers want to understand the terms of their purchase, but
                  don't want to spend time learning about it.
                </Typography>
              </Box>
            </Box>
            <div style={{ height: 48 }} />
            <Box width="100%" align="center" unit={unit} padding={0}>
              <Box
                vertical
                width="80%"
                align="flex-start"
                justify="space-between"
                unit={unit}
                padding={0}
              >
                <Typography variant="h5">
                  Simplified Journey and Information Architecture
                </Typography>

                <Typography variant="body1">
                  Understanding major building blocks and mapping the user
                  journey helped see unnecessary loops and streamline the flow.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width="100%"
          align="center"
          justify="center"
          unit={unit}
          padding={16}
        >
          <img
            style={{
              width: "100%",
              marginTop: -24,
            }}
            src={PinkFlow}
            alt=""
          />
        </Box>
        <Box vertical width="66%" justify="center" unit={unit} padding={0}>
          <Box width="100%" align="center" unit={unit} padding={32}>
            <Box
              vertical
              width="100%"
              align="flex-start"
              justify="space-between"
              unit={unit}
              padding={0}
            >
              <Typography variant="h5">Solutions</Typography>

              <Typography variant="body1">
                Starting with mocking up several different scenarios and
                discussing with the team, we soon focused our ideas to 2 main
                directions:
              </Typography>
              <Typography variant="body1" style={{ lineHeight: 2 }}>
                a) focus on purchasing content and let users figure out how
                their wallets work <br /> b) offer help to understand how the
                wallet functions and what they need to do to keep their funds
                safe, even if it makes onboarding longer
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          width="100%"
          align="center"
          justify="center"
          unit={unit}
          padding={16}
        >
          <img
            style={{
              width: "110%",
              marginTop: -24,
              mixBlendMode: "multiply",
            }}
            src={Wireframes}
            alt=""
          />
        </Box>
        <Box vertical width="66%" justify="center" unit={unit} padding={0}>
          <Box
            vertical
            width="100%"
            align="flex-start"
            unit={unit}
            padding={32}
          >
            <Box vertical align="flex-start" unit={unit} padding={0} gap={56}>
              <Box width="100%" align="center" unit={unit} padding={0}>
                <Box
                  vertical
                  width="75%"
                  align="flex-start"
                  justify="space-between"
                  unit={unit}
                  padding={0}
                >
                  <Box width="100%" vertical unit={unit}>
                    <Typography variant="subtitle2">
                      Streamlined purchasing process
                    </Typography>
                    <div
                      style={{
                        marginTop: -16,
                        width: "100%",
                        height: 2,
                        background: darkTheme.palette.primary.main,
                      }}
                    />
                    <Typography variant="body1">
                      Allowing consumers to access their content first and deal
                      with everything else later. <br /> <br /> Multiple
                      purchase options include a €1.00 trial version.
                    </Typography>
                  </Box>
                </Box>
                <div style={{ width: 100 }} />
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
                      mixBlendMode: "multiply",
                    }}
                    src={Framer1}
                    alt=""
                  />
                </Box>
              </Box>
              <Box width="100%" align="center" unit={unit} padding={0}>
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
                      mixBlendMode: "multiply",
                    }}
                    src={Account}
                    alt=""
                  />
                </Box>
                <div style={{ width: 100 }} />

                <Box
                  vertical
                  width="75%"
                  align="flex-start"
                  justify="space-between"
                  unit={unit}
                  padding={0}
                >
                  <Box width="100%" vertical unit={unit}>
                    <Typography variant="subtitle2">
                      Account creation
                    </Typography>
                    <div
                      style={{
                        marginTop: -16,
                        width: "100%",
                        height: 2,
                        background: darkTheme.palette.primary.main,
                      }}
                    />
                    <Typography variant="body1">
                      Unlike most blockchain applications we decided to provide
                      an email and password based account in order to prevent
                      the loss of access to funds. <br /> <br /> This makes
                      using SatoshiPay services a lot safer and more familiar,
                      but it requires a few more steps.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box width="100%" align="center" unit={unit} padding={0}>
                <Box
                  vertical
                  width="75%"
                  align="flex-start"
                  justify="space-between"
                  unit={unit}
                  padding={0}
                >
                  <Box width="100%" vertical unit={unit}>
                    <Typography variant="subtitle2">
                      Recognizable, yet flexible
                    </Typography>
                    <div
                      style={{
                        marginTop: -16,
                        width: "100%",
                        height: 2,
                        background: darkTheme.palette.primary.main,
                      }}
                    />
                    <Typography variant="body1">
                      The redesigned containers accommodate the most often used
                      content types: article paywall, and video. These dynamic
                      containers follow simple rules to stay consistent, but
                      provide enough flexibility to blend in to the given
                      website.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <div style={{ height: 12 }} />
          </Box>
        </Box>
        <Box
          width="100%"
          align="center"
          justify="center"
          unit={unit}
          padding={16}
        >
          <img
            style={{
              width: "110%",
              marginTop: -24,
              mixBlendMode: "multiply",
            }}
            src={Containers}
            alt=""
          />
        </Box>
      </Box>
    );
  };

  return <SpMicro />;
};
