import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import colors from "../../utils/style/colors";
import logo from "../../assets/images/logo.png";
import useWindowSize from "../../utils/functions/useWindowSize";

const StyledLogo = styled.img`
  ${(props) => (props.isDesktop ? `height: 68px;` : `height: 47px;`)};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.isDesktop
      ? `margin: 40px 100px 0 100px;`
      : `margin: 20px 20px 0 20px;`};
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  ${(props) => (props.isDesktop ? `gap: 57px;` : `gap: 10px;`)};
`;

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 500;
  text-decoration: none;
  ${({ $location, $activePath }) =>
    $location.pathname === $activePath ? `text-decoration: underline` : ``};
  ${(props) =>
    props.$isDesktop
      ? `font-size: 24px;`
      : `font-size: 12px;text-transform: uppercase;`};
`;

const Header = () => {
  let location = useLocation();

  const windowSize = useWindowSize();
  let isDesktop = windowSize.width > 930 ? true : false;

  return (
    <HeaderContainer isDesktop={isDesktop}>
      <StyledLogo src={logo} isDesktop={isDesktop} />
      <StyledNav isDesktop={isDesktop}>
        <StyledLink
          to="/"
          $location={location}
          $activePath="/"
          $isDesktop={isDesktop}
        >
          Accueil
        </StyledLink>
        <StyledLink
          to="/APropos"
          $location={location}
          $activePath="/APropos"
          $isDesktop={isDesktop}
        >
          A Propos
        </StyledLink>
      </StyledNav>
    </HeaderContainer>
  );
};

export default Header;
