import { Box, Button, Fab, Stack, Typography } from "@mui/material";
import { Balance, Transactions } from "../../widgets";
import { Add, Wallet } from "@mui/icons-material";
import { ModalStore, useModalStore } from "../../stores";
import { useAccountProvider } from "../../utils";
import money from "../../assets/images/money.svg";
import { ADD_NEW_ACCOUNT, ADD_NEW_MOVEMENT } from "../../config/semantics";

const FabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

const AddNewTransaction = () => {
  const setModal = useModalStore((state: ModalStore) => state.setModal);

  return (
    <Box sx={FabStyle} onClick={() => setModal(ADD_NEW_MOVEMENT)}>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>
    </Box>
  );
};

const AddNewAccount = () => {
  const setModal = useModalStore((state: ModalStore) => state.setModal);

  return (
    <Box
      sx={{ ...FabStyle, right: 0, left: 0 }}
      onClick={() => setModal(ADD_NEW_ACCOUNT)}
    >
      <Button
        variant="text"
        startIcon={<Wallet />}
        sx={{ color: "#3a845e", fontWeight: 300 }}
        size="large"
      >
        Add a new account
      </Button>
    </Box>
  );
};

const MoneyImage = () => {
  return (
    <Box textAlign={"center"} sx={{ opacity: 0.5 }} py={2}>
      <img src={money} alt="Add Account" width={150} />
    </Box>
  );
};

const CreateNewAccount = () => {
  return (
    <Stack height={"100%"}>
      <Box
        textAlign={"center"}
        mx={3}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={2}
        sx={{ marginTop: "10%" }}
      >
        <Typography variant="h6" fontWeight={300}>
          Oops! Seems that you have no account!
        </Typography>
        <br />
        <MoneyImage />
        <Typography variant="body1" fontWeight={300}>
          Create a new account to start tracking your expenses
        </Typography>

        <AddNewAccount />
      </Box>
    </Stack>
  );
};

export const Dashboard = () => {
  const { accounts } = useAccountProvider();
  console.log(accounts);
  if (accounts.length === 0) {
    return <CreateNewAccount />;
  }
  return (
    <Box>
      <Balance />
      <Transactions />
      <AddNewTransaction />
    </Box>
  );
};
