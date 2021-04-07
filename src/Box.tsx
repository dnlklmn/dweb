import { makeStyles } from "@material-ui/core";

interface BoxProps {
  unit: number;
  vertical?: boolean;
  align?: "flex-start" | "center" | "flex-end";
  children: object;
  width?: string;
  padding?: number;
  justify?: "flex-start" | "flex-end" | "center" | "space-between";
  gap?: number;
}

const useStyles = makeStyles({
  flexBoxHorizontalCenter: {
    flexShrink: 1,
    width: ({ width }: BoxProps) => width,
    padding: ({ unit, padding }: BoxProps) => padding,
    display: "flex",
    flexDirection: ({ vertical }: BoxProps) => (vertical ? "column" : "row"),
    justifyContent: ({ justify }: BoxProps) => justify,
    alignItems: ({ align }: BoxProps) => align,
    gap: ({ gap, unit }: BoxProps) => (gap ? gap + unit : 16 + unit),
    transitionDelay: "0.23s",
    transition: "all 0.23s ease",
    "@media (max-width: 960px)": {
      flexDirection: ({ vertical }: BoxProps) =>
        vertical ? "column" : "column",
      width: ({ width }: BoxProps) => "95%",
      alignItems: () => "flex-start",
      justify: () => "center",
      padding: ({ padding }: BoxProps) => (padding ? (padding / 3) * 2 : 0),
    },
    "@media (max-width: 600px)": {
      padding: ({ unit, padding }: BoxProps) => padding,
      width: () => "95%",
    },
  },
});

export const Box = ({
  unit,
  vertical,
  children,
  align,
  width,
  padding,
  justify,
  gap,
}: BoxProps) => {
  const classes = useStyles({
    unit,
    vertical,
    align,
    children,
    width,
    padding,
    justify,
    gap,
  });

  return <div className={classes.flexBoxHorizontalCenter}>{children}</div>;
};
