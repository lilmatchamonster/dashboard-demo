import React from "react";
import DevOrder from "./DevOrder";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  background-color: whitesmoke;
  padding: 2%;

  h2 {
    box-shadow: 3px 3px 8px 2px #ccc;
    border-radius: 0.25rem;
    padding: 1rem;
    background-color: #545454;
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    text-align: center;
    /* color: #a8cdc9; */
    color: #febc12;
  }
  .content {
    box-shadow: 3px 3px 8px 2px #ccc;
    font-family: "Roboto", sans-serif;
    border-radius: 0.25rem;
    padding: 2rem;
    background-color: #fff;
    margin-bottom: 1.75rem;
  }
  .pagin {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
    /* border-bottom: 1px solid whitesmoke; */

    h3 {
      padding: 0;
      font-family: "Playfair Display", serif;
      font-size: 1.5rem;
      text-align: center;
      margin: 0;
      color: #a8cdc9;
    }

    .icon {
      font-size: 1.25rem;
      background-color: whitesmoke;
      box-shadow: 1px 1px 2px 1px #dfdfdf;
      border: 2px solid #ccc;
      border-radius: 0.75rem;
      color: #545454;
      cursor: pointer;
      margin: auto 0;

      &:active {
        box-shadow: none;
        border-style: ridge;
      }
    }
  }
`;

export default function Deliveries() {
  return (
    <Container>
      <h2>Deliveries</h2>
      <section className="content">
        <div className="pagin">
          <FaAngleLeft className="icon" />
          <h3>Tuesday, April 14, 2020</h3>
          <FaAngleRight className="icon" />
        </div>
        <DevOrder />
      </section>
    </Container>
  );
}
