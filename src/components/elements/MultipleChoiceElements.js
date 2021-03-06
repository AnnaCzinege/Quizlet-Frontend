import styled from "styled-components";

export const Section = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  background-color: ${(props) => props.currentTheme};
`;

export const Content = styled.div`
  justify-content: center;
  display: flex;
  box-sizing: inherit;
`;

export const Card = styled.div`
  padding: 5px;
  border-color: ${(props) =>
    props.theme === "light" ? "#ffae6d" : "whitesmoke"};
  align-items: center;
  vertical-align: center;
  text-align: center;
  border-radius: 0.25rem;
  height: 180px;
  width: 60%;
  box-shadow: 0 0 0.4rem 0;
  background-color: ${(props) =>
    props.theme === "light" ? "#f9f9f9" : "#1f2833"};
  transition: all 0.12s;
  justify-content: center;
  box-sizing: inherit;
`;

export const QuestionContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2rem;
  height: 100%;
  min-height: 50%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const OptionContent = styled.div`
  flex-grow: 0;
  width: 100%;
  z-index: 1;
  display: flex;
`;

export const QuestionContainer = styled.div`
  max-height: 100%;
  vertical-align: center;
  justify-content: flex-start;
  line-height: 50px;
`;

export const Question = styled.div`
  padding-top: 50px;
  font-family: "Raleway-Regular";
  line-height: 22px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#0b0c10" : "whitesmoke")};
`;

export const OptionContainer = styled.div`
  justify-content: flex-start;
  width: 100%;
`;

export const OptionOuter = styled.div`
  border: 0.125rem solid;
  border-color: ${(props) =>
    props.theme === "light" ? "#c5c6c7" : "whitesmoke"};
  &[data-answer="right"] {
    border-color: green;
    background-color: green;
    color: "whitesmoke";
  }
  &[data-answer="wrong"] {
    border-color: red;
    background-color: red;
    color: "whitesmoke";
  }
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.75rem;
  margin: 0 0.25rem;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625;
  transition: none 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  transition-property: border-color;
  width: auto;
  &:hover {
    border-color: #ffae6d;
  }
  font-family: "Raleway-Regular";
  font-size: 16px;
  font-weight: bold;
  position: relative;
  display: block;
  color: ${(props) => (props.theme === "light" ? "#1f2833" : "whitesmoke")};
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  box-sizing: inherit;
  padding-top: 50px;
`;

export const Button = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  padding: 15px;
  margin: 0 0.3rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  color: #45a29e;
  font-size: 24px;
  font-family: "Raleway-Medium";
  &:hover {
    text-decoration: underline #ffae6d;
  }
`;

export const Number = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  margin: 0 0.3rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  color: ${(props) => (props.theme === "light" ? "#1f2833" : "#c5c6c7")};
  font-size: 22px;
  font-family: "Raleway-Medium";
`;

export const StyledTitle = styled.p`
  text-align: center;
  flex-basis: 100%;
  word-break: break-word;
  font-size: 32px;
  font-family: "Raleway-Regular";
  letter-spacing: 1.5px;
  color: #ffae6d;
  font-weight: ${(props) => (props.theme === "light" ? "bold" : "")};
`;

export const StyledParagraph = styled.p`
  text-align: left;
  padding-top: 3px;
  font-size: 18px;
  font-family: "Raleway-Regular";
  color: ${(props) => (props.theme === "light" ? "#1f2833" : "whitesmoke")};
`;
