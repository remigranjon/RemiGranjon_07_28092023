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

const Header = (props) => {
  let location = useLocation();

  // const windowSize = useWindowSize();
  // let isDesktop = windowSize.width > 930 ? true : false;

  return (
    <HeaderContainer isDesktop={props.isDesktop}>
      <StyledLogo src={logo} isDesktop={props.isDesktop} />
      <StyledNav isDesktop={props.isDesktop}>
        <StyledLink
          to="/"
          $location={location}
          $activePath="/"
          $isDesktop={props.isDesktop}
        >
          Accueil
        </StyledLink>
        <StyledLink
          to="/APropos"
          $location={location}
          $activePath="/APropos"
          $isDesktop={props.isDesktop}
        >
          A Propos
        </StyledLink>
      </StyledNav>
    </HeaderContainer>
  );
};

export default Header;
