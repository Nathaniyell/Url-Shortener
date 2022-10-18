import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesk from "../images/bg-shorten-desktop.svg";



const Form = styled.form`
  background-image: url(${bgShortenMobile});
  background-color: hsl(260, 26%, 20%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: luminosity;
  border-radius: 12px;
  width: 90%;
  height: 150px;
  padding: 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  text-align: center;
  position: relative;
  top: -60px;

  & div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 110px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
  }
  p {
    color: hsl(0, 87%, 67%);
    margin-top: -15px;
  }
  & input {
    border: 1px solid ${(props) => (props.valid ? "black" : "hsl(0, 87%, 67%)")};
    color: ${(props) => (props.valid ? "black" : "hsl(0, 87%, 67%)")};
    font-size: 1rem;
    height: 38px;
    padding: 0.9rem 0;
    text-indent: 10px;
    border-radius: 5px;
    width: 95%;
  }
  & button {
    border-radius: 5px;
    width: 95%;
    height: 38px;
    text-align: center;
    border: none;
    background: hsl(180, 66%, 49%);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (min-width: 768px) {
    background-image: url(${bgShortenDesk});
    height: 100px;

    div {
      flex-direction: row;
      height: 100%;
    }
    input {
      width: 80%;
    }
    button {
      width: auto;
      padding: 0 10px;
    }
  }
  @media (min-width: 922px) {
    input {
      width: 85%;
    }
  }
`;

const GetLinks = (props) => {
  const [formData, setFormData] = useState({
    link: "",
    isValid: true,
  });

  const [finalPoint, setFinalPoint] = useState("");
  const [container, setContainer] = useState('');

  function inputChangeHandler(event) {
    setFormData((prevState) => ({
      ...prevState,
      link: event.target.value,
    }));
  }

  useEffect(() => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${finalPoint}`)
      .then((res) => res.json())
      .then((data) => setContainer(data.result.short_link));
  }, [finalPoint]);

  function formSubmitHandler(event) {
    event.preventDefault();
    if (formData.link.trim().length === 0) {
      setFormData((prevValue) => ({
        ...prevValue,
        isValid: false,
      }));
      return;
    }
    setFinalPoint(formData.link);

    props.onNewLinks(formData.link, container);

    setFormData({
      link: "",
      isValid: true,
    });
    // console.log(formData.link)
  }

  return (
    <>
      <Form onSubmit={formSubmitHandler} valid={formData.isValid}>
        <div className="input-div">
          <input
            type="text"
            name="link"
            onChange={inputChangeHandler}
            value={formData.link}
            placeholder="Shorten a link here..."
          />
          <button type="submit" disabled={!formData.isValid}>
            Shorten It!
          </button>
        </div>
        {!formData.isValid && <p>Please enter a link</p>}
      </Form>
     
    </>
  );
};

export default GetLinks;
