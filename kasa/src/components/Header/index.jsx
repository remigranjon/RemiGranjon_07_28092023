import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import colors from "../../utils/style/colors";
import logo from "../../assets/images/logo.png";
import breakpoints from "../../utils/style/breakpoints";

const StyledLogo = styled.img`
  height: 68px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 47px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 40px 100px 0 100px;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 20px 20px 0 20px;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 57px;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 500;
  text-decoration: none;
  ${({ $location, $activePath }) =>
    $location.pathname === $activePath ? `text-decoration: underline` : ``};
  font-size: 24px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

const Header = (props) => {
  let location = useLocation();
  return (
    <HeaderContainer>
      <StyledLogo src={logo} />
      <StyledNav>
        <StyledLink to="/" $location={location} $activePath="/">
          Accueil
        </StyledLink>
        <StyledLink to="/APropos" $location={location} $activePath="/APropos">
          A Propos
        </StyledLink>
      </StyledNav>
    </HeaderContainer>
  );
};

export default Header;
