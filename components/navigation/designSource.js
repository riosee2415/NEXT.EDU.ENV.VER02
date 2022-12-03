import styled, { keyframes } from "styled-components";

const Appear = keyframes`
    0% {
        opacity : 0;
    } 100% {
        opacity : 1;
    }
`;

export const LnbWrapper = styled.section`
  display: none;
  width: 100%;
`;

export const Whole = styled.div`
  width: 100%;
  padding: ${(props) => props.padding || ""};
  background-color: ${(props) => props.bg || ""};
  color: ${(props) => props.color || ""};
  border: ${(props) => props.border || ""};
  border-radius: ${(props) => props.radius || ""};

  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};

  &:hover {
    & ${LnbWrapper} {
      display: flex;
      animation: ${Appear} 1s forwards;
    }
  }
`;
