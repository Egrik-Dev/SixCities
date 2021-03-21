import { Reviews } from "../../actions/action";
import { calculateRating } from "../../utils";
import { Months } from "../../const";

type OwnProps = {
  review: Reviews;
};

export const Review = (props: OwnProps) => {
  const { review } = props;

  const getDate = (date: Date): string => {
    const formattedDate = new Date(Date.parse(String(date)));
    const year = formattedDate.getFullYear();
    const month = Months[formattedDate.getMonth()];
    return `${month} ${year}`;
  };

  return (
    <>
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
        <time
          className="reviews__time"
          dateTime={String(review.date).slice(0, 10)}
        >
          {getDate(review.date)}
        </time>
      </div>
    </>
  );
};
