import styled from "styled-components";
import star from "../../assets/images/star.svg";
import redStar from "../../assets/images/redStar.svg";

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) => (props.isDesktop ? ` gap: 15px; ` : ` gap: 7px; `)};
`;

const Star = styled.img`
  ${(props) => (props.isDesktop ? ` height: 24px; ` : ` height: 13px; `)};
`;

const Rating = (props) => {
  let stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<Star isDesktop={props.isDesktop} src={redStar} key={i} />);
  }
  for (let i = 0; i < 5 - props.rating; i++) {
    stars.push(
      <Star isDesktop={props.isDesktop} src={star} key={i + props.rating} />
    );
  }
  return <RatingContainer isDesktop={props.isDesktop}>{stars}</RatingContainer>;
};

export default Rating;
