import React from "react";
import styled from "styled-components";
import MuiTypography from "@material-ui/core/Typography";
import Spacer from "../../../Components/Spacer/Spacer";
import ProfilePicturePath from "Assets/Images/ProfilePicture.jpg";
const Container = styled.div``;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 300px;
  width: 300px;
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 560px;
    width: 560px;
  }
`;

const About = () => {
  return (
    <Container id="About">
      <MuiTypography variant="h4">About</MuiTypography>
      <Spacer height={20} />
      <ImageContainer>
        <Image src={ProfilePicturePath} />
      </ImageContainer>

      <Spacer height={20} />

      <MuiTypography>
        My name is Brandon Alexander, and I'm from the north suburbs of Chicago.
        I am a Communication Technician by trade, but have been exploring
        Computer Science and Coding for the last couple years. I hope to
        continue my expierience in coding and one day transfer my skills into a
        full time coding job.
      </MuiTypography>
    </Container>
  );
};

export default About;
