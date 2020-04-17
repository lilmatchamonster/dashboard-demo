import React from "react";
import Order from "./Order";
import styled from "styled-components";

const Container = styled.div`
  background-color: whitesmoke;
  padding: 3.6%;

  h2 {
    box-shadow: 3px 3px 8px 2px #ccc;
    border-radius: 0.25rem;
    padding: 1rem;
    background-color: #545454;
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    text-align: center;
    color: #febc12;
    min-width: 487px;
  }
`;

export default function RecentOrders() {
  return (
    <Container>
      <h2>Recent Orders</h2>
      <Order /> {/* Example of a displayed Order */}
      <Order /> {/* Example of a displayed Order */}
      <Order /> {/* Example of a displayed Order */}

    </Container>
  );
}


