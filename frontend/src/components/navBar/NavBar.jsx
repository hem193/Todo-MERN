import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
const MyComponent = styled("toDoApp")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

const NavBar = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h4">
            <MyComponent>
              <NavLink to="/" textDecoration="none">
                toDoApp;
              </NavLink>
            </MyComponent>
          </Typography>
          <Typography variant="subtitle2">Logged in as Hemanth</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
