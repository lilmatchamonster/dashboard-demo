import React from "react";
import { IoMdList } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  box-shadow: 3px 3px 8px 2px #ccc;
  font-family: "Roboto", sans-serif;
  border-radius: 0.25rem;
  padding: 1rem;
  background-color: #fff;
  margin-bottom: 0.75rem;
  min-width: 487px;

  &:hover {
    background-color: #E1E6ED;
    /* border: .5px solid gray; */
    box-shadow: 3px 3px 8px 2px gray;

    .icon {
      fill: #545454;
      stroke: #545454;
      background-color: whitesmoke;
      /* border: 1px solid gray; */
      box-shadow: 3px 3px 8px 2px gray;
    }
    .order-content {
      h3 {
        color: #545454;
      }
    }
  }

  .content {
    display: flex;
  }

  .icon {
    margin: auto 0;
    /* border: 1px solid #ccc; */
    box-shadow: 3px 3px 8px 2px #ccc;
    /* padding: 1%; */
    border-radius: 3rem;
    width: 75px;
    height: 75px;
    padding: 10px;
    fill: transparent;
    stroke: #febc12;
    stroke-width: 10;
    background-color: #545454;
  }

  .order-content {
    margin: auto 2rem;

    .order {
      /* font-family: "Playfair Display", serif; */
      font-weight: inherit;
      font-size: 1.35rem;
    }

    h3 {
      margin: 0;
      color: #a8cdc9;
      font-weight: initial;
    }
    p {
      margin: 0.23rem;
      font-style: italic;
    }
    .titles {
      margin-right: 2rem;
    }

    section {
      display: flex;
      margin-top: 1rem;
    }
  }
  .order-status {
    /* border: 1px solid #ccc; */
    border-radius: 0.25rem;
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    width: 6rem;

    div {
      margin: 0.25rem;
      border: 1px solid #ccc;
      border-radius: 1rem;
      width: 32px;
      height: 32px;
    }
  }
`;

export default function Order() {
  return (
    <Container>
      <section className="content">
        <IoMdList className="icon" />
        <div className="order-content">
          <h3 className="order">WHOL232748</h3>
          <section>
            <div className="titles">
              <h3>PO: </h3>
              <h3>Order Type: </h3>
              <h3>Received: </h3>
            </div>
            <div>
              <p>661576</p>
              <p>Premier</p>
              <p>April 9, 2020</p>
            </div>
          </section>
        </div>
      </section>
      <div className="order-status">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </Container>
  );
}
