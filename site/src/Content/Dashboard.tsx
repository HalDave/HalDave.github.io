import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import GridItem from '../UI/GridItem';

const URI = 'http://haldave-github-pages-webapp.azurewebsites.net/Items/Books'


const Dashboard = () => {
  const [items, setitems] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URI)

        if (!response.ok) return

        const results = await response.json()

        console.log(results)
        setitems(results.results)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <div>
      <h1>Dashboard</h1>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 6, lg: 12 }} direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ paddingRight: 6, paddingLeft: 6 }}>
        {items && items.map((item: any) => (
          <GridItem />
        ))}
      </Grid>
    </div>
  );
}
export default Dashboard