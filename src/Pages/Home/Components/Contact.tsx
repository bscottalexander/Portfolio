import React from "react";
import styled from "styled-components";
import MuiTypography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import TwitterIcon from '@material-ui/icons/Twitter';

const Container = styled.div``;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <Container id="Contact">
      <MuiTypography variant="h4">Contact</MuiTypography>
      <IconContainer>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/brandon-alexander-895157207"
        >
          <LinkedinIcon />
        </IconButton>
        <IconButton component="a" href="https://github.com/bscottalexander">
          <GithubIcon />
        </IconButton>
        <IconButton component="a" href={process.env.PUBLIC_URL + "/resume.pdf"}>
          <DescriptionIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/BScottAlexander"
        >
          <TwitterIcon />
        </IconButton>
      </IconContainer>
    </Container>
  );
};

export default Contact;
