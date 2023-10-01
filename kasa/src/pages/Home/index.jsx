import styled from "styled-components";
import sectionImg from "../../assets/images/home.jpg";
import Hero from "../../components/Hero";
import Gallery from "../../components/Gallery";
import breakpoints from "../../utils/style/breakpoints";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  margin: 63px 100px;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 63px 20px;
    gap: 25px;
  }
`;

function Home(props) {
  const heroText = "Chez vous, partout et ailleurs";
  return (
    <StyledBody isDesktop={props.isDesktop}>
      <Hero img={sectionImg} text={heroText} isDesktop={props.isDesktop} />
      <Gallery />
    </StyledBody>
  );
}

export default Home;
