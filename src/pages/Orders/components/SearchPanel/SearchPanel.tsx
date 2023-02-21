import "./SearchPanel.scss";

import { FC } from "react";

import { AddIcon } from "icons";
import { Button, SearchByField } from "components";
import { SearchPanelProps } from "./types";

const options = [
  { value: "id", label: "По номеру заявки" },
  { value: "create_dt", label: "По дате создания заявки" },
];

export const SearchPanel: FC<SearchPanelProps> = (props) => (
  <div className="search-panel">
    <SearchByField options={options} {...props} />
    <Button>
      <AddIcon /> Новая заявка
    </Button>
    <Button className="search-panel__filter-button">Фильтр</Button>
  </div>
);
