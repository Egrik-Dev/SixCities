type OwnProps = {
  image: string;
  title: string;
};

export const OfferImage = ({ image, title }: OwnProps) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt={title} />
    </div>
  );
};
