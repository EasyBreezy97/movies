import React from "react";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import useReviews from "./hooks/useReviews";
import { Divider } from "@mui/material";

const Reviews = () => {
  const {
    data: reviews,
    isLoading: reviewLoading,
    error: reviewError,
  } = useReviews();

  console.log({ reviews });

  return (
    <div>
      <div style={{ padding: 14 }}>
        <h1>Comments</h1>
        {reviews?.results?.map((result) => (
          <Paper
            key={`${result?.author}_${result?.updated_at}`}
            style={{ padding: "40px 20px" }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt={result?.author} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  {result?.author}
                </h4>
                <p style={{ textAlign: "left" }}>{result?.content}</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  {Date(result?.updated_at)}
                </p>
              </Grid>
            </Grid>
            <Divider />
          </Paper>
        ))}
      </div>
      <Pagination count={reviews?.total_pages} variant="outlined" color="primary" />
    </div>
  );
};

export default Reviews;
