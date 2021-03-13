export const calculateRating = (rating: number): number => {
  const roundedRating = Math.round(rating);

  switch (roundedRating) {
    case 5:
      return 100;
    case 4:
      return 80;
    case 3:
      return 60;
    case 2:
      return 40;
    case 1:
      return 20;
    default:
      return 0;
  }
};
