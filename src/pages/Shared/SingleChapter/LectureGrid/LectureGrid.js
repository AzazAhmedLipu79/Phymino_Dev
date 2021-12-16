import React from "react";
// import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Link as LectureLink } from "react-router-dom";
import Link from "@mui/material/Link";

const LectureGrid = ({ lectureList, index }) => {
  const {
    videoId,
    title,
    Chapter,
    ChapterName,
    ChapterId,
    Subject,
    instructor,
    LectureId,
    pdf,
  } = lectureList;

  return (
    <>
      <Grid item xs={4} md={4}>
        <Link
          underline="none"
          component={LectureLink}
          to={`/PHY1/${ChapterId}/${LectureId}`}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <Chip
                  variant="outlined"
                  color="secondary"
                  label={` Lecture: ${index + 1}`}
                />
              }
              subheader={title}
            />
            <CardMedia
              component="img"
              height="194"
              image={`https://i.ytimg.com/vi/${videoId}/0.jpg
            `}
              alt={title}
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link underline="none" component={LectureLink} to={`/PHY1`}>
                <Avatar
                  sx={{
                    bgcolor: "#4a148c",
                    color: "white",
                  }}
                  aria-label="recipe"
                >
                  {ChapterId}
                </Avatar>
              </Link>
              <Typography variant="body2" color="text.secondary">
                {Subject}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default LectureGrid;
