import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Page from "../../components/Page";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

export default ({ routeProps }: { routeProps: RouteComponentProps }) => {
  return (
    <Page>
      <Header routeProps={routeProps}></Header>
      <Content>404</Content>
      <Footer></Footer>
    </Page>
  );
};
