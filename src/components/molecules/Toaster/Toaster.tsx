import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { Typography } from "@mui/material";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  severity: "success" | "error";
  onClose: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  message,
  severity,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      style={{ width: "fit-content" }}
    >
      <div>
        <Alert
          style={{
            backgroundColor: "#ffffff",
          }}
          severity={severity}
          icon={
            severity === "success" ? (
              <CheckCircleIcon
                style={{
                  color: "#4caf50",
                }}
              />
            ) : (
              <ErrorIcon
                style={{
                  color: "#f44336",
                }}
              />
            )
          }
        >
          <Typography
            color={"#000000"}
            style={{
              fontFamily: "Inter-medium",
              fontSize: "15px",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {message}
          </Typography>
        </Alert>
      </div>
    </Snackbar>
  );
};

export default CustomSnackbar;
