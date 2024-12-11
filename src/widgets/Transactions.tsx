import { Box, SelectChangeEvent, Stack, Typography } from "@mui/material";
import React from "react";
import { ItemTransaction, SelectComponent } from "../components/index";
import { MOVEMENTS } from "../data/data";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Transactions = () => {
  const [value, setValue] = React.useState<string>(
    new Date().toLocaleString("en-US", { month: "long" })
  );

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <Box
      bgcolor={"#e8e7e7"}
      sx={{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: "100%",
        position: "relative",
        padding: 2,
        paddingBottom: 10,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        mx={2}
        my={2}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="body1" fontWeight={"bold"}>
            All transactions
          </Typography>
        </Box>
        <Box>
          <SelectComponent
            data={monthNames}
            value={value}
            handleChange={handleChange}
          />
        </Box>
      </Stack>
      {MOVEMENTS.map((transaction) => (
        <ItemTransaction key={transaction.id} {...transaction} />
      ))}
    </Box>
  );
};
