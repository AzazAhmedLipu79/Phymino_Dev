import React, { useEffect, useState } from "react";
import BottomNav from "../../Shared/BottomNav/Bottomnav";
import Header from "../../Shared/Header/Header";
import useAuth from "../../../hooks/useAuth";
import "./Profile.css";
import { Button, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import swal from "sweetalert";
const Profile = () => {
  // const [Nowquotes, setQuotes] = useState({});
  // useEffect(() => {
  //   fetch("https://zenquotes.io/api/random")
  //     .then((res) => res.json())
  //     .then((data) => setQuotes(data));
  // }, []);
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "You Will be Logout From This Site !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        logout();
      } else {
        swal("Welcome Back!");
      }
    });
  };
  return (
    <>
      <Header></Header>

      <>
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="profile-nav col-md-3">
              <div className="panel">
                <div className="user-heading round">
                  <a href="#">
                    <img src={user.photoURL} alt={user.displayName} />
                  </a>
                  <h2 className="mt-2">{user.displayName}</h2>
                  <p>{user.email}</p>
                </div>
                <Button
                  onClick={handleLogOut}
                  fullWidth
                  sx={{ mt: 1, mb: 4 }}
                  color="error"
                  variant="outlined"
                  startIcon={<ExitToAppIcon />}
                >
                  Logout
                </Button>
              </div>
            </div>
            <div className="profile-info col-md-9">
              <div className="panel"></div>
              <div className="panel">
                {/* <div className="bio-graph-heading">
                  <Typography variant="h6" gutterBottom component="div">
                    Hi,{user.displayName} !
                  </Typography>
                  <Typography variant="button" href="/" gutterBottom>
                    Get Started
                  </Typography>
                </div> */}
                <div className="panel-body bio-graph-info">
                  <h1>Bio </h1>
                  <div className="row">
                    <div className="bio-row">
                      <p>
                        <span>User Id </span>: {user?.localId}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Last Name </span>: Smith
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Country </span>: Australia
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Birthday</span>: 13 July 1983
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Occupation </span>: UI Designer
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Email </span>: jsmith@flatlab.com
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Mobile </span>: (12) 03 4567890
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Phone </span>: 88 (02) 123456
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <BottomNav></BottomNav>
    </>
  );
};

export default Profile;
