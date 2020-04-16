import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

function Article() {
  const Container = styled.section`
    box-shadow: 3px 3px 8px 2px #ccc;
    font-family: "Roboto", sans-serif;
    border-radius: 0.25rem;
    padding: 2rem;
    background-color: #fff;
    margin-bottom: 1.75rem;

    .article-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-family: "Playfair Display", serif;
        font-size: 1.5rem;
        margin: 0;
        color: #a8cdc9;
      }
      .author {
        margin-top: 0;
        color: gray;
        span {
          font-size: 0.75rem;
        }
      }
      .del-btn {
        align-self: flex-start;
        margin-top: 0.5rem;
        cursor: pointer;
        color: #a8cdc9;
        text-align: right;
      }
    }
    .content {
      padding-bottom: 0.5rem;
    }
    .imgs {
      text-align: right;
      display: flex;
      justify-content: space-between;
      width: 100%;

      .main-img {
        border: 1px solid #ccc;
        text-align: center;
        width: 73%;
      }
      .thumbs {
        text-align: center;
        padding: 0;
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: space-between;

        div {
          border: 1px solid #ccc;
          height: 5rem;
        }
      }
    }
  `;
  return (
    <Container>
      <section className="article-info">
        <div>
          <p className="title">This is Why Cats are MLG (Title)</p>
          <p className="author">
            Cat King (Author)<span> - Posted {Date.now()}</span>
          </p>
          {/* Um I fortet formatting for Date <_< */}
        </div>
        <FaTimes className="del-btn" />
      </section>
      <section className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          elementum mattis nibh in molestie. Nullam dictum, purus et interdum
          iaculis, justo justo vehicula nunc, nec egestas metus risus a turpis.
          Ut fringilla nisi at enim volutpat consectetur. Praesent vehicula
          ligula consectetur felis aliquam, id scelerisque ipsum scelerisque.
          Nunc imperdiet dui vel felis luctus aliquet. Nunc facilisis ante sed
          nisi congue pulvinar eget vitae odio. Duis elit ipsum, commodo id
          maximus in, convallis in odio. Integer ornare libero vel quam laoreet,
          vel sagittis sem tempor. Maecenas sodales tempus justo at aliquam.
          Mauris ornare, sem vitae vulputate pretium, urna arcu sagittis sem,
          quis rhoncus mauris nisi et orci. Aliquam sed felis a nibh dignissim
          tristique sed in ligula. Nunc eu semper odio.
        </p>
        <p>
          Aliquam eu condimentum lorem. Nulla a lectus velit. Nam at cursus
          ante. Maecenas pellentesque condimentum sem id vulputate. Praesent
          malesuada tincidunt elementum. Nulla aliquet gravida sem, vel
          imperdiet dolor rutrum vel. Fusce sodales ante in massa laoreet, id
          viverra risus imperdiet. Proin ut mauris lacus. Maecenas semper risus
          id nisi gravida feugiat. Vivamus at rhoncus mi, vel pulvinar quam.
          Etiam imperdiet accumsan eros in varius. Maecenas quis nunc vitae
          massa tempus cursus vel quis nibh. Integer a fringilla elit.
        </p>
      </section>
      <section className="imgs">
        <div className="main-img">
          There is an image here I swear. You just can not see it :)
        </div>
        <section className="thumbs">
          <div>There is a thumb sized image here :)</div>
          <div>There is a thumb sized image here :)</div>
        </section>
      </section>
    </Container>
  );
}

export default Article;
