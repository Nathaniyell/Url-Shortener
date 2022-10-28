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
    border: 1px solid ${(props) => (props.valid ? "hsl(0, 87%, 67%)" : 'black')};
    color: ${(props) => (props.valid ? "hsl(0, 87%, 67%)" : "black")};
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
  const [formData, setFormData] = useState('');
  const [isValid, setIsValid] = useState(true)

  const [container, setContainer] = useState('');

  function inputChangeHandler(event) {
    setFormData(event.target.value)
  }

  const getData = async () => {
    if(formData === ''){
      return
    }
    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${formData}`)
    let link = await response.json()
    let shortlink = link.result.short_link
    setContainer(shortlink)

  }
  useEffect(() => {
  getData()
  });

  function formSubmitHandler(event) {
    event.preventDefault();
    if (formData.trim().length === 0) {
      setIsValid(false)
      return;
    }
    setIsValid(true)
    getData()
    props.onNewLinks(formData, container);

    setFormData('');
    setIsValid(true)
    console.log(formData)
  }

  return (
    <>
      <Form onSubmit={formSubmitHandler} valid={!isValid}>
        <div className="input-div">
          <input
            type="text"
            name="link"
            onChange={inputChangeHandler}
            value={formData}
            placeholder="Shorten a link here..."
          />
          <button type="submit">
            Shorten It!
          </button>
        </div>
        {!isValid && <p>Please enter a link</p>}
      </Form>

    </>
  );
};

export default GetLinks;
