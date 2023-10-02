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
    margin: 20px;
    gap: 25px;
  }
`;

function Home() {
  const heroText = "Chez vous, partout et ailleurs";
  return (
    <StyledBody>
      <Hero img={sectionImg} text={heroText} />
      <Gallery />
    </StyledBody>
  );
}

export default Home;
