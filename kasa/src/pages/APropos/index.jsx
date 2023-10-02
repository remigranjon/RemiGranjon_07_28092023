import Hero from "../../components/Hero";
import styled from "styled-components";
import heroImg from "../../assets/images/APropos.jpg";
import Dropdown from "../../components/Dropdown";
import breakpoints from "../../utils/style/breakpoints";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 63px 100px;
  gap: 43px;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 20px;
    gap: 0px;
    min-height: 75vh;
  }
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 33px 109px 46px 109px;
  gap: 33px;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 20px;
    margin: 20px 0;
  }
`;

const APropos = () => {
  const content = [
    {
      title: "Fiabilité",
      text: [
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
      ],
    },
    {
      title: "Respect",
      text: [
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      ],
    },
    {
      title: "Service",
      text: [
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      ],
    },
    {
      title: "Sécurité",
      text: [
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      ],
    },
  ];

  return (
    <StyledBody>
      <Hero img={heroImg} />
      <DropDownContainer>
        {content.map((element, index) => (
          <Dropdown
            title={element.title}
            isLarge
            textElements={element.text}
            key={index}
          ></Dropdown>
        ))}
      </DropDownContainer>
    </StyledBody>
  );
};

export default APropos;
