import { Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';

const GridItem = () => {
  return (
    <Grid item xs={9} sm={6} md={3} lg={2} sx={{ maxWidth: "480px", minWidth: "480px" }}>
      <Card>
        <CardHeader title="Dashboard" />
        <CardMedia component="img" height="250" image="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
        <CardContent>
          <p>Dashboard content</p>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default GridItem