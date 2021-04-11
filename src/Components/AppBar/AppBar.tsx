import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import MuiButton from "@material-ui/core/Button";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Toolbar = styled(MuiToolbar)`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div`
  display: none;
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: block;
  }
`;

const AppBar = () => {
  return (
    <MuiAppBar position="static" elevation={0}>
      <Toolbar>
        <Left>
          <MuiTypography variant="h6">Brandon Scott Alexander</MuiTypography>
        </Left>
        <Right>
          <MuiButton component={HashLink} to="/#About" color="inherit">
            About
          </MuiButton>
          <MuiButton component={HashLink} to="/#Work" color="inherit">
            Work
          </MuiButton>
          <MuiButton component={HashLink} to="/#Contact" color="inherit">
            Contact
          </MuiButton>
        </Right>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
