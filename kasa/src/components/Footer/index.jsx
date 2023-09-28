import styled from "styled-components";
import colors from "../../utils/style/colors";
import whiteLogo from "../../assets/images/logo-white.png";

const FooterContainer = styled.div`
  background-color: ${colors.backgroundBlack};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 66px 0 29px 0;
  gap: 29px;
  align-items: center;
`;

const FooterLogo = styled.img`
  width: 122px;
`;

const FooterText = styled.p`
  color: ${colors.secondary};
  font-size: 24px;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={whiteLogo} />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;
