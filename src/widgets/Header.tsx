import {
  Avatar,
  Badge,
  Box,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Settings, Notifications } from "@mui/icons-material";
import profile from "../assets/images/profile_1.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const today = new Date();
  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Profile" src={profile} sx={{ width: 46, height: 46 }} />
          <Box>
            <Typography variant="subtitle1"> Hey, Tiago</Typography>
            <Typography variant="caption">{today.toDateString()}</Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
          <Badge badgeContent={0} color="primary">
            <Link to="/settings">
              <Settings color="action" />
            </Link>
          </Badge>
          <Badge badgeContent={0} color="primary">
            <Notifications color="action" />
          </Badge>
        </Stack>
      </Grid>
    </Grid>
  );
};
