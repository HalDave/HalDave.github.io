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
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { ItemProps } from "../Types/types";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const GridItem = ({ item }: { item: ItemProps }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ width: "100%" }}>
      <StyledCard>
        <StyledHeader disableSpacing onClick={handleExpandClick}>
          <IconButton aria-label="add to favorites">
            <LibraryBooksIcon />
          </IconButton>
          <StyledTitle title={item.data.title} />
          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </StyledHeader>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid container direction="row">
            <Grid item xs={3}>
              <CardMedia
                component="img"
                height="250"
                image={item.data.image}
                alt={item.data.title}
                sx={{ objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={9}>
              <CardContent
                sx={{
                  position: "relative",
                  textAlign: "justify",
                  height: "250px",
                }}
              >
                <Typography variant="body1">{item.data.opinion}</Typography>
                <Chip
                  sx={{ position: "absolute", bottom: "0" }}
                  icon={<StarBorderIcon />}
                  label={item.data.rating}
                />
              </CardContent>
            </Grid>
          </Grid>
        </Collapse>
      </StyledCard>
    </Grid>
  );
};
const StyledHeader = styled(CardActions)`
  cursor: pointer;
`;

const StyledTitle = styled(CardHeader)`
  padding: 0;
`;

const StyledCard = styled(Card)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export default GridItem;
