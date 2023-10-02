import styled from "styled-components";
import { useState } from "react";
import colors from "../../utils/style/colors";
import arrow from "../../assets/images/arrow.svg";
import breakpoints from "../../utils/style/breakpoints";

const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 13px 20px;
  background-color: ${colors.primary};
  width: 100%;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  position: relative;
  box-sizing: border-box;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px 10px;
    border-radius: 5px;
  }
`;

const Arrow = styled.img`
  ${(props) => props.isOpen && `transform: rotate(180deg);`};
  width: 24px;
  @media (max-width: ${breakpoints.mobile}) {
    width: 16px;
  }
`;

const HeaderText = styled.p`
  font-weight: 500;
  color: ${colors.secondary};
  font-size: 18px;
  ${(props) => {
    if (props.isLarge) {
      return `font-size: 24px;`;
    }
  }};
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
`;

const Content = styled.div`
  background-color: ${colors.backgroundLight};
  position: relative;
  top: -10px;
  padding: 40px 20px 27px 20px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
    ${(props) => !props.isOpen && `padding: 0;`};
  }

  ${(props) => !props.isOpen && `height: 0px; padding: 0;`};
`;

const ContentLine = styled.p`
  color: ${colors.primary};
  font-weight: 400;
  font-size: 18px;
  ${(props) => {
    if (props.isLarge) {
      return `font-size: 24px;`;
    }
  }};
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickArrow = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  return (
    <Container onClick={clickArrow}>
      <Header>
        <HeaderText isLarge={props.isLarge}>{props.title}</HeaderText>
        <Arrow src={arrow} isOpen={isOpen} />
      </Header>
      <Content isOpen={isOpen}>
        {props.textElements.map((element, index) => (
          <ContentLine isLarge={props.isLarge} key={index}>
            {element}
          </ContentLine>
        ))}
      </Content>
    </Container>
  );
};

export default Dropdown;
