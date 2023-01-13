import { SearchIcon } from "icons";
import "./SearchByField.scss";

export const SearchByField = () => {
  return (
    <div className="searchByField">
      <SearchIcon className="searchByField__icon" />
      <select className="searchByField__select">
        <option className="searchByField__select-option">
          По номеру заявки
        </option>
        <option className="searchByField__select-option">
          По дате создания заявки
        </option>
      </select>
      <div className="searchByField__separator" />
      <input className="searchByField__input" placeholder="Поиск заявок" />
    </div>
  );
};
