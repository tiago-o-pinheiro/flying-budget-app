import { Stack, Avatar, Box, Grid2, Typography } from "@mui/material";
import { useStringAvatar } from "../../utils";

interface ItemTransactionProps {
  name: string;
  value: number;
  date: string;
  category: string;
}

export const ItemTransaction = ({
  name,
  value,
  date,
  category,
}: ItemTransactionProps) => {
  const { sx, children } = useStringAvatar(name);
  return (
    <Grid2 container bgcolor={"white"} p={2} borderRadius={5} mb={1}>
      <Grid2 size={8}>
        <Stack direction={"row"} gap={1}>
          <Stack direction={"row"}>
            <Avatar {...{ sx, children }} />
          </Stack>
          <Box>
            <Typography variant="body1" fontWeight={"400"}>
              {name}
            </Typography>
            <Typography variant="caption" fontWeight={"400"}>
              {category}
            </Typography>
          </Box>
        </Stack>
      </Grid2>
      <Grid2 size={4}>
        <Box textAlign={"right"}>
          <Typography variant="body1" fontWeight={"600"}>
            {value > 0 ? `+${value}€` : `${value}€`}
          </Typography>
          <Typography variant="caption" fontWeight={"200"}>
            {new Date(date).toLocaleString("en-US", {
              month: "long",
              day: "2-digit",
            })}
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};
