import styled from "styled-components";
import { useState } from "react";
import colors from "../../utils/style/colors";
import arrow from "../../assets/images/arrow.svg";

const Container = styled.div`
  width: 100%;
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
`;

const Arrow = styled.img`
  ${(props) => (props.isDesktop ? `width: 24px;` : `width: 16px;`)};
  ${(props) => props.isOpen && `transform: rotate(180deg);`};
  cursor: pointer;
`;

const HeaderText = styled.p`
  ${(props) => {
    if (props.isDesktop && props.isLarge) {
      return `font-size: 24px;`;
    } else if (props.isDesktop) {
      return `font-size: 18px;`;
    } else {
      return `font-size: 13px;`;
    }
  }};
  font-weight: 500;
  color: ${colors.secondary};
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

  ${(props) => !props.isOpen && `height: 0px; padding: 0;`};
`;

const ContentLine = styled.p`
  color: ${colors.primary};
  font-weight: 400;
  ${(props) => {
    if (props.isDesktop && props.isLarge) {
      return `font-size: 24px;`;
    } else if (props.isDesktop) {
      return `font-size: 18px;`;
    } else {
      return `font-size: 12px;`;
    }
  }};
`;

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickArrow = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  // const isDesktop = props.isDesktop;
  return (
    <Container>
      <Header>
        <HeaderText isDesktop={props.isDesktop} isLarge={props.isLarge}>
          {props.title}
        </HeaderText>
        <Arrow
          src={arrow}
          isDesktop={props.isDesktop}
          isOpen={isOpen}
          onClick={clickArrow}
        />
      </Header>
      <Content isOpen={isOpen}>
        {props.textElements.map((element, index) => (
          <ContentLine
            isDesktop={props.isDesktop}
            isLarge={props.isLarge}
            key={index}
          >
            {element}
          </ContentLine>
        ))}
      </Content>
    </Container>
  );
};

export default Dropdown;
