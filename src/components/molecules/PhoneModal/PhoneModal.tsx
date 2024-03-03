import React from "react";
import {
  IconButton,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Typography,
  Button,
} from "@mui/material";

export interface PhoneModalProps {
  phoneNumber: string;
  isOpen: boolean;
  onClose: () => void;
}

const PhoneModal: React.FC<PhoneModalProps> = ({
  phoneNumber,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle
        style={{
          fontFamily: "Cocogoose",
          fontSize: "20px",
          fontWeight: "bolder",
          color: "#000000",
        }}
      >
        Phone Number
      </DialogTitle>
      <DialogContent>
        <Typography
          style={{
            fontFamily: "Cocogoose-numbers",
            fontSize: "17px",
            fontWeight: "normal",
            color: "#000000",
          }}
        >
          {phoneNumber}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={onClose}
          size="small"
          sx={{
            backgroundColor: "#600d2a",
            "&:hover": {
              backgroundColor: "#8f102f",
            },
          }}
        >
          <Typography
            style={{
              fontFamily: "Cocogoose",
              fontSize: "15px",
              fontWeight: "bolder",
            }}
          >
            Close
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PhoneModal;
