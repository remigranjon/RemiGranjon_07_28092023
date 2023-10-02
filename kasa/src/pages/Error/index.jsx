import styled from "styled-components";
import breakpoints from "../../utils/style/breakpoints";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";

const Container = styled.main`
  width: 100%;
`;

const StyledH1 = styled.h1`
  color: ${colors.primary};
  font-size: 288px;
  font-weight: 700;
  margin: 100px auto 0 auto;
  width: fit-content;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 96px;
  }
`;

const StyledH2 = styled.h2`
  color: ${colors.primary};
  font-size: 36px;
  font-weight: 500;
  margin: 40px auto 0 auto;
  width: fit-content;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    margin: 10px auto 0 auto;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 500;
  width: fit-content;
  margin: 200px auto 150px auto;
  display: block;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    margin: 150px auto 250px auto;
  }
`;

const Error = () => {
  return (
    <Container>
      <StyledH1>404</StyledH1>
      <StyledH2>Oups! La page que vous demandez n'existe pas.</StyledH2>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </Container>
  );
};

export default Error;
