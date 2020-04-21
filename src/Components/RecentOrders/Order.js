import React, { useState } from "react";
import { IoMdList, IoIosGlobe } from "react-icons/io";
import { FaShieldAlt, FaRegCheckCircle } from "react-icons/fa";
import { TiWarningOutline } from "react-icons/ti";
import { GiBackwardTime } from "react-icons/gi";
import { FiLoader } from "react-icons/fi";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
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
    box-shadow: 3px 3px 8px 2px gray;
    background-color: #e8e8e8;
    /* background-color: #fef1cf; */
    /* color: #a8cdc9; */

    .icon {
      /* fill: #545454;
      stroke: #febc12;
      background-color: whitesmoke; */
      /* border: 1px solid gray; */
      box-shadow: 3px 3px 8px 2px gray;
    }
    .order-content {
      h3 {
        color: #545454;
      }
      p {
        color: #545454;
        font-weight: 700;
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
    margin: auto 0;
    width: 6rem;

    .order-type {
      display: flex;
      justify-content: space-evenly;
    }

    .status-icons {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    div {
      margin: 0.25rem;
      border: 1px solid #ccc;
      border-radius: 1rem;
      width: 32px;
      height: 32px;
    }

    .urgent,
    .backorder {
      background-color: #febc12;
      border-bottom: 2px solid none;
      border-radius: 2rem;
      width: 60px;
      height: 60px;
    }

    .backorder {
      background-color: tomato;
    }

    .stat {
      margin: 0 1.5px;
      stroke-width: 0;
      fill: #545454;
      width: 100%;
      height: 100%;
    }
    .spin {
      stroke-width: 2;
      stroke: #545454;
      width: 90%;
      margin: 0px 1.5px;
    }
    /* .att {
      width: 95%;
      padding: 0;
    } */
    .check {
      width: 90%;
    }
  }
`;

const order = {
  id: 160045,
  customerId: "OH-ROYALTY MOONEY",
  orderItems: [],
  lifeCyclePhase: 0,
  type: 0, // Order type Traditional
  progress: 0, // In Customer Service
  alertStatus: 0, // All Clear
  description: "Miscellaneous",
  isOrder: false,
  poNumber: "Eff",
  orderType: "Glass Only",
  orderStatus: {
    id: 4,
    isCompleteStatus: true,
    isActiveStatus: false,
    isShopStatus: false,
    isProductionReady: true
  },
  assignedCSR: "Emily Weigand",
  installDate: "2020-04-22T00:00:00",
  receivedByDate: "2020-04-16T09:16:05.813",
  completedDate: "2020-04-16T09:58:45.34",
  deliveryDate: "2020-04-22T00:00:00",
  invoicedDate: "0001-01-01T00:00:00",
  workOrder: "QHOL044488",
  totalPrice: 536.74,
  isComplete: false,
  isCanceled: false,
  isBackordered: false,
  invoiced: false,
  warrantyOriginalWorkOrder: null,
  isOnlineOrder: false,
  isWarranty: false,
  needsInfoStatus: false
};

// Temporary Date formater. Better to use regex
const formateDate = () => {
  const date = order.receivedByDate;
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septermber",
    "October",
    "November",
    "December"
  ];
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const currentMonth = monthArr[month - 1];
  const day = date.slice(8, 10);
  return `${currentMonth} ${day}, ${year}`;
};

export default function Order() {
  const { progress, type, alertStatus } = order;

  return (
    <Container>
      <section className="content">
        <IoMdList className="icon" />
        <div className="order-content">
          <h3 className="order">{order.workOrder}</h3>
          <section>
            <div className="titles">
              <h3>PO: </h3>
              <h3>Order Type: </h3>
              <h3>Received: </h3>
            </div>
            <div>
              <p>{order.poNumber}</p>
              <p>{order.orderType}</p>
              <p>{formateDate()}</p>
            </div>
          </section>
        </div>
      </section>
      <div className="order-status">
        <section className="order-type">
          {type === 1 ? (
            <div>
              <IoIosGlobe className="stat" />
            </div>
          ) : type === 2 ? (
            <div>
              <FaShieldAlt className="stat spin" />
            </div>
          ) : null}
        </section>
        <section className="status-icons">
          {alertStatus === 0 ? (
            progress < 3 ? (
              <div>
                <FiLoader className="stat spin" />
              </div>
            ) : order.isComplete ? (
              <div>
                <FaRegCheckCircle className="stat check" />
              </div>
            ) : order.isCanceled ? (
              <div>
                <AiOutlineCloseCircle className="stat check" />
              </div>
            ) : null
          ) : alertStatus === 1 ? (
            <div className="urgent">
              <TiWarningOutline className="stat att" />
            </div>
          ) : alertStatus === 2 ? (
            <div className="backorder">
              <GiBackwardTime className="stat" />
            </div>
          ) : null}
        </section>
      </div>
    </Container>
  );
}
