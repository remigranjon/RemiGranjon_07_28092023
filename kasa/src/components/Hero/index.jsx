import styled from "styled-components";
import colors from "../../utils/style/colors";
import breakpoints from "../../utils/style/breakpoints";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  height: 223px;
  border-radius: 25px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 111px;
    border-radius: 10px;
  }
`;

const SectionLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 10px;
  }
`;

const SectionImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 10px;
  }
  object-fit: cover;
`;

const SectionText = styled.p`
  color: ${colors.secondary};
  font-weight: 500;
  z-index: 10;
  font-size: 48px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    padding: 0 16px;
  }
`;

const Hero = (props) => {
  return (
    <Section>
      <SectionImg src={props.img} />
      <SectionLayer />
      <SectionText>{props.text}</SectionText>
    </Section>
  );
};

export default Hero;
