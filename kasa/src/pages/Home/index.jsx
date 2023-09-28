import styled from "styled-components";
import sectionImg from "../../assets/images/home.jpg";
import Hero from "../../components/Hero";
import Gallery from "../../components/Gallery";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 63px 100px;
  gap: 43px;
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
