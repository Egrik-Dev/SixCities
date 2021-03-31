import React, { useCallback } from "react";
import { SortingItem } from "../SortingItem/SortingItem";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { sortTypeList } from "../../const";

const arrSortTypeList = Object.values(sortTypeList);

export const SortingOptions: React.FC = () => {
  const { changeSortType } = useActions();
  const { sortType } = useTypedSelector((state) => state.hotels);

  const changeType = useCallback(
    (evt: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
      const selectedSortType = evt.currentTarget.textContent;

      if (selectedSortType) {
        changeSortType(selectedSortType);
      }
    },
    []
  );

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        {arrSortTypeList.map(
          (sortOption: string, i: number): JSX.Element => (
            <SortingItem
              key={i}
              isActive={sortType === sortOption}
              itemName={sortOption}
              onTypeSortClick={changeType}
            />
          )
        )}
      </ul>
    </form>
  );
};
