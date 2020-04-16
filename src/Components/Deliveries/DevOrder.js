import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  border-radius: 0.25rem;
  background-color: #fff;
  margin-bottom: 1.75rem;

  .header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-family: "Playfair Display", serif;
      font-size: 1.5rem;
      margin-top: 0.75rem;
      color: #a8cdc9;
      /* color: #febc12; */
    }

    span {
      color: gray;
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    border-radius: 1rem;
  }

  tr {
    transition: background-color 0.25s;
    &:hover {
      background-color: #febc12;
    }
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(odd) {
    background-color: #f2f2f2;
    &:hover {
      background-color: #febc12;
    }
  }

  th {
    background-color: #545454;
    color: white;
  }
`;

export default function DevOrder() {
  return (
    <Container>
      <section className="header">
        <h3>
          Orders: <span>2</span>
        </h3>
        <h3>
          Grand Total: <span>$2,423.67</span>
        </h3>
      </section>
      <table>
        {" "}
        {/*Each TR TD set will be dynamic data that is mapped in*/}
        <tr>
          <th>Work Order</th>
          <th>PO Number</th>
          <th>Total Price</th>
        </tr>
        <tr>
          <td>WHOL232748</td>
          <td>661576</td>
          <td>$661.00</td>
        </tr>
        <tr>
          <td>WHOL232748</td>
          <td>661576</td>
          <td>$661.00</td>
        </tr>
        <tr>
          <td>WHOL232748</td>
          <td>661576</td>
          <td>$1,101.67</td>
        </tr>
      </table>
    </Container>
  );
}
