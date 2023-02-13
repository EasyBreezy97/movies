import React, { ChangeEvent, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import useReviews from "./hooks/useReviews";
import { Divider } from "@mui/material";
import ErrorBox from "@/common/components/ErrorBox";
import Alert from "@mui/material/Alert";

interface IResult {
  author: string;
  updated_at: string;
  content: string;
}
const Reviews = () => {
  const [pageToFetch, setPageToFetch] = useState(1);
  const {
    data: reviews,
    isLoading: reviewLoading,
    error: reviewError,
  } = useReviews(pageToFetch);

  const onFetchNextPage = (event: ChangeEvent<unknown>, page: number) => {
    if (page !== pageToFetch) setPageToFetch(page);
  };

  return (
    <div>
      <div style={{ padding: 14 }}>
        <h1>Comments</h1>
        {!reviewError && !reviews?.length && (
          <Alert severity="warning">No comments</Alert>
        )}
        {reviews?.results?.map((result: IResult) => (
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
      {reviewError && <ErrorBox error={reviewError} />}
      {!reviewError && (
        <Pagination
          count={reviews?.total_pages}
          variant="outlined"
          color="primary"
          onChange={onFetchNextPage}
        />
      )}
    </div>
  );
};

export default Reviews;
