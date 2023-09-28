import styled from "styled-components";
import colors from "../../utils/style/colors";
import data from "../../assets/data/logements.json";
import Card from "../Card";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  grid-template-row: auto;
  column-gap: 60px;
  row-gap: 50px;
  padding: 56px 50px;
  border-radius: 25px;
  background-color: ${colors.backgroundLight};
  align-items: center;
  justify-content: center;
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      {data.map((logement, index) => (
        <Card
          key={index}
          title={logement.title}
          id={logement.id}
          url={logement.cover}
        />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;