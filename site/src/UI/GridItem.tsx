import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, CardActions, Grid, Typography } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { ItemProps } from '../Types/types';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const GridItem = ({ item }: { item: ItemProps }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ width: '100%'}}>
      <Card>
        <StyledHeader disableSpacing 
            onClick={handleExpandClick}>
          <IconButton aria-label="add to favorites">
            <LibraryBooksIcon />
          </IconButton>
          <CardHeader title={item.data.title} />
          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </StyledHeader>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardHeader title={item.data.title} />
          <CardMedia component="img" height="250" image={item.data.image} alt={item.data.title} sx={{ objectFit: "contain" }} />
          <CardContent>
            <Typography variant="body1">{item.data.opinion}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}
const StyledHeader = styled(CardActions)`
  cursor: pointer;
`
export default GridItem