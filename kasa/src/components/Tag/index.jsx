import styled from "styled-components";
import colors from "../../utils/style/colors";
import breakpoints from "../../utils/style/breakpoints";

const TagContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  height: 25px;
  min-width: 95px;
  @media (max-width: ${breakpoints.mobile}) {
    min-width: 64px;
    height: 18px;
    border-radius: 5px;
  }
`;

const TagText = styled.p`
  font-weight: 500;
  font-size: 14px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10px;
  }
`;

const Tag = (props) => {
  return (
    <TagContainer>
      <TagText>{props.text}</TagText>
    </TagContainer>
  );
};

export default Tag;
