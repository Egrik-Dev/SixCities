type SortingItemProps = {
  isActive: boolean;
  itemName: string;
  onTypeSortClick: (evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

export const SortingItem = ({
  isActive,
  itemName,
  onTypeSortClick,
}: SortingItemProps): JSX.Element => {
  return (
    <li
      onClick={onTypeSortClick}
      className={
        isActive ? `places__option places__option--active` : `places__option`
      }
      tabIndex={0}
    >
      {itemName}
    </li>
  );
};
