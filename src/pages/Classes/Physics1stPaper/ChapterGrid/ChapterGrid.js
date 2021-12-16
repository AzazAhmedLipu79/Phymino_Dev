import React from "react";
// import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { Link as ChapterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const ChapterGrid = ({ list }) => {
  const {
    videoId,
    title,
    Chapter,
    ChapterName,
    ChapterId,
    Subject,
    instructor,
    pdf,
  } = list;
  // console.log(list);
  return (
    <>
      <Grid className="container-fluid pe-0" item xs={12} md={6}>
        <Link
          underline="none"
          component={ChapterLink}
          to={`/PHY1/${ChapterId}`}
        >
          <Paper
            className="border border-2  shadow-lg border-dark rounded ps-3"
            sx={{ pt: "5px", px: "10px", backgroundColor: "#000036" }}
            elevation={6}
            square
          >
            <div className="container">
              <blockquote className="blockquote d-flex align-items-baseline  pt-1">
                <h5 className="rounded-circle bg-danger p-2">{ChapterId} </h5>
                &nbsp; &nbsp;
                <p> {ChapterName}</p>
              </blockquote>
            </div>
          </Paper>
        </Link>
      </Grid>
    </>
  );
};

export default ChapterGrid;
