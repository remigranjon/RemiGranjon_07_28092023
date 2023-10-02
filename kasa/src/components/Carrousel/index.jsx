import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useState } from "react";
import leftArrow from "../../assets/images/leftArrow.svg";
import breakpoints from "../../utils/style/breakpoints";

const CarrouselContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CarrouselImage = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 415px;
  object-fit: cover;
  @media (max-width: ${breakpoints.mobile}) {
    height: 255px;
    border-radius: 10px;
  }
`;

const LeftArrow = styled.img`
  width: 47px;
  position: absolute;
  top: 157px;
  left: 23px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    width: 12px;
    left: 6px;
    top: 120px;
  }
`;

const RightArrow = styled.img`
  width: 47px;
  position: absolute;
  top: 157px;
  right: 23px;
  transform: rotate(180deg);
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    width: 12px;
    right: 6px;
    top: 120px;
  }
`;

const CarrouselCount = styled.p`
  font-size: 18px;
  color: ${colors.secondary};
  position: absolute;
  top: 358px;
  left: 50%;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Carrousel = (props) => {
  const [count, setCount] = useState(1);
  const goLeft = () =>
    count === 1 ? setCount(props.pictures.length) : setCount(count - 1);
  const goRight = () =>
    count === props.pictures.length ? setCount(1) : setCount(count + 1);

  return (
    <CarrouselContainer>
      <CarrouselImage src={props.pictures[count - 1]} />
      {props.pictures.length > 1 && (
        <div>
          <LeftArrow onClick={goLeft} src={leftArrow} />
          <RightArrow onClick={goRight} src={leftArrow} />
          <CarrouselCount>
            {count}/{props.pictures.length}
          </CarrouselCount>
        </div>
      )}
    </CarrouselContainer>
  );
};

export default Carrousel;
