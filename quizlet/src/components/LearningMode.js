import React, { useState } from "react";
import {
  Container,
  StyledTitle,
  StyledLi,
  StyledUl,
  HiddenRadioButton,
  StyledLabel,
  StyledRadioButton,
  RadioButtonContainer,
  StyledParagraph,
} from "./elements/LearningModeElements";
import { StyledSection, CardContainer } from "./elements/SiteIndexElements";

const LearningMode = (props) => {
  const urlString = props.location.pathname;

  const getTopicName = (string) => {
    let n = string.lastIndexOf("/");
    let topic = string.substring(n + 1);
    return topic.replace(/-/g, " ");
  };

  const title = (string) => {
    let array = string.split(" ");
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      console.log(array[i]);
    }

    return array.join(" ");
  };

  const [easy, setEasy] = useState({ checked: false });
  const [medium, setMedium] = useState({ checked: false });
  const [hard, setHard] = useState({ checked: false });
  const [ten, setTen] = useState({ checked: false });
  const [thirty, setThirty] = useState({ checked: false });
  const [fifty, setFifty] = useState({ checked: false });

  const handleCheckboxChange1 = (event) => {
    setEasy({ checked: event.target.checked });
    setMedium({ checked: false });
    setHard({ checked: false });
  };

  const handleCheckboxChange2 = (event) => {
    setMedium({ checked: event.target.checked });
    setEasy({ checked: false });
    setHard({ checked: false });
  };

  const handleCheckboxChange3 = (event) => {
    setHard({ checked: event.target.checked });
    setMedium({ checked: false });
    setEasy({ checked: false });
  };

  const handleCheckboxChange4 = (event) => {
    setTen({ checked: event.target.checked });
    setThirty({ checked: false });
    setFifty({ checked: false });
  };

  const handleCheckboxChange5 = (event) => {
    setThirty({ checked: event.target.checked });
    setTen({ checked: false });
    setFifty({ checked: false });
  };

  const handleCheckboxChange6 = (event) => {
    setFifty({ checked: event.target.checked });
    setThirty({ checked: false });
    setTen({ checked: false });
  };

  const RadioButton = ({ checked, ...props }) => {
    return (
      <RadioButtonContainer>
        <HiddenRadioButton checked={checked} {...props} />
        <StyledRadioButton checked={checked} />
      </RadioButtonContainer>
    );
  };

  return (
    <StyledSection>
      <StyledTitle>{title(getTopicName(urlString))}</StyledTitle>
      <form>
        <Container>
          <CardContainer>
            <StyledUl>
              <StyledParagraph>Select Difficulty:</StyledParagraph>
              <StyledLi>
                <HiddenRadioButton />
                <StyledLabel checked={easy.checked}>
                  Easy
                  <RadioButton
                    checked={easy.checked}
                    onChange={handleCheckboxChange1}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={medium.checked}>
                  Medium
                  <RadioButton
                    checked={medium.checked}
                    onChange={handleCheckboxChange2}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={hard.checked}>
                  Hard
                  <RadioButton
                    checked={hard.checked}
                    onChange={handleCheckboxChange3}
                  />
                </StyledLabel>
              </StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledParagraph>Number of Questions:</StyledParagraph>
              <StyledLi>
                <HiddenRadioButton />
                <StyledLabel checked={ten.checked}>
                  10
                  <RadioButton
                    checked={ten.checked}
                    onChange={handleCheckboxChange4}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={thirty.checked}>
                  30
                  <RadioButton
                    checked={thirty.checked}
                    onChange={handleCheckboxChange5}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={fifty.checked}>
                  50
                  <RadioButton
                    checked={fifty.checked}
                    onChange={handleCheckboxChange6}
                  />
                </StyledLabel>
              </StyledLi>
            </StyledUl>
          </CardContainer>
        </Container>
      </form>
    </StyledSection>
  );
};

export default LearningMode;
