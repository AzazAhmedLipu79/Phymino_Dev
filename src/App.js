import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home/Home";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { CssBaseline } from "@mui/material";
import Profile from "./pages/Profile/Profile/Profile";
import Classes from "./pages/Classes/Classes/Classes";
import "@fontsource/hind-siliguri";
import Physics1stPaperHome from "./pages/Classes/Physics1stPaper/Physics1stPaperHome/Physics1stPaperHome";
import SingleChapter from "./pages/Shared/SingleChapter/SingleChapter";
import SingleLecture from "./pages/Shared/SingleLectureLayout/SingleLecture/SingleLecture";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Hind Siliguri",
        },
        palette: {
          mode: prefersDarkMode ? "dark" : "dark",
          background: {
            default: "#0a1929",
            paper: "#0a1929",
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    {" "}
                    <Classes />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/Notice"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />

              <Route
                path="/Classes"
                element={
                  <PrivateRoute>
                    <Classes />
                  </PrivateRoute>
                }
              />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/PHY1"
                element={
                  <PrivateRoute>
                    {" "}
                    <Physics1stPaperHome />{" "}
                  </PrivateRoute>
                }
              />
              <Route
                path="/PHY1/:CId"
                element={
                  <PrivateRoute>
                    <SingleChapter />
                  </PrivateRoute>
                }
              />
              <Route
                path="/PHY1/:CId/:LIndex"
                element={
                  <PrivateRoute>
                    <SingleLecture />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
