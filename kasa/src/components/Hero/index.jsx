import styled from "styled-components";
import colors from "../../utils/style/colors";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 223px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  ${(props) =>
    props.isDesktop
      ? "height: 223px; border-radius: 25px;"
      : "height:111px;border-radius: 10px;"}
`;

const SectionLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.isDesktop ? "border-radius: 25px;" : "border-radius: 10px;"}
`;

const SectionImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) =>
    props.isDesktop ? "border-radius: 25px;" : "border-radius: 10px;"}
  object-fit: cover;
`;

const SectionText = styled.p`
  color: ${colors.secondary};
  font-weight: 500;
  z-index: 10;
  ${(props) =>
    props.isDesktop
      ? `font-size: 48px;`
      : `font-size: 24px; padding-left: 16px;`};
`;

const Hero = (props) => {
  console.log("test" + props.isDesktop);
  return (
    <Section isDesktop={props.isDesktop}>
      <SectionImg src={props.img} isDesktop={props.isDesktop} />
      <SectionLayer isDesktop={props.isDesktop} />
      <SectionText isDesktop={props.isDesktop}>{props.text}</SectionText>
    </Section>
  );
};

export default Hero;
