import React from "react";
import { Reviews } from "../../actions/action";
import { Review } from "../Review/Review";

type OwnProps = {
  reviews: Reviews[];
};

export const ReviewsList = ({ reviews }: OwnProps) => {
  const quantityReviews = reviews.length;

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{``}
        <span className="reviews__amount">{quantityReviews}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map(
          (review: Reviews, i: number): JSX.Element => (
            <li className="reviews__item" key={i}>
              <Review review={review} />
            </li>
          )
        )}
      </ul>
    </>
  );
};
