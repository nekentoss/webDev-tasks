import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

function Movies() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setFilms(data.slice(0, 10)));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Фильмы</h1>

      <Grid container spacing={3}>
        {films.map((film) => (
          <Grid item xs={12} sm={6} md={4} key={film.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://via.placeholder.com/300x200"
                alt="poster"
              />

              <CardContent>
                <Typography variant="h6">
                  {film.title}
                </Typography>

                <Typography variant="body2">
                  {film.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Movies;