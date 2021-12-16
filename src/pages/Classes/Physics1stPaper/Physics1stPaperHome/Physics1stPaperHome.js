import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../../../Shared/Header/Header";
import BottomNav from "../../../Shared/BottomNav/Bottomnav";
import ChapterGrid from "../ChapterGrid/ChapterGrid";
import { Grid } from "@mui/material";
// import Box from "@mui/material/Box";

const Physics1stPaperHome = () => {
  const [PhyOneSub, setPhyOneSub] = useState([]);

  useEffect(() => {
    fetch("./physics1.json")
      .then((res) => res.json())
      .then((data) => setPhyOneSub(data));
  }, []);

  const useUnique = (arr, comp) => {
    const unique = arr
      //store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  };

  //Only Subjects Filter
  const TotalSubjects = useUnique(PhyOneSub, "ChapterId");

  return (
    <>
      <Header />
      <div className="container-fluid mt-2 mx-auto">
        <h4 className="fw-bold fs-4 py-2 mx-2">Course Content : </h4>
        <Grid
          container
          className="mx-auto px-1 pe-4 py-2"
          sx={{ width: "90%" }}
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {PhyOneSub.length === 0 ? (
            <CircularProgress
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
              }}
            />
          ) : (
            TotalSubjects.map((list) => (
              <ChapterGrid
                key={
                  Math.random().toString(12).substring(2, 10) +
                  Math.random().toString(12).substring(2, 10)
                }
                list={list}
              ></ChapterGrid>
            ))
          )}
        </Grid>
      </div>
      <BottomNav></BottomNav>
    </>
  );
};

export default Physics1stPaperHome;
