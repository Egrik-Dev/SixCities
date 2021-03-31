import React from "react";

const ratingTitles = new Map([
  [1, `terribly`],
  [2, `badly`],
  [3, `not bad`],
  [4, `good`],
  [5, `perfect`],
]);

export const NewComment = (): JSX.Element => {
  const [rating, setRating] = React.useState<number>();
  const [comment, setComment] = React.useState<string>();

  const MAX_RATING = 5;
  const MIN_CHARACTERS = 50;
  const ratingArr: string[] = new Array(MAX_RATING).fill(``);

  const onChangeRating = React.useCallback(
    (evt: React.FormEvent<HTMLInputElement>): void => {
      const { value } = evt.currentTarget;
      setRating(Number(value));
    },
    []
  );

  const onChangeText = React.useCallback(
    (evt: React.FormEvent<HTMLTextAreaElement>): void => {
      const { value } = evt.currentTarget;
      setComment(value);
    },
    []
  );

  const onSubmitForm = React.useCallback(
    (evt: React.FormEvent): void => {
      evt.preventDefault();

      console.log(`Коммент отправлен`);
      console.log(`Рейтинг ${rating}`);
      console.log(`Комментарий ${comment}`);
    },
    [rating, comment]
  );

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingArr.map(
          (_item: string, i: number, array: string[]): JSX.Element => (
            <React.Fragment key={i}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={array.length - i}
                id={`${array.length - i}-stars`}
                type="radio"
                onChange={onChangeRating}
              />
              <label
                htmlFor={`${array.length - i}-stars`}
                className="reviews__rating-label form__rating-label"
                title={ratingTitles.get(array.length - i)}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          )
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onChangeText}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            comment && comment.length >= MIN_CHARACTERS && rating ? false : true
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};
