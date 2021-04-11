import React from "react";
import AppBar from "../../Components/AppBar/AppBar";
import styled from "styled-components";
import AboutSection from "./Components/About";
import WorkSection from "./Components/Work";
import Spacer from "../../Components/Spacer/Spacer";
import ContactSection from "./Components/Contact";

const PageContainer = styled.div``;
const PageContent = styled.div`
  padding: 20px;
`;

const Home = () => {
  return (
    <PageContainer>
      <AppBar />
      <PageContent>
        <AboutSection />
        <Spacer height={20} />
        <WorkSection />
        <Spacer height={20} />
        <ContactSection />
      </PageContent>
    </PageContainer>
  );
};

export default Home;
