import React from "react";
import styled from "styled-components";
import logo from "../../logo.png";
import { RouteComponentProps } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const NavBar = styled.div`
  display: flex;
  height: 60px;
  line-height: 60px;
  background-color: white;
  color: black;
  .logo {
    width: 120px;
    height: 60px;
    background: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .menu {
    cursor: pointer;
    width: 100px;
    padding: 0 10px;
    &.active,
    &:hover {
      font-weight: bold;
    }
  }
`;
export const menus: any[] = [
  {
    name: "首页",
    path: "/"
  },
  {
    name: "区块",
    path: "/epochs"
  },
  {
    name: "交易",
    path: "/txs"
  },
  {
    name: "账号",
    path: "/accounts"
  },
  {
    name: "资产",
    path: "/asserts"
  },
  {
    name: "API",
    path: "/api"
  }
];

export default ({ routeProps }: { routeProps: RouteComponentProps }) => {
  return (
    <Header>
      <NavBar>
        <div
          className="logo"
          onClick={() => {
            routeProps.history.push("/");
          }}
        ></div>

        <div style={{ flex: 1 }} />
        {menus.map((menu: any) => (
          <div
            className={`menu${
              menu.path === routeProps.location.pathname ? " active" : ""
            }`}
            onClick={() => routeProps.history.push(menu.path)}
          >
            {menu.name}
          </div>
        ))}
      </NavBar>
    </Header>
  );
};
