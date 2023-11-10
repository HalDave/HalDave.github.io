import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import GridItem from '../UI/GridItem';

const URI = (type:string)=>{ return `https://haldave-github-pages-webapp.azurewebsites.net/Items/${type}`}
const Hobbies = () => {
  const [books, setBooks] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URI('Books'))
        if (!response.ok) return
        const results = await response.json()
        setBooks(results)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(URI('Movies'))
        if (!response.ok) return
        const results = await response.json()
        setMovies(results)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div>
      <h1>Hobbies</h1>
      <h2>Books</h2>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 6, lg: 12 }} direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ paddingRight: 6, paddingLeft: 6 }}>
        {books && books.map((item: any) => (
          <GridItem key={item.id} item={item}/>
        ))}
      </Grid>
      <h2>Movies</h2>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 6, lg: 12 }} direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ paddingRight: 6, paddingLeft: 6 }}>
        {movies && movies.map((item: any) => (
          <GridItem key={item.id} item={item}/>
        ))}
      </Grid>
    </div>
  );
}

export default Hobbies;
