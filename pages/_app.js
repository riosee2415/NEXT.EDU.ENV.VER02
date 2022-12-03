import React from "react";
import "antd/dist/antd.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import CONFIG from "../config/config";
import Header_A from "../components/navigation/Header_A";
import Header_B from "../components/navigation/Header_B";
import Header_C from "../components/navigation/Header_C";

const Whole = styled.section`
  width: 100%;
  padding: 0px 10%;

  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;

const AppShell = ({ Component }) => {
  return (
    <>
      {CONFIG.HEADER_TYPE === "A" && <Header_A />}
      {CONFIG.HEADER_TYPE === "B" && <Header_B />}
      {CONFIG.HEADER_TYPE === "C" && <Header_C />}

      <Whole>
        <Component />
      </Whole>

      <Footer />
    </>
  );
};

export default AppShell;
