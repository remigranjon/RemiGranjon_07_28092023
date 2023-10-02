import Carrousel from "../../components/Carrousel";
import { useParams } from "react-router-dom";
import findAccomodation from "../../utils/functions/findAccomodation";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import Dropdown from "../../components/Dropdown";
import breakpoints from "../../utils/style/breakpoints";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  margin: 63px 100px;
  gap: 43px;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 27px 20px;
    gap: 15px;
    min-height: 75vh;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
const FirstHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  gap: 27px;
  align-items: flex-end;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row-reverse;
    width: 100%;
    align-items: center;
    margin-top: 15px;
  }
`;
const HeaderTitle = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 36px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;
const HeaderLocation = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    margin-top: 15px;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 23px;
  flex-wrap: wrap;
`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const HostName = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  white-space: pre-line;
  font-size: 18px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const HostPicture = styled.img`
  border-radius: 100px;
  height: 64px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 32px;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 76px;
  margin-top: 24px;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 20px;
    margin-top: 16px;
  }
`;

const FicheLogement = () => {
  const { idLogement } = useParams();
  const accomodation = findAccomodation(idLogement);
  const hostName = accomodation.host.name.split(" ").join("\n");

  return (
    <StyledBody>
      <Carrousel pictures={accomodation.pictures} />
      <HeaderContainer>
        <FirstHeaderSection>
          <HeaderTitle>{accomodation.title}</HeaderTitle>
          <HeaderLocation>{accomodation.location}</HeaderLocation>
          <TagsContainer>
            {accomodation.tags.map((tag, index) => (
              <Tag text={tag} key={index} />
            ))}
          </TagsContainer>
        </FirstHeaderSection>
        <SecondHeaderSection>
          <HostContainer>
            <HostName>{hostName}</HostName>
            <HostPicture src={accomodation.host.picture} />
          </HostContainer>
          <Rating rating={parseInt(accomodation.rating)} />
        </SecondHeaderSection>
      </HeaderContainer>
      <DropdownContainer>
        <Dropdown
          title="Description"
          textElements={[accomodation.description]}
          key={1}
        />
        <Dropdown
          title="Equipements"
          textElements={accomodation.equipments}
          key={2}
        />
      </DropdownContainer>
    </StyledBody>
  );
};

export default FicheLogement;
