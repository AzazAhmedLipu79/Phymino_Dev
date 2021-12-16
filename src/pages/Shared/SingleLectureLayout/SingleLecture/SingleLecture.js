import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BottomNav from "../../BottomNav/Bottomnav";
import Accordion from "@mui/material/Accordion";
import { Link as LMSLink } from "react-router-dom";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import ReactPlayer from "react-player";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDownward";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import swal from "sweetalert";

// import { FixedSizeList } from "react-window";
const SingleLecture = () => {
  let { LIndex } = useParams();

  const [MainLecture, setMainLecture] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  // const [youtubeApi, setYoutubeApi] = useState({});

  useEffect(() => {
    fetch("/physics1.json")
      .then((res) => res.json())
      .then((data) => setMainLecture(data));
  }, []);

  const result = MainLecture.filter((x) => x.LectureId === `${LIndex}`);

  let videoSrc = result[0]?.videoId;
  let videoUrl = `https://www.youtube.com/watch?v=${videoSrc}`;

  useEffect(() => {
    fetch("/physics1.json")
      .then((res) => res.json())
      .then((data) => setChapterList(data));
  }, []);
  const relatedClasses = chapterList.filter(
    (x) => x.ChapterId === `${result[0]?.ChapterId}`
  );

  let index = relatedClasses.findIndex((x) => x.LectureId === LIndex);

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?id=${videoSrc}&part=contentDetails&key=AIzaSyAJZzzGDLbSE3b7_lgaozDe6p3q_E1JQgI`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setYoutubeApi(data));
  // }, []);
  // const bbbb = youtubeApi?.items;
  // console.log(bbbb);

  return (
    <>
      <div className="container-fluid my-5 mx-auto  ">
        <div class="row ">
          {result.length > 0 ? (
            <>
              <div class="col-sm-12  ">
                <ReactPlayer
                  width="container-fluid"
                  height="55vh"
                  controls
                  url={videoUrl}
                  onEnded={() => {
                    swal(
                      "Good job!",
                      "Now you can take some rest !",
                      "success"
                    );
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mx: "auto",
                  }}
                >
                  <Link
                    underline="none"
                    component={LMSLink}
                    to={`/PHY1/${result[0]?.ChapterId}`}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#4a148c",
                        color: "white",
                      }}
                      aria-label="recipe"
                    >
                      {result[0]?.ChapterId}
                    </Avatar>
                  </Link>
                  <Typography
                    sx={{ ml: "10px" }}
                    variant="h6"
                    color="text.secondary"
                  >
                    {" "}
                    {result[0]?.title}
                  </Typography>
                  <br />
                  {result[0]?.pdf && (
                    <Link href={result[0]?.pdf}>
                      <Button
                        className="btn-lecture"
                        sx={{
                          position: "absolute",
                          right: "0",
                          mr: "10px",
                          mt: "14px",
                        }}
                        variant="outlined"
                        color="success"
                        startIcon={<PictureAsPdfIcon />}
                      >
                        Lecture Sheet
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </div>
              <div className="col-sm-12 mx-auto w-75 mb-5 m-3">
                <Accordion
                  key={
                    Math.random().toString(13).substring(2, 10) +
                    Math.random().toString(12).substring(2, 12)
                  }
                >
                  <AccordionSummary
                    sx={{ bgcolor: "#4a148c" }}
                    expandIcon={
                      <ArrowDropDownCircleIcon className="rounded-circle bg-warning  " />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="body1" gutterBottom>
                      {result[0]?.ChapterName} || {result[0]?.Subject}
                      <br />
                      <Typography
                        variant="overline"
                        display="block"
                        gutterBottom
                      >
                        {result[0]?.instructor} - {index + 1}/
                        {relatedClasses.length}
                      </Typography>
                    </Typography>
                  </AccordionSummary>
                  {relatedClasses.length > 0
                    ? relatedClasses.map((Relatedclass) => (
                        <AccordionDetails className="container-fluid mx-auto  ">
                          <Link
                            underline="none"
                            component={LMSLink}
                            to={`/PHY1/${Relatedclass.ChapterId}/${Relatedclass.LectureId}`}
                          >
                            <Card
                              sx={{
                                height: "95px",
                                display: "flex",
                                px: "15px",
                                mx: "0 auto",

                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <CardMedia
                                component="img"
                                sx={{ width: 100, height: 75 }}
                                image={`https://i.ytimg.com/vi/${Relatedclass.videoId}/0.jpg`}
                                alt={Relatedclass.title}
                              />
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <CardContent
                                  sx={{
                                    flex: "1 0 auto",
                                  }}
                                >
                                  <Typography component="div" variant="body2">
                                    {Relatedclass.title}
                                  </Typography>
                                  <Typography
                                    variant="overlined"
                                    color="text.secondary"
                                    component="div"
                                  >
                                    {Relatedclass.ChapterId} 🏀{" "}
                                    {Relatedclass.ChapterName} 🏀
                                  </Typography>
                                </CardContent>
                              </Box>
                            </Card>
                          </Link>
                        </AccordionDetails>
                      ))
                    : "Loading ...."}
                </Accordion>
              </div>
            </>
          ) : (
            <CircularProgress
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
              }}
              color="inherit"
            />
          )}
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default SingleLecture;
