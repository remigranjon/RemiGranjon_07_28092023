import styled from "styled-components";
import colors from "../../utils/style/colors";

const TagContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  ${(props) =>
    props.isDesktop
      ? ` height: 25px; min-width: 95px `
      : `min-width: 64px; height: 18px;`}
`;

const TagText = styled.p`
  font-weight: 500;
  ${(props) => (props.isDesktop ? `font-size: 14px;` : `font-size: 10px;`)}
`;

const Tag = (props) => {
  return (
    <TagContainer isDesktop={props.isDesktop}>
      <TagText isDesktop={props.isDesktop}>{props.text}</TagText>
    </TagContainer>
  );
};

export default Tag;
