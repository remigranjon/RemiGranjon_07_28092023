import styled from "styled-components";
import colors from "../../utils/style/colors";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 223px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

const SectionLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const SectionImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  object-fit: cover;
`;

const SectionText = styled.p`
  font-size: 48px;
  color: ${colors.secondary};
  font-weight: 500;
  z-index: 10;
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
