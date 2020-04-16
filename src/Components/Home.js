import React from "react";
import Feed from "./NewsFeed/Feed";
import RecentOrders from "./RecentOrders/RecentOrders";
import Deliveries from "./Deliveries/Deliveries";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  .main {
    width: 100%;
    min-width: 550px;
  }
`;

export default function Home() {
  return (
    <Container>
      <div className="main">
        <RecentOrders />
        <Deliveries />
      </div>
      <Feed />
    </Container>
  );
}
