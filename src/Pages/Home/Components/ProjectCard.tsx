import React, { FunctionComponent as FC } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import MuiTypography from "@material-ui/core/Typography";
import MuiButtonBase from "@material-ui/core/ButtonBase";

const Container = styled(Paper)`
  width: 100%;
  height: 100%;
`;

const Text = styled(MuiTypography)`
  font-weight: bold;
  color: white;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  height: 300px;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

type ProjectCardProps = {
  title: string;
  link: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ title, link }) => {
  return (
    <MuiButtonBase component="a" href={link}>
      <Container elevation={3}>
        <TextContainer>
          <Text variant="h6">{title}</Text>
        </TextContainer>
      </Container>
    </MuiButtonBase>
  );
};

export default ProjectCard;
