import styled from "styled-components";
import star from "../../assets/images/star.svg";
import redStar from "../../assets/images/redStar.svg";
import breakpoints from "../../utils/style/breakpoints";

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 7px;
  }
`;

const Star = styled.img`
  height: 24px;
  @media (max-width: ${breakpoints.mobile}) {
    height: 13px;
  }
`;

const Rating = (props) => {
  let stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<Star src={redStar} key={i} />);
  }
  for (let i = 0; i < 5 - props.rating; i++) {
    stars.push(<Star src={star} key={i + props.rating} />);
  }
  return <RatingContainer>{stars}</RatingContainer>;
};

export default Rating;
