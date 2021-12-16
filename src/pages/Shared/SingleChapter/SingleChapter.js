import React, { useEffect, useState } from "react";
import BottomNav from "../BottomNav/Bottomnav";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import LectureGrid from "./LectureGrid/LectureGrid";
import { Grid } from "@mui/material";

const SingleChapter = () => {
  const [chapterList, setChapterList] = useState([]);
  let { CId } = useParams();
  useEffect(() => {
    fetch("/physics1.json")
      .then((res) => res.json())
      .then((data) => setChapterList(data));
  }, []);
  const result = chapterList.filter((x) => x.ChapterId === `${CId}`);
  // console.log(result);

  // console.log(CId);

  return (
    <>
      {result.length > 0 ? (
        <div className="container-fluid my-3 pb-3 mx-auto">
          <figure>
            <blockquote class="blockquote">
              <p>{result[0].ChapterName} Chapter</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Has{" "}
              <b>
                <cite title="Source Title">{result.length} Lectures</cite>
              </b>
            </figcaption>
          </figure>

          <Grid
            container
            className="mx-auto px-1 pe-4 py-2"
            sx={{ width: "90%" }}
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {result.map((lectureList, index) => (
              <LectureGrid
                key={
                  Math.random().toString(13).substring(2, 10) +
                  Math.random().toString(12).substring(2, 10)
                }
                lectureList={lectureList}
                index={index}
              ></LectureGrid>
            ))}
          </Grid>
        </div>
      ) : (
        <CircularProgress
          color="success"
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        />
      )}

      <BottomNav />
    </>
  );
};

export default SingleChapter;
