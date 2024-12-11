import { Button, Container } from "@mui/material";
import { ModalStore, useModalStore } from "../../stores";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { ADD_NEW_ACCOUNT, ADD_NEW_MOVEMENT } from "../../config/semantics";

const style = {
  position: "absolute",
  top: "40%",
  margin: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

interface AddNewItemProps {
  type: string;
  close: () => void;
}

export const AddNewItem = ({ type, close }: AddNewItemProps) => {
  if (type !== ADD_NEW_MOVEMENT) {
    return null;
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={type === ADD_NEW_MOVEMENT}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={type === ADD_NEW_MOVEMENT}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={close}>Close</Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export const AddNewAccount = ({ type, close }: AddNewItemProps) => {
  if (type !== ADD_NEW_ACCOUNT) {
    return null;
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={type === ADD_NEW_ACCOUNT}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={type === ADD_NEW_ACCOUNT}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={close}>Close</Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export const ModalProvider = () => {
  const closeModal = useModalStore((state: ModalStore) => state.closeModal);
  const modal = useModalStore((state: ModalStore) => state.modal);

  return (
    <Container>
      <AddNewItem type={modal} close={closeModal} />
      <AddNewAccount type={modal} close={closeModal} />
    </Container>
  );
};
