import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { ItemProps } from "../Types/types";
import Close from "@mui/icons-material/Close";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Dialog from "@mui/material/Dialog";
import useScreenSize from "../Services/ScreenSize";

const GridItem = ({ item }: { item: ItemProps }) => {
  const { isMobile } = useScreenSize();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} sx={{ width: "100%" }}>
      <StyledCard onClick={handleExpandClick}>
        <Grid container direction="row" sx={{ cursor: "pointer" }}>
          <Grid item xs={2} sm={3}>
            <CardMedia
              component="img"
              height="128"
              image={item.data.image}
              alt={item.data.title}
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={10} sm={9}>
            <CardContent
              sx={{
                position: "relative",
                textAlign: "left",
                height: "128px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Typography variant="body1">{item.data.title}</Typography>
              <Chip
                sx={{ position: "absolute", bottom: "0" }}
                icon={<StarBorderIcon />}
                label={item.data.rating}
              />
            </CardContent>
          </Grid>
        </Grid>
      </StyledCard>
      <Dialog open={expanded} onClose={handleExpandClick} fullScreen={isMobile}>
        <Card sx={{ height: "100%" }}>
          <CardHeader
            title={item.data.title}
            action={
              <IconButton aria-label="settings" onClick={handleExpandClick}>
                <Close />
              </IconButton>
            }
          />
          <CardMedia
            component="img"
            height="640"
            image={item.data.image}
            alt={item.data.title}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="body1">{item.data.opinion}</Typography>
          </CardContent>
        </Card>
      </Dialog>
    </Grid>
  );
};

const StyledCard = styled(Card)`
  padding: 16px;
`;

export default GridItem;
