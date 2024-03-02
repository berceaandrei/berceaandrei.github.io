import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";
import { Skill } from "../../atoms/Skill";
import { SmallSkill } from "./ImageCard.styles";

export interface ImageCardProps {
  title: string;
  text: string;
  imageUrl: string;
  technologies: string[];
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  text,
  imageUrl,
  technologies,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
          style={{
            width: "345px",
            height: "250px",
          }}
        />
        <CardContent style={{ paddingLeft: "17px", paddingRight: "17px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontFamily: "Cocogoose",
            }}
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontFamily: "Inter-medium",
            }}
            marginBottom="10px"
            textAlign="justify"
          >
            {text}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap="5px">
            {technologies.map((technology, index) => (
              <SmallSkill
                key={index}
                name={technology}
                fontSize="10px"
                color="#000000"
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          paddingLeft: "17px",
          paddingRight: "17px",
          paddingBottom: "22px",
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#a84b6d",
            "&:hover": {
              backgroundColor: "#db0441",
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
            SEE MORE
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
