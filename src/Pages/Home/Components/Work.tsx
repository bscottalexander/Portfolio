import React from "react";
import styled from "styled-components";
import MuiTypography from "@material-ui/core/Typography";
import Spacer from "Components/Spacer/Spacer";
import ProjectCard from "Pages/Home/Components/ProjectCard";

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  ${(props) => props.theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Work = () => {
  return (
    <Container id="Work">
      <MuiTypography variant="h4">Work</MuiTypography>
      <Spacer height={20} />
      <Grid>
        <ProjectCard
          title="Rock, Paper, Scissors"
          link="https://github.com/bscottalexander/Rock-Paper-Scissors"
        />
        <ProjectCard
          title="Code Refractor"
          link="https://github.com/bscottalexander/Hw1"
        />
      </Grid>
    </Container>
  );
};

export default Work;
