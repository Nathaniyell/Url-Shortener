import React, { useState } from "react";
import styled from "styled-components";

const ListItems = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
   
  li{
    background: #fff;
    border-radius: 5px;
    height: 10rem;
    margin-block: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .first-span{
    color: hsl(260, 8%, 14%);
    border-bottom: 1px solid hsl(260, 8%, 14%);
    padding: 5px 0 8px;
  }
  .second-span{
    color: hsl(180, 66%, 49%);
}
     button {
        border-radius: 5px;
        width: 95%;
        height: 32px;
        text-align: center;
        border: none;
        background-color: ${(props) =>
          props.checkCopy ? "purple" : "hsl(180, 66%, 49%)"};
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        &:hover {
         opacity: 0.8;
    }

`;

const DisplayLinks = (props) => {
  const [copied, setCopied] = useState(false);
  function copy(e) {
    setCopied(true);
    console.log(e.target);
    alert("Copied!!");
  }
  return (
    <ListItems checkCopy={copied}>
      {props.onAddNewLink.map((link) => {
        return (
          <li key={link.id}>
            <span className="first-span">{link.oldLink}</span>
            <span className="second-span">{link.shortenedLink}</span>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(link.shortenedLink);
                copy();
              }}
              disabled={copied}
            >
              {copied ? "Copied!!" : "Copy"}
            </button>
          </li>
        );
      })}
    </ListItems>
  );
};

export default DisplayLinks;
