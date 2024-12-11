import {
  Leaderboard,
  Savings,
  SwapHorizontalCircle,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "@mui/icons-material";
import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTotalBalance } from "../utils/hooks/use-total-balance.hook";
import { MOVEMENTS } from "../data/data";

const NAV_LINKS = [
  {
    href: "/overview",
    title: "Overview",
    icon: Leaderboard,
  },
  {
    href: "/accounts",
    title: "Accounts",
    icon: Wallet,
  },
  {
    href: "/transfers",
    title: "Transfers",
    icon: SwapHorizontalCircle,
  },
  {
    href: "/savings",
    title: "Savings",
    icon: Savings,
  },
];

export const Balance = () => {
  const balance = useTotalBalance(MOVEMENTS);

  return (
    <Stack pb={2}>
      <Box textAlign={"center"} pb={4}>
        <Typography variant="body1" pb={1} color="#555555">
          Balance {new Date().toLocaleString("en-US", { month: "long" })}
        </Typography>
        <Typography variant="h3" color="#555555">
          {balance}
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            borderColor: "divider",
            borderRadius: 2,
            color: "text.secondary",
            "& svg": {
              m: 1,
            },
          }}
        >
          <Stack direction="row" gap={1}>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="caption" color="green">
                +350€
              </Typography>
              <TrendingUp
                sx={{ fontSize: 16, color: "green", "& svg": { m: 0 } }}
              />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="caption" color="red">
                -550€
              </Typography>
              <TrendingDown sx={{ fontSize: 16, color: "red" }} />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Grid2 container>
        {NAV_LINKS.map((link) => (
          <Grid2 size={3} key={link.href}>
            <Link to={link.href} style={{ textDecoration: "none" }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>
                  <link.icon sx={{ fontSize: 30, color: "#676767" }} />
                </Box>
                <Typography variant="caption" color="#adadad">
                  {link.title}
                </Typography>
              </Box>
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};
