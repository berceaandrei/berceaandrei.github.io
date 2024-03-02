import React from "react";
import { Paper, Stack, Typography, Link } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TimelineDot from "@mui/lab/TimelineDot";

interface CertificationProps {
  title: string;
  subtitle?: string;
  link?: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  subtitle,
  link,
}) => {
  return (
    <Stack display={"flex"} flexDirection={"row"} gap={"16px"}>
      <Stack paddingTop="20px">
        <TimelineDot
          style={{
            margin: 0,
            backgroundColor: "#600d2a",
            width: "4px",
            height: "4px",
          }}
        />
      </Stack>
      <Paper
        elevation={5}
        style={{
          color: "#000000",
          padding: "12px",
          width: "100%",
        }}
      >
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack
            alignItems="flex-start"
            flexDirection={"column"}
            justifyContent="flex-start"
            gap={"5px"}
          >
            <Typography variant="h6" style={{ fontFamily: "Cocogoose" }}>
              {title}
            </Typography>

            <Typography
              style={{
                fontFamily: "Inter-medium",
                color: "#000000",
                fontSize: "15px",
              }}
            >
              {subtitle}
            </Typography>
          </Stack>

          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
              }}
            >
              <Stack>
                <ArrowForwardIosIcon
                  style={{
                    color: "#000000",
                    marginLeft: "auto",
                    display: "block",
                  }}
                />
              </Stack>
            </Link>
          )}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Certification;
