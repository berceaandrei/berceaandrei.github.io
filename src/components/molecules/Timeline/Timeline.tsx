import * as React from "react";
import {
  Timeline as MUITimeLine,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Stack, Paper, Divider } from "@mui/material";
import { CalendarToday, LocationOn } from "@mui/icons-material";
import theme from "../../../theme";
import { ThemeProvider } from "@mui/system";

export interface TimelineProps {
  titles: string[];
  subtitles: string[];
  times: string[];
  descriptions?: string[];
  locations: string[];
  space?: boolean;
  logo?: string[];
  color?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  titles,
  times,
  descriptions,
  subtitles,
  locations,
  space,
  logo,
  color = "#FFFFFFF",
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MUITimeLine style={{ width: "100%" }}>
        {titles.map((title, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  margin: 0,
                  backgroundColor: color,
                  width: "4px",
                  height: "4px",
                }}
              />
              <TimelineConnector
                style={{ backgroundColor: color, width: "4px" }}
              />
            </TimelineSeparator>
            <TimelineOppositeContent display="none" />
            <TimelineContent>
              <Paper
                elevation={5}
                style={{
                  padding: subtitles[index] ? "15px" : "13px",
                  paddingBottom: subtitles[index] ? "20px" : "8px",
                  marginBottom: "15px",
                  color: "#000000",
                }}
              >
                <Stack
                  alignItems="center"
                  flexDirection={"row"}
                  gap={"20px"}
                  marginBottom="5px"
                >
                  {logo && logo[index] != "" && (
                    <img src={logo[index]} alt="Image" height={"40px"} />
                  )}
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: "Cocogoose",
                    }}
                  >
                    {title}
                  </Typography>
                </Stack>

                <Typography
                  style={{
                    fontFamily: "Inter-medium",
                    color: "#000000",
                    marginBottom: "5px",
                    fontSize: "16px",
                  }}
                >
                  {subtitles[index]}
                </Typography>
                <Stack
                  display="flex"
                  flexDirection="row"
                  flexWrap={space ? "wrap" : "nowrap"}
                >
                  {times && times[index] != "" && (
                    <Stack
                      flexDirection="row"
                      flexWrap="nowrap"
                      alignItems="center"
                      marginBottom="6px"
                    >
                      <CalendarToday
                        style={{
                          color: "#999999",
                          width: "17px",
                          height: "17px",
                          marginRight: "5px",
                          marginTop: "-2px",
                        }}
                      />

                      <Typography
                        style={{
                          fontFamily: "Inter-medium",
                          color: "#999999",
                        }}
                      >
                        {times[index]}
                      </Typography>
                    </Stack>
                  )}
                  {locations && locations[index] != "" && (
                    <Stack
                      flexDirection="row"
                      flexWrap="nowrap"
                      alignItems="center"
                      marginBottom="6px"
                    >
                      <div
                        style={{
                          borderRight: "2px solid #999",
                          height: "17px",
                          marginRight: "5px",
                          marginLeft: "6px",
                          marginTop: "-2px",
                        }}
                      ></div>

                      <LocationOn
                        style={{
                          color: "#999999",
                          width: "17px",
                          height: "17px",
                          marginRight: "2px",
                          marginTop: "-2px",
                        }}
                      />

                      <Typography
                        style={{
                          fontFamily: "Inter-medium",
                          color: "#999999",
                        }}
                      >
                        {locations[index]}
                      </Typography>
                    </Stack>
                  )}
                </Stack>
                {descriptions?.[index] && (
                  <Typography style={{ fontFamily: "Inter-medium" }}>
                    {descriptions[index]}
                  </Typography>
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MUITimeLine>
    </ThemeProvider>
  );
};

export default Timeline;
