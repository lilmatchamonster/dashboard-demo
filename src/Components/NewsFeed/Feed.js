import React from "react";
import Article from "./Article";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import styled from "styled-components";

export default function Feed() {
  const Container = styled.section`
    background-color: whitesmoke;
    padding: 2%;
    width: 50%;
    min-width: 500px;

    h1 {
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
    .pagin {
      display: flex;
      justify-content: center;
      box-shadow: 3px 3px 8px 2px #ccc;
      border-radius: 0.25rem;
      padding: 1rem;
      background-color: #545454;

      .icon {
        font-size: 1.25rem;
        background-color: whitesmoke;
        box-shadow: 1px 1px 6px 1px #1c1c1c;
        border: 2px solid #ccc;
        border-radius: 0.75rem;
        color: #545454;
        cursor: pointer;
        margin: 0 10%;

        &:active {
          box-shadow: none;
          border-style: ridge;
        }
      }
    }
  `;
  return (
    <Container>
      <h1>News</h1>
      <Article />
      <Article />
      <section className="pagin">
        <FaAngleLeft className="icon" />
        <FaAngleRight className="icon" />
      </section>
    </Container>
  );
}
