import React from "react";
import styled from "styled-components";
import items from "./items";
import { Whole, LnbWrapper, HeaderSection } from "./designSource";
import CONFIG from "../../config/config";

const Header_A = () => {
  return (
    <Whole bg="orange">
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
                return (
                  <div>
                    {CONFIG.LAN_TYPE === "KO" && menu.name_ko}
                    {CONFIG.LAN_TYPE === "EN" && menu.name_en}
                  </div>
                );
              })}
            </div>
          );
        })}
      </LnbWrapper>
    </Whole>
  );
};

export default Header_A;
