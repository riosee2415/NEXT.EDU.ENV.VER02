import React from "react";
import styled from "styled-components";
import items from "./items";
import { Whole, LnbWrapper, HeaderSection } from "./designSource";
import CONFIG from "../../config/config";

const Header_B = () => {
  return (
    <Whole bg="skyblue">
      <HeaderSection>
        {items.map((item) => {
          return (
            <div>
              {CONFIG.LAN_TYPE === "KO" && item.name_ko}
              {CONFIG.LAN_TYPE === "EN" && item.name_en}
            </div>
          );
        })}
      </HeaderSection>
      <LnbWrapper>
        {items.map((item) => {
          return (
            <div>
              {item.menus.map((menu) => {
                return <div>{menu.name_ko}</div>;
              })}
            </div>
          );
        })}
      </LnbWrapper>
    </Whole>
  );
};

export default Header_B;
