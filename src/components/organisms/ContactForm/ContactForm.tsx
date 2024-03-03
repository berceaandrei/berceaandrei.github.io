import { useState, SyntheticEvent } from "react";
import { Stack } from "@mui/system";
import { useBreakpoints } from "../../../hooks/useBreakpoints";
import { Typography } from "@mui/material";
import CustomSnackbar from "../../molecules/Toaster/Toaster";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const { isMobile } = useBreakpoints();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = "service_srrc7kn";
  const templateId = "template_xta5s8k";
  const publicKey = "IY4PjY-23YSh02ebi";

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Andrei Bercea",
    message: message,
  };

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStateMessage("Please fill in all required fields.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response.text);
        setStateMessage("Message sent successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error.text);
        setStateMessage("Failed to send message. Please try again later.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Stack
      marginBottom={isMobile ? "10px" : "50px"}
      marginTop={isMobile ? "30px" : "90px"}
      height={"100%"}
    >
      <form
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Cocogoose",

          color: "#600d2a",
          fontSize: isMobile ? "20px" : "30px",
        }}
      >
        <label>Name*</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "500px",
            marginBottom: "25px",
            maxWidth: "80vw",
            marginTop: "10px",
            minHeight: "30px",
            fontFamily: "Inter-medium",

            borderRadius: "10px",
            border: "2px solid #600d2a",
          }}
        />
        <label>Email*</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "500px",
            maxWidth: "80vw",
            marginBottom: "25px",
            marginTop: "10px",
            minHeight: "30px",
            borderRadius: "10px",
            fontFamily: "Inter-medium",
            border: "2px solid #600d2a",
          }}
        />
        <label>Message*</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "500px",
            marginBottom: "25px",
            minHeight: "200px",
            marginTop: "10px",
            borderRadius: "10px",
            fontFamily: "Inter-medium",
            maxWidth: "80vw",
            border: "2px solid #600d2a",
          }}
        />
        <input
          type="submit"
          value="Send"
          disabled={isSubmitting}
          style={{
            minHeight: "50px",
            backgroundColor: "#600d2a",
            fontSize: isMobile ? "10px" : "20px",
            color: "#ffffff",
            borderRadius: "10px",
            maxWidth: "81vw",
            fontFamily: "Cocogoose",
            border: 0,
          }}
        />
      </form>
      <CustomSnackbar
        open={snackbarOpen}
        message={stateMessage || ""}
        severity={snackbarSeverity}
        onClose={() => setSnackbarOpen(false)}
      />
    </Stack>
  );
};

export default ContactForm;
