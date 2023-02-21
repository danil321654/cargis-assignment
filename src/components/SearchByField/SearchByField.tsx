import "./SearchByField.scss";

import { SearchIcon } from "icons";
import { FC } from "react";
import { SearchByFieldProps } from "./types";
import { useDebouncedCallback } from "hooks";

export const SearchByField: FC<SearchByFieldProps> = ({
  options,
  handleChange,
  handleChangeField,
}) => {
  const search = useDebouncedCallback(handleChange, 300);

  return (
    <div className="search-by-field">
      <SearchIcon className="search-by-field__icon" />
      <select
        className="search-by-field__select"
        onChange={(e) => handleChangeField(e.target.value)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="search-by-field__separator" />
      <input
        className="search-by-field__input"
        placeholder="Поиск заявок"
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};
