import Carrousel from "../../components/Carrousel";
import { useParams } from "react-router-dom";
import findAccomodation from "../../utils/functions/findAccomodation";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import Dropdown from "../../components/Dropdown";
import useWindowSize from "../../utils/functions/useWindowSize";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  ${(props) =>
    props.isDesktop
      ? ` margin: 63px 100px; gap: 43px;`
      : ` margin: 27px 20px; gap: 15px; `};
`;

const HeaderContainer = styled.div`
  display: flex;
  ${(props) =>
    props.isDesktop ? ` flex-direction: row; ` : ` flex-direction: column; `};
  justify-content: space-between;
  width: 100%;
`;
const FirstHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondHeaderSection = styled.div`
  display: flex;
  ${(props) =>
    props.isDesktop
      ? ` flex-direction: column; gap:27px; align-items: flex-end;`
      : ` flex-direction: row-reverse; width: 100%; align-items: center;`};
  justify-content: space-between;
  height: 100%;
`;
const HeaderTitle = styled.h1`
  color: ${colors.primary};
  font-weight: 500;
  ${(props) => (props.isDesktop ? ` font-size: 36px; ` : ` font-size: 18px; `)};
`;
const HeaderLocation = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  ${(props) => (props.isDesktop ? ` font-size: 18px; ` : ` font-size: 14px; `)};
`;
const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 23px;
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
  ${(props) => (props.isDesktop ? ` font-size: 18px; ` : ` font-size: 12px; `)};
`;

const HostPicture = styled.img`
  border-radius: 100px;
  ${(props) => (props.isDesktop ? ` height: 64px; ` : ` height: 32px; `)};
`;

const DropdownContainer = styled.div`
  display: flex;
  width: 100%;

  ${(props) =>
    props.isDesktop
      ? ` flex-direction: row; gap: 76px; margin-top: 24px;`
      : ` flex-direction: column; gap: 20px; margin-top: 16px`};
`;

const FicheLogement = () => {
  const { idLogement } = useParams();
  const accomodation = findAccomodation(idLogement);

  const windowSize = useWindowSize();
  let isDesktop = windowSize.width > 900 ? true : false;

  const hostName = accomodation.host.name.split(" ").join("\n");

  return (
    <StyledBody isDesktop={isDesktop}>
      <Carrousel pictures={accomodation.pictures} />
      <HeaderContainer isDesktop={isDesktop}>
        <FirstHeaderSection>
          <HeaderTitle isDesktop={isDesktop}>{accomodation.title}</HeaderTitle>
          <HeaderLocation isDesktop={isDesktop}>
            {accomodation.location}
          </HeaderLocation>
          <TagsContainer>
            {accomodation.tags.map((tag, index) => (
              <Tag isDesktop={isDesktop} text={tag} key={index} />
            ))}
          </TagsContainer>
        </FirstHeaderSection>
        <SecondHeaderSection isDesktop={isDesktop}>
          <HostContainer>
            <HostName isDesktop={isDesktop}>{hostName}</HostName>
            <HostPicture
              isDesktop={isDesktop}
              src={accomodation.host.picture}
            />
          </HostContainer>
          <Rating
            isDesktop={isDesktop}
            rating={parseInt(accomodation.rating)}
          />
        </SecondHeaderSection>
      </HeaderContainer>
      <DropdownContainer isDesktop={isDesktop}>
        <Dropdown
          title="Description"
          textElements={[accomodation.description]}
          isDesktop={isDesktop}
          key={1}
        />
        <Dropdown
          title="Equipements"
          textElements={accomodation.equipments}
          isDesktop={isDesktop}
          key={2}
        />
      </DropdownContainer>
    </StyledBody>
  );
};

export default FicheLogement;
