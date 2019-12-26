import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  color: black;
  background-image: linear-gradient(150deg, #ffffff, #ffffff);
  background-repeat: repeat-x;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export default () => {
  return (
    <Footer>
      <div className="container">
        © {new Date().getFullYear()} 区块链(created by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nervosnetwork/muta"
        >
          <b>Muta</b>
        </a>
        ) UI. All Rights Reserved.
      </div>
    </Footer>
  );
};
