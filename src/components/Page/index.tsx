import React from "react";
import styled from "styled-components";

const PageDiv = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export default ({ children, style }: { children: any; style?: object }) => {
  return <PageDiv style={style}>{children}</PageDiv>;
};
