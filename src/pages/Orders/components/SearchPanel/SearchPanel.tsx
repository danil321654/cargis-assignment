import "./SearchPanel.scss";

import { FC } from "react";

import { AddIcon } from "icons";
import { Button, SearchByField } from "components";

export const SearchPanel: FC = () => (
  <div className="searchPanel">
    <SearchByField />
    <Button>
      <AddIcon /> Новая заявка
    </Button>
    <div className="searchPanel__filterButton" />
  </div>
);
