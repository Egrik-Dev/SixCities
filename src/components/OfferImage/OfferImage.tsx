type OwnProps = {
  image: string;
  title: string;
};

export const OfferImage = (props: OwnProps) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={props.image} alt={props.title} />
    </div>
  );
};
