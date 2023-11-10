import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

interface ItemProps {
  id: string;
  type: string;
  data: ItemDataProps;
}

interface ItemDataProps {
  rating: number;
  opinion: string;
  image: string;
}

const GridItem = ({ item }: { item: ItemProps }) => {
  return (
    <Grid item xs={9} sm={6} md={3} lg={2} sx={{ maxWidth: "480px", minWidth: "480px" }}>
      <Card>
        <CardHeader title={item.id} />
        <CardMedia component="img" height="250" image={item.data.image} alt="green iguana" />
        <CardContent>
          <Typography variant="body1">{item.data.opinion}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default GridItem