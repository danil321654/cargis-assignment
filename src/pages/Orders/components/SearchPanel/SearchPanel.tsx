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
  <div className="searchPanel">
    <SearchByField options={options} {...props} />
    <Button>
      <AddIcon /> Новая заявка
    </Button>
    <div className="searchPanel__filterButton" />
  </div>
);
