import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import GridItem from "../UI/GridItem";
import { useItems } from "../Services/hooks/useItems";

const Hobbies = () => {
  const { data: dataBooks } = useItems("Books");
  const { data: dataMovies } = useItems("Movies");
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setBooks(dataBooks);
  }, [dataBooks]);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <div>
      <h1>Hobbies</h1>
      <h2>Books</h2>
      <Grid
        container
        columnSpacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ paddingRight: 6, paddingLeft: 6 }}
      >
        {books &&
          books.map((item: any) => <GridItem key={item.id} item={item} />)}
      </Grid>
      <h2>Movies</h2>
      <Grid
        container
        columnSpacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ paddingRight: 6, paddingLeft: 6 }}
      >
        {movies &&
          movies.map((item: any) => <GridItem key={item.id} item={item} />)}
      </Grid>
    </div>
  );
};

export default Hobbies;
