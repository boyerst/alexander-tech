import styled from "styled-components"

export const ContactStyles = styled.section`
  // max-width: 750px;
  box-sizing: content-box;
  // margin-left: auto;
  // margin-right: auto;
  display: flex;
  // align-items: center;
  justify-content: space-around;
  // height: 200vh;

  div p {
    margin-bottom: 0;
  }
  > div > span {
    font-weight: bold;
  }
  > div > span > svg {
    color: var(--primary);
    margin-right: 9px;
  }


  input {
    height: calc(var(--gap) * 2);
    margin-bottom: var(--gap);
  }

  input,
  textarea {
    background-color: #000;
    color: #fff;
    border: none;
    outline: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    width: 100%;
    font-size: var(--p);
    font-weight: 700;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: outline 0.3s ease;

    &:focus {
      outline: 2px solid var(--primary);
    }

    &::-webkit-input-placeholder {
      color: var(--inActive);
    }

    &::-moz-placeholder {
      color: var(--inActive);
    }

    &:-ms-input-placeholder {
      color: var(--inActive);
    }

    &:-moz-placeholder {
      color: var(--inActive);
    }
  }
  textarea {
    margin-bottom: var(--gap);
  }
`
