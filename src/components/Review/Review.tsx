import { Reviews } from "../../actions/action";
import { calculateRating } from "../../utils";

// TODO:
// Дату коммента сделать в формате April 2019
// А в теге dateTime в формате 2019-04-24

type OwnProps = {
  reviews: Reviews[];
};

export const Review = (props: OwnProps) => {
  const { reviews } = props;

  return (
    <ul className="reviews__list">
      {reviews.map(
        (review: Reviews, i: number): JSX.Element => (
          <li className="reviews__item" key={i}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.user.avatar_url}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{review.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span
                    style={{ width: `${calculateRating(review.rating)}%` }}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{review.comment}</p>
              <time className="reviews__time" dateTime="2019-04-24">
                {review.date}
              </time>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
