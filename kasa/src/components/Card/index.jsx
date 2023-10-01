import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import breakpoints from "../../utils/style/breakpoints";

const CardContainer = styled(Link)`
    position: relative;
    top: 0px;
    left: 0px;
    background-color: ${colors.primary};
    display: flex;
    flex-direction column;
    justify-content: flex-end;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    text-decoration: none;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      height: 255px;
    }
`;

const CardImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const CardLayer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  border-radius: 10px;
`;

const CardText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 25.67px;
  margin: 20px;
  color: ${colors.secondary};
  z-index: 10;
`;

const Card = (props) => {
  return (
    <CardContainer to={`/ficheLogement/${props.id}`}>
      <CardImage src={props.url} />
      <CardLayer />
      <CardText>{props.title}</CardText>
    </CardContainer>
  );
};

export default Card;
